"use client";

import { useState } from 'react';
import QuickOrder from '@/components/QuickOrder';
import Link from 'next/link';

export default function OrderSection({ product }: { product: any }) {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <>
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

      {/* Popup đặt hàng chỉ hiện khi showOrder là true */}
      {showOrder && (
        <QuickOrder product={product} onClose={() => setShowOrder(false)} />
      )}
    </>
  );
}