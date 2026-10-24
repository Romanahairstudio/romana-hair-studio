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
  ['Encravamentos leves', 'Cuidados com unhas levemente encravadas, conforme avaliação da profissional.'],
]
const perguntas = [
  ['Quanto custa a sessão?', 'A sessão de profilaxia simples custa R$ 160. Casos que exigirem cuidados além dos procedimentos descritos precisam de avaliação para confirmar o atendimento e o valor.'],
  ['Quanto tempo dura o atendimento?', 'Reserve aproximadamente 1h30 para a sessão.'],
  ['O atendimento inclui unhas encravadas?', 'Inclui cuidados com encravamentos leves, conforme avaliação da Jose. Ao entrar em contato, explique sua necessidade para receber as orientações antes de agendar.'],
  ['Como faço para agendar?', 'Fale com a recepção pelo WhatsApp para consultar os dias e horários disponíveis para podologia. O atendimento é realizado no Romana Hair Studio, na Rua Roma, 236, Vila Romana, São Paulo.'],
]
export default function PodologiaPage() {
  return (
    <main className={styles.home}>
      <a className={styles.skip} href="#conteudo">Ir para o conteúdo</a>
      <header className={styles.header}>
        <a href="/" className={styles.logo} aria-label="Romana Hair Studio — página inicial">Romana<span>Hair Studio</span></a>
        <nav aria-label="Navegação de podologia" className={styles.nav}><a href="#cuidados">O atendimento</a><a href="#profissional">Conheça a Jose</a><a href="/">← Início</a></nav>
        <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar ↗</a>
      </header>
      <section className={styles.hero}>
        <div id="conteudo" className={styles.heroText}>
          <p className={styles.eyebrow}>PODOLOGIA NA VILA ROMANA</p>
          <h1>Cuidado para<br /><em>os seus pés.</em></h1>
          <p className={styles.intro}>Um momento de atenção aos seus pés com Joseane Pires das Neves, a Jose, técnica em Podologia formada em 2017.</p>
          <div className="mt-7 rounded-xl border border-[#465947]/20 bg-[#dce5da] p-6 max-w-md"><p className="text-sm text-[#465947] font-semibold">Sessão de profilaxia simples</p><p className="font-serif text-4xl my-2">R$ 160<span className="font-sans text-sm text-[#62594f]"> / sessão</span></p><p className="text-sm text-[#62594f]">Duração aproximada de 1h30 · Com agendamento</p></div>
          <div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar com a Jose ↗</a><a className={styles.textLink} href="#cuidados">O que está incluído ↓</a></div>
          <p className={styles.heroNote}>Rua Roma, 236 · Vila Romana · São Paulo</p>
        </div>
        <div className={styles.heroVisual}><img className={styles.heroImage} src="/images/podologia-jose.svg" alt="Jose, técnica em Podologia, ao lado da cadeira de atendimento no Romana" fetchPriority="high" style={{ objectPosition: 'center 30%' }} /><span className={styles.photoLabel}>Seu momento de cuidado.</span><span className={styles.photoCaption}>JOSE · PODOLOGIA NO ROMANA</span></div>
      </section>
      <section id="cuidados" className={styles.section}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>O SEU ATENDIMENTO</p><h2>Profilaxia simples.<br /><em>Cuidado em cada detalhe.</em></h2></div><p>Conheça os procedimentos incluídos na sessão de podologia de R$ 160.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{cuidados.map(([name,text],i) => <article key={name} className="rounded-xl border border-[#352e2a]/10 bg-[#fffcf8] p-6"><span className="text-sm text-[#465947] font-semibold">0{i+1}</span><h3 className="font-serif text-2xl my-4">{name}</h3><p className="text-sm text-[#62594f]">{text}</p></article>)}</div>
        <p className="text-sm text-[#62594f] mt-6 max-w-3xl">O atendimento considera a avaliação da profissional. Necessidades além da profilaxia simples devem ser consultadas previamente para confirmar os cuidados disponíveis e o valor.</p>
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
      <a className={styles.mobileBooking} href={whatsapp} target="_blank" rel="noreferrer">Agendar podologia · R$ 160 ↗</a>
    </main>
  )
}
