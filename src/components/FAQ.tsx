import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Di mana lokasi Kost Executive Sumatra 97?",
      a: "Kost Executive Sumatra 97 berlokasi di Jl. Sumatera No.97, Gubeng, Kec. Gubeng, Surabaya, Jawa Timur 60281. Lokasi kami sangat strategis di pusat kota."
    },
    {
      q: "Bagaimana cara mengecek ketersediaan kamar?",
      a: "Ketersediaan kamar bersifat dinamis. Anda dapat menghubungi pengelola secara langsung melalui nomor WhatsApp yang tertera di website ini untuk mendapatkan informasi ketersediaan terbaru."
    },
    {
      q: "Bagaimana cara mengetahui harga kamar?",
      a: "Informasi harga kamar dan tipe akomodasi yang tersedia saat ini dapat Anda peroleh dengan menghubungi tim pengelola kami."
    },
    {
      q: "Bagaimana cara menghubungi pengelola?",
      a: "Anda dapat menghubungi kami melalui telepon atau pesan WhatsApp di nomor 0811-344-561."
    },
    {
      q: "Apa saja fasilitas yang tersedia?",
      a: "Untuk detail lengkap dan aktual mengenai fasilitas kamar maupun fasilitas umum (common area), silakan tanyakan langsung kepada pengelola saat Anda menghubungi kami."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-sand-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Informasi</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-beige-200 bg-white rounded-sm overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-charcoal-900 pr-8">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gold-500 transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-2 text-charcoal-800/80 leading-relaxed border-t border-beige-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
