const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 Função que sugere divisão dos gastos
function sugerirDivisaoGastos(salario, idade, filhos, metaEconomia) {
    const saldoDisponivel = salario - metaEconomia;

    if (saldoDisponivel <= 0) {
        return { erro: 'Meta de economia muito alta para o salário informado.' };
    }

    let percentuais = {
        moradia: 0.30,
        alimentacao: 0.20,
        transporte: 0.12,
        saude: 0.08,
        educacao: 0.00,
        lazer: 0.10,
        outros: 0.10
    };

    if (filhos > 0) {
        percentuais.moradia += 0.05;
        percentuais.alimentacao += 0.05;
        percentuais.saude += 0.05;
        percentuais.educacao = 0.10;
        percentuais.lazer -= 0.04;
    }

    if (idade < 25) {
        percentuais.lazer += 0.03;
        percentuais.saude -= 0.02;
    } else if (idade > 50) {
        percentuais.saude += 0.03;
        percentuais.lazer -= 0.02;
    }

    const somaPercentuais = Object.values(percentuais).reduce((a, b) => a + b, 0);
    if (somaPercentuais > 1.0) {
        const fatorAjuste = 1.0 / somaPercentuais;
        for (let cat in percentuais) {
            percentuais[cat] *= fatorAjuste;
        }
    }

    const divisao = {};
    for (let cat in percentuais) {
        divisao[cat] = Number((saldoDisponivel * percentuais[cat]).toFixed(2));
    }

    divisao.economia = metaEconomia;

    return divisao;
}

app.post('/api/recomendacao-gastos', (req, res) => {
    const { salario, idade, filhos, metaEconomia } = req.body;

    if (!salario || !idade || filhos === undefined || metaEconomia === undefined) {
        return res.status(400).json({ erro: 'Envie salario, idade, filhos e metaEconomia.' });
    }

    const divisaoIdeal = sugerirDivisaoGastos(salario, idade, filhos, metaEconomia);

    if (divisaoIdeal.erro) {
        return res.status(400).json(divisaoIdeal);
    }

    return res.json({ recomendacao: divisaoIdeal });
});

// 🔥 Endpoint: análise com IA
app.post('/api/analise-gastos', async (req, res) => {
    console.log('🟦 Recebido request em /api/analise-gastos');
    console.log('📥 Body recebido:', req.body);

    const { salario, idade, filhos, metaEconomia, gastos } = req.body;

    if (!salario || !idade || filhos === undefined || metaEconomia === undefined || !gastos) {
        console.error('❌ Dados faltando no body:', { salario, idade, filhos, metaEconomia, gastos });
        return res.status(400).json({ erro: 'Envie salario, idade, filhos, metaEconomia e gastos.' });
    }

    console.log('✅ Dados validados. Calculando divisão ideal...');
    const divisaoIdeal = sugerirDivisaoGastos(salario, idade, filhos, metaEconomia);

    if (divisaoIdeal.erro) {
        console.error('❌ Erro na divisão ideal:', divisaoIdeal.erro);
        return res.status(400).json(divisaoIdeal);
    }

    console.log('🧠 Divisão ideal calculada:', divisaoIdeal);

    const prompt = `
    Você é um consultor financeiro especialista, objetivo e prático.

    Sua missão é ajudar o usuário a entender seus gastos, propor soluções claras para reduzir despesas e atingir sua meta de economia mensal.

    📌 Etapas da sua resposta:
    1. O que a IA tem a dizer?: (em negrito)
    - Para cada categoria em que o gasto atual estiver acima do recomendado, faça:
        ➝ Um alerta no formato:  
        "Você está gastando além do recomendado do seu salário em [categoria]. Considere reduzir essa despesa." 
        ➝ Além disso, ofereça uma sugestão objetiva e prática de como reduzir ou otimizar esse gasto.  
        Exemplos: "Revise seus serviços de streaming", "Considere renegociar o aluguel", "Busque alternativas mais econômicas para transporte".

    - Se o gasto estiver dentro ou abaixo do recomendado, não gere alerta nem comentários sobre ele.

    2. Dicas bônus para economizar: (em negrito)
    - Independentemente dos alertas, ao final, inclua uma seção chamada:  
        "Dicas bônus para ajudar você a economizar mais:"
    - Liste de 2 a 4 dicas práticas, gerais, aplicáveis à maioria das pessoas.  
        ➝ Exemplos: "Evite compras por impulso", "Tenha uma lista ao fazer supermercado", "Separe um valor fixo para sua reserva de emergência", "Revise assinaturas e serviços recorrentes".

    3. Se todos os gastos estiverem dentro do recomendado:
    - Diga:  
        "Seus gastos estão equilibrados. Continue assim."
    - Mesmo assim, apresente as Dicas bônus para ajudar você a economizar mais.

    📊 Dados do usuário:
    - Salário: R$ ${salario}
    - Idade: ${idade} anos
    - Filhos: ${filhos}
    - Meta de economia mensal: R$ ${metaEconomia}

    💡 Gastos recomendados:
    ${Object.entries(divisaoIdeal).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

    📈 Gastos atuais:
    ${Object.entries(gastos).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

    📥 Instruções finais:
    - As sugestões devem ser simples, diretas e aplicáveis no dia a dia.
    - Evite jargões financeiros e linguagem complexa.
    - Foque em ações realistas que ajudem a economizar, seja reduzindo gastos ou mudando hábitos.

    ⚠️ Lembre-se:  
    - Só gere alertas para categorias **acima do recomendado**.  
    - As **dicas bônus sempre devem aparecer**, mesmo que não haja alertas.`

    console.log('📝 Prompt gerado para OpenAI:', prompt);

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'Você é um consultor financeiro especialista.' },
                { role: 'user', content: prompt }
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.7,
            max_tokens: 1000
        });

        const resposta = completion.choices[0].message.content;
        console.log('🟩 Resposta da OpenAI:', resposta);

        res.json({
            divisaoIdeal,
            analise: resposta
        });

    } catch (error) {
        console.error('❌ Erro ao consultar a API da OpenAI:', error);
        res.status(500).json({ erro: 'Erro ao consultar a API da OpenAI.' });
    }
});


// 🚀 Start servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

