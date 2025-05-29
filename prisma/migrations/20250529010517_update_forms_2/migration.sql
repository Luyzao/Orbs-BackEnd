/*
  Warnings:

  - You are about to drop the column `dinheiro_outro` on the `Forms` table. All the data in the column will be lost.
  - You are about to drop the column `filhos` on the `Forms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Forms" DROP COLUMN "dinheiro_outro",
DROP COLUMN "filhos";
