import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      
      {/* 1. HERO SECTION CỦA TRANG GIỚI THIỆU */}
      <section className="bg-earth-light/30 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Câu chuyện của <span className="text-earth-accent">Trung Tự.</span>
          </h1>
          <p className="text-lg text-earth-dark/80 leading-relaxed">
            Hơn cả những dòng code hay các chiến dịch marketing, mình tin rằng mọi sản phẩm công nghệ và truyền thông đều phải bắt nguồn từ sự thấu hiểu con người.
          </p>
        </div>
      </section>

      {/* 2. NỘI DUNG CHÍNH - CÂU CHUYỆN & ĐAM MÊ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* Cột hình ảnh */}
          <div className="relative">
            <div className="w-full aspect-[4/5] bg-earth-light/50 rounded-2xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-earth-dark/40 font-medium">
                [Ảnh phong cách sống / Chân dung làm việc]
              </div>
            </div>
            {/* Khối trang trí */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-earth-accent/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-earth/10 rounded-full blur-xl -z-10"></div>
          </div>

          {/* Cột nội dung */}
          <div className="space-y-8 text-earth-dark/90 leading-relaxed">
            <div>
              <h2 className="text-3xl font-bold text-earth-dark mb-4">Hành trình chuyên môn</h2>
              <p className="mb-4">
                Xuất phát điểm với sự tò mò về thế giới số, mình đã chọn theo đuổi sự giao thoa giữa <strong>Lập trình Web</strong> và <strong>Marketing chiến lược</strong>. Mình không chỉ muốn viết ra những website chạy mượt mà, mà còn muốn chúng thực sự "biết nói" và mang lại chuyển đổi kinh doanh.
              </p>
              <p>
                Việc tự tay xây dựng các dự án cá nhân và quản lý cửa hàng (C8 Mậu Thân) giúp mình có góc nhìn thực tế nhất về những gì một doanh nghiệp thực sự cần ở nền tảng online.
              </p>
            </div>

            <div className="pt-6 border-t border-earth/20">
              <h2 className="text-2xl font-bold text-earth-dark mb-4">Cuộc sống ngoài màn hình</h2>
              <p className="mb-4">
                Khi tạm rời xa bàn phím, mình là một người ưa xê dịch và rèn luyện. Bạn sẽ thường thấy mình rong ruổi giải tỏa căng thẳng trên chiếc Yamaha YZF-R15 V3, hoặc đang say sưa ghi lại những khoảnh khắc cuộc sống, chỉnh sửa hậu kỳ tỉ mỉ qua lăng kính của chiếc Canon 750D.
              </p>
              <p>
                Đặc biệt, việc gắn bó và tập luyện tại Câu lạc bộ Karate Phú Yên đã rèn luyện cho mình một ý chí kỷ luật thép, sự điềm tĩnh và khả năng tập trung cao độ – những tố chất cực kỳ quan trọng giúp mình giải quyết các bài toán khó trong lập trình và kinh doanh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CORE VALUES (GIÁ TRỊ CỐT LÕI) */}
      <section className="py-20 bg-earth-dark text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Triết lý làm việc</h2>
            <div className="w-16 h-1 bg-earth-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tối ưu trải nghiệm</h3>
              <p className="text-earth-light/70">Mọi thiết kế và dòng code đều phải hướng tới sự tiện dụng và thoải mái nhất cho người dùng cuối.</p>
            </div>
            
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Kỷ luật & Tỉ mỉ</h3>
              <p className="text-earth-light/70">Mang tinh thần của võ thuật vào công việc: luôn đúng hẹn, chính xác trong từng chi tiết và không ngừng hoàn thiện.</p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-14 h-14 bg-earth rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tư duy hệ thống</h3>
              <p className="text-earth-light/70">Nhìn nhận vấn đề dưới góc độ tổng thể của Marketing để đưa ra giải pháp kỹ thuật mang lại giá trị kinh tế thực sự.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-earth-light/20 text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-earth-dark mb-6">Kết nối với mình</h2>
            <p className="text-earth-dark/80 mb-8">
              Bạn có chung niềm đam mê về công nghệ, nhiếp ảnh, hay đơn giản là đang tìm kiếm một người đồng hành cho dự án sắp tới? Hãy để lại tin nhắn nhé!
            </p>
            <Link href="/lien-he" className="inline-block bg-earth text-white px-8 py-3.5 rounded-full font-medium hover:bg-earth-dark shadow-md transition-all duration-300">
              Gửi tin nhắn cho Trung Tự
            </Link>
         </div>
      </section>

    </main>
  );
}