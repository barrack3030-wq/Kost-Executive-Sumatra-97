import { Phone } from 'lucide-react';

export function CTA() {
  return (
    <section id="kontak" className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Sedang Mencari Hunian di <span className="text-gold-500">Gubeng</span>?
        </h2>
        <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          Hubungi Kost Executive Sumatra 97 untuk mendapatkan informasi mengenai kamar, harga, ketersediaan, dan fasilitas.
        </p>
        
        <a 
          href="https://wa.me/62811344561"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-white px-10 py-5 text-lg font-semibold rounded-sm transition-all hover:scale-105 shadow-xl shadow-gold-500/20 w-full sm:w-auto"
        >
          <Phone className="w-5 h-5" />
          Hubungi Kami
        </a>
        <p className="mt-6 text-white/60 font-medium tracking-widest text-sm uppercase">0811-344-561</p>
      </div>
    </section>
  );
}
