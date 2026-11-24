import ServicoPage from '../ServicoPage'

const descricao = 'Alongamento de cílios fio a fio a partir de R$ 200 (clássico, volume brasileiro, russo, híbrido, egípcio e efeito molhado) e lash lifting por R$ 180 na Vila Romana, Lapa.'

export const metadata = {
  title: 'Alongamento de Cílios e Lash Lifting na Vila Romana | Romana Hair Studio',
  description: descricao,
  alternates: { canonical: '/cilios' },
  openGraph: { title: 'Alongamento de Cílios na Vila Romana | Romana Hair Studio', description: descricao },
}

const url = 'https://www.romanahairstudio.com.br/cilios'
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': url + '#service',
  name: 'Alongamento de cílios e lash lifting',
  description: descricao,
  url,
  provider: { '@id': 'https://www.romanahairstudio.com.br/#business' },
  areaServed: { '@type': 'Place', name: 'Vila Romana, São Paulo - SP' },
  serviceType: ['Alongamento de cílios fio a fio', 'Cílios clássico', 'Volume brasileiro', 'Volume russo', 'Volume híbrido', 'Cílios egípcio', 'Cílios efeito molhado', 'Lash lifting'],
  offers: [
    { '@type': 'Offer', name: 'Alongamento de cílios clássico', price: 200, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Alongamento de cílios volume brasileiro', price: 200, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Alongamento de cílios egípcio', price: 230, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Alongamento de cílios volume russo', price: 230, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Alongamento de cílios volume híbrido', price: 200, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Alongamento de cílios efeito molhado', price: 200, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Lash lifting', price: 180, priceCurrency: 'BRL', url },
  ],
}

const tecnicas = [
  ['Clássico', 'Um fio aplicado sobre cada cílio natural. Alonga com efeito natural, sem muito volume. Ideal para a primeira vez.', 'R$ 200'],
  ['Volume brasileiro', 'Fios em formato de Y, com duas pontas unidas na base. Mais volume que o clássico, mantendo a leveza.', 'R$ 200'],
  ['Egípcio', 'Fios em formato de W, com três pontas. Olhar mais preenchido que no volume brasileiro.', 'R$ 230'],
  ['Volume russo', 'Leques de fios ultrafinos montados na hora e aplicados em cada cílio natural. Volume denso e olhar marcante.', 'R$ 230'],
  ['Volume híbrido', 'Mistura fios do clássico com leques de volume. Meio-termo entre natural e marcante, com textura.', 'R$ 200'],
  ['Efeito molhado', 'Fios agrupados em pontinhas, como cílios molhados ou com rímel. Visual moderno e marcante.', 'R$ 200'],
]

const whatsapp = 'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pela página de cílios do Romana e gostaria de agendar um horário.')

export default function CiliosPage() {
  return <ServicoPage
    schema={schema}
    whatsapp={whatsapp}
    eyebrow="Lash designer · Vila Romana"
    titulo="Alongamento de cílios"
    destaque="e lash lifting"
    intro="Cílios mais longos e marcantes sem máscara. Alongamento fio a fio a partir de R$ 200 e lash lifting por R$ 180, na Rua Roma, 236, Vila Romana, Lapa."
    capa={{ src: '/images/cilios-resultado-01.webp', alt: 'Antes e depois de alongamento de cílios no Romana Hair Studio' }}
    servicos={[
      ['Alongamento de cílios', 'Aplicação fio a fio sobre os cílios naturais, em seis técnicas: do efeito natural do clássico ao volume marcante do russo. Veja as diferenças abaixo.', 'a partir de R$ 200'],
      ['Lash lifting', 'Curvatura dos cílios naturais, que ficam mais erguidos e aparentes sem uso de extensão.', 'R$ 180'],
      ['Combine com a sobrancelha', 'Design de sobrancelha a partir de R$ 65 para completar o olhar no mesmo atendimento.', 'R$ 65'],
    ]}
    resultadosTitulo="Cílios feitos no Romana"
    resultados={[
      { src: '/images/cilios-resultado-01.webp', alt: 'Antes e depois de alongamento de cílios' },
      { src: '/images/cilios-resultado-02.webp', alt: 'Antes e depois de alongamento de cílios com efeito marcante' },
    ]}
    precos={[
      ['Alongamento de cílios clássico', 'R$ 200,00'],
      ['Alongamento de cílios volume brasileiro', 'R$ 200,00'],
      ['Alongamento de cílios egípcio', 'R$ 230,00'],
      ['Alongamento de cílios volume russo', 'R$ 230,00'],
      ['Alongamento de cílios volume híbrido', 'R$ 200,00'],
      ['Alongamento de cílios efeito molhado', 'R$ 200,00'],
      ['Lash lifting', 'R$ 180,00'],
    ]}
    observacao="Todas as técnicas de alongamento são fio a fio. Se tiver dúvida sobre qual combina com você, a lash designer ajuda a escolher no atendimento ou pelo WhatsApp."
    tecnicas={{ eyebrow: 'Técnicas fio a fio', titulo: 'Qual alongamento combina com você?', intro: 'Todas as técnicas são aplicadas fio a fio sobre os cílios naturais. A diferença está no formato dos fios e no volume final.', itens: tecnicas }}
    relacionado={{ titulo: 'Sobrancelha também', texto: 'Veja o design de sobrancelha, com henna ou coloração e brow lamination.', href: '/sobrancelha', link: 'Ver sobrancelha' }}
  />
}
