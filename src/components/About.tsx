import { MapPin, Building2, Train, Stethoscope } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export function About() {
  return (
    <section id="tentang" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Tentang Kami</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-8 leading-tight">
              Hunian Strategis di Gubeng
            </h2>
            <p className="text-charcoal-800/80 text-lg leading-relaxed mb-8">
              Kost Executive Sumatra 97 berada di Jl. Sumatera No.97, Gubeng, Surabaya. Lokasinya berada di kawasan strategis kota dan menjadi pilihan praktis bagi mereka yang membutuhkan hunian dengan akses mudah ke berbagai area penting Surabaya.
            </p>
            
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">Lokasi yang Memudahkan Aktivitas Anda</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Building2, label: 'Tunjungan Plaza' },
                  { icon: Train, label: 'Stasiun Gubeng' },
                  { icon: Stethoscope, label: 'RS Siloam' },
                  { icon: Stethoscope, label: 'Klinik Ferina' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-4 border border-beige-200 rounded-sm">
                    <div className="bg-beige-100 p-3 text-gold-600 rounded-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-charcoal-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gold-500 translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative z-10 w-full h-[600px] shadow-xl bg-white rounded-sm overflow-hidden">
              <ImagePlaceholder text="Lobby / Eksterior" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
