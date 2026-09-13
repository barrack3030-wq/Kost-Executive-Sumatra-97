import { ImagePlaceholder } from './ImagePlaceholder';

const images = [
  { category: 'Exterior', span: 'col-span-12 md:col-span-8 row-span-2 h-[500px]' },
  { category: 'Rooms', span: 'col-span-12 md:col-span-4 h-[240px]' },
  { category: 'Common Area', span: 'col-span-12 md:col-span-4 h-[240px]' },
  { category: 'Bathroom', span: 'col-span-12 md:col-span-4 h-[300px]' },
  { category: 'Interior', span: 'col-span-12 md:col-span-8 h-[300px]' },
];

export function Gallery() {
  return (
    <section id="galeri" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Portofolio Visual</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-900">
            Galeri Properti
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-min">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`${img.span} relative rounded-sm bg-white overflow-hidden`}
            >
              <ImagePlaceholder text={`Photo: ${img.category}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
