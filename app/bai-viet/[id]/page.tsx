import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      
      <article className="max-w-3xl mx-auto px-6">
        {/* 1. HEADER BÀI VIẾT */}
        <div className="mb-8 text-center">
          <Link href="/bai-viet" className="text-earth-accent font-semibold tracking-widest uppercase text-xs mb-4 inline-block hover:text-earth transition-colors">
            &larr; Trở về Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-earth-dark mb-6 leading-tight">
            Làm chủ tốc độ đồng bộ đèn Flash (Sync Speed) khi chụp sản phẩm
          </h1>
          <div className="flex flex-wrap items-center justify-center text-sm text-earth-dark/60 gap-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              12/03/2026
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              5 phút đọc
            </span>
            <span className="px-3 py-1 bg-earth-light/50 text-earth-dark rounded-full text-xs font-semibold">
              Nhiếp ảnh
            </span>
          </div>
        </div>

        {/* 2. ẢNH COVER */}
        <div className="w-full aspect-video bg-earth-light/40 rounded-2xl mb-12 flex items-center justify-center border border-earth/10 shadow-sm overflow-hidden">
           <span className="text-earth-dark/40 font-medium">[Ảnh Cover: Setup Studio / Máy ảnh DSLR]</span>
        </div>

        {/* 3. NỘI DUNG CHÍNH (TYPOGRAPHY OPTIMIZED) */}
        <div className="text-earth-dark/90 leading-relaxed text-lg space-y-8">
          <p className="font-medium text-xl text-earth-dark">
            Khi mới bước chân vào con đường nhiếp ảnh thương mại, đặc biệt là chụp lookbook hay sản phẩm tĩnh, hiện tượng "sọc đen màn trập" là cơn ác mộng của rất nhiều newbie. Vậy nguyên nhân do đâu và cách khắc phục như thế nào?
          </p>

          <h2 className="text-2xl font-bold text-earth-dark mt-10 mb-4">1. Sync Speed (Tốc độ đồng bộ) là gì?</h2>
          <p>
            Nói một cách đơn giản, trên các dòng máy ảnh DSLR (như chiếc Canon 750D), màn trập bao gồm 2 rèm (curtain). Khi bạn chụp, rèm 1 mở ra để cảm biến nhận ánh sáng, sau đó rèm 2 đóng lại để kết thúc quá trình phơi sáng.
          </p>
          <p>
            Tốc độ đồng bộ đèn flash (Flash Sync Speed) là tốc độ màn trập nhanh nhất mà tại đó, <strong>toàn bộ cảm biến</strong> được phơi sáng hoàn toàn cùng một lúc. Tùy thân máy, tốc độ này thường rơi vào khoảng 1/200s hoặc 1/250s.
          </p>

          <h2 className="text-2xl font-bold text-earth-dark mt-10 mb-4">2. Tại sao ảnh bị dính vệt đen?</h2>
          <p>
            Nếu bạn đẩy tốc độ màn trập lên cao hơn tốc độ đồng bộ (ví dụ: 1/500s), rèm 2 sẽ bắt đầu đóng trước khi rèm 1 kịp mở hết. Lúc này, khoảng trống giữa hai rèm chỉ là một khe hẹp chạy dọc qua cảm biến.
          </p>
          <p>
            Ánh sáng của đèn flash chớp cực kỳ nhanh (thường là 1/1000s hoặc nhanh hơn). Khi flash nổ, nó chỉ chiếu sáng được phần cảm biến đang lộ ra qua cái "khe hẹp" đó. Phần cảm biến bị rèm che lại sẽ không nhận được ánh sáng, tạo ra một dải màu đen thui trên bức ảnh của bạn.
          </p>

          <div className="bg-earth-light/20 p-6 rounded-xl border-l-4 border-earth-accent italic my-8 text-base text-earth-dark/80 shadow-sm">
            Mẹo nhỏ: Trong các buổi chụp lookbook thời trang "Ngon Quá Đi", mình luôn thiết lập cứng tốc độ màn trập ở mức 1/160s trong studio. Tốc độ này đủ an toàn để loại bỏ hoàn toàn sọc đen, đồng thời đảm bảo hình ảnh đủ độ sắc nét cần thiết.
          </div>

          <h2 className="text-2xl font-bold text-earth-dark mt-10 mb-4">Tóm lại</h2>
          <p>
            Hiểu rõ về cơ chế hoạt động của Sync Speed giúp bạn kiểm soát hoàn toàn ánh sáng nhân tạo. Lần tới khi thiết lập góc chụp sản phẩm, dù là ở studio chuyên nghiệp hay ngay tại không gian nhỏ của C8 Mậu Thân, hãy nhớ kiểm tra lại tốc độ màn trập trước khi bấm máy nhé!
          </p>
        </div>

        {/* 4. AUTHOR BLOCK (Thông tin tác giả) */}
        <div className="mt-16 pt-8 border-t border-earth/20 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-16 h-16 bg-earth-light/80 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-earth-accent overflow-hidden">
            <span className="text-earth-dark/50 text-[10px] text-center font-medium leading-tight">Ảnh<br/>Tác giả</span>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-earth-dark">Viết bởi Trung Tự</h4>
            <p className="text-sm text-earth-dark/70 mt-1 leading-relaxed max-w-lg">
              Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu. Đam mê code web, tối ưu SEO và ghi lại những khoảnh khắc đẹp qua lăng kính.
            </p>
          </div>
        </div>

      </article>

    </main>
  );
}