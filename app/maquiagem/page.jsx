import HeaderBooking from '../HeaderBooking'

const title = 'Maquiagem Profissional na Vila Romana | Romana Hair Studio'
const description = 'Maquiagem profissional na Vila Romana, São Paulo, para festas, casamentos e formaturas: express por R$ 250 e completa por R$ 300. Veja trabalhos reais e agende.'

export const metadata = {
  title,
  description,
  alternates: { canonical: '/maquiagem' },
  openGraph: {
    title,
    description,
    url: '/maquiagem',
    type: 'website',
    images: [{ url: '/images/maquiagem-resultado-08.webp', alt: 'Maquiagem com olhos delineados e brilho, trabalho do Romana Hair Studio' }],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.romanahairstudio.com.br/maquiagem#service",
  "name": "Maquiagem profissional",
  "serviceType": "Maquiagem",
  "description": "Maquiagem profissional para festas, casamentos, formaturas e ocasiões especiais no Romana Hair Studio, Vila Romana, São Paulo.",
  "url": "https://www.romanahairstudio.com.br/maquiagem",
  "provider": {
    "@id": "https://www.romanahairstudio.com.br/#business"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Vila Romana, São Paulo - SP"
  },
  "offers": [
    { "@type": "Offer", "name": "Maquiagem express", "price": 250, "priceCurrency": "BRL", "url": "https://www.romanahairstudio.com.br/maquiagem" },
    { "@type": "Offer", "name": "Maquiagem completa", "price": 300, "priceCurrency": "BRL", "url": "https://www.romanahairstudio.com.br/maquiagem" }
  ]
}

const perguntas = [
  {
    q: 'Quanto custa a maquiagem no Romana?',
    a: 'A maquiagem express custa R$ 250 e a maquiagem completa custa R$ 300. São valores fixos, sem acréscimos.',
  },
  {
    q: 'Vocês fazem maquiagem para noivas?',
    a: 'Sim. Para noivas temos o Dia da Noiva, a partir de R$ 2.000, que inclui maquiagem, penteado, teste de maquiagem e penteado, auxílio na vestimenta e uma sala dedicada. Madrinhas, mães e convidadas podem agendar a maquiagem avulsa.',
  },
  {
    q: 'Posso fazer maquiagem e penteado no mesmo dia?',
    a: 'Sim. É só avisar na hora de agendar que a equipe organiza os horários. O penteado custa a partir de R$ 200.',
  },
  {
    q: 'Qual o horário de atendimento?',
    a: 'De terça a sexta, das 10h às 19h, e aos sábados, das 9h às 19h. Para eventos fora desse horário, fale com a equipe pelo WhatsApp.',
  },
  {
    q: 'Onde fica o salão? Tem estacionamento?',
    a: 'Estamos na Rua Roma, 236, na Vila Romana, perto da Lapa, de Perdizes e de Pinheiros. Temos estacionamento gratuito no local.',
  },
  {
    q: 'Quais as formas de pagamento?',
    a: 'Aceitamos cartão de crédito, débito, dinheiro e Pix.',
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": perguntas.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a },
  })),
}

