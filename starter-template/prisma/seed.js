const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

console.log(Object.keys(prisma)); // This will log all available models in Prisma

const plantData = [
  {
    name: "Plant1",
    genus: "Plant genus 1.",
    description: "Description of Plant1",
    isOutdoor: true,
  },
  {
    name: "Plant2",
    genus: "Plant genus 2.",
    description: "Description of Plant2",
    isOutdoor: true,
  },
  {
    name: "Plant3",
    genus: "Plant genus 3.",
    description: "Description of Plant3",
    isOutdoor: true,
  },
  {
    name: "Plant4",
    genus: "Plant genus 4.",
    description: "Description of Plant4",
    isOutdoor: true,
  },
  {
    name: "Plant5",
    genus: "Plant genus 5.",
    description: "Description of Plant5",
    isOutdoor: true,
  },
];

async function main() {
  console.log(`Feeding the seed data...`);
  for (const d of plantData) {
    const plantList = await prisma.plants.create({
      data: d,
    });
    console.log(`Created a plant list with id: ${plantList.id}`);
  }
  console.log(`Seeding done.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
