import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from "zod";

const formSchema = z.object({
    userId: z.string(), 
    media_salarial: z.string(),
    idade: z.string(),
    filhos: z.string(),
    quantidade_filhos: z.string().optional(),
    dinheiro: z.string(),
    dinheiro_outro: z.string().optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(204).end();
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ message: "Método não permitido" });
        }

        const body = req.body;
        const data = formSchema.parse(body);
        const userExists = await prisma.user.findUnique({
            where: { id: data.userId },
        });

        if (!userExists) {
            return res.status(404).json({ message: "Usuário não encontrado." });
        }
        
        const formEntry = await prisma.forms.create({
            data: {
                userId: data.userId,
                media_salarial: data.media_salarial,
                idade: data.idade,
                filhos: data.filhos,
                quantidade_filhos: data.quantidade_filhos ?? null,
                dinheiro: data.dinheiro,
                dinheiro_outro: data.dinheiro_outro ?? null,
            }
        });

        return res.status(201).json({ form: formEntry, message: "Formulário salvo com sucesso!" });
    } catch (error) {
        console.error("Erro ao salvar formulário:", error);
        return res.status(500).json({ message: "Erro interno ao salvar o formulário." });
    }
}
