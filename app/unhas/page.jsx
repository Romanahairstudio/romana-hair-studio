export const metadata = {
  title: 'Unhas na Vila Romana | Romana Hair Studio',
  description: 'Veja resultados de unhas realizados no Romana Hair Studio, na Vila Romana, São Paulo, e agende seu horário.',
}

const resultados = [
  { src: '/images/unhas-resultado-01.webp', alt: 'Unhas vermelhas longas com acabamento brilhante' },
  { src: '/images/unhas-resultado-02.webp', alt: 'Unhas em azul claro e rosa com detalhe delicado' },
  { src: '/images/unhas-resultado-03.webp', alt: 'Unhas nude longas em formato amendoado' },
  { src: '/images/unhas-resultado-04.webp', alt: 'Unhas nude quadradas com pontas delicadas' },
  { src: '/images/unhas-resultado-05.webp', alt: 'Unhas em azul intenso com acabamento brilhante' },
  { src: '/images/unhas-resultado-06.webp', alt: 'Unhas rosadas com brilho suave nas pontas' },
  { src: '/images/unhas-resultado-07.webp', alt: 'Unhas com francesinha preta e detalhes de brilho' },
]

export default function UnhasPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20Unhas%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#c9a34d] selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_55%_0%,rgba(201,163,77,0.13),transparent_40%),linear-gradient(180deg,#050505_0%,#000_60%)] pointer-events-none" />
      <header className="relative z-20 border-b border-white/10 bg-black/80">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-white/90 ml-12 -mt-1">Hair Studio</span>
          </a>
          <a href="/" className="text-[#d6b35f] text-sm font-bold hover:text-white transition">← Página inicial</a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-5">Romana Hair Studio · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[78px] leading-[0.97] tracking-[-0.035em] mb-7">Unhas para expressar <span className="block italic text-[#d6b35f]">o seu estilo.</span></h1>
            <p className="max-w-xl text-white/75 text-lg lg:text-xl leading-relaxed mb-8">Dos tons clássicos às cores mais marcantes, conheça alguns resultados de unhas feitos no Romana Hair Studio e escolha a sua próxima inspiração.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#d6b35f] px-8 py-5 text-[#d6b35f] font-extrabold uppercase tracking-wide hover:bg-[#d6b35f] hover:text-black transition">Ver resultados</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-2xl bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-8 py-5 text-black font-extrabold uppercase tracking-wide shadow-[0_18px_50px_rgba(201,163,77,0.25)] hover:-translate-y-1 transition">Agendar pelo WhatsApp</a>
            </div>
          </div>
          <div className="relative rounded-[34px] border border-white/10 bg-[#101010] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <img src="/images/unhas-resultado-07.webp" alt="Unhas com francesinha preta e detalhes de brilho, resultado do Romana Hair Studio" className="w-full aspect-[4/5] object-contain" />
          </div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 bg-[#050505] px-5 lg:px-10 py-20 lg:py-24 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-4">Resultados reais</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Inspirações de <span className="italic text-[#d6b35f]">unhas no Romana.</span></h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">Explore cores, formatos e acabamentos realizados no salão. Converse com nossa equipe para escolher o visual do seu próximo atendimento.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(({ src, alt }) => (
              <figure key={src} className="aspect-[4/5] rounded-[26px] overflow-hidden bg-[#101010] border border-white/10">
                <img src={src} alt={`${alt}, trabalho do Romana Hair Studio`} loading="lazy" className="h-full w-full object-contain" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto border-t border-white/10 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[#d6b35f] uppercase tracking-[0.25em] text-sm font-bold mb-3">Seu atendimento</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Qual vai ser a sua próxima cor?</h2>
            <p className="text-white/65 mt-3 max-w-xl">Envie sua referência e agende um horário com nossa equipe pelo WhatsApp.</p>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex self-start sm:self-auto rounded-xl border border-[#d6b35f] px-7 py-4 text-[#d6b35f] font-bold hover:bg-[#d6b35f] hover:text-black transition">Agendar minhas unhas</a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-white/55">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
