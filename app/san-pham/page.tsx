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
    <main className="min-h-screen pt-24 pb-24 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-earth/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-earth-light/10 rounded-full blur-3xl -z-10 -translate-x-1/2"></div>

      {/* 1. HERO SECTION */}
      <section className="pt-16 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-earth-dark mb-6 tracking-tight leading-tight">
            Khám phá <span className="text-earth">Sản phẩm số</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-dark/60 max-w-2xl mx-auto leading-relaxed">
            Các giải pháp phần mềm, tài khoản thiết kế và công cụ marketing với chi phí tối ưu, bảo hành uy tín và hỗ trợ kỹ thuật tận tâm.
          </p>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC */}
      <section className="mb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 p-2 bg-white/70 backdrop-blur-md rounded-full shadow-lg shadow-earth/5 border border-white max-w-fit mx-auto sticky top-24 z-20">
            {categories.map((cat, index) => {
              const isActive = currentCategory === cat;
              const href = cat === "Tất cả" ? "/san-pham" : `/san-pham?category=${encodeURIComponent(cat)}`;

              return (
                <Link 
                  key={index} 
                  href={href}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive 
                      ? 'bg-earth text-white shadow-lg shadow-earth/30 transform scale-105' 
                      : 'bg-transparent text-earth-dark/60 hover:bg-earth-light/40 hover:text-earth-dark'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LƯỚI SẢN PHẨM */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white/50 backdrop-blur-sm rounded-[3rem] border border-dashed border-earth/20 shadow-sm max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-earth-light/30 rounded-full flex items-center justify-center mx-auto mb-6 text-earth">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <p className="text-2xl font-extrabold text-earth-dark mb-3">Chưa có sản phẩm</p>
              <p className="text-earth-dark/60 text-lg">Sản phẩm thuộc danh mục này đang được cập nhật.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
              {filteredProducts.map((product) => (
                <Link 
                  href={`/san-pham/${product.slug}`} 
                  key={product._id} 
                  className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-earth/5 flex flex-col overflow-hidden group hover:-translate-y-2 relative"
                >
                  
                  {/* PHẦN TRÊN: Ảnh sản phẩm */}
                  <div className="w-full h-56 md:h-64 bg-gradient-to-br from-earth-light/30 to-earth-light/5 relative flex items-center justify-center p-8 overflow-hidden">
                    
                    {/* BÁN CHẠY / TAG (Đã fix z-30 để luôn nằm trên ảnh) */}
                    {product.tag && (
                      <span className="absolute top-5 right-5 bg-earth text-white text-[10px] font-extrabold px-4 py-2 rounded-full uppercase tracking-widest z-30 shadow-md">
                        {product.tag}
                      </span>
                    )}
                    
                    <div className="absolute w-40 h-40 bg-white/40 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700 z-0"></div>

                    {/* ẢNH SẢN PHẨM */}
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700 ease-in-out drop-shadow-xl z-10"
                      />
                    ) : (
                      <svg className="w-16 h-16 text-earth/20 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>

                  {/* PHẦN DƯỚI: Nội dung chi tiết */}
                  <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
                    
                    <div className="mb-4">
                      {product.type && <p className="text-earth-accent text-[11px] font-bold mb-2 uppercase tracking-widest">{product.type}</p>}
                      <h3 className="text-2xl font-extrabold text-earth-dark line-clamp-2 leading-snug group-hover:text-earth transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-earth/20 to-transparent mb-6"></div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {product.features?.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-earth-dark/70 font-medium">
                          <svg className="w-5 h-5 text-earth mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          <span className="line-clamp-2 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-earth-light/10 rounded-2xl p-5 flex items-center justify-between border border-earth/10 group-hover:bg-earth group-hover:border-earth transition-colors duration-500">
                      <div className="flex flex-col group-hover:text-white transition-colors duration-500">
                        <span className="text-[10px] text-earth-dark/40 uppercase font-bold tracking-widest mb-1 group-hover:text-white/70">Chỉ từ</span>
                        <div className="flex items-end gap-2">
                          <p className="text-2xl font-extrabold text-earth-dark group-hover:text-white">{product.price}</p>
                          {product.originalPrice && (
                             <p className="text-xs line-through text-earth-dark/30 mb-1.5 group-hover:text-white/50">{product.originalPrice}</p>
                          )}
                        </div>
                      </div>
                      
                      <div className="w-12 h-12 bg-white text-earth rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </div>

                  </div>

                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}