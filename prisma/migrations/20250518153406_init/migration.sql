-- CreateTable
CREATE TABLE "IncomeSummary" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "impostoRenda" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IncomeSummary_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IncomeSummary" ADD CONSTRAINT "IncomeSummary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
