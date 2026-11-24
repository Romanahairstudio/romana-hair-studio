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
    { '@type': 'Offer', name: 'Alongamento de cílios', priceSpecification: { '@type': 'PriceSpecification', minPrice: 200, priceCurrency: 'BRL' }, url },
    { '@type': 'Offer', name: 'Lash lifting', price: 180, priceCurrency: 'BRL', url },
  ],
}

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
      ['Alongamento de cílios', 'Aplicação fio a fio sobre os cílios naturais. Técnicas: clássico, volume brasileiro, volume russo, volume híbrido, egípcio e efeito molhado. O estilo é definido conforme o resultado que você deseja.', 'a partir de R$ 200'],
      ['Lash lifting', 'Curvatura dos cílios naturais, que ficam mais erguidos e aparentes sem uso de extensão.', 'R$ 180'],
      ['Combine com a sobrancelha', 'Design de sobrancelha a partir de R$ 65 para completar o olhar no mesmo atendimento.', 'R$ 65'],
    ]}
    resultadosTitulo="Cílios feitos no Romana"
    resultados={[
      { src: '/images/cilios-resultado-01.webp', alt: 'Antes e depois de alongamento de cílios' },
      { src: '/images/cilios-resultado-02.webp', alt: 'Antes e depois de alongamento de cílios com efeito marcante' },
    ]}
    precos={[
      ['Alongamento de cílios', 'a partir de R$ 200,00'],
      ['Lash lifting', 'R$ 180,00'],
    ]}
    observacao="Todas as técnicas de alongamento são fio a fio: clássico, volume brasileiro, volume russo, volume híbrido, egípcio e efeito molhado. O valor varia conforme a técnica e o volume escolhidos. Consulte a recepção pelo WhatsApp."
    relacionado={{ titulo: 'Sobrancelha também', texto: 'Veja o design de sobrancelha, com henna ou coloração e brow lamination.', href: '/sobrancelha', link: 'Ver sobrancelha' }}
  />
}
