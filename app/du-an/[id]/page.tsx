import Link from 'next/link';

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  
  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. ĐIỀU HƯỚNG & HEADER DỰ ÁN */}
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <div className="flex justify-center items-center text-sm text-earth-dark/60 mb-6">
          <Link href="/" className="hover:text-earth-accent transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/du-an" className="hover:text-earth-accent transition-colors">Dự án</Link>
          <span className="mx-2">/</span>
          <span className="text-earth-dark font-medium">Chi tiết</span>
        </div>
        
        <p className="text-earth-accent font-bold tracking-wider uppercase text-sm mb-4">Branding & Marketing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-8 leading-tight">
          Xây dựng nhận diện thương hiệu thời trang "Ngon Quá Đi"
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-earth-dark/80 mb-12">
          <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
            <span className="font-semibold text-earth-dark mb-1">Khách hàng</span>
            <span>Dự án nội bộ</span>
          </div>
          <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
            <span className="font-semibold text-earth-dark mb-1">Thời gian</span>
            <span>Đầu năm 2026</span>
          </div>
          <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
            <span className="font-semibold text-earth-dark mb-1">Vai trò</span>
            <span>Chiến lược, Thiết kế, Nhiếp ảnh</span>
          </div>
        </div>
      </div>

      {/* 2. ẢNH COVER LỚN */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="w-full h-80 md:h-[500px] bg-earth-light/50 rounded-3xl overflow-hidden shadow-lg border border-earth/10 flex items-center justify-center relative group">
          <span className="text-earth-dark/40 font-medium text-lg z-10">[Ảnh Cover: Logo Ngon Quá Đi / Áo thun mẫu]</span>
          <div className="absolute inset-0 bg-earth/5 group-hover:bg-earth/10 transition-colors duration-500"></div>
        </div>
      </section>

      {/* 3. NỘI DUNG CASE STUDY (Câu chuyện dự án) */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg prose-earth max-w-none text-earth-dark/80 leading-relaxed space-y-12">
          
          {/* Tổng quan */}
          <div>
            <h2 className="text-2xl font-bold text-earth-dark mb-4 pb-2 border-b border-earth/20">1. Tổng quan dự án</h2>
            <p>
              "Ngon Quá Đi" không chỉ là một thương hiệu áo thun thông thường, mà là một dự án kết hợp giữa sự phá cách trong ngôn từ giới trẻ và chất lượng sản phẩm. Mục tiêu là tạo ra một bộ nhận diện thương hiệu vừa gần gũi, vừa nổi bật để sẵn sàng cho các chiến dịch ra mắt (launching) trên nền tảng mạng xã hội và cửa hàng trực tiếp.
            </p>
          </div>

          {/* Thử thách */}
          <div className="bg-white p-8 rounded-2xl border border-earth/10 shadow-sm">
            <h2 className="text-2xl font-bold text-earth-dark mb-4">2. Thử thách đặt ra</h2>
            <p className="mb-4">
              Thị trường áo thun (Local Brand) hiện tại đang rất bão hòa. Bài toán khó nhất là:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Thiết kế logo và hệ thống banner phải mang đậm dấu ấn cá nhân, tránh bị lẫn lộn với các phong cách Typography đang tràn lan.</li>
              <li>Chất lượng hình ảnh sản phẩm phải chân thực nhưng vẫn phải có tính nghệ thuật (concept) để thu hút ánh nhìn ngay từ giây đầu tiên lướt feed.</li>
              <li>Đồng bộ hóa trải nghiệm từ website mua hàng đến bao bì sản phẩm.</li>
            </ul>
          </div>

          {/* Giải pháp thực thi */}
          <div>
            <h2 className="text-2xl font-bold text-earth-dark mb-4 pb-2 border-b border-earth/20">3. Giải pháp & Triển khai</h2>
            <p className="mb-6">
              Với lợi thế đa nhiệm, mình đã tự tay thực hiện dự án này từ khâu lập kế hoạch kinh doanh đến khi ra được ấn phẩm cuối cùng. 
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-earth-light/20 p-6 rounded-xl border border-earth/10">
                <h4 className="font-bold text-earth-dark mb-2">Visual & Branding</h4>
                <p className="text-sm">Lên concept logo với font chữ bo tròn, thân thiện. Thiết kế toàn bộ banner mạng xã hội theo tone màu nổi bật, kích thích sự tò mò.</p>
              </div>
              <div className="bg-earth-light/20 p-6 rounded-xl border border-earth/10">
                <h4 className="font-bold text-earth-dark mb-2">Photography</h4>
                <p className="text-sm">Sử dụng máy ảnh Canon 750D để thực hiện bộ ảnh lookbook tĩnh. Setup ánh sáng studio cẩn thận để đánh bật chất liệu vải áo thun, sau đó retouch tỉ mỉ để giữ đúng màu sắc thực tế.</p>
              </div>
            </div>
          </div>

          {/* Gallery hình ảnh dự án */}
          <div className="my-16">
            <h3 className="text-xl font-bold text-earth-dark mb-6 text-center">Một số hình ảnh thiết kế</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-[4/3] bg-earth-light/40 rounded-xl flex items-center justify-center border border-earth/10">[Bản thảo Logo]</div>
              <div className="aspect-[4/3] bg-earth-light/40 rounded-xl flex items-center justify-center border border-earth/10">[Banner Website]</div>
              <div className="aspect-[4/3] bg-earth-light/40 rounded-xl flex items-center justify-center border border-earth/10">[Ảnh Lookbook 1]</div>
              <div className="aspect-[4/3] bg-earth-light/40 rounded-xl flex items-center justify-center border border-earth/10">[Ảnh Lookbook 2]</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION CHUYỂN TIẾP */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="p-12 bg-earth-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <h2 className="text-3xl font-bold mb-4 relative z-10">Bạn muốn có một dự án tương tự?</h2>
          <p className="text-earth-light/80 mb-8 max-w-lg mx-auto relative z-10">
            Hãy để mình giúp bạn xây dựng bộ nhận diện thương hiệu hoặc lập trình một website chuyên nghiệp, thu hút từ ánh nhìn đầu tiên.
          </p>
          <Link href="/lien-he" className="inline-block px-8 py-4 bg-white text-earth-dark font-bold rounded-full hover:bg-earth-light hover:scale-105 transition-all duration-300 shadow-lg relative z-10">
            Trao đổi ý tưởng ngay
          </Link>
        </div>
      </section>

    </main>
  );
}