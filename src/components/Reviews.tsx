import { Star } from 'lucide-react';

export function Reviews() {
  return (
    <section className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl font-bold text-charcoal-900 mb-8">
          Ulasan Penghuni
        </h2>
        
        <div className="bg-white max-w-xl mx-auto p-12 border border-beige-200 rounded-sm shadow-sm flex flex-col items-center">
          <div className="text-5xl font-serif font-bold text-charcoal-900 mb-4">4,5 / 5</div>
          <div className="flex gap-1 text-gold-500 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-charcoal-800/70 font-medium mb-8">Berdasarkan 112 Google Reviews</p>
          
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-white px-8 py-3 text-sm font-semibold uppercase tracking-widest rounded-sm transition-colors"
          >
            Lihat Semua Ulasan
          </a>
        </div>
      </div>
    </section>
  );
}
