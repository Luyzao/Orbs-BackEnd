/*
  Warnings:

  - Made the column `quantidade_filhos` on table `Forms` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Forms" ALTER COLUMN "quantidade_filhos" SET NOT NULL;
