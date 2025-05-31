import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";
import { v4 as uuidv4 } from "uuid";


async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.query;

  if (id) {
    const income = await prisma.income.findUnique({
      where: { id: String(id) },
      include: {
        User: true,
      },
    });

    if (!income) return res.status(404).json({ message: "Income record not found." });

    return res.status(200).json(income);
  }

  // Se userId for passado, filtra só receitas desse usuário
  const incomes = await prisma.income.findMany({
    where: userId ? { userId: String(userId) } : undefined,
    include: {
      User: true,
    },
  });

  return res.status(200).json(incomes);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { date, userId, income, extraincome, otherincome, month } = req.body;

  console.log(req.body);

  if (!date || !userId || income == null || extraincome == null || otherincome == null || !month) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const newIncome = await prisma.income.create({
    data: {
      id: uuidv4(), // Gerando novo UUID
      date: new Date(date),
      userId,
      income: Number(income),
      extraincome: Number(extraincome),
      otherincome: Number(otherincome),
      month: new Date(month),
    },
  });

  return res.status(201).json(newIncome);
}


async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, date, userId, income, extraincome, otherincome, month } = req.body;
  console.log(req.body)

  if (!id) {
    return res.status(400).json({ message: "Income ID is required for update." });
  }

//   try {
    const updatedIncome = await prisma.income.update({
      where: { id },
      data: {
        date: date ? new Date(date) : undefined,
        userId,
        income: income != null ? Number(income) : undefined,
        extraincome: extraincome != null ? Number(extraincome) : undefined,
        otherincome: otherincome != null ? Number(otherincome) : undefined,
        month: month ? new Date(month) : undefined,
      },
    });

    return res.status(200).json(updatedIncome);
//   } catch (error: any) {
//     console.error("Error updating income:", error);
//     return res.status(400).json({ message: "Failed to update income", error: error.message });
//   }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Income ID is required for deletion." });
  }

  try {
    await prisma.income.delete({ where: { id } });
    return res.status(200).json({ message: "Income deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting income:", error);
    return res.status(400).json({ message: "Failed to delete income", error: error.message });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await middlewareV2(req, res);

  switch (req.method) {
    case "GET":
      return handleGetRequest(req, res);
    case "POST":
      return handlePostRequest(req, res);
    case "PUT":
      return handlePutRequest(req, res);
    case "DELETE":
      return handleDeleteRequest(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
