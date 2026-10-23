export const metadata = {
  title: 'Bronzeamento na Vila Romana | Romana Bronze',
  description: 'Conheça os resultados de bronzeamento do Romana Bronze, na Vila Romana, São Paulo. Veja a galeria e converse com a equipe para agendar.',
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20bronzeamento%20do%20Romana%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20hor%C3%A1rios.'
const resultados = [
  ['01', 'Resultado de bronzeamento na região dos ombros e colo'],
  ['02', 'Resultado de bronzeamento nas costas'],
  ['03', 'Detalhe do resultado de bronzeamento no colo'],
  ['04', 'Resultado de bronzeamento visto de costas'],
  ['05', 'Resultado de bronzeamento com biquíni preto'],
  ['07', 'Detalhe de marcação de bronzeamento no colo'],
  ['08', 'Detalhe de marcação de bronzeamento na cintura'],
  ['09', 'Detalhe de resultado e marcação de bronzeamento'],
]
const botao = 'inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-4 text-white font-bold hover:bg-[#354436] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#465947]'

export default function BronzeamentoPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da]">
      <header className="border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início"><span className="block font-serif italic text-3xl">Romana</span><span className="block font-serif italic text-base ml-12 -mt-1">Hair Studio</span></a>
          <a href="/" className="text-[#465947] text-sm font-bold hover:underline">← Página inicial</a>
        </div>
      </header>
      <section className="px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-5">Romana Bronze · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight mb-7">Seu momento de <span className="block italic text-[#465947]">bronze.</span></h1>
            <p className="text-[#62594f] text-lg leading-relaxed mb-8 max-w-xl">Conheça os resultados do Romana Bronze e converse com nossa equipe sobre o atendimento, as opções disponíveis e os horários.</p>
            <div className="flex flex-col sm:flex-row gap-4"><a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-4 text-[#465947] font-bold hover:bg-[#dce5da] transition">Ver resultados</a><a href={whatsapp} target="_blank" rel="noreferrer" className={botao}>Conversar pelo WhatsApp</a></div>
          </div>
          <figure className="rounded-[30px] overflow-hidden border border-[#352e2a]/15 bg-[#eadfd2]">
            <img src="/images/bronzeamento-artificial.jpg" alt="Máquina horizontal de bronzeamento aberta — imagem ilustrativa" fetchPriority="high" className="w-full aspect-[4/5] object-contain" />
            <figcaption className="px-5 py-3 text-xs text-[#62594f] bg-[#faf7f2]">Imagem ilustrativa do equipamento.</figcaption>
          </figure>
        </div>
      </section>
      <section id="resultados" className="bg-[#eadfd2]/45 px-5 lg:px-10 py-16 lg:py-24 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-4">Galeria do Romana Bronze</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Resultados <span className="italic text-[#465947]">do nosso salão.</span></h2>
          <p className="text-[#62594f] text-lg max-w-2xl mb-10">Veja as fotos de resultados do Romana. A tonalidade e a marcação variam de pessoa para pessoa.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(([id,alt]) => <figure key={id} className="aspect-[4/5] rounded-[24px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15"><img src={`/images/bronze-resultado-${id}.webp`} alt={`${alt}, Romana Bronze`} loading="lazy" className="w-full h-full object-contain" /></figure>)}
          </div>
        </div>
      </section>
      <section className="px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div><p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-4">Seu atendimento</p><h2 className="font-serif text-3xl lg:text-5xl mb-5">Vamos conversar sobre <span className="italic text-[#465947]">o seu bronze?</span></h2><p className="text-[#62594f] leading-relaxed">Fale com nossa equipe para consultar valores, horários e orientações antes do atendimento.</p></div>
          <div className="rounded-3xl bg-[#dce5da] p-7 sm:p-9"><p className="font-semibold mb-3">Rua Roma, 236 · Vila Romana · São Paulo</p><p className="text-[#62594f] mb-6">Terça a sexta, 10h às 19h<br />Sábado, 9h às 19h</p><a href={whatsapp} target="_blank" rel="noreferrer" className={botao}>Consultar horários</a><a href="https://www.instagram.com/romanabronze/" target="_blank" rel="noreferrer" className="block text-[#465947] font-semibold mt-5 hover:underline">@romanabronze ↗</a></div>
        </div>
      </section>
      <footer className="border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Bronze · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
