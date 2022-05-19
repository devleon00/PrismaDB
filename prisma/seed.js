const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: "Woopa" },
      update: {},
      create: {
        name: "Woopa",
        username: "ajolonauta",
        mission: "Node",
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: "Woopa1" },
      update: {},
      create: {
        name: "Woopa1",
        username: "ajolonauta1",
        mission: "Node",
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: "Woopa 2" },
      update: {},
      create: {
        name: "Woopa 2",
        username: "ajolonauta2",
        mission: "Java",
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: "Woopa 3" },
      update: {},
      create: {
        name: "Woopa 3",
        username: "ajolonauta3",
        mission: "Node",
      },
    });

    const explorer1 = await prisma.explorer2.upsert({
      where: { name: "explorer1" },
      update: {},
      create: {
        name: "explorer1",
        lang: "Node",
        missionCommander: "Carlo Gilmar",
        enrollments: 1,
        hasCertification: true,
      },
    });

    const explorer2 = await prisma.explorer2.upsert({
      where: { name: "explorer2" },
      update: {},
      create: {
        name: "explorer2",
        lang: "Java",
        missionCommander: "Fernanda Ochoa",
        enrollments: 1,
        hasCertification: true,
      },
    });

    const explorer3 = await prisma.explorer2.upsert({
      where: { name: "explorer3" },
      update: {},
      create: {
        name: "explorer3",
        lang: "Node",
        missionCommander: "Carlo Gilmar",
        enrollments: 1,
        hasCertification: true,
      },
    });

    console.log("Create 3 explorers");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
