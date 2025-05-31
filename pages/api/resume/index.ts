import type { NextApiRequest, NextApiResponse } from 'next';
import { salvarResumoFinanceiro } from '../../../planner-ia/utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const resultado = await salvarResumoFinanceiro(userId);

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ success: true, data: resultado });
  } catch (error) {
    console.error(error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: 'Erro ao salvar resumo' });
  }
}
