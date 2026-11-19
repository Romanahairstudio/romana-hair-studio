import HeaderBooking from '../HeaderBooking'
import OnlineBooking from '../OnlineBooking'

const title = 'Massagens e Bem-estar na Vila Romana | Romana Hair Studio'
const description = 'Reflexologia, ventosaterapia, shiatsu, massagem relaxante, drenagem linfática, massagem modeladora e auriculoterapia na Vila Romana. Veja valores e agende.'
export const metadata = {
  title,
  description,
  alternates: { canonical: '/massagens-e-bem-estar' },
  openGraph: { title, description, url: '/massagens-e-bem-estar' },
}
const services = [
  {
    "name": "Reflexologia",
    "price": 90,
    "duration": "45 min",
    "description": "Atendimento com estímulos e pressões em pontos dos pés, voltado ao relaxamento e ao bem-estar."
  },
  {
    "name": "Ventosaterapia",
    "price": 160,
    "duration": "60 min",
    "description": "Técnica que utiliza ventosas sobre a pele. A aplicação e os cuidados são orientados pela profissional, conforme avaliação individual."
  },
  {
    "name": "Shiatsu",
    "price": 250,
    "duration": "1h20",
    "description": "Técnica de origem japonesa com pressões manuais em pontos do corpo, em um atendimento dedicado ao seu momento de cuidado."
  },
  {
    "name": "Massagem relaxante",
    "price": 150,
    "duration": "60 min",
    "description": "Movimentos manuais em uma sessão dedicada ao relaxamento e ao bem-estar."
  },
  {
    "name": "Drenagem linfática",
    "price": 160,
    "duration": "60 min",
    "description": "Massagem com movimentos suaves e específicos. A indicação e as regiões trabalhadas são definidas conforme avaliação profissional."
  },
  {
    "name": "Massagem modeladora",
    "price": 160,
    "duration": "45 min",
    "description": "Massagem corporal com manobras específicas, adaptadas ao objetivo e à avaliação individual."
  },
  {
    "name": "Auriculoterapia",
    "price": 60,
    "duration": "45 min",
    "description": "Atendimento com estímulos em pontos da orelha. A profissional orienta sobre a técnica utilizada e os cuidados após a sessão."
  }
]
const whatsapp = (service) => 'https://wa.me/5511961990862?text=' + encodeURIComponent(service
  ? `Olá! Vim pela página de Massagens e Bem-estar do Romana e gostaria de agendar ${service}.`
  : 'Olá! Vim pela página de Massagens e Bem-estar do Romana e gostaria de consultar os horários.')
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.romanahairstudio.com.br/massagens-e-bem-estar#service',
  name: 'Massagens e bem-estar',
  description,
  url: 'https://www.romanahairstudio.com.br/massagens-e-bem-estar',
  provider: { '@id': 'https://www.romanahairstudio.com.br/#business' },
  areaServed: { '@type': 'Place', name: 'Vila Romana, São Paulo - SP' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Sessões de massagens e bem-estar',
    itemListElement: services.map(({ name, price, description }) => ({
      '@type': 'Offer', price, priceCurrency: 'BRL',
      itemOffered: { '@type': 'Service', name, description },
    })),
  },
}
export default function Page() {
  return <main className="min-h-screen bg-[#faf7f2] text-[#352e2a]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <header className="border-b border-[#352e2a]/15 px-6 py-6"><div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4"><a href="/" className="font-serif text-2xl" aria-label="Romana Hair Studio - início">Romana Hair Studio</a><div className="internal-header-actions"><a href="/" className="text-[#465947] font-semibold">Página inicial</a><HeaderBooking whatsapp={whatsapp()} /></div></div></header>
    <section className="px-6 pt-8"><div className="max-w-6xl mx-auto"><img src="/images/romana-banner-estetica-corporal.webp" alt="Imagem ilustrativa de massagem e bem-estar" className="w-full h-auto rounded-3xl shadow-sm" loading="eager" fetchPriority="high" /></div></section>
    <section className="px-6 py-16 lg:py-24"><div className="max-w-6xl mx-auto"><p className="uppercase tracking-[0.2em] text-[#465947] font-semibold text-sm mb-5">Seu momento de bem-estar</p><h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6">Massagens e bem-estar na Vila Romana</h1><p className="text-lg text-[#62594f] max-w-3xl leading-relaxed mb-8">Reserve um tempo para você no Romana Hair Studio. Conheça nossas sessões de massagens, reflexologia, shiatsu e auriculoterapia na Rua Roma, 236, Vila Romana, São Paulo.</p><div className="flex flex-wrap items-center gap-5"><a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-8 py-4 text-white font-bold">Agendar pelo WhatsApp</a><OnlineBooking /></div></div></section>
    <section id="servicos" className="bg-[#eadfd2]/40 px-6 py-16 lg:py-20 scroll-mt-6"><div className="max-w-6xl mx-auto"><h2 className="font-serif text-4xl mb-5">Escolha seu momento de cuidado</h2><p className="text-[#62594f] mb-10 text-lg">Valores por sessão. Confira a duração de cada atendimento e escolha o serviço ao agendar.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(({name,description,price,duration}) => <article key={name} className="rounded-3xl bg-[#fffdf9] border border-[#352e2a]/10 p-7 flex flex-col"><p className="text-[#465947] font-semibold mb-3">{duration} por sessão</p><h3 className="font-serif text-2xl mb-4">{name}</h3><p className="text-[#62594f] leading-relaxed mb-6">{description}</p><div className="mt-auto"><p className="font-serif text-3xl mb-5">R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}<span className="font-sans text-base text-[#62594f]"> / sessão</span></p><a href={whatsapp(name)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl border border-[#465947] px-5 py-3 text-[#465947] font-semibold" aria-label={`Agendar ${name} pelo WhatsApp`}>Agendar sessão</a></div></article>)}</div></div></section>
    <section className="px-6 py-16 lg:py-20"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start"><div><h2 className="font-serif text-4xl mb-5">Um atendimento para o seu momento</h2><p className="text-[#62594f] leading-relaxed mb-5">Nossa equipe ajuda você a escolher o atendimento e orienta sobre a técnica, os cuidados e a indicação conforme avaliação individual. Informe suas condições de saúde antes da sessão.</p><p className="text-[#62594f] leading-relaxed mb-6">Os sete serviços estão disponíveis para agendamento online no Avec. Se preferir, fale com a equipe pelo WhatsApp.</p><a href="/estetica-corporal" className="text-[#465947] font-semibold underline underline-offset-4">Conheça também os procedimentos de estética corporal</a></div><div className="bg-[#dce5da] rounded-3xl p-8"><h2 className="font-serif text-3xl mb-5">Agende seu horário</h2><p className="font-semibold mb-3">Romana Hair Studio</p><p className="text-[#62594f] mb-6">Rua Roma, 236 · Vila Romana · São Paulo/SP<br/>Terça a sexta, 10h às 19h<br/>Sábado, 9h às 19h</p><div className="flex flex-wrap items-center gap-5"><a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-7 py-4 text-white font-bold">Falar com a equipe</a><OnlineBooking /></div></div></div></section>
    <footer className="border-t border-[#352e2a]/15 px-6 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Vila Romana, São Paulo</footer>
  </main>
}
