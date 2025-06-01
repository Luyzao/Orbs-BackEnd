import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.query

  try {
    if (id) {
      const expense = await prisma.expense.findUnique({
        where: { id: String(id) },
      })
      return res.status(200).json(expense)
    }

    if (userId) {
      const expenses = await prisma.expense.findMany({
        where: { userId: String(userId) },
        include: { category: true },
        orderBy: { date: 'desc' },
      })
      return res.status(200).json(expenses)
    }

    return res.status(400).json({ error: "Missing id or userId parameter" })
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", detail: error })
  }
}
async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const {
    title,
    amount,
    date,
    isCredit = false,
    totalInstallments,
    currentInstallment,
    categoryId,
    userId,
  } = req.body;

  console.log(req.body)

  if (!title || !amount || !date || !categoryId || !userId) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newExpense = await prisma.expense.create({
      data: {
        title,
        amount,
        date: new Date(date),
        isCredit,
        totalInstallments,
        currentInstallment,
        categoryId,
        userId,
      },
    });

    return res.status(201).json(newExpense);
  } catch (error: any) {
    console.error("Error creating expense:", error);
    return res.status(500).json({ message: "Failed to create expense", error: error.message });
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const {
    id,
    title,
    amount,
    date,
    isCredit,
    totalInstallments,
    currentInstallment,
    categoryId,
  } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Expense ID is required for update." });
  }

  try {
    const updatedExpense = await prisma.expense.update({
      where: { id },
      data: {
        title,
        amount,
        date: date ? new Date(date) : undefined,
        isCredit,
        totalInstallments,
        currentInstallment,
        categoryId,
      },
    });

    return res.status(200).json(updatedExpense);
  } catch (error: any) {
    console.error("Error updating expense:", error);
    return res.status(500).json({ message: "Failed to update expense", error: error.message });
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Expense ID is required for deletion." });
  }

  try {
    await prisma.expense.delete({ where: { id } });
    return res.status(200).json({ message: "Expense deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting expense:", error);
    return res.status(500).json({ message: "Failed to delete expense", error: error.message });
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
