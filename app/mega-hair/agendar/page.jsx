export const metadata = {
  title: 'Agendar Avaliação de Mega Hair | Romana Hair Studio',
  description: 'Agende sua avaliação personalizada de Mega Hair no Romana Hair Studio, na Vila Romana, pelo WhatsApp.',
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20Mega%20Hair%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Romana Hair Studio',
  url: 'https://www.romanahairstudio.com.br/mega-hair/agendar',
  logo: 'https://www.romanahairstudio.com.br/images/romana-hair-studio-logo.svg',
  image: 'https://www.romanahairstudio.com.br/images/h2.webp',
  telephone: '+55 11 98120-1661',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Roma, 236',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
}

export default function AgendarMegaHairPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <header className="relative z-10 border-b border-[#352e2a]/15 bg-[#faf7f2] backdrop-blur-xl">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-10 h-24 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3" aria-label="Romana Hair Studio — voltar para a página inicial">
            <img
              src="/images/romana-hair-studio-logo.svg"
              alt="Logo Romana Hair Studio"
              width="72"
              height="72"
              className="h-[72px] w-[72px] rounded-2xl border border-[#465947]/35 shadow-sm"
            />
            <div className="hidden sm:block leading-none">
              <div className="font-serif italic text-3xl tracking-wide">Romana</div>
              <div className="font-serif italic text-base text-[#465947] ml-12 -mt-1">Hair Studio</div>
            </div>
          </a>
          <a href="/mega-hair" className="text-sm font-bold text-[#465947] hover:text-[#352e2a] transition">
            Voltar para Mega Hair
          </a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
          <div className="flex flex-col justify-center py-6">
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">Avaliação personalizada</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] mb-7">
              Vamos planejar seu
              <span className="block italic text-[#465947]">Mega Hair?</span>
            </h1>
            <p className="text-[#62594f] text-lg leading-relaxed mb-8 max-w-xl">
              Fale com nossa equipe pelo WhatsApp para combinar sua avaliação presencial na Vila Romana. Nela, analisamos seu cabelo e alinhamos técnica, cor, comprimento, volume e orçamento.
            </p>

            <div className="space-y-3 mb-9">
              {[
                'Atendimento individual e orientação profissional',
                'Estimativa inicial e orçamento após avaliação',
                'Pagamento em até 12x sem juros',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#62594f]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#465947] text-sm font-black text-white">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-fit justify-center rounded-2xl bg-[#465947] px-9 py-5 text-white font-extrabold uppercase tracking-wide shadow-sm hover:-translate-y-1 transition"
            >
              Conversar pelo WhatsApp
            </a>
            <p className="text-[#62594f] text-sm mt-4">Você será direcionada ao WhatsApp do Romana Hair Studio.</p>
          </div>

          <div className="relative min-h-[520px] rounded-[34px] overflow-hidden border border-[#352e2a]/15 shadow-sm">
            <img src="/images/h2.webp" alt="Resultado de Mega Hair no Romana Hair Studio" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f2]/95 via-[#faf7f2]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-[#352e2a]/15 bg-[#faf7f2] backdrop-blur p-5">
              <p className="text-[#465947] uppercase tracking-[0.2em] text-xs font-bold mb-2">Romana Hair Studio</p>
              <p className="text-[#62594f] font-semibold mb-1">Rua Roma, 236 — Vila Romana, São Paulo</p>
              <p className="text-[#62594f] text-sm">Estacionamento no local para clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#352e2a]/15 bg-[#eadfd2]/45 px-5 py-7">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-[#62594f]">
          <p>Romana Hair Studio — Beleza, cuidado e transformação.</p>
          <a href="/mega-hair" className="text-[#465947] font-bold hover:text-[#352e2a] transition">Conhecer o Mega Hair</a>
        </div>
      </footer>
    </main>
  )
}
