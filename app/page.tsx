import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// 1. Hàm lấy 3 Dự án mới nhất
async function getFeaturedProjects() {
  const query = `*[_type == "project"][0...3] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    "imageUrl": mainImage.asset->url
  }`;
  return client.fetch(query);
}

// 2. Hàm lấy 4 Sản phẩm mới nhất 
async function getFeaturedProducts() {
  const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    tag,
    type,
    "imageUrl": image.asset->url
  }`;
  return client.fetch(query);
}

// 3. Hàm lấy ảnh Tác giả (Author) từ Sanity
async function getAuthor() {
  const query = `*[_type == "author"][0] {
    "imageUrl": image.asset->url
  }`;
  return client.fetch(query);
}

export default async function Home() {
  // Lấy toàn bộ dữ liệu cùng lúc cho nhanh
  const [projects, products, author] = await Promise.all([
    getFeaturedProjects(),
    getFeaturedProducts(),
    getAuthor(),
  ]);

  // LINK ẢNH CHÂN DUNG TỰ ĐỘNG (Lấy từ Sanity, nếu lỗi web sẽ tự dùng ảnh mẫu để không bị sập)
  const myAvatarUrl = author?.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"; 

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

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-earth-light/20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 z-10 text-center md:text-left">
            <h2 className="text-earth-accent font-bold tracking-widest uppercase text-sm md:text-xs">Xin chào, mình là</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-earth-dark leading-tight tracking-tight">Trung Tự.</h1>
            <p className="text-lg md:text-xl text-earth-dark/70 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu và hiệu quả.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link href="/du-an" className="bg-earth text-white px-8 py-4 rounded-full hover:bg-earth-dark shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-bold text-center">Xem Dự Án</Link>
              <Link href="/lien-he" className="border-2 border-earth/20 bg-white text-earth-dark px-8 py-4 rounded-full hover:border-earth hover:text-earth transition-all duration-300 font-bold text-center">Liên Hệ Ngay</Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center z-10 mt-10 md:mt-0">
            <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-earth/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-8 border-white shadow-2xl bg-earth-light group">
               <Image 
                 src={myAvatarUrl} 
                 alt="Trung Tự Mkt" 
                 fill 
                 priority
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-earth-accent font-bold tracking-widest uppercase text-xs mb-3">Thế mạnh cốt lõi</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-earth-dark">Dịch vụ & Kỹ năng</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-10 rounded-3xl bg-earth-light/10 border border-earth/5 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-earth-light/50 flex items-center justify-center text-earth mb-8 group-hover:bg-earth group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-earth-dark mb-4">{service.title}</h4>
                <p className="text-earth-dark/60 leading-relaxed">{service.description}</p>
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
              <h3 className="text-earth-accent font-bold tracking-widest uppercase text-xs mb-3">Portfolio</h3>
              <h2 className="text-3xl md:text-4xl font-extrabold">Dự án tiêu biểu</h2>
            </div>
            <Link href="/du-an" className="mt-6 md:mt-0 text-earth-light hover:text-white transition-colors flex items-center group font-medium border-b border-earth-light/30 pb-1">
              Xem tất cả dự án <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project: any) => (
              <Link href={`/du-an/${project.slug}`} key={project._id} className="group block">
                <div className="w-full h-[300px] bg-white/5 rounded-[2rem] mb-6 flex items-center justify-center overflow-hidden border border-white/10 relative shadow-lg">
                  {project.imageUrl ? (
                    <Image 
                        src={project.imageUrl} 
                        alt={project.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-90 group-hover:opacity-100" 
                    />
                  ) : (
                    <span className="text-white/30 uppercase text-xs font-bold tracking-widest">Chưa có ảnh</span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="px-2">
                  <p className="text-earth-accent text-[11px] mb-2 uppercase tracking-widest font-bold">{project.category}</p>
                  <h4 className="text-xl font-bold group-hover:text-earth-light transition-colors leading-snug">{project.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Họa tiết nền ẩn hiện */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-earth-light/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-earth-accent font-extrabold tracking-widest uppercase text-xs mb-3">Dịch vụ phần mềm</h3>
            <h2 className="text-3xl md:text-5xl font-extrabold text-earth-dark tracking-tight">Sản phẩm nổi bật</h2>
            <div className="w-12 h-1 bg-earth mt-6 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {products.map((product: any) => (
              <Link 
                href={`/san-pham/${product.slug}`} 
                key={product._id} 
                className="bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-earth/5 flex flex-col h-full group hover:-translate-y-2 overflow-hidden"
              >
                {/* Khung ảnh sản phẩm */}
                <div className="w-full h-52 bg-gradient-to-br from-earth-light/20 to-transparent relative flex items-center justify-center p-6 overflow-hidden">
                  {/* Tag Bán chạy / New */}
                  {product.tag && (
                    <span className="absolute top-4 right-4 bg-earth text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-20 shadow-md">
                      {product.tag}
                    </span>
                  )}
                  
                  {/* Vòng tròn trang trí mờ phía sau */}
                  <div className="absolute w-32 h-32 bg-white/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                  {product.imageUrl ? (
                    <Image 
                      src={product.imageUrl} 
                      alt={product.name} 
                      fill 
                      className="object-contain p-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-in-out drop-shadow-xl z-10 rounded-2xl" 
                    />
                  ) : (
                    <svg className="w-12 h-12 text-earth/20 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  )}
                </div>
                
                {/* Nội dung text */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-earth-accent text-[10px] font-bold mb-2 uppercase tracking-widest">{product.type}</p>
                  <h4 className="text-lg font-bold text-earth-dark mb-6 line-clamp-2 leading-snug flex-grow group-hover:text-earth transition-colors">
                    {product.name}
                  </h4>
                  
                  <div className="pt-5 border-t border-earth/5 flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-earth-dark/40 uppercase font-bold tracking-widest mb-1">Chỉ từ</span>
                      <p className="text-xl font-extrabold text-earth-dark group-hover:text-earth transition-colors">{product.price}</p>
                    </div>
                    <div className="w-11 h-11 bg-earth-light/30 text-earth rounded-xl flex items-center justify-center group-hover:bg-earth group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link href="/san-pham" className="inline-block px-12 py-4 bg-white text-earth-dark border-2 border-earth/20 rounded-full hover:border-earth hover:text-earth hover:shadow-lg transition-all duration-300 font-bold">
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>
      
      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-earth relative overflow-hidden">
        {/* Họa tiết trang trí */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl -z-0 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Sẵn sàng nâng cấp trải nghiệm số?</h2>
          <p className="text-earth-light/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Dù đó là thiết kế web, tối ưu chiến dịch marketing, hay cần hỗ trợ các phần mềm tại C8 Mậu Thân, mình luôn sẵn sàng đồng hành.
          </p>
          <Link href="/lien-he" className="inline-block bg-white text-earth-dark px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
            Nhận tư vấn ngay
          </Link>
        </div>
      </section>

    </main>
  );
}