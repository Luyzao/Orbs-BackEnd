import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

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

  if (req.method === 'GET') {
    const authHeader = req.headers.authorization
    const token = authHeader?.replace('Bearer ', '')
    if (!token) {
      return res.status(401).json({ message: 'Não autorizado: token ausente' })
    }

    const { data: user, error } = await supabase.auth.getUser(token)
    if (error || !user) {
      return res.status(401).json({ message: 'Não autorizado: token inválido' })
    }

    const userId = user.user.id

    try {
      const expenses = await prisma.expense.findMany({
        where: { userId }, // Filtra pelas despesas do usuário logado
        include: {
          category: true,
        },
      })

      return res.status(200).json(expenses)
    } catch (error) {
      console.error('Erro ao buscar despesas:', error)
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }


  if (req.method === 'POST') {
      
      return res.status(501).json({ message: 'POST não implementado' })
  }

  // Se não for GET, POST ou OPTIONS
  return res.status(405).json({ message: 'Método não permitido' })

}
