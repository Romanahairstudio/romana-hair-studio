export const metadata = {
  title: 'Cabeleireiro na Vila Romana, Lapa | Romana Hair Studio',
  description: 'Cortes femininos e masculinos, coloração, mechas, escova e tratamentos no Romana Hair Studio. Conheça a equipe na Vila Romana, Lapa e agende pelo WhatsApp.',
  alternates: { canonical: '/cabeleireiro' },
}

const services = [
  ['Cortes femininos e masculinos', 'Do cabelo curto aos fios longos, converse com a equipe sobre o corte e a finalização que combinam com você.'],
  ['Coloração e mechas', 'Quer mudar a cor ou iluminar os fios? Conte o que deseja e converse com o profissional sobre as possibilidades para seu cabelo.'],
  ['Escova e finalização', 'Para o dia a dia ou uma ocasião especial, escolha com a equipe como deseja finalizar seu cabelo.'],
  ['Tratamentos capilares', 'Converse sobre as necessidades dos seus fios e conheça os cuidados disponíveis no salão.'],
]
const team = [
  { name: 'John', id: 'john', specialty: 'Coloração, cortes, curtos e mechas', portrait: '/images/Johnf.webp', image: '/images/john-img_8190.webp', alt: 'Corte bob acobreado realizado por John' },
  { name: 'Selma', id: 'selma', specialty: 'Hairstylist, visagismo, cortes e coloração', portrait: '/images/Selmaf.webp', image: '/images/selma-img_7673.webp', alt: 'Corte médio loiro em camadas realizado por Selma' },
  { name: 'Vytor', id: 'vytor', specialty: 'Corte masculino, feminino e barba', portrait: '/images/Vytor2.webp', image: '/images/v2.webp', alt: 'Corte masculino com degradê realizado por Vytor' },
  { name: 'Rafaela', id: 'rafaela', specialty: 'Penteados para ocasiões especiais', portrait: '/images/rafaela-penteados.webp', image: '/images/rafaela-penteado-0486.webp', alt: 'Penteado semipreso com trança e ondas realizado por Rafaela' },
]
const whatsapp = 'https://wa.me/5511981201661?text=' + encodeURIComponent('Olá! Vim pela página de cabeleireiro e gostaria de consultar valores e horários.')
const schema = {
  '@context': 'https://schema.org', '@type': 'Service',
  '@id': 'https://www.romanahairstudio.com.br/cabeleireiro#service',
  name: 'Serviços de cabeleireiro no Romana Hair Studio',
  serviceType: 'Cortes, coloração, mechas, escova e tratamentos capilares',
  url: 'https://www.romanahairstudio.com.br/cabeleireiro',
  provider: { '@id': 'https://www.romanahairstudio.com.br/#business' },
}
const button = 'inline-flex rounded-2xl bg-[#465947] px-7 py-4 text-white font-bold hover:bg-[#352e2a] transition'

export default function CabeleireiroPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" aria-label="Romana Hair Studio, página inicial" className="font-serif italic text-3xl">Romana <span className="block text-base ml-10">Hair Studio</span></a>
          <a href="/" className="text-sm font-bold text-[#465947]">← Página inicial</a>
        </div>
      </header>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#465947] uppercase tracking-[0.2em] text-sm font-bold mb-5">Seu próximo visual começa aqui</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight">Cabeleireiro na <span className="italic text-[#465947]">Vila Romana, Lapa</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-[#62594f]">Um novo corte, uma mudança de cor ou um cuidado para os seus fios. No Romana Hair Studio, você conversa com a equipe e escolhe o próximo passo para seu cabelo.</p>
          <div className="mt-8"><a href={whatsapp} target="_blank" rel="noreferrer" className={button}>Consultar valores e agendar</a></div>
          <a href="/resultados-cortes" className="inline-block mt-5 text-[#465947] font-bold underline underline-offset-4">Veja os resultados da equipe</a>
        </div>
        <figure className="overflow-hidden rounded-[28px] bg-[#fffdf9] border border-[#352e2a]/15">
          <img src="/images/john-img_8513.webp" alt="Corte médio em camadas com mechas e movimento realizado por John no Romana Hair Studio" width="600" height="750" fetchPriority="high" className="w-full aspect-[4/5] object-cover object-top" />
          <figcaption className="px-5 py-3 text-sm text-[#62594f]">Trabalho realizado por John · Romana Hair Studio</figcaption>
        </figure>
      </section>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20">
        <h2 className="font-serif text-4xl mb-8">Cuidados para o seu cabelo</h2>
        <div className="grid sm:grid-cols-2 gap-5">{services.map(([title, text]) => <article key={title} className="rounded-3xl border border-[#352e2a]/15 bg-[#fffdf9] p-7"><h3 className="font-serif text-2xl mb-3">{title}</h3><p className="text-[#62594f] leading-relaxed">{text}</p></article>)}</div>
        <p className="mt-7 text-[#62594f] leading-relaxed">Para alongamento ou compra de cabelos, conheça também nossos serviços de <a href="/mega-hair" className="font-bold text-[#465947] underline">Mega Hair: venda de cabelos, aplicação e manutenção</a>. Para uma produção especial, veja a página de <a href="/penteados" className="font-bold text-[#465947] underline">penteados</a>.</p>
      </section>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20">
        <h2 className="font-serif text-4xl mb-4">Conheça a equipe e seus trabalhos</h2>
        <p className="text-[#62594f] mb-8">Fotos reais de atendimentos realizados no Romana. Toque em um profissional para ver mais resultados.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{team.map(person => <a key={person.id} href={`/resultados-cortes#${person.id}`} className="rounded-3xl overflow-hidden border border-[#352e2a]/15 bg-[#fffdf9]">
          <img src={person.image} alt={person.alt} width="400" height="500" loading="lazy" className="w-full aspect-[4/5] object-cover object-top" />
          <div className="p-5"><div className="flex items-center gap-3 mb-3"><img src={person.portrait} alt={`Profissional ${person.name}`} width="48" height="48" loading="lazy" className="w-12 h-12 rounded-full object-cover object-top" /><h3 className="font-serif text-2xl">{person.name}</h3></div><p className="text-sm text-[#62594f]">{person.specialty}</p><span className="block mt-4 font-bold text-[#465947]">Ver trabalhos ↗</span></div>
        </a>)}</div>
      </section>
      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 pb-20 grid md:grid-cols-2 gap-10">
        <div><h2 className="font-serif text-3xl mb-5">Como agendar?</h2><p className="text-[#62594f] leading-relaxed mb-6">Envie uma mensagem pelo WhatsApp com o serviço desejado. Se tiver uma referência de corte ou cor, compartilhe com a recepção para consultar valores e disponibilidade da equipe.</p><a href={whatsapp} target="_blank" rel="noreferrer" className={button}>Falar com a recepção</a></div>
        <div><h2 className="font-serif text-3xl mb-5">Venha ao Romana</h2><p className="text-[#62594f] leading-relaxed">Rua Roma, 236, esquina com a Rua Cipião.<br />Na Vila Romana, Lapa · São Paulo/SP.<br />Terça a sexta, das 10h às 19h.<br />Sábado, das 9h às 19h.</p><a href="https://maps.app.goo.gl/PTYUY4BER2vXNS6g9" target="_blank" rel="noreferrer" className="inline-block mt-5 font-bold text-[#465947] underline underline-offset-4">Como chegar ao Romana</a></div>
      </section>
      <footer className="border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Na Vila Romana, Lapa</footer>
    </main>
  )
}
