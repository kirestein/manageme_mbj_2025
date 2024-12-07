import type { Metadata } from "next";
import "./globals.css";
import { ProviderApp } from "@/components/Provider";
import TopNav from "@/components/Navbar/TopNav";


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
        className={`antialiased dark h-screen`}
      >
        <ProviderApp>
          <TopNav />
          <main className="container mx-auto p-10 w-screen" style={{ height: 'calc(100vh - 64px)' }}>
            {children}
          </main>
        </ProviderApp>
      </body>
    </html>
  );
}
