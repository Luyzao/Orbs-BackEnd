/*
  Warnings:

  - Added the required column `month` to the `Income` table without a default value. This is not possible if the table is not empty.
  - Added the required column `month` to the `IncomeSummary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Goal" ADD COLUMN     "category" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "month" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "IncomeSummary" ADD COLUMN     "month" TIMESTAMP(3) NOT NULL;
