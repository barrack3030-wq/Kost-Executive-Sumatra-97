import { Info } from 'lucide-react';

export function Facilities() {
  return (
    <section id="fasilitas" className="py-24 bg-charcoal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Fasilitas Kami</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16">
          Fasilitas Properti
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-charcoal-800 border border-white/10 p-10 rounded-sm flex flex-col items-center">
            <div className="bg-gold-500/20 p-4 rounded-full mb-6">
              <Info className="w-8 h-8 text-gold-500" />
            </div>
            <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed mb-8">
              Hubungi kami untuk mengetahui informasi lengkap dan aktual mengenai fasilitas yang tersedia di Kost Executive Sumatra 97.
            </p>
            <a 
              href="#kontak"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-sm transition-colors"
            >
              Hubungi Pengelola
            </a>
          </div>

          {/* Placeholder Grid for future data integration */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 opacity-30 pointer-events-none grayscale">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="border border-white/20 p-6 flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-sm"></div>
                <div className="w-20 h-2 bg-white/10 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
