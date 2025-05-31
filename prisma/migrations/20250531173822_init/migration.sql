/*
  Warnings:

  - Changed the type of `media_salarial` on the `Forms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `idade` on the `Forms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Forms" DROP COLUMN "media_salarial",
ADD COLUMN     "media_salarial" DECIMAL(65,30) NOT NULL,
DROP COLUMN "idade",
ADD COLUMN     "idade" INTEGER NOT NULL;
