-- CreateTable
CREATE TABLE "OutdoorPlants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "genus" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OutdoorPlants_name_key" ON "OutdoorPlants"("name");

-- CreateIndex
CREATE UNIQUE INDEX "OutdoorPlants_genus_key" ON "OutdoorPlants"("genus");
