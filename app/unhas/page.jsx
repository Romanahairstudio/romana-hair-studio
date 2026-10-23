export const metadata = {
  title: 'Alongamento e Unhas de Gel na Vila Romana | Romana Hair Studio',
  description: 'Alongamento de unhas em gel, Molde F1, banho de gel, blindagem e esmaltação em gel na Vila Romana. Veja resultados reais e agende no Romana Hair Studio.',
  alternates: { canonical: 'https://www.romanahairstudio.com.br/unhas' },
}

const whatsapp = 'https://wa.me/5511981201661?text=Ol%C3%A1%2C%20vim%20pela%20p%C3%A1gina%20de%20Unhas%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.'

const servicos = [
  { imagem: '/images/unhas-servico-01.webp', nome: 'Alongamento com Molde F1', descricao: 'Técnica de construção em gel que permite definir comprimento e formato conforme o resultado desejado e as condições das unhas naturais.' },
  { imagem: '/images/unhas-servico-02.webp', nome: 'Banho de gel', descricao: 'Aplicação de gel sobre as unhas naturais para reforçar a estrutura e proporcionar acabamento uniforme, sem necessariamente aumentar o comprimento.' },
  { imagem: '/images/unhas-servico-03.webp', nome: 'Blindagem', descricao: 'Proteção e reforço das unhas naturais, sem alongamento, para quem prefere manter o comprimento atual.' },
  { imagem: '/images/unhas-servico-04.webp', nome: 'Esmaltação em gel', descricao: 'Esmaltação com produtos específicos e cura em cabine, com brilho e maior durabilidade que a esmaltação convencional.' },
]

