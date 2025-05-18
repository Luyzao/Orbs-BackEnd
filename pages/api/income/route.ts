import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

// Inicialize o client Supabase (essas vars vem do seu env)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY! // Chave secreta no backend
const supabase = createClient(supabaseUrl, supabaseKey)

// Schema de validação com Zod: agora os campos são number, pois o frontend envia números
const incomeSchema = z.object({
  income: z.number().nonnegative('Renda deve ser um número positivo'),
  extraincome: z.number().nonnegative('Renda extra deve ser um número positivo').default(0),
  otherincome: z.number().nonnegative('Campo "Outros" deve ser um número positivo').default(0),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Tratamento CORS para OPTIONS
  if (req.method === 'OPTIONS') {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return res.status(204).end()
}

res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')



  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' })
  }

  try {

    // Extrai token do header Authorization
    const authHeader = req.headers.authorization
    if (!authHeader) {
      return res.status(401).json({ message: 'Não autorizado: token ausente' })
    }
    const token = authHeader.replace('Bearer ', '')

    // Verifica token e pega usuário
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token)

    if (authError || !user) {
      return res.status(401).json({ message: 'Token inválido ou usuário não encontrado' })
    }

    // Validação dos dados do body
    const { income, extraincome, otherincome } = incomeSchema.parse(req.body);

    // Cria o registro no banco, vinculando ao userId do Supabase
    const newIncome = await prisma.income.create({
      data: {
        income,
        extraincome,
        otherincome,
        userId: user.id,
        date: new Date(), // data atual
      },
    })

    return res.status(201).json({
      message: 'Dados de receita salvos com sucesso',
      income: newIncome,
    })
  } catch (error) {
    console.error('Erro ao salvar renda:', error)

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Erro de validação',
        errors: error.errors,
      })
    }

    return res.status(500).json({
      message: 'Erro interno do servidor',
    })
  }
}