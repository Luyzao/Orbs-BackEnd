-- CreateTable
CREATE TABLE "Forms" (
    "id" TEXT NOT NULL,
    "media_salarial" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "filhos" TEXT NOT NULL,
    "quantidade_filhos" TEXT,
    "dinheiro" TEXT NOT NULL,
    "dinheiro_outro" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Forms_pkey" PRIMARY KEY ("id")
);
