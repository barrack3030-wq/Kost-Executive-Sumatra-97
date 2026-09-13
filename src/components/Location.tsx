import { MapPin, ExternalLink } from 'lucide-react';

export function Location() {
  return (
    <section id="lokasi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Pusat Kota</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900 mb-8 leading-tight">
              Temukan Kami di Gubeng
            </h2>
            
            <div className="flex gap-4 items-start mb-8 p-6 bg-sand-50 border border-beige-200 rounded-sm">
              <MapPin className="w-6 h-6 text-gold-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-charcoal-900 mb-2">Kost Executive Sumatra 97</h3>
                <p className="text-charcoal-800/80 leading-relaxed">
                  Jl. Sumatera No.97,<br />
                  Gubeng, Kec. Gubeng,<br />
                  Surabaya, Jawa Timur 60281
                </p>
              </div>
            </div>

            <a 
              href="https://maps.google.com/?q=Jl.+Sumatera+No.97,+Gubeng,+Surabaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-charcoal-900 hover:bg-charcoal-800 text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest rounded-sm transition-colors"
            >
              Buka Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="w-full h-[500px] bg-beige-200 rounded-sm overflow-hidden relative border border-beige-200">
            {/* Fallback visual for Map if iframe is restricted or for styling purposes */}
            <div className="absolute inset-0 bg-charcoal-900/5 flex items-center justify-center z-10 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg">
                <MapPin className="w-8 h-8 text-gold-500" />
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3957.6917616197177!2d112.74415!3d-7.27555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnMzIuMCJTIDExMsKwNDQnMzguOSJF!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
