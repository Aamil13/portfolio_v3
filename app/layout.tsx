
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aamil's Port",
  description: "A software Engineer, Equipped With Experience of Product Based StartUps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.webp"/>
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // defaultTheme="system"//add toggle later
            enableSystem={false} // Turn off system detection for SSR consistency
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>  
      </body>
    </html>
  );
}
