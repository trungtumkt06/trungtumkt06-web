import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 

interface Post {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  publishedAt?: string;
  imageUrl?: string;
}

// 1. Hàm lấy danh sách bài viết
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "category": categories[0]->title,
    publishedAt,
    "imageUrl": mainImage.asset->url
  }`;
  return client.fetch(query);
}

// 2. Hàm lấy danh sách danh mục (Blog Categories)
async function getBlogCategories() {
  const query = `*[_type == "category"] {
    _id,
    title
  }`;
  return client.fetch(query);
}

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string }> 
}) {
  
  // Lấy dữ liệu từ Sanity
  const posts: Post[] = await getPosts();
  const blogCategories = await getBlogCategories();
  
  // Tạo danh sách nút bấm (Tất cả + các danh mục từ CMS)
  const categories = ["Tất cả", ...blogCategories.map((c: any) => c.title)];

  // Đọc danh mục đang chọn từ URL
  const resolvedSearchParams = await searchParams;
  const currentCategory = resolvedSearchParams.category || "Tất cả";

  // THỰC HIỆN LỌC
  const filteredPosts = currentCategory === "Tất cả" 
    ? posts 
    : posts.filter(p => p.category === currentCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. HERO SECTION */}
      <section className="py-16 text-center border-b border-earth/10 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-4">Góc chia sẻ</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Bài viết & <span className="text-earth-accent">Tài nguyên</span>
          </h1>
          <p className="text-lg text-earth-dark/70 max-w-2xl mx-auto">
            Nơi mình ghi chép lại kiến thức thực chiến và những trải nghiệm thú vị trong hành trình làm Marketing và Code.
          </p>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC BLOG */}
      <section className="py-8 bg-white/50 sticky top-[72px] z-30 backdrop-blur-md border-b border-earth/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => {
              const isActive = currentCategory === cat;
              const href = cat === "Tất cả" ? "/bai-viet" : `/bai-viet?category=${encodeURIComponent(cat)}`;

              return (
                <Link 
                  key={index} 
                  href={href}
                  className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive 
                      ? 'bg-earth-dark text-white shadow-lg scale-105' 
                      : 'bg-white text-earth-dark/60 border border-earth/10 hover:border-earth-accent hover:text-earth-accent'
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. LƯỚI BÀI VIẾT (DÙNG filteredPosts) */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-3xl border border-earth/10 shadow-sm">
              <p className="text-earth-dark/40 italic">Chưa có bài viết nào trong chủ đề này.</p>
              <Link href="/bai-viet" className="mt-4 inline-block text-earth-accent font-bold hover:underline">
                Xem tất cả bài viết
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link href={`/bai-viet/${post.slug}`} key={post._id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-earth/10 hover:-translate-y-1 cursor-pointer">
                  
                  {/* Ảnh cover */}
                  <div className="h-56 w-full bg-earth-light/30 relative flex items-center justify-center overflow-hidden">
                    {post.imageUrl ? (
                      <Image 
                        src={post.imageUrl} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    ) : (
                      <span className="text-earth-dark/30 text-sm font-medium z-10">[Chưa có ảnh Cover]</span>
                    )}
                  </div>
                  
                  {/* Nội dung card */}
                  <div className="p-6 flex flex-col flex-grow">
                    {post.category && (
                      <p className="text-earth-accent text-[10px] font-black uppercase tracking-widest mb-3 px-2 py-0.5 bg-earth-accent/10 rounded inline-block w-fit">
                        {post.category}
                      </p>
                    )}
                    <h4 className="text-xl font-bold text-earth-dark mb-3 group-hover:text-earth transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-earth/10 text-[11px] font-bold text-earth-dark/40 uppercase tracking-tighter">
                      <span>
                        {post.publishedAt 
                          ? new Date(post.publishedAt).toLocaleDateString('vi-VN') 
                          : 'Mới đăng'}
                      </span>
                      <span className="text-earth-accent group-hover:translate-x-1 transition-transform">
                        Đọc tiếp &rarr;
                      </span>
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