import Link from 'next/link';

export default function BlogPage() {
  
  // Dữ liệu bài viết mẫu kết hợp các lĩnh vực chuyên môn của bạn
  const posts = [
    {
      id: 1,
      title: "Làm chủ tốc độ đồng bộ đèn Flash (Sync Speed) khi chụp sản phẩm",
      category: "Nhiếp ảnh",
      excerpt: "Kỹ thuật thiết lập thông số chuẩn trên DSLR để bắt trọn chi tiết, tránh hiện tượng sọc đen màn trập khi đánh flash studio.",
      date: "12/03/2026",
      readTime: "5 phút đọc",
      image: "[Ảnh Setup Studio]"
    },
    {
      id: 2,
      title: "Tối ưu SEO cho Next.js App Router: Những điều cần biết",
      category: "Web Development",
      excerpt: "Cách tận dụng sức mạnh của Server-Side Rendering (SSR) và cấu hình Metadata để đưa website lên top tìm kiếm tự nhiên.",
      date: "08/03/2026",
      readTime: "7 phút đọc",
      image: "[Ảnh Code/Giao diện web]"
    },
    {
      id: 3,
      title: "Phễu Marketing cơ bản cho người mới kinh doanh sản phẩm số",
      category: "Marketing",
      excerpt: "Xây dựng hành trình khách hàng từ lúc nhận biết thương hiệu đến khi ra quyết định mua phần mềm và để lại đánh giá tốt.",
      date: "01/03/2026",
      readTime: "6 phút đọc",
      image: "[Ảnh Sơ đồ Phễu]"
    },
    {
      id: 4,
      title: "Vì sao UI/UX tối giản lại giúp tăng tỷ lệ chuyển đổi (CR)?",
      category: "Thiết kế",
      excerpt: "Nghiên cứu về tâm lý học hành vi người dùng: Càng ít nút bấm thừa, khách hàng càng dễ tập trung vào nút 'Mua Ngay'.",
      date: "22/02/2026",
      readTime: "4 phút đọc",
      image: "[Ảnh UI/UX Design]"
    },
    {
      id: 5,
      title: "Kinh nghiệm quản lý Local Business và tối ưu Google Maps",
      category: "Marketing",
      excerpt: "Cách để cửa hàng vật lý của bạn hiển thị nổi bật nhất khi khách hàng tìm kiếm dịch vụ ở khu vực lân cận.",
      date: "15/02/2026",
      readTime: "8 phút đọc",
      image: "[Ảnh Google Maps]"
    },
    {
      id: 6,
      title: "Cách sắp xếp cấu trúc thư mục chuẩn trong dự án Next.js lớn",
      category: "Web Development",
      excerpt: "Chia sẻ pattern tổ chức components, utilities, và API routes để dự án luôn gọn gàng, dễ bảo trì và nâng cấp sau này.",
      date: "05/02/2026",
      readTime: "5 phút đọc",
      image: "[Ảnh Cấu trúc thư mục]"
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. HERO SECTION CỦA BLOG */}
      <section className="py-16 text-center border-b border-earth/10 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-4">Góc chia sẻ</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Bài viết & <span className="text-earth-accent">Tài nguyên</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Nơi mình ghi chép lại những kiến thức thực chiến, kinh nghiệm lập trình, mẹo marketing và những góc nhìn nghệ thuật qua lăng kính nhiếp ảnh.
          </p>
        </div>
      </section>

      {/* 2. KHU VỰC BÀI VIẾT NỔI BẬT (FEATURED POST) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="#" className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-earth/10">
            {/* Ảnh bài viết lớn */}
            <div className="w-full md:w-1/2 h-72 md:h-auto bg-earth-light/50 relative overflow-hidden flex items-center justify-center">
              <span className="text-earth-dark/40 font-medium z-10">[Ảnh Bài Viết Nổi Bật]</span>
              <div className="absolute inset-0 bg-earth/0 group-hover:bg-earth/10 transition-colors duration-300"></div>
            </div>
            {/* Nội dung bài nổi bật */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-earth-accent text-white text-xs font-bold uppercase rounded-full tracking-wider">Mới nhất</span>
                <span className="text-earth-dark/50 text-sm font-medium">Hôm nay</span>
              </div>
              <h3 className="text-3xl font-bold text-earth-dark mb-4 group-hover:text-earth transition-colors leading-tight">
                Xây dựng thương hiệu cá nhân đa nền tảng: Bắt đầu từ đâu?
              </h3>
              <p className="text-earth-dark/70 text-lg mb-8 line-clamp-3">
                Trong thời đại số, việc sở hữu một website portfolio chuyên nghiệp kết hợp cùng chiến lược nội dung trên mạng xã hội là "vũ khí" tối thượng để thu hút khách hàng tiềm năng mà không cần tốn chi phí quảng cáo.
              </p>
              <div className="flex items-center text-earth font-bold group-hover:text-earth-dark transition-colors">
                Đọc bài viết 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 3. LƯỚI BÀI VIẾT BÌNH THƯỜNG */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8 border-b border-earth/10 pb-4">
            <h3 className="text-2xl font-bold text-earth-dark">Tất cả bài viết</h3>
            {/* Bộ lọc nhỏ */}
            <div className="hidden md:flex space-x-4">
              <button className="text-sm font-semibold text-earth-accent">Mới nhất</button>
              <button className="text-sm font-medium text-earth-dark/60 hover:text-earth">Phổ biến</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href="#" key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-earth/10 hover:-translate-y-1">
                {/* Ảnh cover */}
                <div className="h-52 w-full bg-earth-light/30 relative flex items-center justify-center overflow-hidden">
                  <span className="text-earth-dark/30 text-sm font-medium z-10">{post.image}</span>
                  <div className="absolute inset-0 bg-earth/0 group-hover:bg-earth/20 transition-colors duration-300"></div>
                </div>
                
                {/* Nội dung card */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-earth-accent text-xs font-bold uppercase tracking-wider mb-3">
                    {post.category}
                  </p>
                  <h4 className="text-xl font-bold text-earth-dark mb-3 group-hover:text-earth transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-earth-dark/70 text-sm mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta data (Ngày tháng & Thời gian đọc) */}
                  <div className="flex items-center justify-between pt-4 border-t border-earth/10 text-xs font-medium text-earth-dark/50">
                    <span>{post.date}</span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Phân trang (Pagination) */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-earth/20 text-earth-dark/50 hover:bg-earth hover:text-white transition-colors">
                &laquo;
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-earth text-white font-bold shadow-md">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-earth/20 text-earth-dark hover:bg-earth hover:text-white transition-colors font-medium">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-earth/20 text-earth-dark hover:bg-earth hover:text-white transition-colors font-medium">
                3
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-earth/20 text-earth-dark/50 hover:bg-earth hover:text-white transition-colors">
                &raquo;
              </button>
            </nav>
          </div>
        </div>
      </section>

    </main>
  );
}