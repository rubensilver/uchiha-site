import "./globals.css";
import "./theme.css";
import { cookies } from "next/headers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = cookies().get("theme")?.value || "dark";

  return (
    <html lang="pt" data-theme={theme}>
      <body className="bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
