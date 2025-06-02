import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.query;

  if (id) {
    // Busca um balance pelo id
    const balance = await prisma.balance.findUnique({
      where: { id: String(id) },
      include: { user: true },
    });

    if (!balance) return res.status(404).json({ message: "Balance not found." });

    return res.status(200).json(balance);
  }

  if (userId) {
    // Busca balance pelo userId (único)
    const balance = await prisma.balance.findUnique({
      where: { userId: String(userId) },
      include: { user: true },
    });

    if (!balance) return res.status(404).json({ message: "Balance not found for this user." });

    return res.status(200).json(balance);
  }

  // Se nenhum filtro, traz todos (pode ser perigoso dependendo do volume)
  const balances = await prisma.balance.findMany({
    include: { user: true },
  });

  return res.status(200).json(balances);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { value, userId } = req.body;

  if (!value || !userId) {
    return res.status(400).json({ message: "Value and userId are required." });
  }

  try {
    const newBalance = await prisma.balance.create({
      data: {
        value,
        userId,
      },
    });

    return res.status(201).json(newBalance);
  } catch (error: any) {
    console.error("Error creating balance:", error);
    return res.status(500).json({ message: "Failed to create balance", error: error.message });
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, value } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Balance ID is required for update." });
  }

  if (value === undefined) {
    return res.status(400).json({ message: "Value is required for update." });
  }

  try {
    const updatedBalance = await prisma.balance.update({
      where: { id },
      data: { value },
    });

    return res.status(200).json(updatedBalance);
  } catch (error: any) {
    console.error("Error updating balance:", error);
    return res.status(400).json({ message: "Failed to update balance", error: error.message });
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Balance ID is required for deletion." });
  }

  try {
    await prisma.balance.delete({ where: { id } });
    return res.status(200).json({ message: "Balance deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting balance:", error);
    return res.status(400).json({ message: "Failed to delete balance", error: error.message });
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
