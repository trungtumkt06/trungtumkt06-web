import Link from 'next/link';

export default function Home() {
  
  const services = [
    {
      title: "Lập trình Web",
      description: "Xây dựng website hiện đại, tốc độ cao với Next.js & React. Tối ưu trải nghiệm UI/UX đa nền tảng.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
      )
    },
    {
      title: "Marketing & SEO",
      description: "Lên chiến lược nội dung, tối ưu hóa công cụ tìm kiếm (SEO) và triển khai các chiến dịch tiếp thị số hiệu quả.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
      )
    },
    {
      title: "Nhiếp ảnh & Retouch",
      description: "Chụp ảnh sản phẩm, chân dung và xử lý hậu kỳ, chỉnh sửa ảnh chuyên nghiệp để tạo ra ấn phẩm hoàn hảo nhất.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    }
  ];

  const featuredProjects = [
    { title: "Website Thương mại điện tử", category: "Web Development", imagePlaceholder: "Giao diện Web" },
    { title: "Chiến dịch Branding Mạng xã hội", category: "Marketing", imagePlaceholder: "Ấn phẩm Truyền thông" },
    { title: "Bộ ảnh Lookbook Sản phẩm", category: "Photography", imagePlaceholder: "Chụp & Retouch" },
  ];

  // ĐÃ CẬP NHẬT: Danh sách sản phẩm số
  const featuredProducts = [
    { name: "Tài khoản Canva Pro (Edu) - 1 Năm", price: "99.000đ", tag: "Bán chạy", type: "Giao tự động" },
    { name: "Tài khoản Canva Pro (Edu) - Vĩnh viễn", price: "199.000đ", tag: "Hot", type: "Bảo hành 1-1" },
  ];

  return (
    <main className="min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-earth-light/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 z-10 text-center md:text-left">
            <h2 className="text-earth-accent font-semibold tracking-wider uppercase text-sm md:text-base">Xin chào, mình là</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-earth-dark leading-tight">Trung Tự.</h1>
            <p className="text-lg md:text-xl text-earth-dark/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link href="/du-an" className="bg-earth text-white px-8 py-3.5 rounded-full hover:bg-earth-dark shadow-md hover:shadow-lg transition-all duration-300 font-medium text-center">Xem Dự Án</Link>
              <Link href="/lien-he" className="border-2 border-earth text-earth-dark px-8 py-3.5 rounded-full hover:bg-earth/10 transition-all duration-300 font-medium text-center">Liên Hệ Ngay</Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center z-10 mt-10 md:mt-0">
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-earth/20 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-earth/30 flex items-center justify-center text-earth-dark/50">
                <span>[Ảnh Chân Dung]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-2">Thế mạnh cốt lõi</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-earth-dark">Dịch vụ & Kỹ năng</h2>
            <div className="w-20 h-1 bg-earth mt-6 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-earth-light/20 border border-earth/10 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-earth-light flex items-center justify-center text-earth mb-6 group-hover:bg-earth group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-earth-dark mb-4">{service.title}</h4>
                <p className="text-earth-dark/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="py-24 bg-earth-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h3 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-2">Portfolio</h3>
              <h2 className="text-3xl md:text-4xl font-bold">Dự án tiêu biểu</h2>
            </div>
            <Link href="/du-an" className="mt-6 md:mt-0 text-earth-light hover:text-earth-accent transition-colors border-b border-earth-light hover:border-earth-accent pb-1">
              Xem tất cả dự án &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="w-full h-64 bg-white/10 rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-white/5 relative">
                  <span className="text-white/40">{project.imagePlaceholder}</span>
                  <div className="absolute inset-0 bg-earth-accent/0 group-hover:bg-earth-accent/20 transition-all duration-300"></div>
                </div>
                <p className="text-earth-light/70 text-sm mb-1">{project.category}</p>
                <h4 className="text-lg font-semibold group-hover:text-earth-accent transition-colors">{project.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION (ĐÃ CẬP NHẬT CHO SẢN PHẨM SỐ) */}
      <section className="py-24 bg-earth-light/20">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
            <h3 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-2">Dịch vụ phần mềm</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-earth-dark">Sản phẩm nổi bật</h2>
            <div className="w-20 h-1 bg-earth mt-6 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-earth/5">
                <div className="w-full h-48 bg-earth-light/40 rounded-lg mb-5 flex items-center justify-center relative overflow-hidden">
                  <span className="absolute top-2 right-2 bg-earth-accent text-white text-[10px] font-bold px-2 py-1 rounded md uppercase tracking-wider z-10">
                    {product.tag}
                  </span>
                  {/* Icon tượng trưng cho phần mềm */}
                  <svg className="w-12 h-12 text-earth/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                
                <p className="text-earth-accent text-xs font-semibold mb-2 uppercase tracking-wide">{product.type}</p>
                <h4 className="font-bold text-earth-dark mb-3 line-clamp-2 leading-snug flex-grow">{product.name}</h4>
                
                <div className="pt-4 border-t border-earth/10 flex items-center justify-between mt-auto">
                  <p className="text-earth-dark font-bold text-lg">{product.price}</p>
                  <button className="px-4 py-2 bg-earth text-white rounded-lg hover:bg-earth-dark transition-colors text-sm font-medium">
                    Mua ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/san-pham" className="inline-block px-8 py-3.5 bg-earth-dark text-white rounded-full hover:bg-earth transition-colors font-medium shadow-md hover:shadow-lg">
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION / QUICK CONTACT */}
      <section className="py-20 bg-earth">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng nâng cấp trải nghiệm số của bạn?</h2>
          <p className="text-earth-light/90 text-lg mb-8 max-w-2xl mx-auto">
            Dù đó là thiết kế web, tối ưu chiến dịch marketing, hay cần hỗ trợ các phần mềm tại C8 Mậu Thân, mình luôn sẵn sàng đồng hành.
          </p>
          <Link href="/lien-he" className="inline-block bg-white text-earth-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-earth-light hover:scale-105 transition-all duration-300 shadow-lg">
            Nhận tư vấn ngay
          </Link>
        </div>
      </section>

    </main>
  );
}