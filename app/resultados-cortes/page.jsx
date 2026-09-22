export const metadata = {
  title: 'Resultados de cortes | Romana Hair Studio',
  description: 'Conheça resultados de cabelo e cortes realizados por John, Selma e Vytor no Romana Hair Studio, na Vila Romana, São Paulo.',
}

const professionals = [
  {
    name: 'John',
    id: 'john',
    specialty: 'Cortes, mechas e cor',
    portrait: '/images/Johnf.webp',
    works: [
      { src: '/images/j3.webp', alt: 'Corte feminino em camadas com movimento' },
      { src: '/images/j2.webp', alt: 'Cabelo longo com camadas e contorno do rosto' },
      { src: '/images/j1-1.webp', alt: 'Cabelo longo com acabamento em camadas' },
    ],
  },
  {
    name: 'Selma',
    id: 'selma',
    specialty: 'Cortes, visagismo e cor',
    portrait: '/images/Selmaf.webp',
    works: [
      { src: '/images/s1.webp', alt: 'Corte em camadas com cabelo ruivo' },
      { src: '/images/s2.webp', alt: 'Corte longo com movimento e finalização ruiva' },
      { src: '/images/s3.webp', alt: 'Cabelo loiro em camadas com acabamento ondulado' },
    ],
  },
  {
    name: 'Vytor',
    id: 'vytor',
    specialty: 'Corte masculino, feminino e barba',
    portrait: '/images/Vytor.webp',
    works: [
      { src: '/images/v2.webp', alt: 'Corte masculino com degradê e acabamento definido' },
      { src: '/images/v1.webp', alt: 'Corte masculino com degradê e barba alinhada' },
      { src: '/images/v3.webp', alt: 'Corte masculino curto com textura' },
    ],
  },
]

export default function ResultadosCortesPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20resultados%20de%20cortes%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#c9a34d] selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,77,0.12),transparent_38%),linear-gradient(180deg,#050505_0%,#000_60%)] pointer-events-none" />
      <header className="relative z-20 border-b border-white/10 bg-black/80">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-white/90 ml-12 -mt-1">Hair Studio</span>
          </a>
          <a href="/" className="text-[#d6b35f] text-sm font-bold hover:text-white transition">← Página inicial</a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 pt-16 pb-10 lg:pt-24">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.28em] text-sm font-bold mb-4">Romana Hair Studio · Vila Romana</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight max-w-4xl">Resultados de <span className="italic text-[#d6b35f]">cortes</span></h1>
          <p className="mt-5 max-w-2xl text-white/70 text-lg leading-relaxed">Conheça trabalhos da nossa equipe e escolha o profissional com quem você quer conversar sobre seu próximo visual.</p>
          <nav aria-label="Ver resultados por profissional" className="flex flex-wrap gap-3 mt-9">
            {professionals.map(({ name, id }) => <a key={id} href={`#${id}`} className="rounded-full border border-[#d6b35f]/70 px-6 py-3 text-[#d6b35f] font-bold hover:bg-[#d6b35f] hover:text-black transition">{name}</a>)}
          </nav>
        </div>
      </section>

      <div className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto space-y-20">
          {professionals.map(({ name, id, specialty, portrait, works }) => (
            <section id={id} key={id} className="scroll-mt-8 border-t border-white/10 pt-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                <img src={portrait} alt={`Profissional ${name}`} loading="lazy" className="h-24 w-24 rounded-full object-cover object-top border border-[#d6b35f]/50" />
                <div>
                  <h2 className="font-serif text-4xl lg:text-5xl">{name}</h2>
                  <p className="text-white/65 mt-1">{specialty}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {works.map(({ src, alt }) => (
                  <figure key={src} className="aspect-[4/5] rounded-[24px] overflow-hidden bg-[#101010] border border-white/10">
                    <img src={src} alt={`${alt}, trabalho de ${name} no Romana Hair Studio`} loading="lazy" className="w-full h-full object-cover object-top" />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1100px] mx-auto rounded-[30px] border border-[#d6b35f]/30 bg-[#101010] p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl mb-5">Vamos conversar sobre o seu corte?</h2>
          <p className="text-white/70 text-lg mb-8">Fale com a equipe pelo WhatsApp e conte qual resultado chamou sua atenção.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-8 py-4 text-black font-extrabold uppercase tracking-wide hover:scale-105 transition">Agendar pelo WhatsApp</a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-white/55">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
