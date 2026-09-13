import { Star, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[600px] flex items-center justify-center">
      {/* Subtle Background Pattern/Gradient instead of a fake photo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-800 via-charcoal-900 to-charcoal-900" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-white text-sm"
        >
          <div className="flex text-gold-500">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-medium">4,5 / 5 · 112 Reviews</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
        >
          Kost Executive di <span className="text-gold-500">Jantung Gubeng</span>, Surabaya
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl font-light"
        >
          Sumatra 97 menawarkan pilihan hunian yang praktis dan nyaman di kawasan strategis Gubeng, Surabaya.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#kontak"
            className="w-full sm:w-auto bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-base font-semibold rounded-sm transition-colors text-center"
          >
            Hubungi Kami
          </a>
          <a 
            href="#lokasi"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 text-base font-semibold rounded-sm transition-colors text-center flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Lihat Lokasi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
