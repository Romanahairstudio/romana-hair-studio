import HeaderBooking from '../HeaderBooking'
import OnlineBooking from '../OnlineBooking'

export const metadata = {
  title: 'Bronzeamento na Vila Romana | Romana Bronze',
  description: 'Bronzeamento e massagem bronzeadora na Vila Romana, Lapa. Massagem corporal com autobronzeador e esfoliação inclusa: R$ 250 por sessão de 1h30. Agende no Romana.',
  alternates: { canonical: '/bronzeamento' },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.romanahairstudio.com.br/bronzeamento#service",
  "name": "Bronzeamento no Romana Bronze",
  "description": "Serviço de bronzeamento na Vila Romana, São Paulo, com consulta de opções e horários pelo WhatsApp.",
  "url": "https://www.romanahairstudio.com.br/bronzeamento",
  "provider": {
    "@id": "https://www.romanahairstudio.com.br/#business"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Vila Romana, São Paulo - SP"
  },
  "serviceType": ["Bronzeamento no Romana Bronze", "Massagem bronzeadora"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog", "name": "Massagem bronzeadora",
    "itemListElement": [{ "@type": "Offer", "price": 250, "priceCurrency": "BRL",
      "url": "https://www.romanahairstudio.com.br/bronzeamento#massagem-bronzeadora",
      "itemOffered": { "@type": "Service", "name": "Massagem bronzeadora com esfoliação corporal", "description": "Sessão de 1h30 de massagem corporal com aplicação de autobronzeador de secagem rápida e esfoliação corporal inclusa." }
    }]
  }
}