const precos = [
  ['Alongamento em gel (Molde F1)', 'R$ 200,00'],
  ['Manutenção de alongamento em gel', 'R$ 175,00'],
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
  { src: '/images/unhas-resultado-08.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-09.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-10.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-11.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-12.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-13.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-14.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-15.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-16.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
  { src: '/images/unhas-resultado-17.webp', alt: 'Resultado de manicure e unhas realizado pela equipe do Romana Hair Studio' },
]

const perguntas = [
  ['Qual é a diferença entre alongamento e banho de gel?', 'O alongamento permite aumentar o comprimento das unhas. O banho de gel é aplicado sobre as unhas naturais para reforçá-las.'],
  ['Qual é a diferença entre banho de gel e blindagem?', 'Ambos são feitos sobre as unhas naturais, mas diferem na técnica e na estrutura da aplicação. Nossa equipe pode orientar sobre a melhor opção para cada caso.'],
  ['Unhas de gel precisam de manutenção?', 'Sim. A frequência depende do crescimento das unhas, da técnica utilizada e da avaliação profissional.'],
  ['Posso fazer esmaltação em gel sem alongamento?', 'Sim. A esmaltação em gel também pode ser realizada sobre as unhas naturais.'],
  ['Como agendar um horário?', 'Entre em contato pelo WhatsApp e informe o serviço desejado.'],
]

function BotaoWhatsapp({ children, secundario = false }) {
  return <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={secundario ? 'inline-flex justify-center rounded-2xl border border-[#465947] px-7 py-4 text-[#465947] font-bold hover:bg-[#465947] hover:text-white transition' : 'inline-flex justify-center rounded-2xl bg-[#465947] px-8 py-4 text-white font-extrabold hover:-translate-y-1 transition'}>{children}</a>
}

export default function UnhasPage() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#352e2a] selection:bg-[#dce5da] selection:text-[#352e2a]">
      <header className="relative z-20 border-b border-[#352e2a]/15 bg-[#faf7f2]">
        <div className="max-w-[1260px] mx-auto px-5 lg:px-10 py-5 flex items-center justify-between gap-5">
          <a href="/" className="leading-none" aria-label="Romana Hair Studio, voltar ao início">
            <span className="block font-serif italic text-3xl tracking-wide">Romana</span>
            <span className="block font-serif italic text-base text-[#62594f] ml-12 -mt-1">Hair Studio</span>
          </a>
          <a href="/" className="text-[#465947] text-sm font-bold hover:text-[#352e2a] transition">← Página inicial</a>
        </div>
      </header>

      <section className="relative z-10 px-5 lg:px-10 py-16 lg:py-24">
        <div className="max-w-[1260px] mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-5">Romana Hair Studio · Vila Romana</p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.04] tracking-[-0.035em] mb-7">Alongamento e <span className="italic text-[#465947]">unhas de gel</span> na Vila Romana</h1>
            <p className="max-w-xl text-[#62594f] text-lg lg:text-xl leading-relaxed mb-8">Conheça os trabalhos reais da nossa equipe e descubra opções de alongamento com Molde F1, banho de gel, blindagem e esmaltação em gel.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#resultados" className="inline-flex justify-center rounded-2xl border border-[#465947] px-8 py-4 text-[#465947] font-extrabold hover:bg-[#465947] hover:text-white transition">Ver resultados reais</a>
              <BotaoWhatsapp>Agendar pelo WhatsApp</BotaoWhatsapp>
            </div>
          </div>
          <div className="relative rounded-[34px] border border-[#352e2a]/15 bg-[#fffdf9] overflow-hidden shadow-sm">
            <img src="/images/unhas-resultado-03.webp" alt="Resultado real de unhas nude alongadas, equipe Romana Hair Studio" className="w-full aspect-[4/5] object-contain" fetchPriority="high" />
          </div>
        </div>
      </section>

      <section id="tecnicas" className="relative z-10 px-5 lg:px-10 py-16 bg-[#eadfd2]/45">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Nossos serviços</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-5">Técnicas para <span className="italic text-[#465947]">cada estilo</span></h2>
          <p className="text-[#62594f] text-lg mb-10 max-w-3xl">Do alongamento à valorização das unhas naturais, nossa equipe ajuda você a escolher o procedimento mais adequado.</p>
          <div className="divide-y divide-[#352e2a]/15 border-y border-[#352e2a]/15">
            {servicos.map((servico, index) => <article key={servico.nome} className="flex items-start gap-4 sm:gap-6 py-7 sm:py-8">
              <div className="w-24 h-24 sm:w-40 sm:h-40 flex-none rounded-2xl overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15">
                <img src={servico.imagem} alt={`Imagem ilustrativa do serviço ${servico.nome}`} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 pt-1">
                <h3 className="font-serif text-xl sm:text-2xl text-[#465947] mb-2 sm:mb-3">{index + 1}. {servico.nome}</h3>
                <p className="text-[#62594f] text-sm sm:text-lg leading-relaxed">{servico.descricao}</p>
              </div>
            </article>)}
          </div>
          <p className="mt-4 text-sm text-[#62594f]">Imagens ilustrativas das técnicas. Veja os trabalhos reais da equipe na galeria abaixo.</p>
          <div className="mt-9"><BotaoWhatsapp secundario>Consultar horários disponíveis</BotaoWhatsapp></div>
        </div>
      </section>

      <section id="resultados" className="relative z-10 px-5 lg:px-10 py-20 scroll-mt-6">
        <div className="max-w-[1260px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Portfólio do salão</p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-5">Resultados reais da <span className="italic text-[#465947]">equipe Romana</span></h2>
          <p className="text-[#62594f] text-lg leading-relaxed max-w-2xl mb-10">Explore diferentes cores, formatos e acabamentos realizados em nosso salão.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resultados.map(({ src, alt }) => <figure key={src} className="aspect-[4/5] rounded-[26px] overflow-hidden bg-[#fffdf9] border border-[#352e2a]/15">
              <img src={src} alt={alt + ', resultado real da equipe Romana Hair Studio'} loading="lazy" className="h-full w-full object-contain" />
            </figure>)}
          </div>
          <div className="mt-10"><BotaoWhatsapp>Quero agendar minhas unhas</BotaoWhatsapp></div>
        </div>
      </section>

      <section id="valores" className="relative z-10 bg-[#eadfd2]/45 px-5 lg:px-10 py-16">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Transparência</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-9">Valores dos <span className="italic text-[#465947]">procedimentos</span></h2>
          <div className="rounded-3xl border border-[#352e2a]/15 overflow-hidden">
            {precos.map(([nome, preco]) => <div key={nome} className="flex items-center justify-between gap-5 px-5 sm:px-8 py-5 border-b last:border-b-0 border-[#352e2a]/15">
              <span className="text-[#62594f]">{nome}</span><strong className="text-[#465947] whitespace-nowrap">{preco}</strong>
            </div>)}
          </div>
          <p className="text-[#62594f] text-sm mt-4">A técnica e a necessidade de manutenção são avaliadas individualmente. Consulte nossa equipe para confirmar o procedimento indicado.</p>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 py-20">
        <div className="max-w-[900px] mx-auto">
          <p className="text-[#465947] uppercase tracking-[0.3em] text-sm font-bold mb-4">Tire suas dúvidas</p>
          <h2 className="font-serif text-4xl lg:text-5xl mb-9">Perguntas frequentes</h2>
          <div className="space-y-3">
            {perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group rounded-2xl border border-[#352e2a]/15 bg-[#fffdf9] p-5">
              <summary className="cursor-pointer font-semibold text-[#465947]">{pergunta}</summary>
              <p className="mt-4 text-[#62594f] leading-relaxed">{resposta}</p>
            </details>)}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10 pb-24">
        <div className="max-w-[1260px] mx-auto border-t border-[#352e2a]/15 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[#465947] uppercase tracking-[0.25em] text-sm font-bold mb-3">Seu atendimento na Vila Romana</p>
            <h2 className="font-serif text-3xl lg:text-4xl">Vamos cuidar das suas unhas?</h2>
            <p className="text-[#62594f] mt-3 max-w-xl">Rua Roma, 236 · São Paulo/SP. Terça a sexta, das 10h às 19h; sábado, das 9h às 19h.</p>
          </div>
          <BotaoWhatsapp secundario>Agendar pelo WhatsApp</BotaoWhatsapp>
        </div>
      </section>
      <footer className="relative z-10 border-t border-[#352e2a]/15 px-5 py-8 text-center text-sm text-[#62594f]">Romana Hair Studio · Rua Roma, 236 · Vila Romana, São Paulo</footer>
    </main>
  )
}
