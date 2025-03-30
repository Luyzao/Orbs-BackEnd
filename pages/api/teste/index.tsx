import { middlewareV2 } from "@/middleware.v2";
import { NextApiRequest, NextApiResponse } from "next";
// import { v4 as uuidv4 } from "uuid";

// import { PrismaClient } from "@prisma/client";
// import { middlewareV2 } from "src/middleware.v2";
// const prisma = new PrismaClient();

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  await middlewareV2(request, response);

  switch (request.method) {
    case "GET":
      return response.status(200).json({ mensagem: "DEU CERTO (GET)" });
    case "POST":
      return response.status(200).json({ mensagem: "DEU CERTO (POST)" });
    case "PUT":
      return response.status(200).json({ mensagem: "DEU CERTO (PUT)" });
    case "DELETE":
      return response.status(200).json({ mensagem: "DEU CERTO (DELETE)" });
    default:
      return response.status(405).json({ message: "Method not allowed" });
  }
}

            // async function getSuppliers(
            // request: NextApiRequest,
            // response: NextApiResponse
            // ) {
            // try {
            //     const suppliers = await prisma.supplier.findMany({
            //     include: {
            //         service_orders: true,
            //         contract_control: true,
            //     },
            //     });
            //     return response.status(200).json(suppliers);
            // } catch (error) {
            //     return response
            //     .status(500)
            //     .json({ message: "Internal server error", error: error.message });
            // }
            // }

            // // Função para criar um novo registro de Supplier
            // async function createSupplier(
            // request: NextApiRequest,
            // response: NextApiResponse
            // ) {
            // const { name, type, address, contact } = request.body;

            // console.log(request.body);

            // if (!name || !type || !address || !contact) {
            //     return response.status(400).json({
            //     message: "All fields (name, type, address, contact) are required.",
            //     });
            // }

            // try {
            //     const newSupplier = await prisma.supplier.create({
            //     data: {
            //         id: uuidv4(),
            //         name,
            //         type,
            //         address,
            //         contact,
            //         created_at: new Date(),
            //     },
            //     });
            //     return response.status(201).json(newSupplier);
            // } catch (error) {
            //     return response
            //     .status(500)
            //     .json({ message: "Internal server error", error: error.message });
            // }
            // }

            // // Função para atualizar um registro de Supplier
            // async function updateSupplier(
            // request: NextApiRequest,
            // response: NextApiResponse
            // ) {
            // const { id, name, type, address, contact } = request.body;

            // if (!id || !name || !type || !address || !contact) {
            //     return response
            //     .status(400)
            //     .json({ message: "ID, name, type, address, and contact are required." });
            // }

            // try {
            //     const updatedSupplier = await prisma.supplier.update({
            //     where: { id },
            //     data: {
            //         name,
            //         type,
            //         address,
            //         contact,
            //     },
            //     });
            //     return response.status(200).json(updatedSupplier);
            // } catch (error) {
            //     return response
            //     .status(500)
            //     .json({ message: "Error updating supplier", error: error.message });
            // }
            // }

            // async function deleteSupplier(
            // request: NextApiRequest,
            // response: NextApiResponse
            // ) {
            // const { id } = request.query;
            // console.log(id);
            // if (!id) {
            //     return response.status(400).json({ message: "ID is required." });
            // }

            // try {
            //     const supplier = await prisma.supplier.findUnique({
            //     where: { id: String(id) },
            //     include: {
            //         service_orders: true,
            //         contract_control: true,
            //     },
            //     });

            //     if (!supplier) {
            //     return response.status(404).json({ message: "Supplier not found." });
            //     }

            //     await prisma.supplier.delete({
            //     where: { id: String(id) },
            //     });

            //     return response.status(204).end();
            // } catch (error) {
            //     return response
            //     .status(500)
            //     .json({ message: "Error deleting supplier", error: error.message });
            // }
            // }
