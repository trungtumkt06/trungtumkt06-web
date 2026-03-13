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
  title: 'Trung Tự Mkt | Lập trình Web & Digital Marketing',
  description: 'Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.',
  openGraph: {
    title: 'Trung Tự Mkt | Lập trình Web & Digital Marketing',
    description: 'Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.',
    url: 'https://trungtumkt06-web.vercel.app/', // Sửa lại thành tên miền chính thức của bạn sau này
    siteName: 'Trung Tự Mkt Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Trung Tự Mkt Cover',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Trung Tự Mkt | Lập trình Web & Digital Marketing',
    description: 'Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.',
    images: ['/og-image.jpg'],
  },
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