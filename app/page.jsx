export default function RomanaHairLandingPage() {
  const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pelo%20site%20do%20Romana%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20do%20Salão.'

  const services = [
    { title: 'Cabelo', text: 'Cortes, coloração, mechas, tratamentos e muito mais para realçar sua beleza.', icon: '✂', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=700&auto=format&fit=crop' },
    { title: 'Mega Hair', text: 'Técnicas seguras para comprimento, volume e transformação natural.', icon: '◖', img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=700&auto=format&fit=crop' },
    { title: 'Estética Facial e Corporal', text: 'Protocolos personalizados para cuidar da sua pele e do seu corpo.', icon: '♕', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=700&auto=format&fit=crop' },
    { title: 'Unhas', text: 'Manicure, pedicure, esmaltação em gel e acabamento impecável.', icon: '◈', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=700&auto=format&fit=crop' },
    { title: 'Podologia', text: 'Saúde, cuidado e bem-estar para seus pés com profissionais qualificados.', icon: '♧', img: '/images/podologia-1.jpg' },
    { title: 'Bronzeamento Artificial', text: 'Pele bronzeada com segurança, beleza e naturalidade.', icon: '☼', img: '/images/bronze.jpg' },
    { title: 'Piercing', text: 'Estilo, personalidade e segurança com atendimento profissional.', icon: '✦', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=700&auto=format&fit=crop' }
  ]

  const benefits = [
    { title: 'Atendimento Exclusivo', text: 'Você única, sempre especial', icon: '♛' },
    { title: 'Profissionais Especializados', text: 'Experiência e atualização constante', icon: '◇' },
    { title: 'Produtos Premium', text: 'Qualidade que você sente no resultado', icon: '☆' },
    { title: 'Ambiente Acolhedor', text: 'Conforto e bem-estar em cada detalhe', icon: '♡' }
  ]

  const transformations = [
    { name: 'Transformação Mega Hair', before: '/images/a1.webp', after: '/images/a2.webp', description: 'Mais comprimento, volume e acabamento natural.' },
    { name: 'Mega Hair Loiro Iluminado', before: '/images/b1-1.webp', after: '/images/b2.webp', description: 'Resultado sofisticado com brilho e movimento.' },
    { name: 'Alongamento Premium', before: '/images/d1.webp', after: '/images/d2.webp', description: 'Fios alinhados, acabamento elegante e natural.' },
    { name: 'Mega Hair com Volume', before: '/images/c1.webp', after: '/images/c2.webp', description: 'Transformação completa com efeito glamouroso.' },
    { name: 'Resultado Final Premium', before: '/images/e1.webp', after: '/images/e2.webp', description: 'Cabelo com brilho, caimento e presença.' }
  ]

  const showcase = [
    '/images/Cintia2-1.webp',
    '/images/IMG_3811.webp',
    '/images/h2.webp',
    '/images/depois-paloma.webp'
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#c9a34d] selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,77,0.12),transparent_38%),linear-gradient(180deg,#050505_0%,#000_55%)] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-black/35 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1360px] mx-auto px-5 lg:px-10 h-24 flex items-center justify-between">
          <a href="#inicio" className="leading-none">
            <div className="font-serif italic text-4xl lg:text-5xl tracking-wide">Romana</div>
            <div className="font-serif italic text-xl text-white/90 ml-16 -mt-2">Hair Studio</div>
          </a>

          <nav className="hidden lg:flex items-center gap-9 text-[13px] uppercase tracking-[0.12em] font-semibold text-white/85">
            <a className="text-[#d6b35f] border-b border-[#d6b35f] pb-2" href="#inicio">Início</a>
            <a className="hover:text-[#d6b35f] transition" href="#servicos">Serviços</a>
            <a className="hover:text-[#d6b35f] transition" href="#transformacoes">Resultados</a>
            <a className="hover:text-[#d6b35f] transition" href="#sobre">Sobre</a>
            <a className="hover:text-[#d6b35f] transition" href="#depoimentos">Depoimentos</a>
            <a className="hover:text-[#d6b35f] transition" href="#contato">Contato</a>
          </nav>

          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-7 py-3.5 text-black font-bold shadow-[0_10px_40px_rgba(201,163,77,0.28)] hover:scale-105 transition">
            <span>☏</span> Agendar Agora
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[980px] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('/images/fundo.jpg')" }} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.66)_42%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.04)_46%,#000_94%)]" />

        <div className="relative z-10 max-w-[1360px] mx-auto px-5 lg:px-10 pt-36 lg:pt-44">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] items-end gap-8">
            <div className="pb-8 lg:pb-28">
              <p className="text-[#d6b35f] uppercase tracking-[0.32em] text-sm lg:text-base font-semibold mb-6">
                Beleza que transforma
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[86px] leading-[0.95] tracking-[-0.04em] mb-7">
                Realce sua beleza,
                <span className="block italic text-[#d6b35f]">revele sua melhor versão!</span>
              </h1>

              <p className="max-w-xl text-white/80 text-lg lg:text-xl leading-relaxed mb-9">
                No Romana Hair Studio, cuidamos de você de dentro para fora com excelência, técnicas modernas e atendimento exclusivo.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-12">
                <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-3 rounded-2xl bg-gradient-to-r from-[#b98b32] via-[#e5c574] to-[#b98b32] px-8 py-5 text-black font-extrabold uppercase tracking-wide shadow-[0_18px_50px_rgba(201,163,77,0.28)] hover:-translate-y-1 transition">
                  ☏ Agendar via WhatsApp
                </a>
                <a href="#contato" className="inline-flex justify-center items-center gap-3 rounded-2xl border border-[#d6b35f] px-8 py-5 text-white font-extrabold uppercase tracking-wide hover:bg-[#d6b35f] hover:text-black transition">
                  ⌖ Como Chegar
                </a>
              </div>
            </div>

          <div className="relative hidden lg:block min-h-[650px]">
              <img
                src="/images/l3.jpeg"
                alt="Cliente com cabelo produzido"
                className="absolute right-0 bottom-16 w-[560px] h-[680px] object-cover object-top rounded-t-[48px] opacity-95 shadow-[0_0_80px_rgba(0,0,0,0.65)]"
              />
              <div className="absolute right-0 bottom-16 w-[560px] h-[680px] rounded-t-[48px] bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </div>

          <div className="relative z-20 -mt-4 lg:-mt-28 rounded-[28px] border border-white/10 bg-[#0b0b0b]/88 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {benefits.map((b) => (
                <div key={b.title} className="p-8 lg:p-10 text-center">
                  <div className="text-[#d6b35f] text-4xl mb-4">{b.icon}</div>
                  <h3 className="uppercase font-extrabold text-sm lg:text-base tracking-wide mb-2">{b.title}</h3>
                  <p className="text-white/65 text-sm">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="relative z-10 px-5 lg:px-10 py-24 lg:py-32 bg-black">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d6b35f] uppercase tracking-[0.32em] text-sm font-bold mb-4">Nossos Serviços</p>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight">
              Tudo o que você precisa,
              <span className="block italic text-[#d6b35f]">em um só lugar.</span>
            </h2>
            <div className="w-20 h-[2px] bg-[#d6b35f] mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {services.map((service) => (
              <article key={service.title} className="group rounded-2xl overflow-hidden bg-[#101010] border border-white/8 hover:border-[#d6b35f]/70 transition shadow-2xl">
                <div className="h-44 overflow-hidden">
                  <img src={service.img} alt={service.title} className="h-full w-full object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="relative px-4 pb-7 pt-10 text-center">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#e2c572] to-[#a77b2d] text-black flex items-center justify-center text-2xl shadow-xl">
                    {service.icon}
                  </div>
                  <h3 className="uppercase font-black text-sm mb-3 min-h-[38px] flex items-center justify-center">{service.title}</h3>
                  <p className="text-white/65 text-xs leading-relaxed">{service.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex rounded-xl border border-[#d6b35f] px-9 py-4 uppercase text-[#d6b35f] font-extrabold hover:bg-[#d6b35f] hover:text-black transition">
              Ver todos os serviços
            </a>
          </div>
        </div>
      </section>

      <section id="transformacoes" className="relative z-10 px-5 lg:px-10 py-24 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-end mb-16">
            <div>
              <p className="text-[#d6b35f] uppercase tracking-[0.32em] text-sm font-bold mb-4">Transformações Reais</p>
              <h2 className="font-serif text-4xl lg:text-6xl leading-tight">
                Resultados de
                <span className="block italic text-[#d6b35f]">Mega Hair</span>
              </h2>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl lg:ml-auto">
              Veja alguns resultados realizados no Romana Hair Studio. Cada aplicação é pensada para entregar naturalidade, volume, caimento e sofisticação.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-5 mb-14">
            {showcase.map((image, index) => (
              <div key={image} className={`${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} group relative min-h-[300px] lg:min-h-[340px] rounded-[28px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl`}>
                <img src={image} alt="Resultado Mega Hair Romana Hair Studio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="inline-flex rounded-full bg-[#d6b35f] text-black px-4 py-2 text-xs font-black uppercase tracking-wide">Resultado Real</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {transformations.map((item) => (
              <article key={item.name} className="rounded-[30px] overflow-hidden bg-[#0d0d0d] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.45)] hover:border-[#d6b35f]/70 transition">
                <div className="grid grid-cols-2 gap-1 p-2">
                  <div className="relative h-[320px] rounded-[22px] overflow-hidden">
                    <img src={item.before} alt={`Antes - ${item.name}`} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 rounded-full bg-black/75 backdrop-blur px-4 py-1.5 text-xs font-bold uppercase tracking-wide">Antes</div>
                  </div>
                  <div className="relative h-[320px] rounded-[22px] overflow-hidden">
                    <img src={item.after} alt={`Depois - ${item.name}`} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 rounded-full bg-[#d6b35f] text-black px-4 py-1.5 text-xs font-black uppercase tracking-wide">Depois</div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl mb-3">{item.name}</h3>
                  <p className="text-white/65 leading-relaxed mb-6">{item.description}</p>
                  <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-6 py-4 text-black font-extrabold uppercase tracking-wide hover:scale-[1.02] transition">Quero esse resultado</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="relative z-10 px-5 lg:px-10 pb-24 bg-black">
        <div className="max-w-[1260px] mx-auto rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 lg:p-10 grid lg:grid-cols-2 gap-10 items-center shadow-[0_25px_80px_rgba(0,0,0,0.5)]">
          <div className="lg:pl-4">
            <p className="text-[#d6b35f] uppercase tracking-[0.26em] text-sm font-bold mb-3">Por que escolher o</p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6">Romana Hair Studio?</h2>
            <p className="text-white/72 leading-relaxed mb-8 max-w-xl">
              Mais que um salão, somos um espaço de autoestima, cuidado e transformação. Aqui, você encontra atendimento humanizado, profissionais apaixonados e resultados que fazem a diferença.
            </p>
            <div className="space-y-4 text-white/80">
              {['Ambiente moderno e aconchegante', 'Técnicas atualizadas', 'Atendimento personalizado', 'Foco na sua satisfação'].map((item) => (
                <div key={item} className="flex items-center gap-3"><span className="text-[#d6b35f]">✓</span>{item}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[24px] overflow-hidden border border-white/10 min-h-[360px] bg-cover bg-center" style={{ backgroundImage: "url('/images/fundo.jpg')" }}>
            <div className="min-h-[360px] bg-black/35 flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="relative z-10 px-5 lg:px-10 py-20 bg-black">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#d6b35f] uppercase tracking-[0.32em] text-sm font-bold mb-3">Depoimentos</p>
            <h2 className="font-serif text-4xl lg:text-5xl">O que nossas clientes dizem</h2>
            <div className="w-16 h-[2px] bg-[#d6b35f] mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Melhor salão da Lapa! Profissionais incríveis e ambiente maravilhoso. Saio sempre realizada!', 'Juliana M.'],
              ['Fiz mega hair e amei o resultado! Muito natural e exatamente como eu queria.', 'Mariana T.'],
              ['Atendimento impecável do começo ao fim. Super recomendo!', 'Carla S.']
            ].map(([text, name]) => (
              <div key={name} className="rounded-2xl bg-[#101010] border border-white/8 p-8 shadow-2xl">
                <div className="text-[#d6b35f] text-5xl leading-none mb-4">&quot;</div>
                <p className="text-white/75 leading-relaxed mb-6">{text}</p>
                <div className="text-[#d6b35f] mb-3">★★★★★</div>
                <strong>{name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="relative z-10 px-5 lg:px-10 py-16 bg-[#080808] border-t border-white/8">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[1fr_1.3fr_1fr] gap-8 items-center">
          <div>
            <p className="text-[#d6b35f] uppercase tracking-[0.24em] text-sm font-bold mb-5">Onde Estamos</p>
            <p className="text-white/80 leading-relaxed mb-6">📍 Rua Roma, 236 - Lapa<br />São Paulo - SP<br />CEP 05050-090</p>
            <a href="https://www.google.com/maps/search/?api=1&query=Rua+Roma+236+Lapa+São+Paulo" target="_blank" rel="noreferrer" className="inline-flex rounded-xl border border-[#d6b35f] px-6 py-3 text-[#d6b35f] font-bold hover:bg-[#d6b35f] hover:text-black transition">Ver no mapa</a>
          </div>

          <iframe title="Mapa Romana Hair Studio" src="https://www.google.com/maps?q=Rua+Roma,+236+-+Lapa,+São+Paulo&output=embed" className="w-full h-[230px] rounded-2xl border border-white/10" />

          <div className="lg:pl-8">
            <p className="text-[#d6b35f] uppercase tracking-[0.24em] text-sm font-bold mb-5">Fale Conosco</p>
            <p className="text-white/90 text-xl mb-4">☏ (11) 98120-1661</p>
            <p className="text-white/90 text-xl mb-4">☏ (11) 91793-5219</p>
            <p className="text-white/90 text-xl">Instagram @romanahairstudio</p>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-50 bg-gradient-to-r from-[#a77b2d] via-[#e0c06a] to-[#a77b2d] px-5 py-4 shadow-[0_-12px_40px_rgba(0,0,0,0.45)]">
        <div className="max-w-[1260px] mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between text-black">
          <div className="font-bold uppercase">☏ Agendar agora pelo WhatsApp <span className="block sm:inline normal-case font-medium">Atendimento rápido e exclusivo!</span></div>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="rounded-xl bg-black px-8 py-3 text-[#e0c06a] uppercase font-extrabold hover:scale-105 transition">Clique aqui e fale conosco</a>
        </div>
      </div>
    </main>
  )
}
