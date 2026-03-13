import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';

// Hàm tự động lấy 3 dự án mới nhất từ Sanity để làm "Bảo chứng niềm tin"
async function getRecentProjects() {
  const query = `*[_type == "project"][0...3] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    "imageUrl": mainImage.asset->url
  }`;
  return client.fetch(query);
}

// KHO DỮ LIỆU ĐƯỢC NÂNG CẤP (Thêm Quy trình & FAQ)
const servicesData: Record<string, any> = {
  'thiet-ke-website': {
    title: 'Thiết kế Website',
    subtitle: 'Nền tảng số hiện đại',
    hero: 'Trải nghiệm mượt mà, tốc độ tối đa.',
    description: 'Mình không chỉ tạo ra một trang web đẹp, mà còn xây dựng một cỗ máy bán hàng và nhận diện thương hiệu với công nghệ Next.js mới nhất. Tối ưu UI/UX để giữ chân khách hàng ngay từ giây đầu tiên.',
    features: [
      { title: 'Công nghệ lõi', desc: 'Sử dụng Next.js & React - chuẩn công nghệ của các tập đoàn lớn.' },
      { title: 'Tốc độ < 1s', desc: 'Tối ưu hình ảnh và code để website load nhanh như chớp.' },
      { title: 'Quản trị dễ dàng', desc: 'Tích hợp Sanity CMS giúp bạn tự đổi nội dung bằng điện thoại.' },
      { title: 'Responsive 100%', desc: 'Hiển thị hoàn hảo trên cả máy tính, tablet và điện thoại.' }
    ],
    process: [
      { step: '01', name: 'Khám phá & Tư vấn', detail: 'Tìm hiểu sâu về mô hình kinh doanh và chân dung khách hàng của bạn.' },
      { step: '02', name: 'Phác thảo UI/UX', detail: 'Thiết kế giao diện trực quan, tối ưu hành trình người dùng trên Figma.' },
      { step: '03', name: 'Lập trình & Tích hợp', detail: 'Viết code frontend, backend và kết nối hệ thống quản trị nội dung.' },
      { step: '04', name: 'Kiểm thử & Bàn giao', detail: 'Test lỗi kỹ càng, hướng dẫn sử dụng và đưa website lên mạng (Live).' }
    ],
    faqs: [
      { q: 'Thời gian hoàn thành một website là bao lâu?', a: 'Thông thường từ 2 đến 4 tuần tùy thuộc vào độ phức tạp của giao diện và các tính năng yêu cầu.' },
      { q: 'Mình có thể tự thay đổi nội dung sau này không?', a: 'Hoàn toàn được! Hệ thống Sanity CMS mình tích hợp cho phép bạn sửa chữ, thay ảnh dễ như dùng Facebook.' }
    ],
    icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  },
  'marketing-seo': {
    title: 'Marketing & SEO',
    subtitle: 'Chiến lược tăng trưởng',
    hero: 'Phủ sóng thương hiệu, tăng tỷ lệ chuyển đổi.',
    description: 'Có web xịn nhưng không ai biết tới thì cũng vô nghĩa. Mình kết hợp tư duy hệ thống vào việc phân tích từ khóa, xây dựng nội dung đến tối ưu hóa On-page/Off-page. Giúp doanh nghiệp của bạn xuất hiện đúng lúc khách hàng cần nhất.',
    features: [
      { title: 'SEO Tổng thể', desc: 'Đưa từ khóa lên Top Google một cách bền vững, an toàn.' },
      { title: 'Tối ưu On-page', desc: 'Cấu trúc lại website thân thiện tuyệt đối với bot tìm kiếm.' },
      { title: 'Content Marketing', desc: 'Xây dựng tuyến bài viết chạm đúng "nỗi đau" của khách hàng.' },
      { title: 'Local SEO', desc: 'Phủ sóng bản đồ Google Maps để "bá chủ" khu vực kinh doanh.' }
    ],
    process: [
      { step: '01', name: 'Audit & Phân tích', detail: 'Khám bệnh toàn diện website và phân tích đối thủ cạnh tranh.' },
      { step: '02', name: 'Lập chiến lược', detail: 'Nghiên cứu bộ từ khóa vàng và lên kế hoạch content chi tiết.' },
      { step: '03', name: 'Triển khai On/Off-page', detail: 'Tối ưu kỹ thuật web, viết bài chuẩn SEO và xây dựng backlink.' },
      { step: '04', name: 'Đo lường & Tối ưu', detail: 'Theo dõi thứ hạng hàng tháng và tinh chỉnh chiến lược kịp thời.' }
    ],
    faqs: [
      { q: 'Bao lâu thì từ khóa mới lên trang 1 Google?', a: 'SEO là một quá trình bền vững. Thường mất khoảng 3 - 6 tháng để thấy rõ sự biến chuyển rõ rệt của thứ hạng và traffic.' },
      { q: 'Bạn có nhận chạy quảng cáo Ads luôn không?', a: 'Mình tập trung mạnh nhất vào tối ưu SEO tự nhiên (Organic Traffic) để mang lại giá trị lâu dài, nhưng vẫn có thể setup các chiến dịch Ads cơ bản nếu kết hợp.' }
    ],
    icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
  },
  'nhiep-anh-retouch': {
    title: 'Nhiếp ảnh & Retouch',
    subtitle: 'Góc nhìn nghệ thuật',
    hero: 'Bắt trọn khoảnh khắc, tôn vinh sản phẩm.',
    description: 'Hình ảnh là ngôn ngữ giao tiếp mạnh mẽ nhất. Với thiết bị tiêu chuẩn chuyên nghiệp như Canon Rp cùng kỹ năng hậu kỳ màu sắc tỉ mỉ, mình mang đến những ấn phẩm thị giác không chỉ đẹp mà còn có hồn.',
    features: [
      { title: 'Chụp ảnh Sản phẩm', desc: 'Setup ánh sáng chuẩn chỉ để tôn lên góc cạnh của sản phẩm.' },
      { title: 'Chân dung cá nhân', desc: 'Bắt trọn thần thái và phong cách riêng của từng cá nhân.' },
      { title: 'Retouch Chuyên nghiệp', desc: 'Xử lý da, ánh sáng và màu sắc qua Lightroom/Photoshop.' },
      { title: 'Concept Sáng tạo', desc: 'Lên ý tưởng bối cảnh phù hợp với định vị của thương hiệu.' }
    ],
    process: [
      { step: '01', name: 'Moodboard & Ý tưởng', detail: 'Thống nhất phong cách, màu sắc và thông điệp cần truyền tải.' },
      { step: '02', name: 'Chuẩn bị (Pre-production)', detail: 'Chuẩn bị thiết bị, ánh sáng, đạo cụ và thống nhất bối cảnh.' },
      { step: '03', name: 'Thực hiện Shooting', detail: 'Tiến hành bấm máy, kết hợp điều chỉnh ánh sáng và góc chụp thực tế.' },
      { step: '04', name: 'Retouch & Bàn giao', detail: 'Hậu kỳ kỹ lưỡng (Màu sắc, da, chi tiết lỗi) và xuất file chất lượng cao.' }
    ],
    faqs: [
      { q: 'Bạn có hỗ trợ chụp ảnh tại cửa hàng/studio của mình không?', a: 'Có chứ! Tùy thuộc vào yêu cầu dự án, mình có thể setup thiết bị và chụp trực tiếp tại địa điểm của bạn.' },
      { q: 'Sau khi chụp bao lâu thì nhận được ảnh?', a: 'Bạn sẽ nhận được ảnh preview trong vòng 24h để chọn lọc. Ảnh retouch hoàn thiện sẽ được gửi lại trong 3-5 ngày làm việc.' }
    ],
    icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  
  // Gọi dữ liệu dự án từ Sanity
  const recentProjects = await getRecentProjects();

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[#FAF9F6]">
      
      {/* 1. ĐIỀU HƯỚNG BREADCRUMB */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="flex justify-center items-center text-sm text-earth-dark/50 font-medium">
          <Link href="/" className="hover:text-earth transition-colors">Trang chủ</Link>
          <span className="mx-3 text-earth-dark/30">/</span>
          <span className="text-earth-dark">Dịch vụ</span>
          <span className="mx-3 text-earth-dark/30">/</span>
          <span className="text-earth-dark truncate font-bold">{service.title}</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-earth/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="w-24 h-24 bg-earth-light/40 text-earth rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-lg rotate-3">
          {service.icon}
        </div>
        <p className="text-earth-accent font-extrabold tracking-widest uppercase text-xs mb-4">{service.subtitle}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold text-earth-dark leading-tight mb-8 tracking-tight">
          {service.hero}
        </h1>
        <p className="text-lg md:text-xl text-earth-dark/70 leading-relaxed max-w-3xl mx-auto">
          {service.description}
        </p>
      </section>

      {/* 3. QUY TRÌNH LÀM VIỆC (MỚI) */}
      <section className="py-24 bg-white border-y border-earth/5">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-earth-dark">Quy trình thực hiện</h2>
            <div className="w-16 h-1 bg-earth mt-6 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((p: any, index: number) => (
              <div key={index} className="relative group">
                <div className="text-5xl font-extrabold text-earth-light/30 absolute -top-6 -left-2 z-0 group-hover:-translate-y-2 transition-transform duration-300">{p.step}</div>
                <div className="relative z-10 p-8 bg-[#FAF9F6] rounded-3xl border border-earth/5 hover:shadow-xl hover:border-earth/20 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-earth-dark mb-4">{p.name}</h3>
                  <p className="text-earth-dark/60 leading-relaxed">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TÍNH NĂNG NỔI BẬT */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="bg-earth-dark text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-0"></div>
          
          <h2 className="text-3xl font-extrabold mb-12 text-center relative z-10">Những gì bạn nhận được</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
            {service.features.map((feature: any, index: number) => (
              <div key={index} className="flex items-start group">
                <div className="w-12 h-12 bg-white/10 text-earth-light rounded-2xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-earth group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-earth-light/60 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CÂU HỎI THƯỜNG GẶP (MỚI) */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-earth-dark mb-10 text-center">Câu hỏi thường gặp</h2>
        <div className="space-y-6">
          {service.faqs.map((faq: any, index: number) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-earth/5">
              <h4 className="text-lg font-bold text-earth-dark mb-3 flex items-start">
                <span className="text-earth mr-3">Q:</span> {faq.q}
              </h4>
              <p className="text-earth-dark/70 pl-6 border-l-2 border-earth/20 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DỰ ÁN LIÊN QUAN (LẤY TỪ SANITY) */}
      {recentProjects && recentProjects.length > 0 && (
        <section className="py-24 bg-white border-t border-earth/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h3 className="text-earth-accent font-bold tracking-widest uppercase text-xs mb-3">Portfolio</h3>
                <h2 className="text-3xl font-extrabold text-earth-dark">Dự án mới nhất</h2>
              </div>
              <Link href="/du-an" className="text-earth hover:text-earth-dark font-medium border-b border-earth hover:border-earth-dark pb-1 transition-colors hidden md:block">
                Xem tất cả
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentProjects.map((project: any) => (
                <Link href={`/du-an/${project.slug}`} key={project._id} className="group block">
                  <div className="w-full h-64 bg-earth-light/20 rounded-3xl mb-4 flex items-center justify-center overflow-hidden border border-earth/5 relative shadow-md">
                    {project.imageUrl ? (
                      <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    ) : (
                      <span className="text-earth/40 uppercase text-xs font-bold tracking-widest">Chưa có ảnh</span>
                    )}
                  </div>
                  <p className="text-earth-accent text-[11px] mb-1 uppercase tracking-widest font-bold px-2">{project.category}</p>
                  <h4 className="text-lg font-bold text-earth-dark group-hover:text-earth transition-colors px-2">{project.title}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. CALL TO ACTION */}
      <section className="py-24 bg-earth-light/20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-earth-dark mb-6">Bạn đã sẵn sàng nâng cấp dự án?</h2>
          <p className="text-earth-dark/70 mb-10 text-lg">
            Hãy nhắn tin trao đổi trực tiếp để cùng nhau tìm ra giải pháp tối ưu nhất cho doanh nghiệp của bạn.
          </p>
          <Link 
            href={`/lien-he?dv=${resolvedParams.slug}`} 
            className="inline-flex items-center justify-center px-10 py-5 bg-earth text-white font-bold rounded-full hover:bg-earth-dark hover:-translate-y-1 shadow-xl transition-all duration-300"
          >
            Nhận tư vấn ngay
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </section>

    </main>
  );
}