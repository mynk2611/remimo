-- CreateEnum
CREATE TYPE "transactionStatus" AS ENUM ('success', 'failure');

-- CreateEnum
CREATE TYPE "transactionType" AS ENUM ('Credit', 'Debit');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "type" "transactionType" NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "status" "transactionStatus" NOT NULL,
    "remark" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
