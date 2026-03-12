import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client'; 

interface Project {
  _id: string;
  title: string;
  slug: string;
  category?: string;
  client?: string;
  imageUrl?: string;
}

// 1. Hàm lấy danh sách Dự án
async function getProjects() {
  const query = `*[_type == "project"] {
    _id,
    title,
    "slug": slug.current,
    "category": category->title, // Lấy tên danh mục từ reference
    client,
    "imageUrl": mainImage.asset->url
  }`;
  return client.fetch(query);
}

// 2. Hàm lấy danh sách Danh mục Dự án
async function getProjectCategories() {
  const query = `*[_type == "projectCategory"] {
    _id,
    title
  }`;
  return client.fetch(query);
}

export default async function ProjectsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string }> 
}) {
  
  const projects: Project[] = await getProjects();
  const sanityCategories = await getProjectCategories();
  const categories = ["Tất cả", ...sanityCategories.map((c: any) => c.title)];

  const resolvedSearchParams = await searchParams;
  const currentCategory = resolvedSearchParams.category || "Tất cả";

  // THỰC HIỆN LỌC DỰ ÁN
  const filteredProjects = currentCategory === "Tất cả" 
    ? projects 
    : projects.filter(p => p.category === currentCategory);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-earth-light/10">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-earth-accent font-semibold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-earth-dark mb-6">
            Dự án <span className="text-earth-accent">Tiêu biểu</span>
          </h1>
        </div>
      </section>

      {/* 2. BỘ LỌC DANH MỤC DỰ ÁN */}
      <section className="mb-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat, index) => {
            const isActive = currentCategory === cat;
            const href = cat === "Tất cả" ? "/du-an" : `/du-an?category=${encodeURIComponent(cat)}`;
            
            return (
              <Link 
                key={index} 
                href={href}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-earth-dark text-white shadow-lg' 
                    : 'bg-white text-earth-dark/60 border border-earth/10 hover:border-earth hover:text-earth'
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. GRID DỰ ÁN */}
      <section className="max-w-7xl mx-auto px-6">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-earth/10 shadow-sm">
            <p className="text-earth-dark/40 italic">Chưa có dự án nào trong lĩnh vực này.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <Link href={`/du-an/${project.slug}`} key={project._id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-earth/10 hover:-translate-y-2">
                <div className="relative h-64 w-full bg-earth-light/40 overflow-hidden">
                  {project.imageUrl ? (
                    <Image src={project.imageUrl} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-earth-dark/20 uppercase font-bold tracking-tighter">No Image</div>
                  )}
                  <div className="absolute inset-0 bg-earth-dark/0 group-hover:bg-earth-dark/20 transition-colors duration-500"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  {project.category && (
                    <p className="text-earth-accent text-xs font-black uppercase tracking-widest mb-2">
                      {project.category}
                    </p>
                  )}
                  <h3 className="text-2xl font-bold text-earth-dark mb-4 group-hover:text-earth transition-colors">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-earth-dark/60 text-sm mt-auto">
                      <strong>Khách hàng:</strong> {project.client}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}