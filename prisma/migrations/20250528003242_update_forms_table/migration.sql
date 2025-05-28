/*
  Warnings:

  - Added the required column `userId` to the `Forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Forms" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Forms" ADD CONSTRAINT "Forms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
