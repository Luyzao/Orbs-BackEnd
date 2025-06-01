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
Você é um consultor financeiro objetivo e direto.

Com base nos dados abaixo, gere alertas claros e curtos sobre os gastos do usuário.

Dados do usuário:
Salário: R$ ${salario}

Idade: ${idade} anos

Filhos: ${filhos}

Meta de economia mensal: R$ ${metaEconomia}

Gastos recomendados:
${Object.entries(divisaoIdeal).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

Gastos atuais:
${Object.entries(gastos).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

Instruções:
- Para cada categoria presente em gastos atuais, calcule o percentual do salário que está sendo gasto:  
  (gasto atual / salário) * 100.
- Compare o gasto atual com o gasto recomendado.
- Gere um alerta somente se o gasto atual ultrapassar o recomendado.
- O alerta deve ter o formato:  
  "Você está gastando X% do seu salário em [categoria]. Considere reduzir essa despesa."
- Arredonde X para o número inteiro mais próximo.
- Não inclua categorias que não ultrapassem o limite recomendado.
- Não gere análises, conclusões ou reflexões.
- Se nenhum gasto ultrapassar o recomendado, responda apenas:  
  "Seus gastos estão equilibrados. Continue assim."`

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

