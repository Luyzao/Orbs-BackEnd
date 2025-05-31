import type { NextApiRequest, NextApiResponse } from 'next';
import { salvarResumoFinanceiro } from '../../planner-ia/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'UserId é obrigatório' });
  }

  try {
    const resultado = await salvarResumoFinanceiro(userId);
    return res.status(200).json({ sucesso: true, resultado });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao gerar resumo financeiro' });
  }
}