const whatsapp = 'https://wa.me/5511961990862?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20bronzeamento%20do%20Romana%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20e%20hor%C3%A1rios.'
const whatsappMassagem = 'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pelo site do Romana e gostaria de agendar a massagem bronzeadora com esfoliação inclusa, de 1h30, por R$ 250.')
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <header className="border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início"><span className="block font-serif italic text-3xl">Romana</span><span className="block font-serif italic text-base ml-12 -mt-1">Hair Studio</span></a>
          <div className="internal-header-actions"><a href="/" className="text-[#465947] text-sm font-bold hover:underline">← Página inicial</a><HeaderBooking whatsapp={whatsapp} /></div>
        </div>
      </header>
      <section className="px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-5">Romana Bronze · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight mb-7">Seu momento de <span className="block italic text-[#465947]">bronze.</span></h1>
            <p className="text-[#62594f] text-lg leading-relaxed mb-8 max-w-xl">Conheça nossos protocolos de bronzeamento e a massagem bronzeadora com esfoliação corporal inclusa. Veja as opções e converse com nossa equipe sobre os horários disponíveis.</p>
            <div className="flex flex-col sm:flex-row gap-4"><a href="#protocolos" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-4 text-[#465947] font-bold hover:bg-[#dce5da] transition">Ver protocolos</a><a href={whatsapp} target="_blank" rel="noreferrer" className={botao}>Conversar pelo WhatsApp</a></div>
          </div>
          <figure className="rounded-[30px] overflow-hidden border border-[#352e2a]/15 bg-[#eadfd2]">
            <img src="/images/card-bronze-romana.webp" alt="Imagem de ambiente de bronzeamento com máquina horizontal e letreiro Romana" fetchPriority="high" className="w-full aspect-[4/5] object-contain" />
            <figcaption className="px-5 py-3 text-xs text-[#62594f] bg-[#faf7f2]">Imagem ilustrativa do equipamento.</figcaption>
          </figure>
        </div>
      </section>
      <section id="protocolos" className="px-5 lg:px-10 py-16 lg:py-24 bg-[#fffdf9]">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-4">Romana Bronze</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Conheça nossos <span className="italic text-[#465947]">protocolos.</span></h2>
          <p className="text-[#62594f] text-lg max-w-2xl mb-10">Escolha a opção que melhor combina com sua preferência. Os protocolos em máquina abaixo têm duração aproximada de 30 a 40 minutos.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { nome: 'Clássico', preco: 'R$ 69,00', itens: ['Bronzeamento na máquina', 'Sem biquíni de fita', 'Aplicação de parafina', 'Protetor facial'] },
              { nome: 'Exclusivo', preco: 'R$ 129,00', itens: ['Bronzeamento na máquina', 'Com ou sem biquíni de fita', 'Protetor facial', 'Ativador de marquinha'] },
              { nome: 'Premium', preco: 'R$ 159,00', itens: ['Bronzeamento na máquina', 'Com ou sem biquíni de fita', 'Protetor facial', 'Ativador de marquinha', 'Esfoliação corporal'] },
            ].map((protocolo) => (
              <article key={protocolo.nome} className="rounded-[28px] border border-[#352e2a]/15 bg-[#faf7f2] p-7 sm:p-8 flex flex-col">
                <h3 className="font-serif text-3xl mb-3">{protocolo.nome}</h3>
                <p className="text-[#465947] text-3xl font-bold mb-2">{protocolo.preco}</p>
                <p className="text-[#62594f] text-sm mb-6">Duração: 30 a 40 minutos</p>
                <ul className="space-y-3 mb-8 flex-1">{protocolo.itens.map((item) => <li key={item} className="flex gap-2 text-[#62594f]"><span aria-hidden="true" className="text-[#465947]">✓</span><span>{item}</span></li>)}</ul>
                <a href={`https://wa.me/5511961990862?text=${encodeURIComponent(`Olá, vim pela página de bronzeamento do Romana e gostaria de agendar o protocolo ${protocolo.nome} (${protocolo.preco}).`)}`} target="_blank" rel="noreferrer" className={botao}>Consultar horários</a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="massagem-bronzeadora" className="px-5 lg:px-10 py-16 lg:py-24 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div><p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-4">Cor e bem-estar na Vila Romana</p><h2 className="font-serif text-4xl lg:text-6xl mb-6">Massagem <span className="italic text-[#465947]">bronzeadora.</span></h2><p className="text-[#62594f] text-lg leading-relaxed mb-6">Um momento de cuidado corporal que combina esfoliação, massagem e aplicação de autobronzeador de secagem rápida. Enquanto o produto desenvolve o efeito bronzeado, você recebe uma massagem corporal.</p><div className="rounded-3xl bg-[#dce5da] p-7 mb-7"><p className="font-serif text-4xl text-[#465947] mb-3">R$ 250,00 <span className="font-sans text-base">por sessão</span></p><p className="text-[#352e2a] font-semibold">Duração total: 1h30 · Esfoliação corporal inclusa</p></div><div className="flex flex-wrap items-center gap-5"><a href={whatsappMassagem} target="_blank" rel="noopener noreferrer" className={botao}>Agendar massagem bronzeadora</a><OnlineBooking /></div></div>
            <figure><img src="/images/bem-estar-massagem-modeladora.webp" alt="Imagem ilustrativa de massagem corporal nas pernas" width="960" height="640" loading="lazy" className="w-full aspect-[3/2] object-cover rounded-[28px]" /><figcaption className="text-sm text-[#62594f] mt-3">Imagem ilustrativa de massagem corporal.</figcaption></figure>
          </div>
          <div className="mt-14"><h3 className="font-serif text-3xl lg:text-4xl mb-7">Como funciona a sessão</h3><div className="grid md:grid-cols-3 gap-6">{[
            ['Esfoliação corporal', 'A sessão inclui a preparação da pele com esfoliação corporal, antes da aplicação do autobronzeador.'],
            ['Aplicação e massagem', 'O autobronzeador é aplicado durante o atendimento, combinado à massagem corporal. O efeito de cor vem do cosmético, sem depender de exposição ao sol ou à máquina.'],
            ['Orientações após a sessão', 'Ao finalizar, a equipe explica os cuidados com banho, roupas e manutenção da cor, conforme o protocolo utilizado. A tonalidade e sua duração variam de pessoa para pessoa.']
          ].map(([name,text]) => <article key={name} className="rounded-3xl border border-[#352e2a]/15 bg-[#fffdf9] p-7"><h4 className="font-serif text-2xl mb-4">{name}</h4><p className="text-[#62594f] leading-relaxed">{text}</p></article>)}</div></div>
          <div className="mt-14 grid lg:grid-cols-2 gap-10 items-center"><figure><img src="/images/bem-estar-drenagem-linfatica.webp" alt="Imagem ilustrativa de cuidado corporal com massagem na perna" width="960" height="640" loading="lazy" className="w-full aspect-[3/2] object-cover rounded-[28px]" /><figcaption className="text-sm text-[#62594f] mt-3">Imagem ilustrativa de cuidado corporal.</figcaption></figure><div><h3 className="font-serif text-3xl lg:text-4xl mb-6">O que esse cuidado oferece</h3><ul className="space-y-4 text-[#62594f] leading-relaxed"><li><strong className="text-[#352e2a]">Efeito bronzeado com autobronzeador:</strong> uma opção de cor cosmética sem precisar se expor ao sol ou à máquina durante esse atendimento.</li><li><strong className="text-[#352e2a]">Um momento de pausa:</strong> a massagem corporal faz parte da experiência de conforto e bem-estar.</li><li><strong className="text-[#352e2a]">Esfoliação inclusa:</strong> preparação da pele dentro da mesma sessão, sem contratar uma etapa separada.</li><li><strong className="text-[#352e2a]">Praticidade:</strong> atendimento de 1h30 com produto de secagem rápida e orientações personalizadas.</li></ul><p className="text-[#62594f] leading-relaxed mt-6">O autobronzeador não substitui o protetor solar. Informe à equipe se houver alergias, sensibilidade ou irritação na pele antes de agendar. O resultado não é permanente e varia conforme a pele e os cuidados após a aplicação.</p></div></div>
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
