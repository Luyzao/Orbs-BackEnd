import prisma from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next";
import { middlewareV2 } from "@/middleware.v2";

async function handleGetRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (id) {
    const user = await prisma.user.findUnique({
      where: { id: String(id) },
      include: {
        expenses: true,
        goals: true,
        balance: true,
      },
    });

    if (!user) return res.status(404).json({ message: "User not found." });

    return res.status(200).json(user);
  }

  const users = await prisma.user.findMany({
    include: {
      expenses: true,
      goals: true,
      balance: true,
    },
  });

  return res.status(200).json(users);
}

async function handlePostRequest(req: NextApiRequest, res: NextApiResponse) {
  const { name, avatarUrl } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        avatarUrl,
      },
    });

    return res.status(201).json(newUser);
  } catch (error: any) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user", error: error.message });
  }
}

async function handlePutRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id, name, avatarUrl } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID is required for update." });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        name,
        avatarUrl,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error: any) {
    console.error("Error updating user:", error);
    return res.status(400).json({ message: "Failed to update user", error: error.message });
  }
}

async function handleDeleteRequest(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ message: "User ID is required for deletion." });
  }

  try {
    await prisma.user.delete({ where: { id } });
    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error: any) {
    console.error("Error deleting user:", error);
    return res.status(400).json({ message: "Failed to delete user", error: error.message });
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
