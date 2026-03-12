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

// BÍ KÍP MỚI: Nhận searchParams từ URL để biết khách đang chọn danh mục nào
export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string }> 
}) {
  
  // 1. Lấy toàn bộ dữ liệu từ kho
  const products: Product[] = await getProducts();
  const sanityCategories = await getCategories();
  const categories = ["Tất cả", ...sanityCategories.map((c: any) => c.title)];

  // 2. Chờ và đọc URL xem có chữ ?category=... không. Nếu không có thì mặc định là "Tất cả"
  const resolvedSearchParams = await searchParams;
  const currentCategory = resolvedSearchParams.category || "Tất cả";

  // 3. THỰC HIỆN LỌC SẢN PHẨM: 
  // Nếu đang ở "Tất cả" thì lấy hết, nếu không thì chỉ lấy các sản phẩm có category trùng khớp
  const filteredProducts = currentCategory === "Tất cả" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/20">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 bg-white border-b border-earth/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Cửa hàng <span className="text-earth-accent">Sản phẩm số</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Cung cấp các giải pháp phần mềm, tài khoản thiết kế và công cụ marketing với chi phí tối ưu, bảo hành uy tín và hỗ trợ kỹ thuật tận tâm.
          </p>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC CÓ TƯƠNG TÁC */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((cat, index) => {
              
              // Kiểm tra xem nút này có khớp với danh mục trên URL không để đổi màu (Active)
              const isActive = currentCategory === cat;
              
              // Tạo link: Bấm "Tất cả" thì xóa param, bấm danh mục khác thì thêm param vào URL
              const href = cat === "Tất cả" ? "/san-pham" : `/san-pham?category=${encodeURIComponent(cat)}`;

              return (
                <Link 
                  key={index} 
                  href={href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-earth text-white shadow-md' 
                      : 'bg-white text-earth-dark border border-earth/20 hover:border-earth hover:text-earth'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LƯỚI SẢN PHẨM (Sử dụng mảng filteredProducts thay vì products gốc) */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 text-earth-dark/60 bg-white rounded-3xl border border-earth/10">
              <svg className="w-16 h-16 mx-auto text-earth/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              <p className="text-lg font-medium">Chưa có sản phẩm nào thuộc danh mục này.</p>
              <p className="mt-2 text-sm">Hãy thử chọn một danh mục khác nhé!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product._id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-earth/10 flex flex-col overflow-hidden group">
                  
                  <div className="p-6 bg-earth-light/30 relative border-b border-earth/5">
                    {product.tag && (
                      <span className="absolute top-4 right-4 bg-earth-accent text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider z-10 shadow-sm">
                        {product.tag}
                      </span>
                    )}
                    
                    <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-earth mb-4 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                       {product.imageUrl ? (
                         <Image src={product.imageUrl} alt={product.name} fill className="object-cover p-2" />
                       ) : (
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                         </svg>
                       )}
                    </div>
                    
                    {product.type && <p className="text-earth-accent text-xs font-bold mb-2 uppercase tracking-wide">{product.type}</p>}
                    <h3 className="text-xl font-bold text-earth-dark line-clamp-2 min-h-[56px]">{product.name}</h3>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <ul className="space-y-3 mb-8 flex-grow">
                      {product.features?.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-earth-dark/80">
                          <svg className="w-5 h-5 text-earth mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-earth/10 flex items-end justify-between mt-auto">
                      <div>
                        {product.originalPrice && (
                          <p className="text-xs text-earth-dark/50 line-through mb-1">{product.originalPrice}</p>
                        )}
                        <p className="text-2xl font-bold text-earth-dark">{product.price}</p>
                      </div>
                      <Link href={`/san-pham/${product.slug}`} className="px-5 py-2.5 bg-earth text-white rounded-lg hover:bg-earth-dark transition-colors font-medium text-sm shadow-md hover:shadow-lg">
                        Chi tiết
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