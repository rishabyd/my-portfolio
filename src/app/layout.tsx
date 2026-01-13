import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";

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
  title: "Rishab Yadav",
  description:
    "Rishab Yadav's portfolio showcases modern web applications built with Next.js, TypeScript, React,  and more. Explore my projects and skills!",

  openGraph: {
    title: "Rishab Yadav",
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
    title: "Rishab Yadav",
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
          <div className="flex flex-col h-dvh w-screen relative">
            <main className=" z-20 lg:px-0 px-3 lg:pb-16  pb-0 scrollbar-none ">
              {children}
            </main>
          </div>
        </NextThemesProvider>
      </body>
    </html>
  );
}
