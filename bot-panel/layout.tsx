export const metadata = {
  title: "Uchiha Panel",
  description: "Painel Oficial do Bot Uchiha",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="pt">
      <body className="uchiha-bg">
        {children}
      </body>
    </html>
  );
}
