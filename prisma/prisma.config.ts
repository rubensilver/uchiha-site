import type { Config } from "@prisma/client";

const config: Config = {
  datasources: {
    db: {
      url: "file:./dev.db",
    },
  },
};

export default config;
