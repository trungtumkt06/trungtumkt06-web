import Link from 'next/link';

// Trong thực tế, bạn sẽ dùng params.id để gọi API lấy dữ liệu. 
// Ở đây mình tạo giao diện mẫu cho sản phẩm "Canva Pro Edu"
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  
  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. ĐIỀU HƯỚNG (BREADCRUMBS) */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center text-sm text-earth-dark/60">
          <Link href="/" className="hover:text-earth-accent transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="hover:text-earth-accent transition-colors">Cửa hàng số</Link>
          <span className="mx-2">/</span>
          <span className="text-earth-dark font-medium">Tài khoản Canva Pro (Edu) - Vĩnh viễn</span>
        </div>
      </div>

      {/* 2. THÔNG TIN CHÍNH CỦA SẢN PHẨM */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-earth/10 p-6 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Cột Trái: Khu vực hiển thị ảnh/Icon sản phẩm số */}
          <div className="w-full aspect-square bg-earth-light/40 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-earth/5">
            <span className="absolute top-4 left-4 bg-earth-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              Bảo hành 1-1
            </span>
            {/* Icon minh họa phần mềm lớn */}
            <div className="w-32 h-32 bg-white rounded-3xl shadow-md flex items-center justify-center text-earth mb-6">
               <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>
            <p className="text-earth-dark/40 font-medium">[Hình ảnh minh họa Sản phẩm]</p>
          </div>

          {/* Cột Phải: Giá bán & Mua hàng */}
          <div className="flex flex-col h-full justify-center">
            <p className="text-earth-accent text-sm font-bold uppercase tracking-wider mb-3">Công cụ Thiết kế</p>
            <h1 className="text-3xl md:text-4xl font-bold text-earth-dark mb-4 leading-tight">
              Tài khoản Canva Pro (Edu) - Gói Vĩnh Viễn
            </h1>
            
            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-earth-dark">199.000đ</span>
              <span className="text-lg text-earth-dark/40 line-through mb-1">300.000đ</span>
            </div>

            <p className="text-earth-dark/80 mb-8 leading-relaxed">
              Nâng cấp trực tiếp trên email cá nhân của bạn. Mở khóa toàn bộ kho ảnh, video, font chữ premium và các tính năng AI mới nhất của Canva. Giải pháp tiết kiệm hoàn hảo cho sinh viên và người làm nội dung.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-earth-dark/90 font-medium">
                <svg className="w-6 h-6 text-earth mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Nâng cấp chính chủ email đang dùng
              </li>
              <li className="flex items-center text-earth-dark/90 font-medium">
                <svg className="w-6 h-6 text-earth mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Không lo mất thiết kế cũ
              </li>
              <li className="flex items-center text-earth-dark/90 font-medium">
                <svg className="w-6 h-6 text-earth mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Bảo hành trọn thời gian sử dụng
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-earth text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-dark shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                Mua Ngay
              </button>
              <button className="flex-1 border-2 border-earth text-earth-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-light transition-all duration-300 text-center">
                Tư Vấn Zalo
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHI TIẾT SẢN PHẨM & CHÍNH SÁCH */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Nội dung chi tiết (Chiếm 2 cột) */}
        <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-earth/10">
          <h3 className="text-2xl font-bold text-earth-dark mb-6">Mô tả chi tiết</h3>
          <div className="prose prose-earth max-w-none text-earth-dark/80 leading-relaxed space-y-6">
            <p>
              Canva Pro (Edu) là giải pháp thiết kế đồ họa trực tuyến hàng đầu, giúp bạn tạo ra các ấn phẩm truyền thông, bài đăng mạng xã hội, thuyết trình và video một cách chuyên nghiệp chỉ trong vài phút.
            </p>
            <h4 className="text-xl font-bold text-earth-dark mt-8 mb-4">Quy trình giao hàng & Kích hoạt:</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Bạn thanh toán và điền Email đang sử dụng Canva.</li>
              <li>Hệ thống gửi thư mời nâng cấp tự động vào Email của bạn trong vòng 5-10 phút.</li>
              <li>Bạn bấm vào link trong thư mời, tài khoản tự động chuyển sang trạng thái Pro (Edu) với đầy đủ tính năng.</li>
            </ol>
            <p className="mt-6 p-4 bg-earth-light/50 rounded-lg border-l-4 border-earth-accent text-sm">
              <strong>Lưu ý:</strong> Vui lòng đảm bảo bạn điền đúng địa chỉ email. Trong trường hợp cần hỗ trợ kích hoạt, bạn có thể liên hệ trực tiếp qua số điện thoại hoặc ghé cửa hàng C8 Mậu Thân.
            </p>
          </div>
        </div>

        {/* Cột thông tin phụ (Bảo hành, Hỗ trợ) */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth/10">
             <h4 className="font-bold text-earth-dark mb-4 flex items-center">
               <svg className="w-5 h-5 mr-2 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               Chính sách Bảo hành
             </h4>
             <p className="text-sm text-earth-dark/70 leading-relaxed mb-4">
               Cam kết 1 đổi 1 hoặc hoàn tiền 100% nếu tài khoản bị lỗi không thể khắc phục trong thời gian bảo hành.
             </p>
          </div>

          <div className="bg-earth-dark text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-earth/20 rounded-full blur-xl -mr-10 -mt-10"></div>
             <h4 className="font-bold text-lg mb-2 relative z-10">Cần hỗ trợ trực tiếp?</h4>
             <p className="text-sm text-earth-light/80 mb-4 relative z-10">
               Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ bạn thiết lập và sử dụng phần mềm hiệu quả nhất.
             </p>
             <Link href="/lien-he" className="inline-block px-6 py-2 bg-white text-earth-dark text-sm font-bold rounded-lg hover:bg-earth-light transition-colors relative z-10">
               Liên hệ ngay
             </Link>
          </div>
        </div>

      </section>
    </main>
  );
}