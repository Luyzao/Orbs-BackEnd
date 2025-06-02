import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { middlewareV2 } from "@/middleware.v2";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await middlewareV2(req, res);

  switch (req.method) {
    case "GET":
      return handleGetCategory(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

async function handleGetCategory(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  try {
    if (id) {
      const category = await prisma.category.findUnique({
        where: { id: String(id) },
        include: { expenses: true },
      });

      if (!category) {
        return res.status(404).json({ message: "Category not found." });
      }

      return res.status(200).json(category);
    }

    const categories = await prisma.category.findMany({
      include: { expenses: true },
    });

    return res.status(200).json(categories);
  } catch (error: any) {
    console.error("Error fetching category:", error);
    return res.status(500).json({ message: "Failed to fetch category", error: error.message });
  }
}
