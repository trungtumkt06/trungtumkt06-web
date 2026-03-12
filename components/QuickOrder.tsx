"use client";
import { useState } from 'react';

export default function QuickOrder({ product, onClose }: { product: any, onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      productName: product.name,
      price: product.price,
    };

    const res = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(onClose, 3000);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
        
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <h3 className="text-2xl font-bold text-earth-dark">Đặt mua nhanh</h3>
            <p className="text-sm text-gray-500 italic">Bạn đang đặt mua: <span className="text-earth font-bold">{product.name}</span></p>
            
            <div>
              <label className="block text-sm font-bold text-earth-dark mb-1">Họ tên của bạn</label>
              <input name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-earth outline-none" placeholder="Nhập tên..." />
            </div>

            <div>
              <label className="block text-sm font-bold text-earth-dark mb-1">Số điện thoại (Zalo)</label>
              <input name="phone" required type="tel" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-earth outline-none" placeholder="Nhập số điện thoại..." />
            </div>

            <button disabled={loading} className="w-full py-4 bg-earth text-white rounded-xl font-bold text-lg hover:bg-earth-dark transition-all disabled:bg-gray-400">
              {loading ? "Đang gửi..." : "Xác nhận đặt hàng"}
            </button>
          </form>
        ) : (
          <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
            <h3 className="text-2xl font-bold text-earth-dark mb-2">Đăng ký thành công!</h3>
            <p className="text-gray-600">Trung Tự sẽ sớm liên hệ với bạn qua Zalo nhé.</p>
          </div>
        )}
      </div>
    </div>
  );
}