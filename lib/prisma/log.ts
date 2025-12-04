import { prisma } from "./index";

export async function saveLog(
  level: "INFO" | "WARN" | "ERROR",
  message: string,
  meta?: any
) {
  try {
    await prisma.log.create({
      data: {
        level,
        message,
        meta: meta ? JSON.stringify(meta) : null,
      },
    });
  } catch (err) {
    console.error("Erro ao salvar log:", err);
  }
}
