export const metadata = {
  title: 'Mega Hair na Vila Romana e Lapa | Aplicação e Manutenção',
  description: 'Aplicação e manutenção de Mega Hair na Vila Romana, Lapa, São Paulo. Queratina, fita adesiva, ponto americano, microlink e nanocápsulas. Agende sua avaliação.',
  alternates: { canonical: '/mega-hair' },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.romanahairstudio.com.br/mega-hair#service",
  "name": "Mega Hair e alongamento capilar",
  "description": "Aplicação e manutenção de Mega Hair na Vila Romana e Lapa, São Paulo, com avaliação presencial e técnicas de queratina, fita adesiva, ponto americano, microlink e nanocápsulas.",
  "url": "https://www.romanahairstudio.com.br/mega-hair",
  "provider": {
    "@id": "https://www.romanahairstudio.com.br/#business"
  },
  "areaServed": [
    { "@type": "Place", "name": "Vila Romana, São Paulo - SP" },
    { "@type": "Place", "name": "Lapa, São Paulo - SP" }
  ],
  "serviceType": [
    "Mega Hair com queratina",
    "Mega Hair com fita adesiva",
    "Mega Hair com ponto americano",
    "Mega Hair com microlink",
    "Mega Hair com nanocápsulas",
    "Manutenção de Mega Hair"
  ]
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20Mega%20Hair%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const results = [
  { src: '/images/Cintia2-1.webp', alt: 'Resultado de Mega Hair com acabamento natural' },
  { src: '/images/IMG_3811.webp', alt: 'Resultado de Mega Hair realizado no Romana Hair Studio' },
  { src: '/images/h2.webp', alt: 'Cabelo longo após aplicação de Mega Hair' },
  { src: '/images/depois-paloma.webp', alt: 'Transformação com Mega Hair na Vila Romana' },
  { src: '/images/Mega (2).webp', alt: 'Mega Hair com comprimento e acabamento natural' },
  { src: '/images/Mega (4).webp', alt: 'Resultado de alongamento capilar na Vila Romana' },
  { src: '/images/Mega (6).webp', alt: 'Resultado de Mega Hair com volume e movimento' },
  { src: '/images/Mega (7).webp', alt: 'Cabelo longo após transformação com Mega Hair' },
  { src: '/images/IMG_3916.webp', alt: 'Aplicação de Mega Hair cacheado com acabamento natural' },
  { src: '/images/Mega (10).webp', alt: 'Transformação real de Mega Hair no Romana Hair Studio' },
  { src: '/images/IMG_1200.webp', alt: 'Resultado real de Mega Hair no Romana Hair Studio' },
  { src: '/images/IMG_4374.webp', alt: 'Mega cacheado no Romana Hair Studio' },
]

const techniques = [
  ['Queratina', 'Aplicação distribuída em mechas e planejada conforme a densidade e o objetivo de cada cliente.'],
  ['Fita adesiva', 'Opção avaliada para distribuir os fios em faixas e buscar um acabamento discreto e integrado.'],
  ['Ponto americano', 'Técnica selecionada de acordo com a estrutura do cabelo, o volume desejado e a rotina da cliente.'],
  ['Microlink', 'Alternativa escolhida após a análise dos fios e do resultado esperado para a transformação.'],
  ['Nanocápsulas', 'Pontos pequenos que podem favorecer um acabamento delicado, conforme a indicação profissional.'],
]

const care = [
  ['Higienização cuidadosa', 'Orientamos a lavagem e a secagem adequadas para preservar os fios e os pontos de aplicação.'],
  ['Manutenção programada', 'Fazemos manutenção de Mega Hair na Vila Romana, próximo à Lapa. Em geral, o intervalo é de 60 a 90 dias, variando conforme o crescimento do cabelo, a técnica e os cuidados de cada cliente.'],
  ['Rotina personalizada', 'Cada cabelo recebe recomendações próprias de escovação, produtos e cuidados em casa.'],
]

const faqs = [
  ['Quais técnicas vocês oferecem?', 'Trabalhamos com queratina, fita adesiva, ponto americano, microlink e nanocápsulas. A indicação é definida após avaliarmos o cabelo, o objetivo e a rotina da cliente.'],
  ['Quais opções de cabelo estão disponíveis?', 'Trabalhamos com cabelos brasileiros e vietnamitas. A cliente participa da escolha da opção mais adequada ao resultado desejado.'],
  ['O resultado pode ficar natural?', 'Sim. Cor, textura, quantidade de cabelo e distribuição dos fios são planejadas para buscar integração e movimento natural.'],
  ['Quando devo fazer a manutenção?', 'O intervalo varia de cliente para cliente, mas normalmente consideramos um período de 60 a 90 dias. A orientação final depende da técnica, do crescimento e dos cuidados com os fios.'],
  ['Posso escolher comprimento e volume?', 'Durante a avaliação, alinhamos suas referências e indicamos uma composição compatível com o seu cabelo e com o resultado que você deseja.'],
  ['Como recebo um orçamento?', 'Podemos conversar sobre uma estimativa inicial, mas o orçamento mais assertivo é apresentado após a avaliação presencial do cabelo e do resultado pretendido.'],
  ['Quais são as formas de pagamento?', 'O procedimento pode ser parcelado em até 12 vezes sem juros.'],
]

export default function MegaHairPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2] backdrop-blur-xl border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
          <a href="/" className="leading-none" aria-label="Voltar para a página inicial">
            <div className="font-serif italic text-3xl tracking-wide">Romana</div>
            <div className="font-serif italic text-base text-[#62594f] ml-12 -mt-1">Hair Studio</div>
          </a>
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.12em] font-semibold text-[#62594f]">
            <a className="hover:text-[#465947] transition" href="#tecnicas">Técnicas</a>
            <a className="hover:text-[#465947] transition" href="#resultados">Resultados</a>
            <a className="hover:text-[#465947] transition" href="#avaliacao">Avaliação</a>
            <a className="hover:text-[#465947] transition" href="#cuidados">Cuidados</a>
            <a className="hover:text-[#465947] transition" href="#duvidas">Dúvidas</a>
          </nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#465947] px-5 sm:px-7 py-3 text-white text-sm font-extrabold hover:scale-105 transition">
            Agendar avaliação
          </a>
        </div>
      </header>

      <section className="relative z-10 pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 lg:px-10 overflow-hidden">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">Mega Hair na Vila Romana e Lapa</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[78px] leading-[0.96] tracking-[-0.035em] mb-7">
              Comprimento e volume com
              <span className="block italic text-[#465947]">acabamento natural.</span>
            </h1>
            <p className="max-w-xl text-[#62594f] text-lg lg:text-xl leading-relaxed mb-9">
              Realizamos aplicação e manutenção de Mega Hair na Vila Romana, próximo à Lapa. Cada atendimento começa com uma avaliação personalizada para entender seu cabelo, sua rotina e o resultado que você deseja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-5 text-white font-extrabold uppercase tracking-wide shadow-sm hover:-translate-y-1 transition">
                Agendar pelo WhatsApp
              </a>
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-5 font-extrabold uppercase tracking-wide hover:bg-[#465947] hover:text-white transition">
                Ver resultados
              </a>
            </div>
          </div>
          <div className="relative min-h-[520px] lg:min-h-[650px] rounded-[34px] overflow-hidden border border-[#352e2a]/15 shadow-sm">
            <img src="/images/h2.webp" alt="Resultado de Mega Hair no Romana Hair Studio" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/95 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-[#352e2a]/15 bg-[#faf7f2] backdrop-blur p-5">
              <p className="text-[#465947] uppercase tracking-[0.22em] text-xs font-bold mb-2">Atendimento personalizado</p>
              <p className="text-[#62594f]">Planejamento de cor, comprimento, volume e manutenção para o seu cabelo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto grid md:grid-cols-3 gap-5">
          {[
            ['Resultado sob medida', 'A aplicação é planejada de acordo com sua base, objetivo e estilo.'],
            ['Integração e movimento', 'Buscamos harmonia entre os fios aplicados e o seu cabelo natural.'],
            ['Acompanhamento', 'Você recebe orientações para cuidar do resultado após o atendimento.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-[24px] border border-[#352e2a]/15 bg-[#fffdf9] p-7 lg:p-9">
              <div className="text-[#465947] text-2xl mb-4">✓</div>
              <h2 className="font-serif text-2xl mb-3">{title}</h2>
              <p className="text-[#62594f] leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tecnicas" className="relative z-10 px-5 lg:px-10 py-24 bg-[#eadfd2]/45 scroll-mt-20">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-12 items-end mb-12">
            <div>
              <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Técnicas disponíveis</p>
              <h2 className="font-serif text-4xl lg:text-6xl leading-tight">Uma indicação para cada cabelo e objetivo</h2>
            </div>
            <p className="text-[#62594f] text-lg leading-relaxed max-w-2xl lg:ml-auto">
              Trabalhamos com diferentes técnicas de Mega Hair. A escolha é feita após a avaliação presencial, considerando a base natural, a densidade dos fios, a rotina e o acabamento desejado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
            {techniques.map(([title, text], index) => (
              <article key={title} className="rounded-[24px] border border-[#352e2a]/15 bg-[#fffdf9] p-7 hover:border-[#465947]/55 transition">
                <div className="text-[#465947] text-sm font-black tracking-[0.18em] mb-5">0{index + 1}</div>
                <h3 className="font-serif text-2xl mb-4">{title}</h3>
                <p className="text-[#62594f] text-sm leading-relaxed">{text}</p>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <article className="rounded-[26px] border border-[#465947]/25 bg-[#dce5da] p-8">
              <p className="text-[#465947] uppercase tracking-[0.22em] text-xs font-bold mb-3">Escolha dos cabelos</p>
              <h3 className="font-serif text-3xl mb-4">Opções brasileiras e vietnamitas</h3>
              <p className="text-[#62594f] leading-relaxed">A cliente participa da escolha da opção, cor, comprimento e volume mais adequados ao resultado que deseja alcançar.</p>
            </article>
            <article className="rounded-[26px] border border-[#465947]/25 bg-[#dce5da] p-8">
              <p className="text-[#465947] uppercase tracking-[0.22em] text-xs font-bold mb-3">Orçamento e pagamento</p>
              <h3 className="font-serif text-3xl mb-4">Avaliação para um valor assertivo</h3>
              <p className="text-[#62594f] leading-relaxed">Podemos informar uma estimativa inicial. O orçamento final é definido após a avaliação presencial e pode ser parcelado em até 12x sem juros.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 px-5 lg:px-10 py-24 bg-[#eadfd2]/45 scroll-mt-20">
        <div className="max-w-[1260px] mx-auto">
          <div className="max-w-3xl mb-12">
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Resultados reais</p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-5">Transformações realizadas no Romana</h2>
            <p className="text-[#62594f] text-lg leading-relaxed">Referências de trabalhos do salão para você conhecer diferentes possibilidades de comprimento, volume e acabamento.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((result) => (
              <div key={result.src} className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#352e2a]/15 bg-[#eadfd2] group">
                <img src={result.src} alt={result.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/95 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-[#465947] text-white px-4 py-2 text-xs font-black uppercase tracking-wide">Resultado real</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="avaliacao" className="relative z-10 px-5 lg:px-10 py-24 bg-[#faf7f2] scroll-mt-20">
        <div className="max-w-[1160px] mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Avaliação personalizada</p>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">O primeiro passo para um resultado bem planejado</h2>
            <p className="text-[#62594f] text-lg leading-relaxed">A avaliação nos permite entender as condições do cabelo e alinhar o que é possível fazer com segurança e naturalidade.</p>
          </div>
          <div className="space-y-4">
            {[
              ['01', 'Entendemos seu objetivo', 'Conversamos sobre comprimento, volume, cor, acabamento e referências.'],
              ['02', 'Avaliamos o cabelo', 'Observamos a base natural, a densidade dos fios e a rotina de cuidados.'],
              ['03', 'Planejamos a aplicação', 'Definimos uma proposta personalizada e explicamos os cuidados e a manutenção.'],
              ['04', 'Apresentamos o orçamento', 'O valor é calculado conforme a necessidade de cada transformação.'],
            ].map(([number, title, text]) => (
              <article key={number} className="grid grid-cols-[56px_1fr] gap-5 rounded-[22px] border border-[#352e2a]/15 bg-[#fffdf9] p-6">
                <div className="w-14 h-14 rounded-full bg-[#465947] text-white flex items-center justify-center font-black">{number}</div>
                <div><h3 className="font-serif text-2xl mb-2">{title}</h3><p className="text-[#62594f] leading-relaxed">{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cuidados" className="relative z-10 px-5 lg:px-10 py-24 bg-[#eadfd2]/45 scroll-mt-20">
        <div className="max-w-[1160px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Cuidados e manutenção</p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-5">A beleza do resultado continua em casa</h2>
            <p className="text-[#62594f] text-lg">As orientações podem variar conforme o cabelo e a técnica indicada durante a avaliação.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {care.map(([title, text]) => (
              <article key={title} className="rounded-[26px] border border-[#352e2a]/15 bg-[#fffdf9] p-8">
                <div className="w-12 h-[2px] bg-[#465947] mb-6" />
                <h3 className="font-serif text-2xl mb-4">{title}</h3>
                <p className="text-[#62594f] leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="duvidas" className="relative z-10 px-5 lg:px-10 py-24 bg-[#faf7f2] scroll-mt-20">
        <div className="max-w-[920px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Dúvidas frequentes</p>
            <h2 className="font-serif text-4xl lg:text-6xl">Antes de agendar sua avaliação</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-[20px] border border-[#352e2a]/15 bg-[#fffdf9] p-6 open:border-[#465947]/60">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-bold text-lg">
                  {question}<span className="text-[#465947] text-2xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="text-[#62594f] leading-relaxed pt-4 pr-10">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24 bg-[#faf7f2]">
        <div className="max-w-[1100px] mx-auto rounded-[34px] border border-[#465947]/35 bg-[#dce5da] p-8 lg:p-14 text-center">
          <p className="text-[#465947] uppercase tracking-[0.28em] text-sm font-bold mb-4">Romana Hair Studio</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-6">Vamos planejar sua transformação?</h2>
          <p className="text-[#62594f] text-lg max-w-2xl mx-auto mb-9">Fale conosco pelo WhatsApp para agendar uma avaliação personalizada na Vila Romana.</p>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-9 py-5 text-white font-extrabold uppercase tracking-wide hover:scale-105 transition">Agendar minha avaliação</a>
          <p className="text-[#62594f] text-sm mt-7">Rua Roma, 236 — Lapa, São Paulo, SP — Tel. (11) 3805-3149 — (11) 2609-3149 — (11) 98120-1661 — Estacionamento no local para clientes.</p>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#352e2a]/15 bg-[#eadfd2]/45 px-5 py-8">
        <div className="max-w-[1260px] mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between text-sm text-[#62594f]">
          <p>Romana Hair Studio — Beleza, cuidado e transformação.</p>
          <a href="/" className="text-[#465947] font-bold hover:text-[#352e2a] transition">Voltar à página inicial</a>
        </div>
      </footer>
    </main>
  )
}
