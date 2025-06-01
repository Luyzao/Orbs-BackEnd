/*
  Warnings:

  - You are about to drop the `FinancialAnalysis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FinancialAnalysis" DROP CONSTRAINT "FinancialAnalysis_userId_fkey";

-- DropTable
DROP TABLE "FinancialAnalysis";
