import { prisma } from "./index";
import bcrypt from "bcryptjs";

export async function createAdminIfNotExists() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.warn("ADMIN_EMAIL ou ADMIN_PASSWORD não definido");
    return;
  }

  const existing = await prisma.user.findUnique({ where: { email } });

  if (!existing) {
    await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        role: "admin",
      },
    });

    console.log("Administrador criado automaticamente!");
  }
}
