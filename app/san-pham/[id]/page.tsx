import Link from 'next/link';
import Image from 'next/image'; // Import thẻ Image
import { client } from '@/sanity/lib/client'; 
import { PortableText } from '@portabletext/react';

async function getProduct(slug: string) {
  // Lấy thêm "imageUrl" từ trường "image"
  const query = `*[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    price,
    originalPrice,
    tag,
    type,
    features,
    content,
    "imageUrl": image.asset->url
  }`;
  
  return client.fetch(query, { slug });
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-earth-dark mb-4">Oops! Không tìm thấy sản phẩm</h1>
        <p className="text-earth-dark/70 mb-8">Sản phẩm này có thể đã bị xóa hoặc đường dẫn không chính xác.</p>
        <Link href="/san-pham" className="px-6 py-3 bg-earth text-white rounded-full font-medium hover:bg-earth-dark transition">
          Quay lại cửa hàng
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. ĐIỀU HƯỚNG */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center text-sm text-earth-dark/60">
          <Link href="/" className="hover:text-earth-accent transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/san-pham" className="hover:text-earth-accent transition-colors">Cửa hàng số</Link>
          <span className="mx-2">/</span>
          <span className="text-earth-dark font-medium">{product.name}</span>
        </div>
      </div>

      {/* 2. THÔNG TIN CHÍNH */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="bg-white rounded-3xl shadow-sm border border-earth/10 p-6 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          
          {/* KHU VỰC ẢNH SẢN PHẨM LỚN */}
          <div className="w-full aspect-square bg-earth-light/40 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-earth/5 group">
            {product.tag && (
              <span className="absolute top-4 left-4 bg-earth-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm z-10">
                {product.tag}
              </span>
            )}
            
            {product.imageUrl ? (
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                fill 
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 p-8" 
              />
            ) : (
              <div className="w-32 h-32 bg-white rounded-3xl shadow-md flex items-center justify-center text-earth mb-6">
                 <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
              </div>
            )}
          </div>

          <div className="flex flex-col h-full justify-center">
            {product.type && <p className="text-earth-accent text-sm font-bold uppercase tracking-wider mb-3">{product.type}</p>}
            <h1 className="text-3xl md:text-4xl font-bold text-earth-dark mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-earth-dark">{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-earth-dark/40 line-through mb-1">{product.originalPrice}</span>
              )}
            </div>

            {/* Danh sách tính năng */}
            {product.features && product.features.length > 0 && (
              <ul className="space-y-4 mb-10">
                {product.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center text-earth-dark/90 font-medium">
                    <svg className="w-6 h-6 text-earth mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-earth text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-dark shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center">
                Mua Ngay
              </button>
              <Link href="/lien-he" className="flex-1 border-2 border-earth text-earth-dark px-8 py-4 rounded-xl font-bold text-lg hover:bg-earth-light transition-all duration-300 text-center flex items-center justify-center">
                Tư Vấn Zalo
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CHI TIẾT SẢN PHẨM & CHÍNH SÁCH */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        <div className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-earth/10">
          <h3 className="text-2xl font-bold text-earth-dark mb-6">Mô tả chi tiết</h3>
          <div className="prose prose-earth max-w-none text-earth-dark/80 leading-relaxed space-y-4">
            {product.content ? (
              <PortableText value={product.content} />
            ) : (
              <p>Chưa có mô tả chi tiết cho sản phẩm này.</p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-earth/10">
             <h4 className="font-bold text-earth-dark mb-4 flex items-center">
               <svg className="w-5 h-5 mr-2 text-earth" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               Chính sách Bảo hành
             </h4>
             <p className="text-sm text-earth-dark/70 leading-relaxed mb-4">
               Cam kết hỗ trợ kỹ thuật và xử lý mọi vấn đề liên quan đến phần mềm trong suốt thời gian sử dụng.
             </p>
          </div>

          <div className="bg-earth-dark text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-earth/20 rounded-full blur-xl -mr-10 -mt-10"></div>
             <h4 className="font-bold text-lg mb-2 relative z-10">Cần hỗ trợ trực tiếp?</h4>
             <p className="text-sm text-earth-light/80 mb-4 relative z-10">
               Ghé ngay C8 Mậu Thân hoặc liên hệ đội ngũ để được setup phần mềm nhanh chóng nhất.
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