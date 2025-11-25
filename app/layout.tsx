import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title: "Yathindra Bolloju – DevOps Engineer",
  description: "Resume as Code – DevOps Portfolio of Yathindra Bolloju"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex justify-center px-4 py-8">
            <main className="w-full max-w-5xl">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
