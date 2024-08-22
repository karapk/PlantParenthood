/*
  Warnings:

  - You are about to alter the column `isOutdoor` on the `Plants` table. The data in that column could be lost. The data in that column will be cast from `String` to `Boolean`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isOutdoor" BOOLEAN NOT NULL
);
INSERT INTO "new_Plants" ("description", "genus", "id", "isOutdoor", "name") SELECT "description", "genus", "id", "isOutdoor", "name" FROM "Plants";
DROP TABLE "Plants";
ALTER TABLE "new_Plants" RENAME TO "Plants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
