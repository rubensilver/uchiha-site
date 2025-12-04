// lib/logger.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function log(level: "INFO" | "WARN" | "ERROR", message: string, meta?: any) {
  try {
    await prisma.log.create({
      data: {
        level,
        message,
        meta: JSON.stringify(meta || {}) },
      },
    });
  } catch (e) {
    console.error("log error", e);
  }
}
