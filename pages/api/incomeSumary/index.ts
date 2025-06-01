import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";
import { v4 as uuidv4 } from "uuid";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, userId } = req.query;

  if (id) {
    const summary = await prisma.incomeSummary.findUnique({
      where: { id: String(id) },
    });

    if (!summary) return res.status(404).json({ message: "Summary not found." });

    return res.status(200).json(summary);
  }

  const summaries = await prisma.incomeSummary.findMany({
    where: userId ? { userId: String(userId) } : undefined,
  });

  return res.status(200).json(summaries);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { userId, data, total, impostoRenda, month } = req.body;

  if (!userId || !data || total == null || impostoRenda == null || !month) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newSummary = await prisma.incomeSummary.create({
      data: {
        id: uuidv4(),
        userId,
        createdAt: new Date(data),
        total: Number(total),
        impostoRenda: Number(impostoRenda),
        month: new Date(month),
      },
    });

    return res.status(201).json(newSummary);
  } catch (error: any) {
    console.error("Error creating summary:", error);
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Summary ID is required for deletion." });
  }

  try {
    await prisma.incomeSummary.delete({ where: { id } });
    return res.status(200).json({ message: "Summary deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting summary:", error);
    return res.status(400).json({ message: "Failed to delete summary", error: error.message });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await middlewareV2(req, res);

  switch (req.method) {
    case "GET":
      return handleGetRequest(req, res);
    case "POST":
      return handlePostRequest(req, res);
    case "DELETE":
      return handleDeleteRequest(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}
