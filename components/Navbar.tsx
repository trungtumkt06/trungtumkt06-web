"use client"; 

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Trang Chủ", href: "/" },
    { name: "Giới Thiệu", href: "/gioi-thieu" },
    { name: "Sản Phẩm", href: "/san-pham" },
    { name: "Dự Án", href: "/du-an" },
    { name: "Bài Viết", href: "/bai-viet" },
    { name: "Liên Hệ", href: "/lien-he" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-earth-light/80 backdrop-blur-md border-b border-earth/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-earth-dark tracking-tight">
          <Link href="/">Trung Tự<span className="text-earth-accent">.</span></Link>
        </div>
        
        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium text-earth-dark/80">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={`relative hover:text-earth-accent transition-colors duration-300 py-1
                    ${isActive ? 'text-earth-accent font-semibold' : ''}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-earth-accent rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Nút CTA Desktop */}
        <div className="hidden md:block">
          <Link href="/lien-he" className="bg-earth text-white px-6 py-2.5 rounded-full hover:bg-earth-accent shadow-sm hover:shadow-md transition-all duration-300 font-medium">
            Hợp Tác
          </Link>
        </div>

        {/* Nút Toggle Menu Mobile - FIX TẠI ĐÂY */}
        <button 
          type="button" // 1. Thêm type="button" để tránh lỗi trình duyệt di động hiểu nhầm
            className="md:hidden text-earth-dark focus:outline-none p-2 -mr-2 relative z-60"
            onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
            {/* 3. Thêm pointer-events-none để click không bị kẹt vào icon SVG */}
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu thả xuống cho Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-earth/10 shadow-lg absolute w-full left-0 z-50">
          <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-earth-dark">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`block py-2 ${isActive ? 'text-earth-accent font-semibold' : 'hover:text-earth-accent'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4 border-t border-earth/10">
              <Link
                href="/lien-he"
                className="inline-block bg-earth text-white px-6 py-2.5 rounded-full hover:bg-earth-accent transition-all duration-300 w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Hợp Tác
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}