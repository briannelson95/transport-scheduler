/*
  Warnings:

  - A unique constraint covering the columns `[name,organizationId]` on the table `TripLocation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Trip" DROP CONSTRAINT "Trip_busId_fkey";

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "busId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TripLocation_name_organizationId_key" ON "TripLocation"("name", "organizationId");

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
