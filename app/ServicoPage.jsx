import HeaderBooking from './HeaderBooking'
import OnlineBooking from './OnlineBooking'

const btn = 'inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-4 text-white font-extrabold hover:-translate-y-1 transition'
const btnSec = 'inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-4 text-[#465947] font-extrabold hover:bg-[#465947] hover:text-white transition'

// Página de serviço com resultados reais (antes e depois), valores e agendamento.
export default function ServicoPage({ schema, whatsapp, eyebrow, titulo, destaque, intro, capa, servicos, resultadosTitulo, resultados, precos, observacao, relacionado, tecnicas }) {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-[#352e2a]/15">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex flex-wrap items-center justify-between gap-5">
          <a href="/" aria-label="Romana Hair Studio, página inicial" className="leading-none">
            <span className="block font-serif italic text-3xl">Romana</span>
            <span className="block font-serif italic text-base text-[#62594f] ml-12 -mt-1">Hair Studio</span>
          </a>
          <div className="internal-header-actions"><a href="/" className="text-[#465947] text-sm font-bold">← Página inicial</a><HeaderBooking whatsapp={whatsapp} /></div>
        </div>
      </header>

      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-[1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">{eyebrow}</p>
          <h1 className="font-serif text-5xl sm:text-6xl leading-[1.05] tracking-[-0.03em] mb-7">{titulo} <span className="italic text-[#465947]">{destaque}</span></h1>
          <p className="max-w-xl text-[#62594f] text-lg leading-relaxed mb-8">{intro}</p>
          <div className="flex flex-wrap items-start gap-4">
            <a href="#resultados" className={btnSec}>Ver antes e depois</a>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={btn}>Agendar pelo WhatsApp</a>
            <OnlineBooking />
          </div>
        </div>
        <figure className="rounded-[30px] overflow-hidden border border-[#352e2a]/15 bg-[#fffdf9]">
          <img src={capa.src} alt={capa.alt} width="800" height="800" fetchPriority="high" className="w-full h-auto" />
          <figcaption className="px-5 py-3 text-sm text-[#62594f]">Antes e depois · resultado real do Romana Hair Studio</figcaption>
        </figure>
      </section>

      <section className="bg-[#eadfd2]/40 px-5 lg:px-10 py-16">
        <div className="max-w-[1260px] mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl mb-10">Nossos serviços</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {servicos.map(([nome, texto, preco]) => <article key={nome} className="rounded-3xl bg-[#fffdf9] border border-[#352e2a]/10 p-7 flex flex-col">
              <h3 className="font-serif text-2xl mb-3">{nome}</h3>
              <p className="text-[#62594f] leading-relaxed mb-6">{texto}</p>
              <p className="mt-auto font-serif text-3xl text-[#465947]">{preco}</p>
            </article>)}
          </div>
        </div>
      </section>

      {tecnicas && <section id="tecnicas" className="px-5 lg:px-10 py-16 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">{tecnicas.eyebrow}</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">{tecnicas.titulo}</h2>
          <p className="text-[#62594f] text-lg max-w-2xl mb-10">{tecnicas.intro}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tecnicas.itens.map(([nome, texto, preco]) => <article key={nome} className="rounded-3xl bg-[#fffdf9] border border-[#352e2a]/10 p-7 flex flex-col">
              <h3 className="font-serif text-2xl mb-3">{nome}</h3>
              <p className="text-[#62594f] leading-relaxed mb-6">{texto}</p>
              <p className="mt-auto font-serif text-2xl text-[#465947]">{preco}</p>
            </article>)}
          </div>
        </div>
      </section>}

      <section id="resultados" className="px-5 lg:px-10 py-20 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Antes e depois</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">{resultadosTitulo}</h2>
          <p className="text-[#62594f] text-lg max-w-2xl mb-10">Fotos de clientes atendidas no Romana. Em cada imagem, o antes aparece acima e o depois abaixo.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(({ src, alt }) => <figure key={src} className="rounded-[26px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15">
              <img src={src} alt={alt} width="800" height="800" loading="lazy" className="w-full h-auto" />
            </figure>)}
          </div>
          <div className="mt-10"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className={btn}>Quero agendar</a></div>
        </div>
      </section>

      <section id="valores" className="bg-[#eadfd2]/45 px-5 lg:px-10 py-16 scroll-mt-6">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Valores</p>
          <h2 className="font-serif text-4xl mb-8">Tabela de preços</h2>
          <div className="rounded-3xl border border-[#352e2a]/15 overflow-hidden bg-[#fffdf9]">
            {precos.map(([nome, preco]) => <div key={nome} className="flex items-center justify-between gap-5 px-5 sm:px-8 py-5 border-b last:border-b-0 border-[#352e2a]/15"><span className="text-[#62594f]">{nome}</span><strong className="text-[#465947] whitespace-nowrap">{preco}</strong></div>)}
          </div>
          {observacao && <p className="text-[#62594f] text-sm mt-4">{observacao}</p>}
        </div>
      </section>

      <section className="max-w-[1260px] mx-auto px-5 lg:px-10 py-16 grid md:grid-cols-2 gap-10">
        <div><h2 className="font-serif text-3xl mb-5">Venha ao Romana</h2><p className="text-[#62594f] leading-relaxed">Rua Roma, 236, Vila Romana, Lapa · São Paulo/SP.<br />Terça a sexta, das 10h às 19h.<br />Sábado, das 9h às 19h.<br />Estacionamento gratuito no local.</p><a href="https://maps.app.goo.gl/PTYUY4BER2vXNS6g9" target="_blank" rel="noreferrer" className="inline-block mt-5 font-bold text-[#465947] underline underline-offset-4">Como chegar</a></div>
        <div className="rounded-3xl bg-[#dce5da] p-8"><h2 className="font-serif text-3xl mb-4">{relacionado.titulo}</h2><p className="text-[#4f5b4c] leading-relaxed mb-6">{relacionado.texto}</p><a href={relacionado.href} className={btnSec}>{relacionado.link}</a></div>
      </section>
      <footer className="border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
