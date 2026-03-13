import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

// Lấy ảnh tác giả từ Sanity để hiển thị tự động
async function getAuthorInfo() {
  const query = `*[_type == "author"][0] {
    "imageUrl": aboutImage.asset->url
  }`;
  return client.fetch(query);
}

export default async function AboutPage() {
  const author = await getAuthorInfo();
  // Dùng ảnh từ Sanity, nếu chưa có thì dùng ảnh mẫu
  const myImageUrl = author?.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[#FAF9F6]">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-earth/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-earth-light/20 rounded-full blur-2xl -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center z-10 relative">
          <div className="inline-block mb-6 px-4 py-1.5 bg-earth/10 text-earth font-bold text-xs uppercase tracking-widest rounded-full">
            Về tác giả
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-earth-dark mb-8 tracking-tight">
            Câu chuyện của <span className="text-earth">Trung Tự.</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-dark/70 leading-relaxed max-w-3xl mx-auto">
            Hơn cả những dòng code hay các chiến dịch marketing, mình tin rằng mọi sản phẩm công nghệ và truyền thông đều phải bắt nguồn từ sự thấu hiểu con người.
          </p>
        </div>
      </section>

      {/* 2. NỘI DUNG CHÍNH - CÂU CHUYỆN & ĐAM MÊ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Cột hình ảnh (Tự động lấy từ Sanity) */}
          <div className="relative group">
            <div className="w-full aspect-[4/5] bg-earth-light/20 rounded-[2.5rem] overflow-hidden relative shadow-2xl border-8 border-white">
              <Image 
                src={myImageUrl}
                alt="Trung Tự Mkt"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </div>
            {/* Khối trang trí */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-earth-accent/20 rounded-full blur-3xl -z-10 group-hover:bg-earth-accent/30 transition-colors duration-500"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-earth/20 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Cột nội dung */}
          <div className="space-y-10 text-earth-dark/80 leading-relaxed text-lg">
            <div>
              <h2 className="text-3xl font-extrabold text-earth-dark mb-6 tracking-tight flex items-center">
                <svg className="w-8 h-8 mr-3 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Hành trình chuyên môn
              </h2>
              <p className="mb-4">
                Xuất phát điểm với sự tò mò về thế giới số, mình đã chọn theo đuổi sự giao thoa giữa <strong>Lập trình Web</strong> và <strong>Marketing chiến lược</strong>. Mình không chỉ muốn viết ra những website chạy mượt mà, mà còn muốn chúng thực sự &quot;biết nói&quot; và mang lại chuyển đổi kinh doanh.
              </p>
              <p>
                Việc tự tay xây dựng các dự án cá nhân và quản lý cửa hàng trực tuyến giúp mình có góc nhìn thực tế nhất về những gì một doanh nghiệp thực sự cần ở nền tảng online.
              </p>
            </div>

            <div className="pt-8 border-t border-earth/10">
              <h2 className="text-3xl font-extrabold text-earth-dark mb-6 tracking-tight flex items-center">
                <svg className="w-8 h-8 mr-3 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Cuộc sống ngoài màn hình
              </h2>
              <p className="mb-4">
                Khi tạm rời xa bàn phím, mình là một người ưa xê dịch và rèn luyện. Bạn sẽ thường thấy mình rong ruổi giải tỏa căng thẳng trên chiếc Yamaha MT-03, hoặc đang say sưa ghi lại những khoảnh khắc cuộc sống, chỉnh sửa hậu kỳ tỉ mỉ qua lăng kính của chiếc Canon Rp.
              </p>
              <p>
                Đặc biệt, việc gắn bó và tập luyện tại Câu lạc bộ Karate Phú Yên đã rèn luyện cho mình một ý chí kỷ luật thép, sự điềm tĩnh và khả năng tập trung cao độ – những tố chất cực kỳ quan trọng giúp mình giải quyết các bài toán khó trong lập trình và kinh doanh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES (GIÁ TRỊ CỐT LÕI) */}
      <section className="py-24 mt-10 bg-earth-dark text-white relative overflow-hidden">
        {/* Họa tiết nền */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h3 className="text-earth-accent font-bold tracking-widest uppercase text-xs mb-3">Triết lý làm việc</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold">Giá trị cốt lõi</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-16 h-16 bg-earth text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-extrabold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tối ưu trải nghiệm</h3>
              <p className="text-earth-light/70 leading-relaxed text-lg">Mọi thiết kế và dòng code đều phải hướng tới sự tiện dụng và thoải mái nhất cho người dùng cuối.</p>
            </div>
            
            <div className="p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-16 h-16 bg-earth text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-extrabold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Kỷ luật & Tỉ mỉ</h3>
              <p className="text-earth-light/70 leading-relaxed text-lg">Mang tinh thần của võ thuật vào công việc: luôn đúng hẹn, chính xác trong từng chi tiết và không ngừng hoàn thiện.</p>
            </div>

            <div className="p-10 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm group">
              <div className="w-16 h-16 bg-earth text-white rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                <span className="text-3xl font-extrabold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tư duy hệ thống</h3>
              <p className="text-earth-light/70 leading-relaxed text-lg">Nhìn nhận vấn đề dưới góc độ tổng thể của Marketing để đưa ra giải pháp kỹ thuật mang lại giá trị kinh tế.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-24 bg-white text-center">
         <div className="max-w-3xl mx-auto px-6">
            <div className="w-20 h-20 bg-earth-light/30 text-earth rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
            </div>
            <h2 className="text-4xl font-extrabold text-earth-dark mb-6 tracking-tight">Cùng tạo ra điều tuyệt vời</h2>
            <p className="text-earth-dark/70 mb-10 text-lg leading-relaxed">
              Bạn có chung niềm đam mê về công nghệ, nhiếp ảnh, hay đơn giản là đang tìm kiếm một người đồng hành cho dự án sắp tới? Hãy để lại tin nhắn nhé!
            </p>
            <Link href="/lien-he" className="inline-flex items-center justify-center bg-earth text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-earth-dark hover:scale-105 shadow-xl transition-all duration-300">
              Gửi tin nhắn cho Trung Tự
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
         </div>
      </section>

    </main>
  );
}