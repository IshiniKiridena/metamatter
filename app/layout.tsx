import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import LenisScroll from "@/components/lenis";
import { Metadata } from "next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MetaMatter Labs – Advanced Materials & Smart Infrastructure Research",
    template: "%s | MetaMatter Labs",
  },
  description:
    "MetaMatter Labs showcases cutting-edge research in metamaterials, smart concrete, additive manufacturing, and self-sensing infrastructure systems led by Roshira Premadasa at New Mexico State University.",
  keywords: [
    "MetaMatter Labs",
    "Roshira Premadasa",
    "metamaterials research",
    "smart concrete",
    "self-sensing infrastructure",
    "additive manufacturing construction",
    "digital twins engineering",
    "civil engineering research",
    "structural health monitoring",
    "New Mexico State University",
  ],
  authors: [{ name: "Roshira Premadasa" }],
  creator: "Roshira Premadasa",
  publisher: "MetaMatter Labs",

  openGraph: {
    title: "MetaMatter Labs – Advanced Materials & Infrastructure Research",
    description:
      "Explore research in metamaterials, smart infrastructure, biomedical devices, and additive manufacturing systems developed at MetaMatter Labs.",
    siteName: "MetaMatter Labs",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MetaMatter Labs – Research & Innovation",
    description:
      "A research portfolio highlighting innovations in smart materials, infrastructure systems, and next-generation engineering technologies.",
    creator: "@metamatterlabs",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SoftBackdrop />
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
