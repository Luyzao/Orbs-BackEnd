// import { prisma } from "@/lib/prisma";
// import { hash } from 'bcrypt';
// import { NextApiRequest, NextApiResponse } from 'next'; // Importando os tipos
// import { z } from "zod";

// // Definindo o schema para validação de entrada
// const userSchema = z.object({
//     name: z.string().min(1, "Nome é obrigatório"),
//     email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
//     password: z.string().min(1, "Senha é obrigatória").min(8, "A senha deve ter no mínimo 8 caracteres")
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     // Trata pré-requisições CORS
//     if (req.method === 'OPTIONS') {
//         res.setHeader('Access-Control-Allow-Origin', '*');
//         res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//         res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//         return res.status(204).end(); // 204: No Content
//     }

//     res.setHeader('Access-Control-Allow-Origin', '*'); // ou especifique a origem
//     res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//     console.log("Método recebido:", req.method);

//     try {
//         const body = req.body;
//         const { email, name, password } = userSchema.parse(body);

//         const existingUserByEmail = await prisma.user.findUnique({
//             where: { email }
//         });

//         if (existingUserByEmail) {
//             return res.status(409).json({ user: null, message: "Este email já está cadastrado." });
//         }

//         const hashedPassword = await hash(password, 10);

//         const newUser = await prisma.user.create({
//             data: {
//                 name,
//                 email,
//                 password: hashedPassword
//             }
//         });

//         const { password: _, ...rest } = newUser;

//         return res.status(201).json({ user: rest, message: "Cadastro finalizado com sucesso" });
//     } catch (error) {
//         return res.status(500).json({ message: "Algo deu errado! Cadastro falhou." });
//     }
// }

