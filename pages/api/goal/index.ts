// pages/api/goals/index.ts

import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";

// GET - listar todos os goals ou um específico por ID
async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const goal = await prisma.goal.findUnique({
      where: { id: String(id) },
      include: {
        category: true,
        user: true,
      },
    });

    if (!goal) return res.status(404).json({ message: "Goal not found." });

    return res.status(200).json(goal);
  }

  const goals = await prisma.goal.findMany({
    include: {
      category: true,
      user: true,
    },
  });

  return res.status(200).json(goals);
}

// POST - criar novo goal
async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { title, target, userId, categoryId, imageUrl } = req.body;

  try {
    const newGoal = await prisma.goal.create({
      data: {
        title,
        target,
        userId,
        categoryId,
        imageUrl,
      },
    });

    return res.status(201).json(newGoal);
  } catch (error: any) {
    console.error("Error creating goal:", error);
    return res.status(500).json({ message: "Failed to create goal", error: error.message });
  }
}

// PUT - atualizar goal
async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, title, target, progress, status, categoryId, imageUrl } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Goal ID is required for update." });
  }

  try {
    const updatedGoal = await prisma.goal.update({
      where: { id },
      data: {
        title,
        target,
        progress,
        status,
        categoryId,
        imageUrl,
      },
    });

    return res.status(200).json(updatedGoal);
  } catch (error: any) {
    console.error("Error updating goal:", error);
    return res.status(400).json({ message: "Failed to update goal", error: error.message });
  }
}

// DELETE - deletar goal
async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Goal ID is required for deletion." });
  }

  try {
    await prisma.goal.delete({ where: { id } });
    return res.status(200).json({ message: "Goal deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting goal:", error);
    return res.status(400).json({ message: "Failed to delete goal", error: error.message });
  }
}

// Handler principal
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