const ocasioes = [
  { titulo: 'Festas e casamentos', texto: 'Maquiagem para convidadas, madrinhas e mães, com acabamento que dura a noite toda e combina com o seu look.' },
  { titulo: 'Formaturas', texto: 'Uma produção marcante para a colação e o baile, pensada para ficar bonita pessoalmente e nas fotos.' },
  { titulo: 'Aniversários e comemorações', texto: 'Do visual mais leve ao mais elaborado, para celebrar a sua data do jeito que você imaginou.' },
  { titulo: 'Fotos e eventos', texto: 'Maquiagem para ensaios fotográficos, eventos de trabalho e outros momentos em que você quer estar impecável.' },
]

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
  const whatsapp = 'https://wa.me/5511961990862?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20Maquiagem%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="relative z-20 border-b border-[#352e2a]/15 bg-[#faf7f2]">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-[#62594f] ml-12 -mt-1">Hair Studio</span>
          </a>
          <div className="internal-header-actions"><a href="/" className="text-[#465947] text-sm font-bold hover:text-[#352e2a] transition">← Página inicial</a><HeaderBooking whatsapp={whatsapp} /></div>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">Romana Hair Studio · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[78px] leading-[0.97] tracking-[-0.035em] mb-7">Maquiagem profissional <span className="block italic text-[#465947]">na Vila Romana.</span></h1>
            <p className="max-w-xl text-[#62594f] text-lg lg:text-xl leading-relaxed mb-8">Uma produção pensada para destacar seus traços e combinar com você no seu momento especial. Fazemos maquiagem para festas, casamentos, formaturas e comemorações no Romana Hair Studio, na Rua Roma, com estacionamento gratuito.</p>
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

      <section id="ocasioes" className="relative z-10 px-5 lg:px-10 pb-20 lg:pb-24">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Para cada ocasião</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-10">Maquiagem para <span className="italic text-[#465947]">festas e eventos.</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ocasioes.map(({ titulo, texto }) => (
              <div key={titulo} className="rounded-[26px] border border-[#352e2a]/15 bg-[#fffdf9] p-7">
                <h3 className="font-serif text-2xl mb-3">{titulo}</h3>
                <p className="text-[#62594f] leading-relaxed">{texto}</p>
              </div>
            ))}
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

      <section id="valores" className="relative z-10 px-5 lg:px-10 pb-16">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-3">Valores</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-8">Escolha sua maquiagem</h2>
          <div className="rounded-3xl border border-[#352e2a]/15 overflow-hidden">
            {[['Maquiagem express', 'R$ 250,00'], ['Maquiagem completa', 'R$ 300,00']].map(([nome, preco]) => <div key={nome} className="flex items-center justify-between gap-5 px-5 sm:px-8 py-5 border-b last:border-b-0 border-[#352e2a]/15">
              <span className="text-[#62594f]">{nome}</span><strong className="text-[#465947] whitespace-nowrap">{preco}</strong>
            </div>)}
          </div>
          <p className="text-[#62594f] leading-relaxed mt-6">Valores fixos. Quer completar a produção? Combine a maquiagem com um <a href="/penteados" className="text-[#465947] font-bold underline underline-offset-4 hover:text-[#352e2a]">penteado para festa</a> ou com um <a href="/sobrancelha" className="text-[#465947] font-bold underline underline-offset-4 hover:text-[#352e2a]">design de sobrancelha</a> e <a href="/cilios" className="text-[#465947] font-bold underline underline-offset-4 hover:text-[#352e2a]">alongamento de cílios</a> alguns dias antes do evento.</p>
        </div>
      </section>

      <section id="duvidas" className="relative z-10 px-5 lg:px-10 pb-16">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-3">Dúvidas frequentes</p>
          <h2 className="font-serif text-3xl lg:text-4xl mb-8">Perguntas sobre maquiagem</h2>
          <div className="rounded-3xl border border-[#352e2a]/15 overflow-hidden bg-[#fffdf9]">
            {perguntas.map(({ q, a }) => (
              <details key={q} className="group border-b last:border-b-0 border-[#352e2a]/15 px-5 sm:px-8 py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-5 font-bold text-[#352e2a]">
                  <h3 className="text-base sm:text-lg">{q}</h3>
                  <span className="text-[#465947] text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="text-[#62594f] leading-relaxed mt-3">{a}</p>
              </details>
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
      <footer className="relative z-10 border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">
        <nav aria-label="Outros serviços" className="mb-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <span>Veja também:</span>
          <a href="/penteados" className="text-[#465947] font-bold hover:text-[#352e2a]">Penteados</a>
          <a href="/cabeleireiro" className="text-[#465947] font-bold hover:text-[#352e2a]">Cabeleireiro</a>
          <a href="/sobrancelha" className="text-[#465947] font-bold hover:text-[#352e2a]">Sobrancelha</a>
          <a href="/cilios" className="text-[#465947] font-bold hover:text-[#352e2a]">Cílios</a>
          <a href="/unhas" className="text-[#465947] font-bold hover:text-[#352e2a]">Unhas</a>
        </nav>
        Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo
      </footer>
    </main>
  )
}
