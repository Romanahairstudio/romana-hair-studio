import HeaderBooking from '../HeaderBooking'

export const metadata = {
  title: 'Cabeleireiro e Trancista na Vila Romana, Lapa | Romana Hair Studio',
  description: 'Corte feminino R$ 160, escova a partir de R$ 100, progressiva a partir de R$ 360, luzes a partir de R$ 599 e tranças a partir de R$ 150 na Vila Romana, Lapa. Agende pelo WhatsApp.',
  alternates: { canonical: '/cabeleireiro' },
}

const services = [
  ['Cortes femininos e masculinos', 'Do cabelo curto aos fios longos, converse com a equipe sobre o corte e a finalização que combinam com você.'],
  ['Coloração e mechas', 'Quer mudar a cor ou iluminar os fios? Conte o que deseja e converse com o profissional sobre as possibilidades para seu cabelo.'],
  ['Escova e finalização', 'Para o dia a dia ou uma ocasião especial, escolha com a equipe como deseja finalizar seu cabelo.'],
  ['Tratamentos capilares', 'Converse sobre as necessidades dos seus fios e conheça os cuidados disponíveis no salão.'],
]
const whatsapp = 'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pela página de cabeleireiro e gostaria de consultar valores e horários.')
const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  '@id': 'https://www.romanahairstudio.com.br/cabeleireiro#service',
  name: 'Serviços de cabeleireiro no Romana Hair Studio',
  serviceType: ['Corte feminino', 'Escova', 'Progressiva', 'Luzes e mechas', 'Coloração', 'Tranças', 'Tratamentos capilares'],
  offers: [
    { '@type': 'Offer', name: 'Corte feminino', price: 160, priceCurrency: 'BRL' },
    { '@type': 'Offer', name: 'Escova', priceSpecification: { '@type': 'PriceSpecification', minPrice: 100, priceCurrency: 'BRL' } },
    { '@type': 'Offer', name: 'Progressiva', priceSpecification: { '@type': 'PriceSpecification', minPrice: 360, priceCurrency: 'BRL' } },
    { '@type': 'Offer', name: 'Luzes', priceSpecification: { '@type': 'PriceSpecification', minPrice: 599, priceCurrency: 'BRL' } },
    { '@type': 'Offer', name: 'Tranças', priceSpecification: { '@type': 'PriceSpecification', minPrice: 150, priceCurrency: 'BRL' } },
  ],
  url: 'https://www.romanahairstudio.com.br/cabeleireiro',
  provider: { '@id': 'https://www.romanahairstudio.com.br/#business' },
}
const precos = [
  ['Corte feminino', 'R$ 160,00'],
  ['Escova', 'a partir de R$ 100,00'],
  ['Progressiva', 'a partir de R$ 360,00'],
  ['Luzes', 'a partir de R$ 599,00'],
  ['Tranças', 'a partir de R$ 150,00'],
]
const button = 'inline-flex rounded-2xl bg-[#465947] px-7 py-4 text-white font-bold hover:bg-[#352e2a] transition'

