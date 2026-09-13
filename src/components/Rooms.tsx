import { ImagePlaceholder } from './ImagePlaceholder';

export function Rooms() {
  return (
    <section id="kamar" className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Akomodasi</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-16">
          Pilihan Kamar
        </h2>

        <div className="max-w-2xl mx-auto bg-white border border-beige-200 shadow-sm rounded-sm overflow-hidden text-left">
          <div className="h-[300px] overflow-hidden bg-beige-100">
            <ImagePlaceholder text="Foto Kamar" />
          </div>
          <div className="p-8 md:p-10">
            <h3 className="font-serif text-3xl font-bold text-charcoal-900 mb-4">Executive Room</h3>
            <div className="w-12 h-1 bg-gold-500 mb-6"></div>
            
            <p className="text-charcoal-800/70 mb-8 italic">
              "Informasi detail mengenai kamar, ukuran, tipe, harga, dan ketersediaan dapat ditanyakan langsung kepada pengelola."
            </p>
            
            <a 
              href="#kontak"
              className="inline-flex justify-center items-center w-full sm:w-auto bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-sm transition-colors"
            >
              Tanyakan Ketersediaan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
