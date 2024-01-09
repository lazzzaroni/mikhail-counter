import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.counter.deleteMany().catch(() => {
    // no worries if it doesn't exist yet
  });

  await prisma.counter.create({
    data: {
      count: 14,
      createdAt: new Date("2024-01-04 08:32:14"),
    },
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
