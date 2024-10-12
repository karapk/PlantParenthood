/*
  Warnings:

  - You are about to drop the column `createdAt` on the `OutdoorPlants` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `OutdoorPlants` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OutdoorPlants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_OutdoorPlants" ("description", "genus", "id", "name") SELECT "description", "genus", "id", "name" FROM "OutdoorPlants";
DROP TABLE "OutdoorPlants";
ALTER TABLE "new_OutdoorPlants" RENAME TO "OutdoorPlants";
CREATE UNIQUE INDEX "OutdoorPlants_name_key" ON "OutdoorPlants"("name");
CREATE UNIQUE INDEX "OutdoorPlants_genus_key" ON "OutdoorPlants"("genus");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
