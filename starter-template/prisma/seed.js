const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

console.log(Object.keys(prisma)); // This will log all available models in Prisma

const plantData = [
  {
    id: parseInt(1),
    name: "Narrowleaf Zinnia",
    genus: "Zinnia angustifolia Kunth.",
    description: "Is a herbaceous flowering plant species of zinnia native to northern and western Mexico and naturalized in parts of the Southwestern United States. Hybrids between Z. angustifolia and other species of Zinnia are popular garden plants.",
    isOutdoor: true,
    imgURL: "/assets/narrowleafzinnia.jpeg",
  },
  {
    id: parseInt(2),
    name: "Rose of Sharon",
    genus: "Hibiscus syriacus L.",
    description: "Is a species of flowering plant in the mallow family, Malvaceae. It is native to areas of east Asia, but widely introduced elsewhere, including much of Europe and North America. It was given the epithet syriacus because it had been collected from gardens in Syria.  Common names include the rose of Sharon, (especially in North America), Syrian ketmia, shrub althea  (or simply althea), and rose mallow (in the United Kingdom). It is the national flower of South Korea and is mentioned in the South Korean national anthem.",
    isOutdoor: true,
    imgURL: "/assets/roseofsharon.jpeg"
  },
  {
    id: parseInt(3),
    name: "Hydrangea",
    genus: "Hydrangea macrophylla Ser.",
    description: "Is a species of flowering plant in the family Hydrangeaceae, native to Japan. It is a deciduous shrub growing to 2 m (7 ft) tall by 2.5 m (8 ft) broad with large heads of pink or blue flowers in summer and autumn. Common names include bigleaf hydrangea, French hydrangea, lacecap hydrangea, mophead hydrangea, and hortensia. It is widely cultivated in many parts of the world in many climates. It is not to be confused with H. aspera 'Macrophylla'.",
    isOutdoor: true,
    imgURL: "/assets/hydrangea.jpeg"
  },
  {
    id: parseInt(4),
    name: "Flour-of-an-Hour",
    genus: "Hibiscus trionum L.",
    description: "Is an annual plant native to the Old World tropics and subtropics. It has spread throughout southern Europe both as a weed and cultivated as a garden plant. It has been introduced to the United States as an ornamental where it has become naturalized as a weed of cropland and vacant land, particularly on disturbed ground.",
    isOutdoor: true,
    imgURL: "/assets/flowerofanhour.jpeg",
  },
  {
    id: parseInt(5),
    name: "Fernleaf Yarrow",
    genus: "Achillea Filipendulina Lam.",
    description: "Is an Asian species of flowering plant in the sunflower family, native to central and southwestern Asia (Kazakhstan, Afghanistan, Pakistan, Iran, Iraq, Turkey, Caucasus). It is also naturalized in parts of Europe and North America.",
    isOutdoor: true,
    imgURL: "/assets/fernleafyarrow.jpeg"
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