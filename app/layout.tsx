import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/globals.scss";

const poppins = Poppins({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Furnipex Ecommerce",
  description: "Online furniture shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
