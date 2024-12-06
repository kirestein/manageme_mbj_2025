import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "St3 Manage Me",
  description: "The future of managing your employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
