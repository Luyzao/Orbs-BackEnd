import { PrismaClient } from "@/generated/prisma";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
  console.log("Prisma client instantiated in production");
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
    console.log("Prisma client instantiated in development");
  }
  prisma = global.prisma;
}

export default prisma;
