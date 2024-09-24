import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";

export const metadata: Metadata = {
  title: "Kophee",
  description: "A Coffee Shop",
};

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${merriweather.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
