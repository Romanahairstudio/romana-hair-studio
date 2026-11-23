import HeaderBooking from '../HeaderBooking'

import OnlineBooking from '../OnlineBooking'

export const metadata = {
  title: 'Estética Facial na Vila Romana | Romana Hair Studio',
  description: 'Conheça os procedimentos de estética facial do Romana Hair Studio na Vila Romana: limpeza de pele, peeling de diamante, microagulhamento, hidratação, revitalização e dermaplaning, com valores.',
  alternates: { canonical: '/estetica-facial' },
}
const services = [
  ["Limpeza de pele", "Cuidados voltados à higienização e à remoção de impurezas da pele.", "R$ 200"],
  ["Peeling de diamante", "Esfoliação mecânica com ponteira de diamante para renovar a superfície da pele, conforme avaliação profissional.", "R$ 150"],
  ["Microagulhamento", "Procedimento estético que requer avaliação prévia de indicação e cuidados.", "R$ 250"],
  ["Hidratação facial", "Cuidados para melhorar a hidratação e o conforto da pele.", "R$ 100"],
  ["Revitalização facial", "Protocolo de cuidados faciais definido conforme as necessidades da pele.", null],
  ["Dermaplaning", "Esfoliação superficial realizada com instrumento apropriado por profissional capacitado.", "R$ 180"]
]
const serviceAnchors = {
  "Limpeza de pele": "limpeza-de-pele",
  "Peeling de diamante": "peeling",
  "Microagulhamento": "microagulhamento",
  "Hidratação facial": "hidratacao-facial",
  "Revitalização facial": "revitalizacao-facial",
  "Dermaplaning": "dermaplaning"
}
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.romanahairstudio.com.br/estetica-facial#service",
  "name": "Estética Facial",
  "description": "Conheça os procedimentos de estética facial do Romana Hair Studio na Vila Romana: limpeza de pele, peeling, microagulhamento, hidratação, revitalização e dermaplaning.",
  "url": "https://www.romanahairstudio.com.br/estetica-facial",
  "provider": {
    "@id": "https://www.romanahairstudio.com.br/#business"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Vila Romana, São Paulo - SP"
  },
  "serviceType": [
    "Limpeza de pele",
    "Peeling de diamante",
    "Microagulhamento",
    "Hidratação facial",
    "Revitalização facial",
    "Dermaplaning"
  ]
}
const whatsapp = 'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pela página de Estética Facial do Romana e gostaria de consultar os procedimentos e horários.')
export default function Page() {
  return <main className="min-h-screen bg-[#faf7f2] text-[#352e2a]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <header className="border-b border-[#352e2a]/15 px-6 py-6"><div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4"><a href="/" className="font-serif text-2xl" aria-label="Romana Hair Studio - início">Romana Hair Studio</a><div className="internal-header-actions"><a href="/" className="text-[#465947] font-semibold">← Página inicial</a><HeaderBooking whatsapp={whatsapp} /></div></div></header>
    <section className="px-6 pt-8"><div className="max-w-6xl mx-auto"><a href="#procedimentos" aria-label="Conheça nossos serviços de estética facial" className="block cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#465947] rounded-3xl"><img src="/images/romana-banner-estetica-facial.webp" alt="Banner de estética facial com tratamento de pele no Romana Hair Studio" className="w-full h-auto rounded-3xl shadow-sm" loading="eager" fetchPriority="high" /></a></div></section>
    <section className="px-6 py-16 lg:py-24"><div className="max-w-6xl mx-auto"><p className="uppercase tracking-[0.2em] text-[#465947] font-semibold text-sm mb-5">Cuidados faciais na Vila Romana</p><h1 className="font-serif text-5xl lg:text-7xl mb-6">Estética Facial no Romana</h1><p className="text-lg text-[#62594f] max-w-3xl leading-relaxed mb-8">Conheça nossos procedimentos de estética facial na Rua Roma, 236, Vila Romana, São Paulo. A indicação e os cuidados de cada atendimento dependem de avaliação profissional.</p><div className="flex flex-wrap items-start gap-4"><OnlineBooking /><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-8 py-4 text-white font-bold">Consultar horários pelo WhatsApp</a></div></div></section>
    <section id="procedimentos" className="bg-[#eadfd2]/40 px-6 py-16 lg:py-20 scroll-mt-6"><div className="max-w-6xl mx-auto"><h2 className="font-serif text-4xl mb-4">Procedimentos e valores</h2><p className="text-[#62594f] mb-10">Valores por sessão. A indicação de cada procedimento depende de avaliação profissional.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(([name,description,price])=><article key={name} id={serviceAnchors[name]} className="scroll-mt-8 rounded-3xl bg-[#fffdf9] border border-[#352e2a]/10 p-7 flex flex-col"><h3 className="font-serif text-2xl mb-4">{name}</h3><p className="text-[#62594f] leading-relaxed mb-6">{description}</p><p className="mt-auto font-serif text-3xl text-[#465947]">{price ?? <span className="text-lg font-sans font-semibold">Consulte o valor</span>}</p></article>)}</div></div></section>
    <section className="px-6 py-16 lg:py-20"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"><div><h2 className="font-serif text-4xl mb-5">Agende sua avaliação</h2><p className="text-[#62594f] leading-relaxed">Nossa equipe orienta sobre os procedimentos disponíveis, duração, indicação e cuidados necessários antes do atendimento. Alguns procedimentos podem ter contraindicações.</p></div><div className="bg-[#dce5da] rounded-3xl p-8"><p className="font-semibold mb-3">Romana Hair Studio</p><p className="text-[#62594f] mb-5">Rua Roma, 236 · Vila Romana · São Paulo/SP<br/>Terça a sexta, 10h às 19h<br/>Sábado, 9h às 19h</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-7 py-4 text-white font-bold">Falar com a equipe</a><div className="mt-5"><OnlineBooking /></div></div></div></section>
    <footer className="border-t border-[#352e2a]/15 px-6 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Vila Romana, São Paulo</footer>
  </main>
}
