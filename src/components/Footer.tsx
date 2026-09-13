export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif text-2xl font-bold tracking-wide leading-none">SUMATRA <span className="text-gold-500">97</span></span>
              <span className="text-[10px] tracking-[0.2em] uppercase mt-1 text-gold-500">Kost Executive</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md">
              Pilihan hunian praktis, nyaman, dan premium di kawasan strategis Gubeng, Surabaya.
            </p>
          </div>

          <div>
            <h4 className="font-semibold tracking-widest uppercase text-sm mb-6 text-white">Alamat</h4>
            <p className="text-white/60 leading-relaxed">
              Jl. Sumatera No.97,<br />
              Gubeng, Surabaya,<br />
              Jawa Timur 60281
            </p>
          </div>

          <div>
            <h4 className="font-semibold tracking-widest uppercase text-sm mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/62811344561" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold-500 transition-colors">
                  0811-344-561 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=Jl.+Sumatera+No.97,+Gubeng,+Surabaya" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold-500 transition-colors">
                  Buka Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Kost Executive Sumatra 97. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
