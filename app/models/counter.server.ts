import { prisma } from "~/db.server";

export async function getLastCounter() {
  return await prisma.counter.findFirst({
    select: {
      count: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
  });
}
