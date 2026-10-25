export const metadata = {
  title: 'Penteados com Rafaela | Romana Hair Studio',
  description: 'Conheça os penteados realizados por Rafaela no Romana Hair Studio, na Vila Romana, São Paulo. Veja resultados reais e agende seu atendimento.',
  alternates: { canonical: '/penteados' },
}

const penteados = [
  { src: '/images/rafaela-penteado-0486.webp', alt: 'Penteado semipreso com trança e ondas castanhas' },
  { src: '/images/rafaela-penteado-0487.webp', alt: 'Coque elaborado em cabelo castanho' },
  { src: '/images/rafaela-penteado-0488.webp', alt: 'Coque baixo com mechas soltas' },
  { src: '/images/rafaela-penteado-0489.webp', alt: 'Penteado semipreso loiro com cachos' },
  { src: '/images/rafaela-penteado-0490.webp', alt: 'Trança lateral em cabelo loiro' },
  { src: '/images/rafaela-penteado-0491.webp', alt: 'Penteado com ondas longas e tiara' },
  { src: '/images/rafaela-penteado-0492.webp', alt: 'Penteado semipreso acobreado com ondas' },
]

export default function PenteadosPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20penteados%20e%20gostaria%20de%20conversar%20sobre%20um%20agendamento%20com%20a%20Rafaela.'

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <header className="relative z-20 border-b border-[#352e2a]/15 bg-[#faf7f2]">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-[#62594f] ml-12 -mt-1">Hair Studio</span>
          </a>
          <a href="/" className="text-[#465947] text-sm font-bold hover:text-[#352e2a] transition">← Página inicial</a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">Romana Hair Studio · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[78px] leading-[0.97] tracking-[-0.035em] mb-7">Penteados para o seu <span className="block italic text-[#465947]">momento especial.</span></h1>
            <p className="max-w-xl text-[#62594f] text-lg lg:text-xl leading-relaxed mb-8">Rafaela cria penteados pensando no seu estilo, na ocasião e em como você quer se sentir. Converse com nossa equipe para planejar sua produção.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-5 text-[#465947] font-extrabold uppercase tracking-wide hover:bg-[#465947] hover:text-white transition">Ver penteados</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-5 text-white font-extrabold uppercase tracking-wide shadow-sm hover:-translate-y-1 transition">Conversar pelo WhatsApp</a>
            </div>
          </div>
          <div className="relative rounded-[34px] border border-[#352e2a]/15 bg-[#fffdf9] overflow-hidden shadow-sm">
            <img src="/images/rafaela-penteados.webp" alt="Rafaela, profissional de penteados do Romana Hair Studio" className="w-full aspect-[4/5] object-cover object-top" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#faf7f2]/95 via-[#faf7f2]/30 to-transparent px-7 pb-8 pt-24">
              <h2 className="font-serif text-4xl">Rafaela</h2>
              <p className="text-[#62594f] mt-1">Profissional de penteados</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 bg-[#eadfd2]/45 px-5 lg:px-10 py-20 lg:py-24 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Trabalhos da Rafaela</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Penteados <span className="italic text-[#465947]">realizados no Romana.</span></h2>
          <p className="text-[#62594f] text-lg leading-relaxed max-w-2xl mb-10">Diferentes formas de prender, trançar e valorizar o cabelo para cada ocasião.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {penteados.map(({ src, alt }, index) => (
              <figure key={src} className={`aspect-[4/5] rounded-[26px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15 ${index === 6 ? 'lg:col-start-2' : ''}`}>
                <img src={src} alt={`${alt}, trabalho da Rafaela no Romana Hair Studio`} loading="lazy" className="h-full w-full object-cover object-center" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto border-t border-[#352e2a]/15 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-3">Seu atendimento</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Vamos planejar o penteado?</h2>
            <p className="text-[#62594f] mt-3 max-w-xl">Conte a data, a ocasião e o estilo que você imagina. Nossa equipe ajuda você a agendar com a Rafaela.</p>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex self-start sm:self-auto rounded-xl border border-[#465947] px-7 py-4 text-[#465947] font-bold hover:bg-[#465947] hover:text-white transition">Agendar com a Rafaela</a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
