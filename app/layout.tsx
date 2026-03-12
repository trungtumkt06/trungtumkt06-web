import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const montserrat = Montserrat({ 
  subsets: ["latin", "vietnamese"],
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  title: "Trung Tự | Portfolio & Cửa hàng số",
  description: "Trang web cá nhân, portfolio và cung cấp tài khoản phần mềm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}