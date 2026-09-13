import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Kamar', href: '#kamar' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-charcoal-900/95 backdrop-blur-md text-white py-3 shadow-lg'
            : 'bg-transparent text-white py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wide leading-none">SUMATRA <span className="text-gold-500">97</span></span>
              <span className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-80 group-hover:text-gold-500 transition-colors">Kost Executive</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-gold-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#kontak"
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 text-sm font-semibold rounded-sm transition-colors"
            >
              Hubungi Kami
            </a>
          </nav>

          <button 
            className="md:hidden p-2 -mr-2 text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal-900 text-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide leading-none">SUMATRA <span className="text-gold-500">97</span></span>
                <span className="text-[10px] tracking-[0.2em] uppercase mt-1 opacity-80">Kost Executive</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col py-8 px-6 gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-serif border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#kontak"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-gold-500 text-white px-6 py-4 text-center font-semibold rounded-sm mt-auto"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
