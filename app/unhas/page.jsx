export const metadata = {
  title: 'Alongamento e Unhas de Gel na Vila Romana | Romana Hair Studio',
  description: 'Alongamento de unhas em gel, Molde F1, banho de gel, blindagem e esmaltação em gel na Vila Romana. Veja resultados reais e agende no Romana Hair Studio.',
  alternates: { canonical: 'https://www.romanahairstudio.com.br/unhas' },
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20Unhas%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

const servicos = [
  { nome: 'Alongamento com Molde F1', descricao: 'Técnica de construção em gel que permite definir comprimento e formato conforme o resultado desejado e as condições das unhas naturais.' },
  { nome: 'Banho de gel', descricao: 'Aplicação de gel sobre as unhas naturais para reforçar a estrutura e proporcionar acabamento uniforme, sem necessariamente aumentar o comprimento.' },
  { nome: 'Blindagem', descricao: 'Proteção e reforço das unhas naturais, sem alongamento, para quem prefere manter o comprimento atual.' },
  { nome: 'Esmaltação em gel', descricao: 'Esmaltação com produtos específicos e cura em cabine, com brilho e maior durabilidade que a esmaltação convencional.' },
]

const precos = [
  ['Alongamento fibra/gel', 'R$ 275,00'],
  ['Manutenção fibra/gel', 'R$ 175,00'],
  ['Esmaltação em gel', 'R$ 130,00'],
  ['Banho de gel', 'R$ 150,00'],
  ['Blindagem', 'R$ 130,00'],
]

const resultados = [
  { src: '/images/unhas-resultado-03.webp', alt: 'Unhas nude longas em formato amendoado' },
  { src: '/images/unhas-resultado-07.webp', alt: 'Unhas com francesinha preta e detalhes de brilho' },
  { src: '/images/unhas-resultado-01.webp', alt: 'Unhas vermelhas longas com acabamento brilhante' },
  { src: '/images/unhas-resultado-02.webp', alt: 'Unhas em azul claro e rosa com detalhe delicado' },
  { src: '/images/unhas-resultado-04.webp', alt: 'Unhas nude quadradas com pontas delicadas' },
  { src: '/images/unhas-resultado-05.webp', alt: 'Unhas em azul intenso com acabamento brilhante' },
  { src: '/images/unhas-resultado-06.webp', alt: 'Unhas rosadas com brilho suave nas pontas' },
]

const perguntas = [
  ['Qual é a diferença entre alongamento e banho de gel?', 'O alongamento permite aumentar o comprimento das unhas. O banho de gel é aplicado sobre as unhas naturais para reforçá-las.'],
  ['Qual é a diferença entre banho de gel e blindagem?', 'Ambos são feitos sobre as unhas naturais, mas diferem na técnica e na estrutura da aplicação. Nossa equipe pode orientar sobre a melhor opção para cada caso.'],
  ['Unhas de gel precisam de manutenção?', 'Sim. A frequência depende do crescimento das unhas, da técnica utilizada e da avaliação profissional.'],
  ['Posso fazer esmaltação em gel sem alongamento?', 'Sim. A esmaltação em gel também pode ser realizada sobre as unhas naturais.'],
  ['Como agendar um horário?', 'Entre em contato pelo WhatsApp e informe o serviço desejado.'],
]

function BotaoWhatsapp({ children, secundario = false }) {
  return <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={secundario ? 'inline-flex justify-center rounded-2xl border border-[#d6b35f] px-7 py-4 text-[#d6b35f] font-bold hover:bg-[#d6b35f] hover:text-black transition' : 'inline-flex justify-center rounded-2xl bg-gradient-to-r from-[#b98b32] via-[#e6c977] to-[#b98b32] px-8 py-4 text-black font-extrabold hover:-translate-y-1 transition'}>{children}</a>
}

export default function UnhasPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#c9a34d] selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_55%_0%,rgba(201,163,77,0.13),transparent_40%),linear-gradient(180deg,#050505_0%,#000_60%)] pointer-events-none" />
      <header className="relative z-20 border-b border-white/10 bg-black/80">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-white/90 ml-12 -mt-1">Hair Studio</span>
          </a>
          <a href="/" className="text-[#d6b35f] text-sm font-bold hover:text-white transition">← Página inicial</a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-5">Romana Hair Studio · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.04] tracking-[-0.035em] mb-7">Alongamento e <span className="italic text-[#d6b35f]">unhas de gel</span> na Vila Romana</h1>
            <p className="max-w-xl text-white/75 text-lg lg:text-xl leading-relaxed mb-8">Conheça os trabalhos reais da nossa equipe e descubra opções de alongamento com Molde F1, banho de gel, blindagem e esmaltação em gel.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#d6b35f] px-8 py-4 text-[#d6b35f] font-extrabold hover:bg-[#d6b35f] hover:text-black transition">Ver resultados reais</a>
              <BotaoWhatsapp>Agendar pelo WhatsApp</BotaoWhatsapp>
            </div>
          </div>
          <div className="relative rounded-[34px] border border-white/10 bg-[#101010] overflow-hidden shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
            <img src="/images/unhas-resultado-03.webp" alt="Resultado real de unhas nude alongadas, equipe Romana Hair Studio" className="w-full aspect-[4/5] object-contain" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section id="tecnicas" className="relative z-10 px-5 lg:px-10 py-16 bg-[#080808]">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-4">Nossos serviços</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">Técnicas para <span className="italic text-[#d6b35f]">cada estilo</span></h2>
          <p className="text-white/70 text-lg mb-10 max-w-3xl">Do alongamento à valorização das unhas naturais, nossa equipe ajuda você a escolher o procedimento mais adequado.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {servicos.map((servico) => <article key={servico.nome} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="font-serif text-2xl text-[#e6c977] mb-3">{servico.nome}</h3>
              <p className="text-white/75 leading-relaxed">{servico.descricao}</p>
            </article>)}
          </div>
          <div className="mt-9"><BotaoWhatsapp secundario>Consultar horários disponíveis</BotaoWhatsapp></div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 px-5 lg:px-10 py-20 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-4">Portfólio do salão</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Resultados reais da <span className="italic text-[#d6b35f]">equipe Romana</span></h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-10">Explore diferentes cores, formatos e acabamentos realizados em nosso salão.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(({ src, alt }) => <figure key={src} className="aspect-[4/5] rounded-[26px] overflow-hidden bg-[#101010] border border-white/10">
              <img src={src} alt={alt + ', resultado real da equipe Romana Hair Studio'} loading="lazy" className="h-full w-full object-contain" />
            </figure>)}
          </div>
          <div className="mt-10"><BotaoWhatsapp>Quero agendar minhas unhas</BotaoWhatsapp></div>
        </div>
      </section>

      <section id="valores" className="relative z-10 bg-[#080808] px-5 lg:px-10 py-16">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-4">Transparência</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-9">Valores dos <span className="italic text-[#d6b35f]">procedimentos</span></h2>
          <div className="rounded-3xl border border-white/10 overflow-hidden">
            {precos.map(([nome, preco]) => <div key={nome} className="flex items-center justify-between gap-5 px-5 sm:px-8 py-5 border-b last:border-b-0 border-white/10">
              <span className="text-white/85">{nome}</span><strong className="text-[#e6c977] whitespace-nowrap">{preco}</strong>
            </div>)}
          </div>
          <p className="text-white/55 text-sm mt-4">A técnica e a necessidade de manutenção são avaliadas individualmente. Consulte nossa equipe para confirmar o procedimento indicado.</p>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 py-20">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#d6b35f] uppercase tracking-[0.3em] text-sm font-bold mb-4">Tire suas dúvidas</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-9">Perguntas frequentes</h2>
          <div className="space-y-3">
            {perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <summary className="cursor-pointer font-semibold text-[#e6c977]">{pergunta}</summary>
              <p className="mt-4 text-white/75 leading-relaxed">{resposta}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto border-t border-white/10 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[#d6b35f] uppercase tracking-[0.25em] text-sm font-bold mb-3">Seu atendimento na Vila Romana</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Vamos cuidar das suas unhas?</h2>
            <p className="text-white/65 mt-3 max-w-xl">Rua Roma, 236 · São Paulo/SP. Terça a sexta, das 10h às 19h; sábado, das 9h às 19h.</p>
          </div>
          <BotaoWhatsapp secundario>Agendar pelo WhatsApp</BotaoWhatsapp>
        </div>
      </section>
      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-white/55">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
