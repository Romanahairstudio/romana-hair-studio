import styles from './home.module.css'

export default function RomanaHairLandingPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Romana%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20do%20Salão.'

  const services = [
    { title: 'Cabelo', text: 'Cortes, coloração, mechas, tratamentos e muito mais para realçar sua beleza.', icon: '✂', img: '/images/card-cabelo-novo.webp', alt: 'Cabelo loiro com camadas e finalização', fit: 'contain', href: '/resultados-cortes', linkText: 'Resultados de cortes e coloração, confira!' },
    { title: 'Penteados', text: 'Produções personalizadas para celebrar cada ocasião com o seu estilo.', icon: '✦', img: '/images/card-penteados-novo.webp', alt: 'Coque baixo com acessório floral e mechas soltas', fit: 'contain', href: '/penteados', linkText: 'Resultados de Penteados, confira!' },
    { title: 'Mega Hair', text: 'Técnicas seguras para comprimento, volume e transformação natural.', icon: '◖', img: '/images/card-mega-novo.webp', alt: 'Mega Hair longo em cabelo castanho iluminado', fit: 'contain', href: '/mega-hair' },
    { title: 'Estética Facial e Corporal', text: 'Protocolos personalizados para cuidar da sua pele e do seu corpo.', icon: '♕', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=700&auto=format&fit=crop' },
    { title: 'Unhas', text: 'Manicure, pedicure, esmaltação em gel e acabamento impecável.', icon: '◈', img: '/images/unhas-resultado-03.webp', alt: 'Unhas em tom nude com formato amendoado', fit: 'contain', href: '/unhas', linkText: 'Resultados de Unhas, Veja!' },
    { title: 'Maquiagem', text: 'Produções para valorizar sua beleza em cada ocasião.', icon: '✧', img: '/images/maquiagem-card.webp', alt: 'Maquiagem com olhos iluminados e acabamento delicado', fit: 'contain', href: '/maquiagem', linkText: 'Veja nossos trabalhos!' },
    { title: 'Podologia', text: 'Saúde, cuidado e bem-estar para seus pés com profissionais qualificados.', icon: '♧', img: '/images/podologia-1.jpg' },
    { title: 'Bronzeamento Artificial', text: 'Pele bronzeada com segurança, beleza e naturalidade.', icon: '☼', img: '/images/bronze.jpg' },
    { title: 'Cabelo e Barba', text: 'Corte moderno, acabamento impecável e barba alinhada.', icon: '✦', img: '/images/cbm.webp'}
  ]

  const benefits = [
    { title: 'Atendimento Exclusivo', text: 'Você única, sempre especial', icon: '♛' },
    { title: 'Profissionais Especializados', text: 'Experiência e atualização constante', icon: '◇' },
    { title: 'Produtos Premium', text: 'Qualidade que você sente no resultado', icon: '☆' },
    { title: 'Ambiente Acolhedor', text: 'Conforto e bem-estar em cada detalhe', icon: '♡' }
  ]

  const haircutPreview = [
    { name: 'John', image: '/images/j3.webp', alt: 'Cabelo em camadas com movimento, trabalho de John' },
    { name: 'Selma', image: '/images/s1.webp', alt: 'Corte em camadas e finalização ruiva, trabalho de Selma' },
    { name: 'Vytor', image: '/images/v2.webp', alt: 'Corte masculino com degradê, trabalho de Vytor' }
  ]

  return (
    <main className={styles.home}>
      <a className={styles.skip} href="#conteudo">Ir para o conteúdo</a>
      <header className={styles.header}>
        <a href="#inicio" className={styles.logo} aria-label="Romana Hair Studio — início">Romana<span>Hair Studio</span></a>
        <nav aria-label="Navegação principal" className={styles.nav}>
          <a href="#servicos">Serviços</a><a href="#sobre">O Romana</a><a href="#transformacoes">Resultados</a><a href="#contato">Contato</a>
        </nav>
        <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agendar <span aria-hidden="true">↗</span></a>
      </header>

      <section id="inicio" className={styles.hero}>
        <div id="conteudo" className={styles.heroText}>
          <p className={styles.eyebrow}>SEU MOMENTO, NA VILA ROMANA</p>
          <h1>Sua beleza.<br />Seu estilo.<br /><em>Seu momento.</em></h1>
          <p className={styles.intro}>Um espaço para se sentir bem, renovar o visual e cuidar de você. Conheça o Romana Hair Studio.</p>
          <div className={styles.actions}>
            <a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Agende seu momento <span aria-hidden="true">↗</span></a>
            <a className={styles.textLink} href="#servicos">Explore nossos serviços ↓</a>
          </div>
          <p className={styles.heroNote}>Cabelo, unhas e bem-estar. Tudo pertinho de você.</p>
        </div>
        <div className={styles.heroVisual}>
          <img className={styles.heroImage} src="/images/hero-modelo-loira.webp" alt="Modelo com cabelos loiros longos e ondulados — imagem ilustrativa criada com IA" fetchPriority="high" />
          <span className={styles.photoLabel}>Beleza com a sua essência.</span>
          <span className={styles.photoCaption}>CUIDADO EM CADA DETALHE</span>
        </div>
      </section>

      <section aria-label="Nosso cuidado" className={styles.benefits}>
        {benefits.map((b) => <div key={b.title}><span aria-hidden="true">{b.icon}</span><div><h2>{b.title}</h2><p>{b.text}</p></div></div>)}
      </section>

      <section id="servicos" className={styles.section}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>BELEZA E BEM-ESTAR</p><h2>Um cuidado para<br /><em>cada parte de você.</em></h2></div><p>Do novo corte ao seu momento de pausa, encontre o cuidado que combina com você.</p></div>
        <div className={styles.services}>
          {services.map((service) => <article className={styles.card} key={service.title}>
            <div className={styles.cardImage}><img src={service.img} alt={service.alt || service.title} loading="lazy" className={service.fit === 'contain' ? styles.contain : undefined} /></div>
            <div className={styles.cardBody}><h3>{service.title}</h3><p>{service.text}</p><a className={styles.textLink} href={service.href || whatsapp} target={service.href ? undefined : '_blank'} rel={service.href ? undefined : 'noreferrer'}>{service.href ? 'Conheça os resultados' : 'Saiba mais pelo WhatsApp'} <span aria-hidden="true">↗</span></a></div>
          </article>)}
        </div>
      </section>

      <section id="sobre" className={styles.about}>
        <img src="/images/fundo.jpg" alt="Ambiente do Romana Hair Studio" loading="lazy" />
        <div><p className={styles.eyebrow}>PRAZER, ROMANA</p><h2>Entre, sinta-se bem.<br /><em>O momento é seu.</em></h2><p>Mais que um salão, somos um espaço de autoestima, cuidado e transformação. Aqui, você encontra atendimento humanizado, profissionais apaixonados e resultados que fazem a diferença.</p>
          <ul>{['Ambiente moderno e aconchegante', 'Técnicas atualizadas', 'Atendimento personalizado', 'Foco na sua satisfação'].map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          <a className={styles.textLink} href={whatsapp} target="_blank" rel="noreferrer">Venha conhecer o Romana ↗</a>
        </div>
      </section>

      <section id="transformacoes" className={styles.section}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>FEITO NO ROMANA</p><h2>Resultados reais.<br /><em>Beleza do seu jeito.</em></h2></div><a className={styles.textLink} href="/resultados-cortes">Veja os trabalhos da equipe ↗</a></div>
        <div className={styles.results}>{haircutPreview.map(item => <a key={item.name} href={`/resultados-cortes#${item.name.toLowerCase()}`}><img src={item.image} alt={item.alt} loading="lazy" /><span><span>Por {item.name}</span><span aria-hidden="true">↗</span></span></a>)}</div>
      </section>

      <section id="depoimentos" className={styles.testimonials}>
        <p className={styles.eyebrow}>QUEM VEM, CONTA</p><h2>Carinho que <em>volta.</em></h2>
        <div>{[['Melhor salão da Lapa! Profissionais incríveis e ambiente maravilhoso. Saio sempre realizada!', 'Juliana M.'], ['Atendimento impecável do começo ao fim. Super recomendo!', 'Carla S.']].map(([text,name]) => <figure key={name}><span aria-label="5 estrelas">★★★★★</span><blockquote>“{text}”</blockquote><figcaption>{name}</figcaption></figure>)}</div>
      </section>

      <section id="contato" className={styles.contact}>
        <div><p className={styles.eyebrow}>PERTINHO DE VOCÊ</p><h2>Seu próximo momento<br /><em>de cuidado começa aqui.</em></h2><p>Rua Roma, 236 · Vila Romana · São Paulo – SP<br />CEP 05050-090</p><p>Terça a sexta, 10h às 19h<br />Sábado, 9h às 19h</p><div className={styles.actions}><a className={styles.button} href={whatsapp} target="_blank" rel="noreferrer">Fale com a gente ↗</a><a className={styles.textLink} href="https://www.google.com/maps/search/?api=1&query=Rua+Roma+236+Lapa+São+Paulo" target="_blank" rel="noreferrer">Como chegar ↗</a></div></div>
        <iframe title="Mapa Romana Hair Studio" loading="lazy" src="https://www.google.com/maps?q=Rua+Roma,+236+-+Lapa,+São+Paulo&output=embed" />
      </section>
      <footer className={styles.footer}><a href="#inicio" className={styles.logo}>Romana<span>Hair Studio</span></a><p>Beleza, cuidado e bem-estar na Vila Romana.</p><div><a href={whatsapp} target="_blank" rel="noreferrer">(11) 98120-1661</a><a href="https://www.instagram.com/romanahairstudio/" target="_blank" rel="noreferrer">@romanahairstudio ↗</a></div></footer>
      <a className={styles.mobileBooking} href={whatsapp} target="_blank" rel="noreferrer">Agende seu momento pelo WhatsApp ↗</a>
    </main>
  )
}
