export const metadata = {
  title: 'Maquiagem na Vila Romana | Romana Hair Studio',
  description: 'Maquiagem profissional na Vila Romana, São Paulo, para festas e ocasiões especiais. Veja trabalhos reais do Romana Hair Studio e consulte horários.',
  alternates: { canonical: '/maquiagem' },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.romanahairstudio.com.br/maquiagem#service",
  "name": "Maquiagem profissional",
  "description": "Serviço de maquiagem profissional para festas e ocasiões especiais no Romana Hair Studio, Vila Romana, São Paulo.",
  "url": "https://www.romanahairstudio.com.br/maquiagem",
  "provider": {
    "@id": "https://www.romanahairstudio.com.br/#business"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Vila Romana, São Paulo - SP"
  }
}

const resultados = [
  { src: '/images/maquiagem-resultado-01.webp', alt: 'Maquiagem com olhos esfumados e batom rosado' },
  { src: '/images/maquiagem-resultado-02.webp', alt: 'Maquiagem de olhos em tons quentes com delineado' },
  { src: '/images/maquiagem-resultado-03.webp', alt: 'Maquiagem iluminada com olhos marcados e batom nude' },
  { src: '/images/maquiagem-resultado-04.webp', alt: 'Maquiagem de olhos esfumados com batom vermelho' },
  { src: '/images/maquiagem-resultado-05.webp', alt: 'Maquiagem com olhos marcados e batom vermelho' },
  { src: '/images/maquiagem-resultado-06.webp', alt: 'Maquiagem glamourosa com cabelos escuros e batom nude' },
  { src: '/images/maquiagem-resultado-07.webp', alt: 'Maquiagem iluminada em tons rosados' },
  { src: '/images/maquiagem-resultado-08.webp', alt: 'Maquiagem com olhos delineados e brilho' },
  { src: '/images/maquiagem-resultado-09.webp', alt: 'Maquiagem com olhos esfumados e batom vermelho rosado' },
  { src: '/images/maquiagem-resultado-10.webp', alt: 'Maquiagem de olhos esfumados com acabamento luminoso' },
  { src: '/images/maquiagem-resultado-11.webp', alt: 'Maquiagem em tons quentes com batom nude' },
]

export default function MaquiagemPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20Maquiagem%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[78px] leading-[0.97] tracking-[-0.035em] mb-7">Maquiagem para <span className="block italic text-[#465947]">seu momento especial.</span></h1>
            <p className="max-w-xl text-[#62594f] text-lg lg:text-xl leading-relaxed mb-8">Uma produção pensada para destacar seus traços e combinar com você. Veja alguns resultados de maquiagem realizados no Romana Hair Studio.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-5 text-[#465947] font-extrabold uppercase tracking-wide hover:bg-[#465947] hover:text-white transition">Ver maquiagens</a>
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-5 text-white font-extrabold uppercase tracking-wide shadow-sm hover:-translate-y-1 transition">Agendar pelo WhatsApp</a>
            </div>
          </div>
          <div className="relative rounded-[34px] border border-[#352e2a]/15 bg-[#fffdf9] overflow-hidden shadow-sm">
            <img src="/images/maquiagem-resultado-08.webp" alt="Maquiagem com olhos delineados e brilho, trabalho do Romana Hair Studio" className="w-full aspect-[4/5] object-contain" />
          </div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 bg-[#eadfd2]/45 px-5 lg:px-10 py-20 lg:py-24 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Resultados reais</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Maquiagens <span className="italic text-[#465947]">feitas no Romana.</span></h2>
          <p className="text-[#62594f] text-lg leading-relaxed max-w-2xl mb-10">Inspire-se em diferentes cores e acabamentos para festas, comemorações e outros momentos especiais.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(({ src, alt }) => (
              <figure key={src} className="aspect-[4/5] rounded-[26px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15">
                <img src={src} alt={`${alt}, trabalho do Romana Hair Studio`} loading="lazy" className="h-full w-full object-contain" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto border-t border-[#352e2a]/15 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-3">Seu atendimento</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Vamos planejar sua produção?</h2>
            <p className="text-[#62594f] mt-3 max-w-xl">Conte para nossa equipe a data e o estilo que você deseja para agendar sua maquiagem.</p>
          </div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex self-start sm:self-auto rounded-xl border border-[#465947] px-7 py-4 text-[#465947] font-bold hover:bg-[#465947] hover:text-white transition">Agendar maquiagem</a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
