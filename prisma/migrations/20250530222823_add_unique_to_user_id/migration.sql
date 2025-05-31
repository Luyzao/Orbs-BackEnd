/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Forms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Forms_userId_key" ON "Forms"("userId");
