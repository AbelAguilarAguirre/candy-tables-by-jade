import type { Metadata } from "next";
import { Geist, Geist_Mono, Delius } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Candy Tables By Jade",
    description:
        "Delight in Every Bite: Custom Candy Tables for Every Occasion!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div>
                    <main>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
