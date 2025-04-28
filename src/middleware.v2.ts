import { NextApiRequest, NextApiResponse } from "next";
// import config from "./configurations";
// import { validadeToken } from "./services/middleware";

export async function middlewareV2(
  request: NextApiRequest,
  response: NextApiResponse
) {
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.setHeader('Pragma', 'no-cache');
  response.setHeader('Expires', '0');
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  /*
  if (config.ENV == "PROD" || config.ENV == "STAG") {
    response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.log('!authHeader || !authHeader.startsWith("Bearer ")');
      return response.status(401).json({ message: "Token não autorizado." });
    }

    const token = authHeader.split(" ")[1];
    console.log(token);
    const isValid = validadeToken(token);
    console.log(isValid);
    if (!isValid) {
      console.log('!isValid');
      return response.status(401).json({ message: "Token não autorizado." });
    }

    response.setHeader("Authorization", `Bearer ${config.AUTH_TOKEN}`);
  }
  */

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }
}
