/*
  Warnings:

  - The primary key for the `FinancialAnalysis` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FinancialAnalysis" DROP CONSTRAINT "FinancialAnalysis_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FinancialAnalysis_pkey" PRIMARY KEY ("id");
