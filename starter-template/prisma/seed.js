const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

console.log(Object.keys(prisma)); // This will log all available models in Prisma

const plantData = [
  {
    id: parseInt(1),
    name: "Narrowleaf Zinnia",
    genus: "Zinnia angustifolia Kunth.",
    description: "Description of Plant1",
    isOutdoor: true,
  },
  {
    id: parseInt(2),
    name: "Rose of Sharon",
    genus: "Hibiscus syriacus L.",
    description: "Description of Plant2",
    isOutdoor: true,
  },
  {
    id: parseInt(3),
    name: "Hydrangea",
    genus: "Hydrangea macrophylla Ser.",
    description: "Description of Plant3",
    isOutdoor: true,
  },
  {
    id: parseInt(4),
    name: "Flour-of-an-Hour",
    genus: "Hibiscus trionum L.",
    description: "Description of Plant4",
    isOutdoor: true,
  },
  {
    id: parseInt(5),
    name: "Fernleaf Yarrow",
    genus: "Achillea Filipendulina Lam.",
    description: "Description of Plant5",
    isOutdoor: true,
  },
];

async function main() {
  console.log(`Clearing existing plants data...`);

  // Clear the plants table
  await prisma.plants.deleteMany();
  console.log(`All plants data cleared.`);

  console.log(`Feeding the seed data...`);
  for (const d of plantData) {
    const plantList = await prisma.plants.create({
      data: d,
    });
    console.log(`Created a plant with id: ${plantList.id}`);
  }
  console.log(`Seeding done.`);
}

// Execute the main function
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });