import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/app/components/theme-switch";

const roboto = Roboto({
  subsets: ["latin"],
  weight:["400"]
});

export const metadata: Metadata = {
  title: "Docutell",
  description: "Document intelligence platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} antialiased h-screen min-h-full`}
      >
        <Providers>
          <ThemeSwitch />
          {children}
        </Providers>
      </body>
    </html>
  );
}
