import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { inter } from "../../components/font";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "../../lib/constants";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL)
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>

          <div>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </div>

        </body>
      </html>
    </ClerkProvider>
  );
}
