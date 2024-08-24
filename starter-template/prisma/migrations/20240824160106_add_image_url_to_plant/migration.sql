-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Plants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isOutdoor" BOOLEAN NOT NULL,
    "imgURL" TEXT NOT NULL DEFAULT 'placeholder.jpg'
);
INSERT INTO "new_Plants" ("description", "genus", "id", "isOutdoor", "name") SELECT "description", "genus", "id", "isOutdoor", "name" FROM "Plants";
DROP TABLE "Plants";
ALTER TABLE "new_Plants" RENAME TO "Plants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
