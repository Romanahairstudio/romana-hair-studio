export const metadata = {
  title: 'Agendar Avaliação de Mega Hair | Romana Hair Studio',
  description: 'Agende sua avaliação personalizada de Mega Hair no Romana Hair Studio, na Vila Romana, pelo WhatsApp.',
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20Mega%20Hair%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.'

export default function AgendarMegaHairPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#c9a34d] selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,163,77,0.16),transparent_42%),linear-gradient(180deg,#050505_0%,#000_70%)] pointer-events-none" />

      <header className="relative z-10 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="max-w-[1100px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
          <a href="/" className="leading-none" aria-label="Voltar para a página inicial">
            <div className="font-serif italic text-3xl tracking-wide">Romana</div>
            <div className="font-serif italic text-base text-white/90 ml-12 -mt-1">Hair Studio</div>
          </a>
          <a href="/mega-hair" className="text-sm font-bold text-[#d6b35f] hover:text-white transition">
            Voltar para Mega Hair
          </a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
          <div className="flex flex-col justify-center py-6">
            <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-5">Avaliação personalizada</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] mb-7">
              Vamos planejar seu
              <span className="block italic text-[#d6b35f]">Mega Hair?</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
              Fale com nossa equipe pelo WhatsApp para combinar sua avaliação presencial na Vila Romana. Nela, analisamos seu cabelo e alinhamos técnica, cor, comprimento, volume e orçamento.
            </p>

            <div className="space-y-3 mb-9">
              {[
                'Atendimento individual e orientação profissional',
                'Estimativa inicial e orçamento após avaliação',
                'Pagamento em até 12x sem juros',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d6b35f] text-sm font-black text-black">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-fit justify-center rounded-2xl bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-9 py-5 text-black font-extrabold uppercase tracking-wide shadow-[0_18px_50px_rgba(201,163,77,0.25)] hover:-translate-y-1 transition"
            >
              Conversar pelo WhatsApp
            </a>
            <p className="text-white/45 text-sm mt-4">Você será direcionada ao WhatsApp do Romana Hair Studio.</p>
          </div>

          <div className="relative min-h-[520px] rounded-[34px] overflow-hidden border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <img src="/images/h2.webp" alt="Resultado de Mega Hair no Romana Hair Studio" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-5">
              <p className="text-[#d6b35f] uppercase tracking-[0.2em] text-xs font-bold mb-2">Romana Hair Studio</p>
              <p className="text-white/85 font-semibold mb-1">Rua Roma, 236 — Vila Romana, São Paulo</p>
              <p className="text-white/55 text-sm">Estacionamento no local para clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-[#070707] px-5 py-7">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-white/50">
          <p>Romana Hair Studio — Beleza, cuidado e transformação.</p>
          <a href="/mega-hair" className="text-[#d6b35f] font-bold hover:text-white transition">Conhecer o Mega Hair</a>
        </div>
      </footer>
    </main>
  )
}
