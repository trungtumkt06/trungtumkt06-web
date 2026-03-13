"use client";

import { useState } from 'react';
import QuickOrder from '@/components/QuickOrder';
import Link from 'next/link';

export default function OrderSection({ product }: { product: any }) {
  const [showOrder, setShowOrder] = useState(false);
  
  // Trạng thái lưu biến thể khách đang chọn (Mặc định lấy cái đầu tiên nếu có, nếu không thì null)
  const [selectedVariant, setSelectedVariant] = useState<any>(
    product.variants && product.variants.length > 0 ? product.variants[0] : null
  );

  // Xác định giá sẽ hiển thị
  const displayPrice = selectedVariant ? selectedVariant.variantPrice : product.price;
  const displayOriginalPrice = selectedVariant ? selectedVariant.variantOriginalPrice : product.originalPrice;

  // Cập nhật tên sản phẩm khi đặt hàng (Kèm theo tên gói)
  const orderProductName = selectedVariant 
    ? `${product.name} (${selectedVariant.variantName})` 
    : product.name;

  return (
    <div className="w-full">
      {/* 1. HIỂN THỊ GIÁ TIỀN (Sẽ nhảy số khi bấm chọn gói) */}
      <div className="flex items-end gap-4 mb-6">
        <span className="text-4xl font-bold text-earth-dark transition-all">{displayPrice}</span>
        {displayOriginalPrice && (
          <span className="text-lg text-earth-dark/40 line-through mb-1 transition-all">{displayOriginalPrice}</span>
        )}
      </div>

      {/* 2. HIỂN THỊ CÁC NÚT BIẾN THỂ (Nếu có) */}
      {product.variants && product.variants.length > 0 && (
        <div className="mb-8">
          <p className="text-sm font-bold text-earth-dark mb-3 uppercase tracking-wider">Chọn gói dịch vụ:</p>
          <div className="flex flex-wrap gap-3">
            {product.variants.map((variant: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedVariant(variant)}
                className={`px-4 py-2 rounded-lg border-2 font-medium transition-all duration-300 ${
                  selectedVariant === variant 
                    ? 'border-earth bg-earth/10 text-earth-dark shadow-sm' 
                    : 'border-earth/20 text-earth-dark/60 hover:border-earth/50'
                }`}
              >
                {variant.variantName}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 3. CÁC NÚT MUA HÀNG VÀ LIÊN HỆ */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => setShowOrder(true)}
          className="flex-1 bg-earth text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-dark shadow-md transition-all duration-300 transform hover:-translate-y-1"
        >
          Mua Ngay
        </button>

        <Link href="/lien-he" className="flex-1 border-2 border-earth text-earth-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-light transition-all duration-300 text-center flex items-center justify-center">
          Tư Vấn Zalo
        </Link>
      </div>

      {/* Truyền dữ liệu đã tính toán vào QuickOrder */}
      {showOrder && (
        <QuickOrder 
          product={{ ...product, name: orderProductName, price: displayPrice }} 
          onClose={() => setShowOrder(false)} 
        />
      )}
    </div>
  );
}