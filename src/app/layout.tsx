import Navbar from "@/components/navbar/navbar";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import Footer from "@/components/footer/footer-main";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Rishab Yadav | Full Stack Web Developer",
  description:
    "Rishab Yadav's portfolio showcases modern web applications built with Next.js, TypeScript, React,  and more. Explore my projects and skills!",

  openGraph: {
    title: "Rishab Yadav | Full Stack Web Developer",
    description:
      "Rishab Yadav's portfolio showcases modern web applications built with Next.js, TypeScript, React,  and more. Explore my projects and skills!",
    url: "https://www.rishabyadav.com/",
    siteName: "Rishab Yadav - Portfolio",
    images: [
      {
        url: "https://www.rishabyadav.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rishab Yadav Portfolio Thumbnail",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rishab Yadav | Full Stack Web Developer",
    description:
      "Explore Rishab Yadav's portfolio: Next.js, React, Typescript & more.",
    images: ["https://www.rishabyadav.com/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${montserrat.variable} ${roboto.variable} `}
      lang="en"
      suppressHydrationWarning
    >
      <body className="font-sans">
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen w-screen relative">
            <nav className="fixed z-50 w-fit h-fit bottom-8  rounded-full lg:top-8 left-1/2 -translate-x-1/2">
              <Navbar />
            </nav>

            <main className="flex-grow z-20  lg:pb-16  pb-0 scrollbar-none bg-white/30 dark:bg-black/30">
              {children}
            </main>
            <footer className="z-20  h-fit w-full">
              <Footer />
            </footer>
          </div>
        </NextThemesProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
