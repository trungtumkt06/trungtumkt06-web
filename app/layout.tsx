import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import Script from "next/script"; // Thêm để chạy Google Analytics

const montserrat = Montserrat({ 
  subsets: ["latin", "vietnamese"],
  weight: ['400', '500', '600', '700'] 
});

export const metadata: Metadata = {
  // Cấu hình domain chính thức để Google nhận diện đúng link ảnh OG
  metadataBase: new URL('https://trungtumkt06.io.vn'), 
  title: 'Trung Tự Mkt | Lập trình Web & Digital Marketing',
  description: 'Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.',
  
  // XÁC MINH GOOGLE SEARCH CONSOLE
  verification: {
    google: "cy5LZ7TvgkQXDJx6wxDzOrk2SRnHdcA4X6KJToIKhww",
  },

  openGraph: {
    title: 'Trung Tự Mkt | Lập trình Web & Digital Marketing',
    description: 'Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.',
    url: 'https://trungtumkt06.io.vn', 
    siteName: 'Trung Tự Mkt',
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
        
        {/* GOOGLE ANALYTICS (GA4) - Đã cập nhật mã G-NM85NTPSM5 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NM85NTPSM5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NM85NTPSM5');
          `}
        </Script>

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}