export default function CabeleireiroPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-5">
          <a href="/" aria-label="Romana Hair Studio, página inicial" className="font-serif italic text-3xl">Romana <span className="block text-base ml-10">Hair Studio</span></a>
          <div className="internal-header-actions"><a href="/" className="text-sm font-bold text-[#465947]">← Página inicial</a><HeaderBooking whatsapp={whatsapp} /></div>
        </div>
      </header>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#465947] uppercase tracking-[0.2em] text-sm font-bold mb-5">Seu próximo visual começa aqui</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">Cabeleireiro na <span className="italic text-[#465947]">Vila Romana, Lapa</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-[#62594f]">Um novo corte, uma mudança de cor ou um cuidado para os seus fios. No Romana Hair Studio, você conversa com a equipe e escolhe o próximo passo para seu cabelo.</p>
          <div className="mt-8"><a href={whatsapp} target="_blank" rel="noreferrer" className={button}>Consultar valores e agendar</a></div>
          <a href="/resultados-cortes" className="inline-block mt-5 text-[#465947] font-bold underline underline-offset-4">Veja os resultados do Romana</a>
        </div>
        <figure className="overflow-hidden rounded-[28px] bg-[#fffdf9] border border-[#352e2a]/15">
          <img src="/images/john-img_8513.webp" alt="Corte médio em camadas com mechas e movimento realizado no Romana Hair Studio" width="600" height="750" fetchPriority="high" className="w-full aspect-[4/5] object-cover object-top" />
          <figcaption className="px-5 py-3 text-sm text-[#62594f]">Resultado realizado no Romana Hair Studio</figcaption>
        </figure>
      </section>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20">
        <h2 className="font-serif text-4xl mb-8">Cuidados para o seu cabelo</h2>
        <div className="grid sm:grid-cols-2 gap-5">{services.map(([title, text]) => <article key={title} className="rounded-3xl border border-[#352e2a]/15 bg-[#fffdf9] p-7"><h3 className="font-serif text-2xl mb-3">{title}</h3><p className="text-[#62594f] leading-relaxed">{text}</p></article>)}</div>
        <p className="mt-7 text-[#62594f] leading-relaxed">Para alongamento ou compra de cabelos, conheça também nossos serviços de <a href="/mega-hair" className="font-bold text-[#465947] underline">Mega Hair: venda de cabelos, aplicação e manutenção</a>. Para uma produção especial, veja a página de <a href="/penteados" className="font-bold text-[#465947] underline">penteados</a>.</p>
      </section>
      <section id="valores" className="bg-[#eadfd2]/45 px-5 lg:px-10 py-16 mb-20 scroll-mt-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.2em] text-sm font-bold mb-4">Valores</p>
          <h2 className="font-serif text-4xl mb-8">Serviços de cabelo</h2>
          <div className="rounded-3xl border border-[#352e2a]/15 overflow-hidden bg-[#fffdf9]">
            {precos.map(([nome, preco]) => <div key={nome} className="flex items-center justify-between gap-5 px-5 sm:px-8 py-5 border-b last:border-b-0 border-[#352e2a]/15"><span className="text-[#62594f]">{nome}</span><strong className="text-[#465947] whitespace-nowrap">{preco}</strong></div>)}
          </div>
          <p className="text-[#62594f] text-sm mt-4">Escova, progressiva, luzes e tranças podem variar conforme o comprimento e o volume do cabelo. Mande uma foto pelo WhatsApp para receber o valor do seu caso.</p>
        </div>
      </section>
      <section id="trancas" className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20 scroll-mt-6">
        <div className="rounded-3xl bg-[#dce5da] p-8 lg:p-12 grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.2em] text-sm font-bold mb-4">Trancista na Vila Romana</p>
            <h2 className="font-serif text-4xl mb-5">Tranças a partir de R$ 150</h2>
            <p className="text-[#4f5b4c] leading-relaxed">Nossa trancista faz diferentes estilos de tranças. Conte qual modelo, comprimento e volume você deseja, ou mande uma foto de referência, e a equipe confirma o valor e o tempo do atendimento.</p>
          </div>
          <div><a href={'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pela página de cabeleireiro e gostaria de consultar valores e horários para tranças.')} target="_blank" rel="noreferrer" className={button}>Consultar tranças pelo WhatsApp</a></div>
        </div>
      </section>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20">
        <h2 className="font-serif text-4xl mb-4">Resultados do Romana</h2>
        <p className="text-[#62594f] mb-8">Veja nossa galeria de cortes, coloração e penteados e encontre inspiração para seu próximo visual.</p>
        <a href="/resultados-cortes" className={button}>Ver todos os resultados ↗</a>
      </section>

      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20 grid md:grid-cols-2 gap-10">
        <div><h2 className="font-serif text-3xl mb-5">Como agendar?</h2><p className="text-[#62594f] leading-relaxed mb-6">Envie uma mensagem pelo WhatsApp com o serviço desejado. Se tiver uma referência de corte ou cor, compartilhe com a recepção para consultar valores e disponibilidade da equipe.</p><a href={whatsapp} target="_blank" rel="noreferrer" className={button}>Falar com a recepção</a></div>
        <div><h2 className="font-serif text-3xl mb-5">Venha ao Romana</h2><p className="text-[#62594f] leading-relaxed">Rua Roma, 236, esquina com a Rua Cipião.<br />Na Vila Romana, Lapa · São Paulo/SP.<br />Terça a sexta, das 10h às 19h.<br />Sábado, das 9h às 19h.</p><a href="https://maps.app.goo.gl/PTYUY4BER2vXNS6g9" target="_blank" rel="noreferrer" className="inline-block mt-5 font-bold text-[#465947] underline underline-offset-4">Como chegar ao Romana</a></div>
      </section>
      <footer className="border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Na Vila Romana, Lapa</footer>
    </main>
  )
}
