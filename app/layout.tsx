import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gymtray.vercel.app"),

  title: "GymTray — Personalized Nutrition & Meal Planning",

  description:
    "GymTray helps you plan what to eat around your fitness goals, body details, food preferences, and routine. Join the waitlist for early access.",

  keywords: [
    "GymTray",
    "personalized meal plan",
    "personalized nutrition plan",
    "fitness meal planner",
    "gym diet plan",
    "meal planning for gym",
    "protein tracking",
    "calorie tracking",
    "muscle gain diet",
    "fat loss diet",
    "fitness nutrition",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "GymTray",
    title: "GymTray — Personalized Nutrition for Your Fitness Goals",
    description:
      "Plan what to eat around your goals, preferences, and routine. Join the GymTray waitlist for early access.",
    url: "https://gymtray.vercel.app/",
  },

  twitter: {
    card: "summary_large_image",
    title: "GymTray — Personalized Nutrition for Your Fitness Goals",
    description:
      "Plan what to eat around your goals, preferences, and routine. Join the GymTray waitlist for early access.",
  },

  verification: {
    google: "AAWYtd7M6vQx_yTVSIiKzsUGT_FG1PEQ_vftrfU-idY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <noscript>
          <style>{`.reveal,.waitlist-reveal{opacity:1 !important;transform:none !important;} .reveal-stagger>*{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>

        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YJKL8494N"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YJKL8494N');
          `}
        </Script>
      </body>
    </html>
  );
}