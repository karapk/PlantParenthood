const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const plantData =[
  {
   id: 1,
   name: "Plant1",
   genus: "Plant genus 1.",
  },
  {
    id: 2,
   name: "Plant2",
   genus: "Plant genus 2.",
   },
   {
    id: 3,
   name: "Plant3",
   genus: "Plant genus 3.",
   },
   {
    id: 4,
   name: "Plant4",
   genus: "Plant genus 4.",
   },
   {
    id: 5,
   name: "Plant5",
   genus: "Plant genus 5.",
   },
];

async function main() {
  console.log(`Feed the seed data...`);
  for (const d of plantData) {
    const plantList = await prisma.plantData.create({
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
