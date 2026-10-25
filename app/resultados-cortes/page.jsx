export const metadata = {
  title: 'Resultados da equipe | Romana Hair Studio',
  description: 'Conheça resultados de cortes, coloração e penteados realizados por John, Selma, Vytor e Rafaela no Romana Hair Studio, na Vila Romana, São Paulo.',
  alternates: { canonical: '/resultados-cortes' },
}

const professionals = [
  {
    name: 'John',
    id: 'john',
    specialty: 'Coloração, Cortes & Curtos e Mechas',
    portrait: '/images/Johnf.webp',
    works: [
      { src: '/images/john-img_5887.webp', alt: 'Corte chanel com franja e acabamento liso' },
      { src: '/images/john-img_6240.webp', alt: 'Corte longo em camadas com contorno do rosto' },
      { src: '/images/j2.webp', alt: 'Cabelo longo com camadas e contorno do rosto' },
      { src: '/images/john-img_8135.webp', alt: 'Corte longo em camadas com pontas modeladas' },
      { src: '/images/john-img_8190.webp', alt: 'Corte bob acobreado visto de perfil' },
      { src: '/images/john-img_8513.webp', alt: 'Corte médio em camadas com mechas e movimento' },
      { src: '/images/j3.webp', alt: 'Corte feminino em camadas com movimento' },
      { src: '/images/john-img_7884.webp', alt: 'Corte curto loiro com textura e movimento' },
      { src: '/images/j1-1.webp', alt: 'Cabelo longo com acabamento em camadas' },
    ],
  },
  {
    name: 'Selma',
    id: 'selma',
    specialty: 'Hairstylist, Visagismo, Cortes e Coloração',
    portrait: '/images/Selmaf.webp',
    works: [
      { src: '/images/selma-img_6959.webp', alt: 'Corte pixie grisalho com acabamento leve' },
      { src: '/images/selma-img_5228.webp', alt: 'Corte chanel castanho com contorno arredondado' },
      { src: '/images/s1.webp', alt: 'Corte em camadas com cabelo ruivo' },
      { src: '/images/selma-img_5008.webp', alt: 'Corte bob acobreado com base reta' },
      { src: '/images/selma-img_3980.webp', alt: 'Corte médio castanho em camadas com movimento' },
      { src: '/images/selma-img_6541.webp', alt: 'Corte longo castanho em camadas e pontas modeladas' },
      { src: '/images/selma-img_7673.webp', alt: 'Corte médio loiro em camadas visto de perfil' },
      { src: '/images/s2.webp', alt: 'Corte longo com movimento e finalização ruiva' },
      { src: '/images/s3.webp', alt: 'Cabelo loiro em camadas com acabamento ondulado' },
    ],
  },
  {
    name: 'Vytor',
    id: 'vytor',
    specialty: 'Corte masculino, feminino e barba',
    portrait: '/images/Vytor2.webp',
    works: [
      { src: '/images/v2.webp', alt: 'Corte masculino com degradê e acabamento definido' },
      { src: '/images/v1.webp', alt: 'Corte masculino com degradê e barba alinhada' },
      { src: '/images/v3.webp', alt: 'Corte masculino curto com textura' },
    ],
  },
  {
    name: 'Rafaela',
    id: 'rafaela',
    specialty: 'Penteados para ocasiões especiais',
    portrait: '/images/rafaela-penteados.webp',
    works: [
  { src: '/images/rafaela-penteado-0486.webp', alt: 'Penteado semipreso com trança e ondas castanhas' },
  { src: '/images/rafaela-penteado-0487.webp', alt: 'Coque elaborado em cabelo castanho' },
  { src: '/images/rafaela-penteado-0488.webp', alt: 'Coque baixo com mechas soltas' },
    ],
  },
]

export default function ResultadosCortesPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20resultados%20de%20cortes%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

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

      <section className="relative z-10 px-5 lg:px-10 pt-16 pb-10 lg:pt-24">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.28em] text-sm font-bold mb-4">Romana Hair Studio · Vila Romana</p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight max-w-4xl">Resultados da <span className="italic text-[#465947]">nossa equipe</span></h1>
          <p className="mt-5 max-w-2xl text-[#62594f] text-lg leading-relaxed">Conheça trabalhos da nossa equipe e escolha o profissional com quem você quer conversar sobre seu próximo visual.</p>
          <nav aria-label="Ver resultados por profissional" className="flex flex-wrap gap-3 mt-9">
            {professionals.map(({ name, id }) => <a key={id} href={`#${id}`} className="rounded-full border border-[#465947]/70 px-6 py-3 text-[#465947] font-bold hover:bg-[#465947] hover:text-white transition">{name}</a>)}
          </nav>
        </div>
      </section>

      <div className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto space-y-20">
          {professionals.map(({ name, id, specialty, portrait, works }) => (
            <section id={id} key={id} className="scroll-mt-8 border-t border-[#352e2a]/15 pt-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
                <img src={portrait} alt={`Profissional ${name}`} loading="lazy" className="h-24 w-24 rounded-full object-cover object-top border border-[#465947]/50" />
                <div>
                  <h2 className="font-serif text-4xl lg:text-5xl">{name}</h2>
                  <p className="text-[#62594f] mt-1">{specialty}</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {works.map(({ src, alt }) => (
                  <figure key={src} className="aspect-[4/5] rounded-[24px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15">
                    <img src={src} alt={`${alt}, trabalho de ${name} no Romana Hair Studio`} loading="lazy" className="w-full h-full object-cover object-top" />
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1100px] mx-auto rounded-[30px] border border-[#465947]/30 bg-[#fffdf9] p-8 lg:p-12 text-center">
          <h2 className="font-serif text-3xl lg:text-5xl mb-5">Vamos conversar sobre seu próximo visual?</h2>
          <p className="text-[#62594f] text-lg mb-8">Fale com a equipe pelo WhatsApp e conte qual resultado chamou sua atenção.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-8 py-4 text-white font-extrabold uppercase tracking-wide hover:scale-105 transition">Agendar pelo WhatsApp</a>
        </div>
      </section>
      <footer className="relative z-10 border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
