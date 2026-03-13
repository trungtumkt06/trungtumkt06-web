"use client";
import { useState } from 'react';

export default function ServiceCTA({ serviceName }: { serviceName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  // Tạo bộ nhớ để lưu dữ liệu khách hàng gõ
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Hàm xử lý khi khách bấm nút "Gửi"
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Bắn dữ liệu về API Route mình vừa tạo ở Bước 2
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
          service: serviceName, // Gửi kèm luôn tên dịch vụ
        }),
      });

      if (response.ok) {
        setStatus('success'); // Đổi giao diện sang Tick Xanh
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        setStatus('idle');
      }
    } catch (error) {
      alert("Lỗi kết nối mạng!");
      setStatus('idle');
    }
  };

  return (
    <>
      {/* 1. NÚT BẤM KÍCH HOẠT */}
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center px-10 py-5 bg-earth text-white font-bold rounded-full hover:bg-earth-dark hover:-translate-y-1 shadow-xl transition-all duration-300"
      >
        Nhận tư vấn ngay
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </button>

      {/* 2. CỬA SỔ POPUP (MODAL) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-earth-dark/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="bg-white rounded-[2rem] p-8 md:p-10 max-w-md w-full relative z-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200 text-left border border-earth/10">
            
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 w-10 h-10 bg-earth-light/20 text-earth hover:bg-earth hover:text-white rounded-full flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {status === 'success' ? (
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-extrabold text-earth-dark mb-3">Đã nhận thông tin!</h3>
                <p className="text-earth-dark/70 mb-8 leading-relaxed">
                  Cảm ơn bạn đã quan tâm đến dịch vụ <strong>{serviceName}</strong>. Mình sẽ liên hệ lại qua Zalo/SĐT trong thời gian sớm nhất nhé.
                </p>
                <button onClick={() => setIsOpen(false)} className="w-full py-4 bg-earth-light/20 text-earth font-bold rounded-xl hover:bg-earth hover:text-white transition-colors">
                  Đóng cửa sổ
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-extrabold text-earth-dark mb-2">Đăng ký tư vấn</h3>
                <p className="text-earth-dark/60 mb-8 text-sm">Dịch vụ đang chọn: <strong className="text-earth-accent">{serviceName}</strong></p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-earth-dark/70 mb-2 ml-1">Tên của bạn *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})} // Lấy dữ liệu khi gõ
                      className="w-full px-5 py-4 rounded-2xl border border-earth/20 focus:outline-none focus:border-earth focus:ring-2 focus:ring-earth/20 bg-[#FAF9F6] transition-all" 
                      placeholder="Ví dụ: Nguyễn Văn A" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-earth-dark/70 mb-2 ml-1">Số điện thoại / Zalo *</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} // Lấy dữ liệu khi gõ
                      className="w-full px-5 py-4 rounded-2xl border border-earth/20 focus:outline-none focus:border-earth focus:ring-2 focus:ring-earth/20 bg-[#FAF9F6] transition-all" 
                      placeholder="0901 234 567" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-earth-dark/70 mb-2 ml-1">Bạn cần hỗ trợ gì?</label>
                    <textarea 
                      rows={3} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})} // Lấy dữ liệu khi gõ
                      className="w-full px-5 py-4 rounded-2xl border border-earth/20 focus:outline-none focus:border-earth focus:ring-2 focus:ring-earth/20 bg-[#FAF9F6] transition-all resize-none" 
                      placeholder="Mô tả ngắn gọn yêu cầu của bạn..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full py-4 mt-2 bg-earth text-white font-bold rounded-2xl hover:bg-earth-dark transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
                  >
                    {status === 'loading' ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    ) : 'Gửi yêu cầu ngay'}
                  </button>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}