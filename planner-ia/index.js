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
    const { salario, idade, filhos, metaEconomia, gastos } = req.body;

    if (!salario || !idade || filhos === undefined || metaEconomia === undefined || !gastos) {
        return res.status(400).json({ erro: 'Envie salario, idade, filhos, metaEconomia e gastos.' });
    }

    const divisaoIdeal = sugerirDivisaoGastos(salario, idade, filhos, metaEconomia);

    if (divisaoIdeal.erro) {
        return res.status(400).json(divisaoIdeal);
    }

    // Monta o prompt
    const prompt = `
Você é um consultor financeiro. Com base nos dados abaixo, analise os gastos do usuário.

Dados do usuário:
- Salário: R$ ${salario}
- Idade: ${idade} anos
- Filhos: ${filhos}
- Meta de economia mensal: R$ ${metaEconomia}

Distribuição de gastos recomendada:
${Object.entries(divisaoIdeal).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

Gastos atuais do usuário:
${Object.entries(gastos).map(([categoria, valor]) => `${categoria}: R$ ${valor}`).join(', ')}

Sua tarefa:
1. Diga se o usuário está gastando mais do que o ideal em alguma categoria.
4. Seja claro, objetivo e organizado em tópicos.
`;

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
        res.json({
            divisaoIdeal,
            analise: resposta
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao consultar a API da OpenAI.' });
    }
});

// 🚀 Start servidor
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//2. Aponte quais categorias estão acima e abaixo do recomendado.
//3. Dê dicas práticas, diretas e realistas para ele economizar nas categorias que estão acima.