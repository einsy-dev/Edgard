import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
  keywords: "",
  robots: "index, follow",
  authors: [{ name: "" }],
  generator: "Next.js, TailwindCSS, Typescript, React",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className}  antialiased`}>{children}</body>
      <GoogleAnalytics gaId="" />
    </html>
  );
}
