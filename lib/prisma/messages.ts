import { prisma } from "./index";

export async function saveMessage(data: {
  to: string;
  content: string;
  direction: "sent" | "received";
}) {
  return prisma.message.create({ data });
}

export async function getMessages(limit = 50) {
  return prisma.message.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
