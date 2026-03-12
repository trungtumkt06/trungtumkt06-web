import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 
import { PortableText } from '@portabletext/react';

// ĐÃ SỬA: Đổi 'content' thành 'body' trong câu lệnh GROQ
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "category": categories[0]->title,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    body[]{ 
      ...,
      _type == "image" => {
        ...,
        "url": asset->url
      }
    }
  }`;
  
  return client.fetch(query, { slug });
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <div className="relative w-full h-64 md:h-[450px] my-10 rounded-2xl overflow-hidden shadow-md border border-earth/10">
          <Image 
            src={value.url} 
            alt={value.alt || 'Hình ảnh minh họa bài viết'} 
            fill 
            className="object-cover" 
          />
        </div>
      );
    },
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const post = await getPost(resolvedParams.id);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-earth-dark mb-4">Oops! Không tìm thấy bài viết</h1>
        <Link href="/bai-viet" className="px-6 py-3 bg-earth text-white rounded-full font-medium hover:bg-earth-dark transition">
          Quay lại trang Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-white">
      
      <article className="max-w-3xl mx-auto px-6">
        {/* 1. HEADER BÀI VIẾT */}
        <div className="mb-8 text-center">
          <Link href="/bai-viet" className="text-earth-accent font-semibold tracking-widest uppercase text-xs mb-4 inline-block hover:text-earth transition-colors">
            &larr; Trở về Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-earth-dark mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center text-sm text-earth-dark/60 gap-4">
            {post.publishedAt && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
              </span>
            )}
            {post.category && (
              <span className="px-3 py-1 bg-earth-light/50 text-earth-dark rounded-full text-xs font-semibold">
                {post.category}
              </span>
            )}
          </div>
        </div>

        {/* 2. ẢNH COVER */}
        {post.imageUrl && (
          <div className="w-full aspect-video bg-earth-light/40 rounded-2xl mb-12 flex items-center justify-center border border-earth/10 shadow-sm overflow-hidden relative">
             <Image src={post.imageUrl} alt={post.title} fill priority className="object-cover" />
          </div>
        )}

        {/* 3. NỘI DUNG CHÍNH (ĐÃ SỬA ĐỂ GỌI post.body) */}
        <div className="prose prose-lg prose-earth max-w-none text-earth-dark/90 leading-relaxed space-y-6">
          {post.body ? (
            <PortableText value={post.body} components={myPortableTextComponents} />
          ) : (
            <p className="text-center italic text-earth-dark/50">Nội dung bài viết đang được cập nhật...</p>
          )}
        </div>

        {/* 4. AUTHOR BLOCK */}
        <div className="mt-16 pt-8 border-t border-earth/20 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="w-16 h-16 bg-earth-light/80 rounded-full flex-shrink-0 flex items-center justify-center border-2 border-earth-accent overflow-hidden relative">
            {post.authorImage ? (
              <Image src={post.authorImage} alt="Tác giả" fill className="object-cover" />
            ) : (
              <span className="text-earth-dark/50 text-xs font-bold uppercase">Tác giả</span>
            )}
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-earth-dark">
              Viết bởi {post.authorName || 'Trung Tự'}
            </h4>
            <p className="text-sm text-earth-dark/70 mt-1 leading-relaxed max-w-lg">
              Kết hợp tư duy Marketing chiến lược và kỹ năng Lập trình Web để tạo ra những trải nghiệm số tối ưu. Đam mê code web, tối ưu SEO và ghi lại những khoảnh khắc đẹp qua lăng kính.
            </p>
          </div>
        </div>

      </article>
    </main>
  );
}