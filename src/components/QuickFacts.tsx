export function QuickFacts() {
  const facts = [
    { value: '4,5 / 5', label: 'Google Rating' },
    { value: '112', label: 'Reviews' },
    { value: 'Gubeng', label: 'Surabaya' },
    { value: 'Executive', label: 'Boarding House' },
  ];

  return (
    <div className="bg-charcoal-900 text-white py-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {facts.map((fact, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <span className="font-serif text-3xl md:text-4xl font-bold text-gold-500 mb-2">{fact.value}</span>
              <span className="text-sm md:text-base text-white/70 uppercase tracking-widest">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
