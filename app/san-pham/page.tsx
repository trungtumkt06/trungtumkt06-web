import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 

interface Product {
  _id: string;
  name: string;
  slug: string;
  price: string;
  originalPrice?: string;
  tag?: string;
  type?: string;
  features?: string[];
  imageUrl?: string;
  category?: string;
}

async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    tag,
    type,
    features,
    "imageUrl": image.asset->url,
    "category": category->title
  }`;
  return client.fetch(query);
}

async function getCategories() {
  const query = `*[_type == "productCategory"] {
    _id,
    title
  }`;
  return client.fetch(query);
}

export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string }> 
}) {
  
  const products: Product[] = await getProducts();
  const sanityCategories = await getCategories();
  const categories = ["Tất cả", ...sanityCategories.map((c: any) => c.title)];

  const resolvedSearchParams = await searchParams;
  const currentCategory = resolvedSearchParams.category || "Tất cả";

  const filteredProducts = currentCategory === "Tất cả" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[#FAF9F6]">
      
      {/* 1. HERO SECTION (Làm nhẹ nhàng và thanh lịch hơn) */}
      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-earth/10 text-earth font-bold text-xs uppercase tracking-widest rounded-full">
            Premium Services
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-earth-dark mb-6 tracking-tight">
            Cửa hàng <span className="text-earth">Sản phẩm số</span>
          </h1>
          <p className="text-lg text-earth-dark/60 max-w-2xl mx-auto leading-relaxed">
            Các giải pháp phần mềm, tài khoản thiết kế và công cụ marketing với chi phí tối ưu, bảo hành uy tín và hỗ trợ kỹ thuật tận tâm.
          </p>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-white rounded-full shadow-sm border border-earth/5 w-fit mx-auto">
            {categories.map((cat, index) => {
              const isActive = currentCategory === cat;
              const href = cat === "Tất cả" ? "/san-pham" : `/san-pham?category=${encodeURIComponent(cat)}`;

              return (
                <Link 
                  key={index} 
                  href={href}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'bg-earth text-white shadow-md transform scale-105' 
                      : 'bg-transparent text-earth-dark/70 hover:bg-earth-light/30 hover:text-earth-dark'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LƯỚI SẢN PHẨM (Nâng cấp giao diện Thẻ) */}
      <section>
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-earth/20 shadow-sm max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-earth-light/30 rounded-full flex items-center justify-center mx-auto mb-6 text-earth">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <p className="text-xl font-bold text-earth-dark mb-2">Chưa có sản phẩm</p>
              <p className="text-earth-dark/60">Sản phẩm thuộc danh mục này đang được cập nhật.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {filteredProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-earth/5 flex flex-col overflow-hidden group hover:-translate-y-2">
                  
                  {/* Phần trên: Ảnh & Tiêu đề */}
                  <div className="p-8 relative bg-gradient-to-b from-earth-light/20 to-white">
                    {product.tag && (
                      <span className="absolute top-4 right-4 bg-earth text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest z-10 shadow-md">
                        {product.tag}
                      </span>
                    )}
                    
                    <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-earth mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden border border-earth/5 p-3">
                       {product.imageUrl ? (
                         <Image src={product.imageUrl} alt={product.name} fill className="object-contain p-2" />
                       ) : (
                         <svg className="w-10 h-10 text-earth/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                         </svg>
                       )}
                    </div>
                    
                    <div className="text-center">
                      {product.type && <p className="text-earth-accent text-[11px] font-bold mb-3 uppercase tracking-widest">{product.type}</p>}
                      <h3 className="text-xl font-bold text-earth-dark line-clamp-2 leading-snug h-[56px] group-hover:text-earth transition-colors">{product.name}</h3>
                    </div>
                  </div>

                  {/* Phần dưới: Tính năng & Giá */}
                  <div className="px-8 pb-8 flex flex-col flex-grow">
                    
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-earth/10 to-transparent mb-6"></div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {product.features?.slice(0, 3).map((feature, idx) => ( // Chỉ hiện tối đa 3 tính năng cho gọn
                        <li key={idx} className="flex items-start text-sm text-earth-dark/70 font-medium">
                          <svg className="w-5 h-5 text-earth mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          <span className="line-clamp-2">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-earth-light/10 rounded-2xl p-4 flex items-center justify-between border border-earth/5 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-earth-dark/40 uppercase font-bold tracking-widest mb-1">Chỉ từ</span>
                        <div className="flex items-end gap-2">
                          <p className="text-2xl font-extrabold text-earth-dark">{product.price}</p>
                        </div>
                      </div>
                      <Link 
                        href={`/san-pham/${product.slug}`} 
                        className="w-12 h-12 bg-earth text-white rounded-xl flex items-center justify-center hover:bg-earth-dark hover:scale-105 transition-all duration-300 shadow-md"
                        aria-label="Xem chi tiết"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </Link>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}