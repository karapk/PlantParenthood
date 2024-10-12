/*
  Warnings:

  - You are about to drop the `OutdoorPlants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "OutdoorPlants";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Plants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isOutdoor" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Plants_name_key" ON "Plants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Plants_genus_key" ON "Plants"("genus");
