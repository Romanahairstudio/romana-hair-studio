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
    "description": "Atendimento com estímulos e pressões em pontos dos pés, voltado ao relaxamento e ao bem-estar.",
    "slug": "reflexologia",
    "image": "/images/bem-estar-reflexologia.webp",
    "history": "A reflexologia utiliza pressões em áreas específicas, principalmente dos pés. Sua forma moderna foi desenvolvida ao longo do século XX, com contribuições de William Fitzgerald e Eunice Ingham.",
    "detail": "É uma opção para dedicar atenção aos pés e experimentar uma abordagem diferente de cuidado. A correspondência entre pontos dos pés e órgãos faz parte da tradição da técnica; não está comprovado que essas pressões tratem doenças dos órgãos correspondentes."
  },
  {
    "name": "Ventosaterapia",
    "price": 160,
    "duration": "60 min",
    "description": "Técnica que utiliza ventosas sobre a pele. A aplicação e os cuidados são orientados pela profissional, conforme avaliação individual.",
    "slug": "ventosaterapia",
    "image": "/images/bem-estar-ventosaterapia.webp",
    "history": "Presente em tradições de diferentes regiões, incluindo China e Oriente Médio, a ventosaterapia utiliza recipientes que produzem sucção sobre a pele.",
    "detail": "A intensidade e as regiões de aplicação são definidas conforme avaliação profissional. Pode deixar marcas temporárias e tem sido estudada para alívio da dor, embora as evidências ainda sejam limitadas. As marcas não representam eliminação de toxinas."
  },
  {
    "name": "Shiatsu",
    "price": 250,
    "duration": "1h20",
    "description": "Técnica de origem japonesa com pressões manuais em pontos do corpo, em um atendimento dedicado ao seu momento de cuidado.",
    "slug": "shiatsu",
    "image": "/images/bem-estar-shiatsu.webp",
    "history": "Desenvolvido no Japão, o shiatsu tem influências de práticas tradicionais de cuidado corporal. Seu nome está associado à pressão com os dedos, característica central da técnica.",
    "detail": "A sessão utiliza pressões manuais em diferentes regiões do corpo, respeitando a sensibilidade de cada pessoa. É uma experiência voltada à pausa, à percepção corporal e ao relaxamento, sem necessidade de que a pressão seja dolorosa."
  },
  {
    "name": "Massagem relaxante",
    "price": 150,
    "duration": "60 min",
    "description": "Movimentos manuais em uma sessão dedicada ao relaxamento e ao bem-estar.",
    "slug": "massagem-relaxante",
    "image": "/images/bem-estar-massagem-relaxante.webp",
    "history": "A massagem relaxante reúne movimentos manuais, como deslizamentos e amassamentos, presentes em tradições de massagem clássica.",
    "detail": "A proposta é oferecer uma sessão dedicada ao conforto e ao bem-estar. O ritmo e a intensidade respeitam suas preferências, criando espaço para desacelerar. Algumas formas de massagem podem proporcionar alívio temporário de desconfortos musculares."
  },
  {
    "name": "Drenagem linfática",
    "price": 160,
    "duration": "60 min",
    "description": "Massagem com movimentos suaves e específicos. A indicação e as regiões trabalhadas são definidas conforme avaliação profissional.",
    "slug": "drenagem-linfatica",
    "image": "/images/bem-estar-drenagem-linfatica.webp",
    "history": "A drenagem linfática manual utiliza movimentos leves e ritmados, desenvolvidos para auxiliar o deslocamento da linfa. Sua execução não depende de força ou dor.",
    "detail": "A indicação é individualizada. Em contextos clínicos específicos, é utilizada por profissionais capacitados como parte do cuidado de determinados tipos de inchaço. Não é uma técnica para queimar gordura ou promover emagrecimento."
  },
  {
    "name": "Massagem modeladora",
    "price": 160,
    "duration": "45 min",
    "description": "Massagem corporal com manobras específicas, adaptadas ao objetivo e à avaliação individual.",
    "slug": "massagem-modeladora",
    "image": "/images/bem-estar-massagem-modeladora.webp",
    "history": "Ligada à prática contemporânea da estética corporal, a massagem modeladora utiliza manobras manuais mais firmes, direcionadas a regiões selecionadas conforme avaliação.",
    "detail": "A intensidade deve respeitar a sensibilidade da cliente: dor intensa e hematomas não são objetivos do atendimento. A proposta é um cuidado estético corporal, sem promessa de perda de peso, eliminação de gordura ou mudança permanente de medidas."
  },
  {
    "name": "Auriculoterapia",
    "price": 60,
    "duration": "45 min",
    "description": "Atendimento com estímulos em pontos da orelha. A profissional orienta sobre a técnica utilizada e os cuidados após a sessão.",
    "slug": "auriculoterapia",
    "image": "/images/bem-estar-auriculoterapia.webp",
    "history": "A auriculoterapia utiliza estímulos em pontos específicos da orelha. Sua história reúne influências de práticas chinesas e da escola francesa, desenvolvida por Paul Nogier a partir da década de 1950.",
    "detail": "A profissional avalia as necessidades relatadas e explica a forma de aplicação e os cuidados posteriores. É uma prática complementar, com resultados que variam conforme a finalidade e a pessoa, sem substituir diagnóstico ou tratamento médico."
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
    <section className="px-6 pt-8"><div className="max-w-6xl mx-auto"><img src="/images/massagens-bem-estar-romana.webp" alt="Imagem ilustrativa de massagem e bem-estar" className="w-full h-auto rounded-3xl shadow-sm" loading="eager" fetchPriority="high" /></div></section>
    <section className="px-6 py-16 lg:py-24"><div className="max-w-6xl mx-auto"><p className="uppercase tracking-[0.2em] text-[#465947] font-semibold text-sm mb-5">Seu momento de bem-estar</p><h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl mb-6">Massagens e bem-estar na Vila Romana</h1><p className="text-lg text-[#62594f] max-w-3xl leading-relaxed mb-8">Reserve um tempo para você no Romana Hair Studio. Conheça nossas sessões de massagens, reflexologia, shiatsu e auriculoterapia na Rua Roma, 236, Vila Romana, São Paulo.</p><div className="flex flex-wrap items-center gap-5"><a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-8 py-4 text-white font-bold">Agendar pelo WhatsApp</a><OnlineBooking /></div></div></section>
    <section className="px-6 pb-16"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10"><div><h2 className="font-serif text-3xl mb-5">Um tempo para cuidar de você</h2><p className="text-[#62594f] leading-relaxed mb-4">Em meio aos compromissos do dia a dia, reservar um momento de pausa também é uma forma de cuidado. O toque, o ambiente tranquilo e a atenção durante uma sessão oferecem uma oportunidade para desacelerar e perceber o próprio corpo.</p><p className="text-[#62594f] leading-relaxed">Dependendo da técnica e das necessidades de cada pessoa, a massagem pode favorecer o relaxamento e proporcionar alívio temporário de algumas dores e tensões musculares. Os efeitos variam, e a escolha do atendimento considera suas preferências e condições de saúde.</p></div><div><h2 className="font-serif text-3xl mb-5">Uma história construída pelo toque</h2><p className="text-[#62594f] leading-relaxed mb-4">A massagem acompanha diferentes culturas há séculos. No Oriente e no Ocidente, o uso das mãos para cuidar do corpo deu origem a práticas transmitidas e aperfeiçoadas ao longo do tempo.</p><p className="text-[#62594f] leading-relaxed">Dessa diversidade surgiram abordagens com movimentos, pressões e objetivos distintos. Algumas valorizam movimentos suaves e contínuos; outras utilizam pressões em pontos específicos. Hoje, essas tradições convivem com técnicas contemporâneas de cuidado corporal e bem-estar.</p></div></div></section>
    <section id="servicos" className="bg-[#eadfd2]/40 px-6 py-16 lg:py-20 scroll-mt-6"><div className="max-w-6xl mx-auto"><h2 className="font-serif text-4xl mb-5">Escolha seu momento de cuidado</h2><p className="text-[#62594f] mb-10 text-lg">Valores por sessão. Conheça a história e a proposta de cada técnica. As imagens são ilustrativas.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{services.map(({name,description,price,duration,image,history,detail}) => <article key={name} className="rounded-3xl bg-[#fffdf9] border border-[#352e2a]/10 p-7 flex flex-col"><img src={image} alt={`Imagem ilustrativa de ${name.toLowerCase()}`} width="768" height="512" loading="lazy" className="w-full aspect-[3/2] object-cover rounded-2xl mb-6" /><p className="text-[#465947] font-semibold mb-3">{duration} por sessão</p><h3 className="font-serif text-2xl mb-4">{name}</h3><p className="text-[#62594f] leading-relaxed mb-6">{history}</p><p className="text-[#62594f] leading-relaxed mb-6">{detail}</p><div className="mt-auto"><p className="font-serif text-3xl mb-5">R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}<span className="font-sans text-base text-[#62594f]"> / sessão</span></p><a href={whatsapp(name)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl border border-[#465947] px-5 py-3 text-[#465947] font-semibold" aria-label={`Agendar ${name} pelo WhatsApp`}>Agendar sessão</a></div></article>)}</div></div></section>
    <section className="px-6 py-16 lg:py-20"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start"><div><h2 className="font-serif text-4xl mb-5">Um atendimento para o seu momento</h2><p className="text-[#62594f] leading-relaxed mb-5">Nossa equipe ajuda você a escolher o atendimento e orienta sobre a técnica, os cuidados e a indicação conforme avaliação individual. Informe suas condições de saúde, medicamentos e eventuais restrições antes da sessão. Massagens e práticas complementares não devem adiar a investigação de dores persistentes ou outros sintomas.</p><p className="text-[#62594f] leading-relaxed mb-6">Os sete serviços estão disponíveis para agendamento online no Avec. Se preferir, fale com a equipe pelo WhatsApp.</p><a href="/estetica-corporal" className="text-[#465947] font-semibold underline underline-offset-4">Conheça também os procedimentos de estética corporal</a></div><div className="bg-[#dce5da] rounded-3xl p-8"><h2 className="font-serif text-3xl mb-5">Agende seu horário</h2><p className="font-semibold mb-3">Romana Hair Studio</p><p className="text-[#62594f] mb-6">Rua Roma, 236 · Vila Romana · São Paulo/SP<br/>Terça a sexta, 10h às 19h<br/>Sábado, 9h às 19h</p><div className="flex flex-wrap items-center gap-5"><a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-2xl bg-[#465947] px-7 py-4 text-white font-bold">Falar com a equipe</a><OnlineBooking /></div></div></div></section>
    <aside className="px-6 pb-12"><div className="max-w-6xl mx-auto"><h2 className="font-serif text-2xl mb-4">Referências para saber mais</h2><ul className="flex flex-wrap gap-x-6 gap-y-3 text-[#465947] underline underline-offset-4"><li><a href="https://www.nccih.nih.gov/health/massage-therapy-what-you-need-to-know" target="_blank" rel="noopener noreferrer">Massagem · NCCIH</a></li><li><a href="https://www.nccih.nih.gov/health/reflexology" target="_blank" rel="noopener noreferrer">Reflexologia · NCCIH</a></li><li><a href="https://www.nccih.nih.gov/health/cupping" target="_blank" rel="noopener noreferrer">Ventosaterapia · NCCIH</a></li><li><a href="https://www.cancerresearchuk.org/about-cancer/treatment/complementary-alternative-therapies/individual-therapies/shiatsu" target="_blank" rel="noopener noreferrer">Shiatsu · Cancer Research UK</a></li><li><a href="https://www.nhs.uk/conditions/lymphoedema/treatment/" target="_blank" rel="noopener noreferrer">Drenagem linfática · NHS</a></li></ul></div></aside>
    <footer className="border-t border-[#352e2a]/15 px-6 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Vila Romana, São Paulo</footer>
  </main>
}
