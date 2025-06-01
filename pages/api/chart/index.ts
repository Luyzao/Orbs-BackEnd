import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";
import { v4 as uuidv4 } from "uuid";


async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
    const { id, userId, date } = req.query;

    if (id) {
        const income = await prisma.income.findUnique({
        where: { id: String(id) },
        include: { User: true },
        });

        if (!income) return res.status(404).json({ message: "Income record not found." });

        return res.status(200).json(income);
    }

    // Se userId e date forem passados, filtrar por userId e pelo mês da data
    if (userId && date) {
        const selectedDate = new Date(String(date));
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

        // Buscar incomes do usuário no mês selecionado
        const incomes = await prisma.income.findMany({
            where: {
            userId: String(userId),
            date: {
                gte: firstDayOfMonth,
                lte: lastDayOfMonth,
            },
            },
           select: {
            id: true,
            income: true,
            extraincome: true,
            otherincome: true,
            },
        });

        // Buscar despesas do usuário no mês selecionado
        const expenses = await prisma.expense.findMany({
            where: {
            userId: String(userId),
            date: {
                gte: firstDayOfMonth,
                lte: lastDayOfMonth,
            },
            },
            select: {
            id: true,
            title: true,
            amount: true,
            date: true,
            },
        });

        return res.status(200).json({ incomes, expenses });
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await middlewareV2(req, res);

  switch (req.method) {
    case "GET":
      return handleGetRequest(req, res);
    // aqui seus outros métodos (POST, PUT, DELETE) do income, se quiser manter
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}