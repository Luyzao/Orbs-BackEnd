import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

const incomeSchema = z.object({
  income: z.number().nonnegative(),
  extraincome: z.number().nonnegative().default(0),
  otherincome: z.number().nonnegative().default(0),
  month: z.string().datetime().optional(), // data no formato ISO string
})

// Função para calcular o imposto de renda conforme tabela progressiva
function calcularImpostoRenda(total: number): number {
  let imposto = 0

  const faixas = [
    { limite: 2259.20, aliquota: 0, deducao: 0 },
    { limite: 2826.65, aliquota: 0.075, deducao: 169.44 },
    { limite: 3751.05, aliquota: 0.15, deducao: 381.44 },
    { limite: 4664.68, aliquota: 0.225, deducao: 662.77 },
    { limite: Infinity, aliquota: 0.275, deducao: 896.00 },
  ]

  for (let i = faixas.length - 1; i >= 0; i--) {
    const faixa = faixas[i]
    if (total > faixa.limite) {
      imposto = (total * faixa.aliquota) - faixa.deducao
      break
    }
  }

  return imposto > 0 ? Number(imposto.toFixed(2)) : 0
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    return res.status(204).end()
  }

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Não autorizado: token ausente' })
  }
  const token = authHeader.replace('Bearer ', '')

  // Valida token e recupera usuário
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token)

  if (authError || !user) {
    return res.status(401).json({ message: 'Token inválido ou usuário não encontrado' })
  }

  try {
    if (req.method === 'POST') {
      // Validar e extrair dados
      const { income, extraincome, otherincome, month } = incomeSchema.parse(req.body)

      // Calcular total e imposto
      const total = income + extraincome + otherincome
      const impostoRenda = calcularImpostoRenda(total)

      // Salvar na tabela income e na incomeSummary
      const [newIncome, newIncomeSummary] = await Promise.all([
        prisma.income.create({
          data: {
            income,
            extraincome,
            otherincome,
            userId: user.id,
            date: new Date(),
            month: month ? new Date(month) : new Date(),
          },
        }),
        prisma.incomeSummary.create({
          data: {
            userId: user.id,
            total,
            impostoRenda,
            createdAt: new Date(),
            month: month ? new Date(month) : new Date(),
          },
        }),
      ])

      return res.status(201).json({ newIncome, newIncomeSummary })
    } else if (req.method === 'GET') {
      const { month, year } = req.query;

       // Verificação básica
      const parsedMonth = Number(month);
      const parsedYear = Number(year);

       if (!parsedMonth || !parsedYear) {
        return res.status(400).json({ message: 'Parâmetros de mês e ano são obrigatórios e devem ser válidos.' });
      }

       // Cria o intervalo de datas para o mês
      const startDate = new Date(parsedYear, parsedMonth - 1, 1);
      const endDate = new Date(parsedYear, parsedMonth, 1); // primeiro dia do próximo mês

      // Buscar o último registro de income
      const lastIncome = await prisma.income.findFirst({
        where: {
          userId: user.id,
          date: {
            gte: startDate,
            lt: endDate,
          },
        },
        orderBy: { date: 'desc' },
      });

      // Buscar o último registro de incomeSummary
      const lastIncomeSummary = await prisma.incomeSummary.findFirst({
        where: { 
          userId: user.id,
          createdAt: {
            gte: startDate,
            lt: endDate,
          },
        },
        orderBy: { createdAt: 'desc' },
      })

      if (!lastIncome || !lastIncomeSummary) {
        return res.status(200).json({
          income: 0,
          extraincome: 0,
          otherincome: 0,
          total: 0,
          impostoRenda: 0,
        })
      }

      // Retorna os dados diretamente dos registros salvos, sem recalcular
      return res.status(200).json({
        income: lastIncome.income,
        extraincome: lastIncome.extraincome,
        otherincome: lastIncome.otherincome,
        total: lastIncomeSummary.total,
        impostoRenda: lastIncomeSummary.impostoRenda,
      })

    } else {
      return res.status(405).json({ message: 'Método não permitido' })
    }
  } catch (error: any) {
    console.error('Erro na API:', error)
    return res.status(500).json({ message: error.message || 'Erro interno' })
  }
}
