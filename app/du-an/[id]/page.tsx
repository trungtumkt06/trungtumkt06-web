import Link from 'next/link';
import Image from 'next/image'; // Thêm import Image
import { client } from '@/sanity/lib/client'; 
import { PortableText } from '@portabletext/react';

// Cập nhật hàm lấy dữ liệu: Thêm "imageUrl": mainImage.asset->url
async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    category,
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
      <main className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-earth-dark mb-4">Oops! Không tìm thấy dự án</h1>
        <Link href="/du-an" className="px-6 py-3 bg-earth text-white rounded-full font-medium hover:bg-earth-dark transition">
          Quay lại danh sách dự án
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. ĐIỀU HƯỚNG & HEADER */}
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <div className="flex justify-center items-center text-sm text-earth-dark/60 mb-6">
          <Link href="/" className="hover:text-earth-accent transition-colors">Trang chủ</Link>
          <span className="mx-2">/</span>
          <Link href="/du-an" className="hover:text-earth-accent transition-colors">Dự án</Link>
          <span className="mx-2">/</span>
          <span className="text-earth-dark font-medium">Chi tiết</span>
        </div>
        
        {project.category && (
          <p className="text-earth-accent font-bold tracking-wider uppercase text-sm mb-4">{project.category}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-8 leading-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-earth-dark/80 mb-12">
          {project.client && (
            <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
              <span className="font-semibold text-earth-dark mb-1">Khách hàng</span>
              <span>{project.client}</span>
            </div>
          )}
          {project.completionDate && (
            <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
              <span className="font-semibold text-earth-dark mb-1">Thời gian</span>
              <span>{project.completionDate}</span>
            </div>
          )}
          {project.role && (
            <div className="flex flex-col items-center px-6 py-2 border-r border-earth/20 last:border-0">
              <span className="font-semibold text-earth-dark mb-1">Vai trò</span>
              <span>{project.role}</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. ẢNH COVER ĐÃ CÓ DỮ LIỆU THẬT */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="w-full h-80 md:h-[500px] bg-earth-light/50 rounded-3xl overflow-hidden shadow-lg border border-earth/10 flex items-center justify-center relative group">
          {project.imageUrl ? (
            <Image 
              src={project.imageUrl} 
              alt={project.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <span className="text-earth-dark/40 font-medium text-lg z-10">[Dự án chưa cập nhật ảnh]</span>
          )}
          <div className="absolute inset-0 bg-earth/5 group-hover:bg-earth/10 transition-colors duration-500 z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* 3. NỘI DUNG CASE STUDY */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="prose prose-lg prose-earth max-w-none text-earth-dark/80 leading-relaxed space-y-8">
          {project.content ? (
             <PortableText value={project.content} />
          ) : (
            <p className="text-center">Đang cập nhật nội dung chi tiết cho dự án này...</p>
          )}
        </div>
      </section>

      {/* 4. CALL TO ACTION CHUYỂN TIẾP */}
      <section className="max-w-4xl mx-auto px-6 mt-20 text-center">
        <div className="p-12 bg-earth-dark text-white rounded-3xl shadow-xl relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-4 relative z-10">Bạn muốn có một dự án tương tự?</h2>
          <p className="text-earth-light/80 mb-8 max-w-lg mx-auto relative z-10">
            Hãy để mình giúp bạn xây dựng bộ nhận diện thương hiệu hoặc lập trình một website chuyên nghiệp.
          </p>
          <Link href="/lien-he" className="inline-block px-8 py-4 bg-white text-earth-dark font-bold rounded-full hover:bg-earth-light hover:scale-105 transition-all duration-300 shadow-lg relative z-10">
            Trao đổi ý tưởng ngay
          </Link>
        </div>
      </section>

    </main>
  );
}