import Link from 'next/link';

export default function ProductsPage() {
  
  // Dữ liệu mẫu cho các sản phẩm số
  const products = [
    { 
      id: 1,
      name: "Tài khoản Canva Pro (Edu) - 1 Năm", 
      price: "99.000đ", 
      originalPrice: "150.000đ",
      category: "Thiết kế",
      tag: "Bán chạy", 
      type: "Giao tự động",
      features: ["Nâng cấp email chính chủ", "Mở khóa mọi tính năng Pro", "Bảo hành trọn thời gian"]
    },
    { 
      id: 2,
      name: "Tài khoản Canva Pro (Edu) - Vĩnh viễn", 
      price: "199.000đ", 
      originalPrice: "300.000đ",
      category: "Thiết kế",
      tag: "Khuyên dùng", 
      type: "Bảo hành 1-1",
      features: ["Sử dụng vĩnh viễn", "Hỗ trợ thiết lập ban đầu", "Hoàn tiền nếu lỗi"]
    },
    { 
      id: 3,
      name: "Tài khoản ChatGPT Plus - 1 Tháng", 
      price: "350.000đ", 
      originalPrice: "499.000đ",
      category: "Công cụ AI",
      tag: "Hot", 
      type: "Dùng chung / Riêng",
      features: ["Truy cập GPT-4 & DALL-E 3", "Tốc độ phản hồi ưu tiên", "Bảo mật thông tin"]
    },
    { 
      id: 4,
      name: "Phần mềm Quản lý Bán hàng đa kênh", 
      price: "Liên hệ", 
      originalPrice: "",
      category: "Marketing & Quản lý",
      tag: "Doanh nghiệp", 
      type: "Cài đặt tận nơi",
      features: ["Đồng bộ kho hàng", "Báo cáo doanh thu chi tiết", "Hỗ trợ setup tại C8 Mậu Thân"]
    },
  ];

  const categories = ["Tất cả", "Thiết kế", "Công cụ AI", "Marketing & Quản lý"];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/20">
      
      {/* 1. HERO SECTION CỦA TRANG SẢN PHẨM */}
      <section className="py-16 bg-white border-b border-earth/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Cửa hàng <span className="text-earth-accent">Sản phẩm số</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Cung cấp các giải pháp phần mềm, tài khoản thiết kế và công cụ marketing với chi phí tối ưu, bảo hành uy tín và hỗ trợ kỹ thuật tận tâm.
          </p>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat, index) => (
              <button 
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-earth text-white shadow-md' 
                    : 'bg-white text-earth-dark border border-earth/20 hover:border-earth hover:text-earth'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LƯỚI SẢN PHẨM */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-earth/10 flex flex-col overflow-hidden group">
                
                {/* Phần Header Card */}
                <div className="p-6 bg-earth-light/30 relative border-b border-earth/5">
                  <span className="absolute top-4 right-4 bg-earth-accent text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider z-10 shadow-sm">
                    {product.tag}
                  </span>
                  
                  {/* Icon tượng trưng (vì là sp số nên dùng icon sẽ đẹp hơn ảnh vật lý) */}
                  <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-earth mb-4 group-hover:scale-110 transition-transform duration-300">
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                     </svg>
                  </div>
                  
                  <p className="text-earth-accent text-xs font-bold mb-2 uppercase tracking-wide">{product.type}</p>
                  <h3 className="text-xl font-bold text-earth-dark line-clamp-2 min-h-[56px]">{product.name}</h3>
                </div>

                {/* Phần Chi tiết & Giá */}
                <div className="p-6 flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-earth-dark/80">
                        <svg className="w-5 h-5 text-earth mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-earth/10 flex items-end justify-between mt-auto">
                    <div>
                      {product.originalPrice && (
                        <p className="text-xs text-earth-dark/50 line-through mb-1">{product.originalPrice}</p>
                      )}
                      <p className="text-2xl font-bold text-earth-dark">{product.price}</p>
                    </div>
                    <button className="px-5 py-2.5 bg-earth text-white rounded-lg hover:bg-earth-dark transition-colors font-medium text-sm shadow-md hover:shadow-lg">
                      Mua ngay
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAM KẾT / BẢO HÀNH */}
      <section className="py-16 mt-12 bg-earth-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Bảo hành uy tín</h4>
            <p className="text-earth-light/70 text-sm">Cam kết 1 đổi 1 hoặc hỗ trợ kỹ thuật xuyên suốt thời gian sử dụng tài khoản/phần mềm.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Kích hoạt siêu tốc</h4>
            <p className="text-earth-light/70 text-sm">Hệ thống xử lý và bàn giao tài khoản nhanh chóng ngay sau khi xác nhận thanh toán.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-earth-accent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Hỗ trợ trọn đời</h4>
            <p className="text-earth-light/70 text-sm">Luôn sẵn sàng tư vấn giải pháp tối ưu nhất cho cá nhân và doanh nghiệp.</p>
          </div>
        </div>
      </section>

    </main>
  );
}