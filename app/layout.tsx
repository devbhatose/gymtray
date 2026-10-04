import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GymTray — Personalized Nutrition for Your Workouts",
  description:
    "GymTray builds a personalized meal plan around your goals, body, food preferences, and routine. Coming soon — join the waitlist for early access.",

    verification: {
      google: "<meta name="google-site-verification" content="AAWYtd7M6vQx_yTVSIiKzsUGT_FG1PEQ_vftrfU-idY" />",
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
      </body>
    </html>
  );
}
