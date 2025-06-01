/*
  Warnings:

  - You are about to drop the `ExpenseAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IncomeSummary` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExpenseAnalysis" DROP CONSTRAINT "ExpenseAnalysis_userId_fkey";

-- DropForeignKey
ALTER TABLE "IncomeSummary" DROP CONSTRAINT "IncomeSummary_userId_fkey";

-- DropTable
DROP TABLE "ExpenseAnalysis";

-- DropTable
DROP TABLE "IncomeSummary";
