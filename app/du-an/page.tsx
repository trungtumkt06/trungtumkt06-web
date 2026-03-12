import Link from 'next/link';

export default function ProjectsPage() {
  
  // Dữ liệu mẫu cho các dự án đã thực hiện
  const projects = [
    {
      id: 1,
      title: "Xây dựng Website Cửa hàng Số",
      category: "Web Development",
      description: "Thiết kế và lập trình website thương mại điện tử phân phối phần mềm bằng Next.js, tối ưu tốc độ tải trang và UI/UX trên mobile.",
      image: "[Ảnh Giao diện Website]",
      tags: ["Next.js", "Tailwind CSS", "UI/UX"]
    },
    {
      id: 2,
      title: "Kế hoạch Kinh doanh & Branding 'Ngon Quá Đi'",
      category: "Marketing",
      description: "Lên ý tưởng, thiết kế logo, banner và xây dựng chiến lược định vị thương hiệu cho một nhãn hàng thời trang nội địa.",
      image: "[Ảnh Bộ nhận diện Thương hiệu]",
      tags: ["Branding", "Business Plan", "Design"]
    },
    {
      id: 3,
      title: "Bộ ảnh Lookbook Sản phẩm",
      category: "Nhiếp ảnh & Retouch",
      description: "Thực hiện concept chụp ảnh sản phẩm, setup ánh sáng và xử lý hậu kỳ màu sắc tỉ mỉ để tạo ra ấn phẩm truyền thông sắc nét nhất.",
      image: "[Ảnh Lookbook / Chụp từ máy ảnh cơ]",
      tags: ["Photography", "Lightroom", "Retouch"]
    },
    {
      id: 4,
      title: "Chiến dịch SEO & Tối ưu Local Map",
      category: "Marketing",
      description: "Tối ưu hóa công cụ tìm kiếm và thiết lập Google Maps chuyên nghiệp cho cửa hàng vật lý, giúp tăng 300% lượng tiếp cận tự nhiên.",
      image: "[Ảnh Biểu đồ tăng trưởng / Bản đồ]",
      tags: ["SEO", "Local Business", "Google Maps"]
    },
    {
      id: 5,
      title: "Thiết kế Landing Page Bất Động Sản",
      category: "Web Development",
      description: "Thiết kế trang đích (Landing Page) tập trung vào chuyển đổi cao, tích hợp form thu thập khách hàng tự động.",
      image: "[Ảnh Landing Page]",
      tags: ["React", "Conversion Rate", "Figma"]
    },
    {
      id: 6,
      title: "Chụp ảnh Chân dung Nghệ thuật",
      category: "Nhiếp ảnh & Retouch",
      description: "Bộ ảnh chân dung ngoài trời tận dụng ánh sáng tự nhiên, phô diễn kỹ năng bắt khoảnh khắc và blend màu điện ảnh.",
      image: "[Ảnh Chân dung]",
      tags: ["Portrait", "Color Grading", "Outdoor"]
    }
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Dự án <span className="text-earth-accent">Tiêu biểu</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Khám phá những dự án nổi bật mà mình đã thực hiện, từ việc viết những dòng code đầu tiên đến lúc triển khai các chiến dịch marketing thực tế.
          </p>
        </div>
      </section>

      {/* 2. GRID DỰ ÁN */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-earth/10 hover:-translate-y-2">
                
                {/* Khung chứa ảnh */}
                <div className="relative h-64 w-full bg-earth-light/40 overflow-hidden flex items-center justify-center border-b border-earth/10">
                  <div className="absolute inset-0 bg-earth-dark/0 group-hover:bg-earth-dark/20 transition-colors duration-500 z-10"></div>
                  <span className="text-earth-dark/40 font-medium z-0">{project.image}</span>
                  
                  {/* Nút Xem chi tiết hiện ra khi hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <span className="px-6 py-2.5 bg-white text-earth-dark font-semibold rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      Xem chi tiết
                    </span>
                  </div>
                </div>

                {/* Nội dung thông tin */}
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-earth-accent text-sm font-bold uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold text-earth-dark mb-4 group-hover:text-earth transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-earth-dark/70 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-earth/10">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-earth-light/30 text-earth-dark text-xs rounded-full font-medium border border-earth/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-24 mt-12 bg-earth-dark text-center">
        <div className="max-w-3xl mx-auto px-6 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Bạn có ý tưởng cho dự án tiếp theo?</h2>
          <p className="text-earth-light/80 text-lg mb-10">
            Hãy cùng nhau thảo luận và biến ý tưởng đó thành hiện thực. Mình luôn sẵn sàng cho những thử thách mới.
          </p>
          <Link href="/lien-he" className="inline-block px-10 py-4 bg-white text-earth-dark font-bold rounded-full hover:bg-earth-light hover:scale-105 transition-all duration-300 shadow-lg">
            Bắt đầu hợp tác
          </Link>
        </div>
      </section>

    </main>
  );
}