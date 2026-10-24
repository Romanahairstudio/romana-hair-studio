import styles from '../home.module.css'

const title = 'Podologia na Vila Romana | Romana Hair Studio'
const description = 'Podologia com Jose Pires na Vila Romana. Profilaxia simples por R$ 160, com duração aproximada de 1h30. Conheça a profissional e agende pelo WhatsApp.'
export const metadata = {
  title, description,
  alternates: { canonical: '/podologia' },
  openGraph: { title, description, url: '/podologia', images: [{ url: '/images/podologia-jose.svg', alt: 'Joseane Pires das Neves, técnica em Podologia no Romana' }] },
}
const whatsapp = 'https://wa.me/5511981201661?text=' + encodeURIComponent('Olá! Vim pela página de podologia do Romana e gostaria de agendar uma sessão com a Jose. Podem me informar os horários disponíveis?')
const cuidados = [
  ['Calosidades', 'Remoção de calosidades durante a profilaxia simples.'],
  ['Excesso de pele', 'Cuidados com o excesso de pele dos pés.'],
  ['Cutilagem', 'Cuidado com as cutículas das unhas dos pés.'],
]
const tratamentos = [
  ['Podologia simples', 'Sem encravamento ou infecção.', 'R$ 160'],
  ['Podologia — encravamento leve', 'Inclui 1 retorno.', 'R$ 200'],
  ['Podologia — encravamento médio ou infecção', 'Inclui 2 retornos.', 'R$ 320'],
  ['Tratamento de micose — avulso', 'Valor do atendimento avulso.', 'R$ 250'],
  ['Tratamento de micose — sessões quinzenais', 'Tratamento com duração mínima de 6 meses.', 'R$ 1.500'],
  ['Verruga plantar (olho de peixe)', 'Atendimento conforme avaliação da profissional.', 'R$ 100'],
  ['Colocação de órtese', 'Valor conforme avaliação da profissional.', 'R$ 100 a R$ 150'],
]
const perguntas = [
  ['Quanto custa a sessão?', 'A profilaxia simples, sem encravamento ou infecção, custa R$ 160. Os demais atendimentos têm valores próprios, apresentados na tabela de serviços. A profissional avalia a necessidade de cada caso.'],
  ['Quanto tempo dura o atendimento?', 'Reserve aproximadamente 1h30 para a profilaxia simples. Para os demais serviços, consulte a duração ao agendar.'],
  ['O atendimento inclui unhas encravadas?', 'A profilaxia simples de R$ 160 não inclui encravamentos. O atendimento para encravamento leve custa R$ 200 e inclui 1 retorno; para encravamento médio ou infecção, R$ 320 com 2 retornos. A indicação depende da avaliação da Jose.'],
  ['Como faço para agendar?', 'Fale com a recepção pelo WhatsApp para consultar os dias e horários disponíveis para podologia. O atendimento é realizado no Romana Hair Studio, na Rua Roma, 236, Vila Romana, São Paulo.'],
]
export default function PodologiaPage() {
  return (
    <main className={styles.home}>
      <a className={styles.skip} href="#conteudo">Ir para o conteúdo</a>
      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Romana Hair Studio — página inicial">Romana<span>Hair Studio</span></a>
        <nav aria-label="Navegação de podologia" className={styles.nav}><a href="#tratamentos">Serviços e valores</a><a href="#profissional">Conheça a Jose</a><a href="/">← Início</a></nav>
        <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar ↗</a>
      </header>
      <section className={styles.hero}>
        <div id="conteudo" className={styles.heroText}>
          <p className={styles.eyebrow}>PODOLOGIA NA VILA ROMANA</p>
          <h1>Cuidado para<br /><em>os seus pés.</em></h1>
          <p className={styles.intro}>Um momento de atenção aos seus pés com Jose, nossa podóloga, técnica em Podologia formada em 2017.</p>
          <div className="mt-7 rounded-xl border border-[#465947]/20 bg-[#dce5da] p-6 max-w-md"><p className="text-sm text-[#465947] font-semibold">Sessão de profilaxia simples</p><p className="font-serif text-4xl my-2">R$ 160<span className="font-sans text-sm text-[#62594f]"> / sessão</span></p><p className="text-sm text-[#62594f]">Duração aproximada de 1h30 · Com agendamento</p></div>
          <div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar com a Jose ↗</a><a className={styles.textLink} href="#cuidados">O que está incluído ↓</a></div>
          <p className={styles.heroNote}>Rua Roma, 236 · Vila Romana · São Paulo</p>
        </div>
        <div className={styles.heroVisual}><img className={styles.heroImage} src="/images/podologia-jose.svg" alt="Jose, técnica em Podologia, ao lado da cadeira de atendimento no Romana" fetchPriority="high" style={{ objectPosition: 'center 30%' }} /><span className={styles.photoLabel}>Seu momento de cuidado.</span><span className={styles.photoCaption}>JOSE · PODOLOGIA NO ROMANA</span></div>
      </section>
      <section id="cuidados" className={styles.section}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>O SEU ATENDIMENTO</p><h2>Profilaxia simples.<br /><em>Cuidado em cada detalhe.</em></h2></div><p>Conheça os procedimentos incluídos na sessão de R$ 160, sem encravamento ou infecção.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{cuidados.map(([name,text],i) => <article key={name} className="rounded-xl border border-[#352e2a]/10 bg-[#fffcf8] p-6"><span className="text-sm text-[#465947] font-semibold">0{i+1}</span><h3 className="font-serif text-2xl my-4">{name}</h3><p className="text-sm text-[#62594f]">{text}</p></article>)}</div>
        <p className="text-sm text-[#62594f] mt-6 max-w-3xl">O atendimento considera a avaliação da profissional. Necessidades além da profilaxia simples devem ser consultadas previamente para confirmar os cuidados disponíveis e o valor.</p>
      </section>
      <section id="tratamentos" className="bg-[#eadfd2]/45">
        <div className={styles.section}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>TRATAMENTOS DE PODOLOGIA</p><h2>Serviços e valores.<br /><em>O cuidado que você precisa.</em></h2></div><p>Consulte as opções de atendimento com a Jose.</p></div>
          <div className="overflow-hidden rounded-xl border border-[#352e2a]/15 bg-[#fffcf8]">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Serviços de podologia, condições e preços</caption>
              <thead className="bg-[#dce5da] text-[#465947]"><tr><th scope="col" className="p-4 sm:px-6">Serviço</th><th scope="col" className="p-4 sm:px-6 text-right">Valor</th></tr></thead>
              <tbody>{tratamentos.map(([name,detail,price]) => <tr key={name} className="border-t border-[#352e2a]/10"><th scope="row" className="p-4 sm:px-6 font-normal"><span className="block font-semibold">{name}</span><span className="block mt-1 text-[#62594f] text-xs sm:text-sm">{detail}</span></th><td className="p-4 sm:px-6 text-right font-semibold text-[#465947]"><span>{price}</span></td></tr>)}</tbody>
            </table>
          </div>
          <p className="text-sm text-[#62594f] mt-5">A indicação do atendimento depende da avaliação da Jose. Para o tratamento de micose com sessões quinzenais, consulte as condições e o que está incluído no valor de R$ 1.500.</p>
          <div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Consultar atendimento pelo WhatsApp ↗</a></div>
        </div>
      </section>
      <section id="profissional" className={styles.about}>
        <img src="/images/podologia-jose.svg" alt="Joseane Pires das Neves, conhecida como Jose" loading="lazy" style={{ objectPosition: 'center 25%' }} />
        <div><p className={styles.eyebrow}>CONHEÇA QUEM VAI ATENDER VOCÊ</p><h2>Joseane Pires das Neves.<br /><em>Pode chamar de Jose.</em></h2><p>Jose é técnica em Podologia, formada pelo Instituto Educacional São Camilo em 2017, e é a responsável pelos atendimentos de podologia no Romana Hair Studio.</p><p>Converse com a equipe, conte o que você precisa e consulte os horários disponíveis para o seu atendimento.</p><div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Consultar horários ↗</a></div></div>
      </section>
      <section className={styles.section}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CONHEÇA O ESPAÇO</p><h2>Um espaço para<br /><em>cuidar de você.</em></h2><p className="text-[#62594f] mt-6 max-w-md">As fotos mostram a Jose e a sala onde são realizados os atendimentos de podologia no Romana, na Vila Romana.</p><a className={`${styles.textLink} mt-6`} href="https://www.google.com/maps/search/?api=1&query=Rua+Roma+236+São+Paulo" target="_blank" rel="noreferrer">Veja como chegar ↗</a></div></div><figure><img src="/images/podologia-sala.svg" alt="Sala de podologia do Romana, com a Jose, cadeira de atendimento, luminária e bancada" loading="lazy" className="w-full max-h-[600px] object-cover rounded-xl" /><figcaption className="text-xs text-[#62594f] mt-3">Nosso espaço de podologia · Romana Hair Studio</figcaption></figure></div>
      </section>
      <section className="bg-[#dce5da]/50 px-6 py-16"><div className="max-w-3xl mx-auto"><p className={styles.eyebrow}>ANTES DE AGENDAR</p><h2 className="font-serif text-4xl mb-8">Suas dúvidas, <em>respondidas.</em></h2>{perguntas.map(([question,answer]) => <details key={question} className="border-b border-[#465947]/20 py-5"><summary className="cursor-pointer font-semibold text-[#465947] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">{question}</summary><p className="text-[#62594f] text-sm mt-4 leading-relaxed">{answer}</p></details>)}</div></section>
      <section id="contato" className={styles.contact}>
        <div><p className={styles.eyebrow}>SEU PRÓXIMO MOMENTO DE CUIDADO</p><h2>Agende sua sessão<br /><em>de podologia.</em></h2><p>Profilaxia simples · R$ 160 · Aproximadamente 1h30</p><p>Rua Roma, 236 · Vila Romana · São Paulo – SP<br />CEP 05050-090</p><p>Horário de funcionamento do salão:<br />Terça a sexta, 10h às 19h · Sábado, 9h às 19h<br />Consulte a disponibilidade da Jose pelo WhatsApp.</p><div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp ↗</a></div></div>
        <iframe title="Localização do Romana Hair Studio" loading="lazy" src="https://www.google.com/maps?q=Rua+Roma,+236+-+São+Paulo&output=embed" />
      </section>
      <footer className={styles.footer}><a href="/" className={styles.logo}>Romana<span>Hair Studio</span></a><p>Podologia e bem-estar na Vila Romana.</p><div><a href={whatsapp} target="_blank" rel="noreferrer">(11) 98120-1661</a><a href="/">Voltar à página inicial</a></div></footer>
      <a className={styles.mobileBooking} href={whatsapp} target="_blank" rel="noreferrer">Agendar podologia pelo WhatsApp ↗</a>
    </main>
  )
}
