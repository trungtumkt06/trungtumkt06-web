export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. HERO SECTION CỦA TRANG LIÊN HỆ */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-4">Kết nối</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Bắt đầu <span className="text-earth-accent">Dự án mới</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Dù bạn cần một website mới, một chiến dịch marketing bùng nổ, hay đơn giản là muốn mua một phần mềm tiện ích, mình luôn ở đây để hỗ trợ.
          </p>
        </div>
      </section>

      {/* 2. KHU VỰC LIÊN HỆ CHÍNH */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-earth/10">
          
          {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ (Chiếm 2 phần) */}
          <div className="md:col-span-2 bg-earth-dark text-white p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Vòng tròn trang trí nền */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-earth/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-earth-accent/20 rounded-full blur-2xl -z-10 -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-6">Thông tin liên hệ</h3>
              <p className="text-earth-light/80 mb-12 leading-relaxed">
                Đừng ngần ngại liên hệ với mình qua các kênh dưới đây. Mình sẽ cố gắng phản hồi sớm nhất có thể!
              </p>

              <ul className="space-y-8">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 text-earth-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Cửa hàng trực tiếp</h4>
                    <p className="text-earth-light/80 leading-relaxed">C8 Mậu Thân<br/>(Ghé thăm để trao đổi và cài đặt phần mềm trực tiếp)</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 text-earth-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email hợp tác</h4>
                    <p className="text-earth-light/80">hello@trungtu.com</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 text-earth-accent flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Điện thoại / Zalo</h4>
                    <p className="text-earth-light/80">0123 456 789</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Mạng xã hội */}
            <div className="mt-16 z-10 flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-earth transition-colors">
                 <span className="text-sm font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-earth transition-colors">
                 <span className="text-sm font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-earth transition-colors">
                 <span className="text-sm font-bold">IN</span>
              </a>
            </div>
          </div>

          {/* CỘT PHẢI: FORM ĐIỀN THÔNG TIN (Chiếm 3 phần) */}
          <div className="md:col-span-3 p-10 lg:p-16">
            <h3 className="text-2xl font-bold text-earth-dark mb-8">Gửi lời nhắn cho mình</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-earth-dark/80">Họ và Tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-earth-light/30 border border-earth/20 focus:border-earth focus:ring-2 focus:ring-earth/20 outline-none transition-all text-earth-dark placeholder-earth-dark/40"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-earth-dark/80">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-earth-light/30 border border-earth/20 focus:border-earth focus:ring-2 focus:ring-earth/20 outline-none transition-all text-earth-dark placeholder-earth-dark/40"
                    placeholder="email@vidu.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-earth-dark/80">Chủ đề</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-earth-light/30 border border-earth/20 focus:border-earth focus:ring-2 focus:ring-earth/20 outline-none transition-all text-earth-dark placeholder-earth-dark/40"
                  placeholder="Ví dụ: Cần thiết kế Website, Mua tài khoản Canva..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-earth-dark/80">Nội dung tin nhắn</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-earth-light/30 border border-earth/20 focus:border-earth focus:ring-2 focus:ring-earth/20 outline-none transition-all text-earth-dark placeholder-earth-dark/40 resize-none"
                  placeholder="Mô tả chi tiết yêu cầu của bạn..."
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full py-4 bg-earth text-white font-bold rounded-lg hover:bg-earth-dark shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mt-4"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}