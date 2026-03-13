import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 
import { PortableText } from '@portabletext/react';
// Import hàm lấy link ảnh của Sanity
import { urlFor } from '@/sanity/lib/image';

async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "category": category->title, 
    client,
    completionDate,
    role,
    content,
    "imageUrl": mainImage.asset->url 
  }`;
  
  return client.fetch(query, { slug });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.id);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center bg-[#FAF9F6]">
        <div className="w-24 h-24 bg-earth/10 text-earth rounded-full flex items-center justify-center mb-6 mx-auto">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-earth-dark mb-4">Oops! Không tìm thấy dự án</h1>
        <p className="text-earth-dark/60 mb-8">Dự án này có thể đã bị xóa hoặc đường dẫn không chính xác.</p>
        <Link href="/du-an" className="px-8 py-3.5 bg-earth text-white rounded-full font-bold hover:bg-earth-dark transition shadow-md hover:shadow-lg hover:-translate-y-1">
          Quay lại Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-24 bg-[#FAF9F6]">
      
      {/* 1. ĐIỀU HƯỚNG & HEADER */}
      <div className="max-w-4xl mx-auto px-6 mb-12 text-center">
        <div className="flex justify-center items-center text-sm text-earth-dark/50 mb-8 font-medium">
          <Link href="/" className="hover:text-earth transition-colors">Trang chủ</Link>
          <span className="mx-3 text-earth-dark/30">/</span>
          <Link href="/du-an" className="hover:text-earth transition-colors">Dự án</Link>
          <span className="mx-3 text-earth-dark/30">/</span>
          <span className="text-earth-dark">{project.title}</span>
        </div>
        
        {project.category && (
          <div className="inline-block mb-6 px-4 py-1.5 bg-earth/10 text-earth font-bold text-xs uppercase tracking-widest rounded-full">
            {project.category}
          </div>
        )}
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-earth-dark mb-6 leading-[1.15] tracking-tight">
          {project.title}
        </h1>
      </div>

      {/* 2. ẢNH COVER */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="w-full aspect-video md:h-[600px] bg-earth-light/30 rounded-[2rem] overflow-hidden shadow-2xl shadow-earth/5 border border-white relative group flex items-center justify-center">
          {project.imageUrl ? (
            <Image 
              src={project.imageUrl} 
              alt={project.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
          ) : (
            <div className="text-center">
              <span className="text-earth-dark/40 font-medium tracking-wide uppercase text-sm">Chưa cập nhật ảnh cover</span>
            </div>
          )}
        </div>
      </section>

      {/* 3. THÔNG TIN DỰ ÁN */}
      {(project.client || project.completionDate || project.role) && (
        <section className="max-w-4xl mx-auto px-6 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-earth/10 grid grid-cols-2 md:grid-cols-3 gap-8">
            {project.client && (
              <div>
                <p className="text-xs font-bold text-earth-dark/40 uppercase tracking-widest mb-2">Khách hàng</p>
                <p className="text-lg font-bold text-earth-dark">{project.client}</p>
              </div>
            )}
            {project.role && (
              <div>
                <p className="text-xs font-bold text-earth-dark/40 uppercase tracking-widest mb-2">Vai trò</p>
                <p className="text-lg font-bold text-earth-dark">{project.role}</p>
              </div>
            )}
            {project.completionDate && (
              <div className="col-span-2 md:col-span-1">
                <p className="text-xs font-bold text-earth-dark/40 uppercase tracking-widest mb-2">Thời gian</p>
                <p className="text-lg font-bold text-earth-dark">{project.completionDate}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. NỘI DUNG CASE STUDY CÓ HIỂN THỊ ẢNH */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg md:prose-xl prose-earth max-w-none text-earth-dark/80 leading-relaxed space-y-8">
          {project.content ? (
             <PortableText 
                value={project.content} 
                // Dạy PortableText cách render hình ảnh
                components={{
                  types: {
                    image: ({ value }: any) => {
                      if (!value?.asset?._ref) return null;
                      return (
                        <div className="relative w-full my-12 rounded-2xl overflow-hidden shadow-lg border border-earth/10">
                          <Image
                            src={urlFor(value).url()}
                            alt={value.alt || "Hình ảnh chi tiết dự án"}
                            width={1000}
                            height={600}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                          />
                          {value.alt && (
                            <p className="text-center text-sm text-earth-dark/50 mt-3 italic">
                              {value.alt}
                            </p>
                          )}
                        </div>
                      );
                    }
                  }
                }}
             />
          ) : (
            <div className="text-center py-12 border-t border-earth/10">
              <p className="italic text-earth-dark/50">Chi tiết dự án đang được cập nhật...</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-6 mt-32 text-center">
        <div className="p-12 md:p-20 bg-earth-dark text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight">Sẵn sàng cho dự án tiếp theo?</h2>
          <p className="text-earth-light/80 mb-10 max-w-xl mx-auto relative z-10 text-lg">
            Từ việc xây dựng bộ nhận diện thương hiệu đột phá đến lập trình website chuyên nghiệp. Hãy để mình giúp bạn hiện thực hóa ý tưởng.
          </p>
          <Link 
            href="/lien-he" 
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-earth-dark font-bold rounded-full hover:bg-earth-light hover:scale-105 transition-all duration-300 shadow-xl relative z-10"
          >
            Bắt đầu cùng Trung Tự Mkt
          </Link>
        </div>
      </section>

    </main>
  );
}