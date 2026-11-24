import ServicoPage from '../ServicoPage'

const descricao = 'Design de sobrancelha por R$ 65, com henna ou coloração por R$ 105 e brow lamination por R$ 100 na Vila Romana, Lapa. Veja antes e depois e agende.'

export const metadata = {
  title: 'Design de Sobrancelha na Vila Romana, Lapa | Romana Hair Studio',
  description: descricao,
  alternates: { canonical: '/sobrancelha' },
  openGraph: { title: 'Design de Sobrancelha na Vila Romana | Romana Hair Studio', description: descricao },
}

const url = 'https://www.romanahairstudio.com.br/sobrancelha'
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': url + '#service',
  name: 'Design de sobrancelha',
  description: descricao,
  url,
  provider: { '@id': 'https://www.romanahairstudio.com.br/#business' },
  areaServed: { '@type': 'Place', name: 'Vila Romana, São Paulo - SP' },
  serviceType: ['Design de sobrancelha', 'Design de sobrancelha com henna ou coloração', 'Brow lamination'],
  offers: [
    { '@type': 'Offer', name: 'Design de sobrancelha', price: 65, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Design de sobrancelha com henna ou coloração', price: 105, priceCurrency: 'BRL', url },
    { '@type': 'Offer', name: 'Brow lamination', price: 100, priceCurrency: 'BRL', url },
  ],
}

const whatsapp = 'https://wa.me/5511961990862?text=' + encodeURIComponent('Olá! Vim pela página de sobrancelha do Romana e gostaria de agendar um horário.')

export default function SobrancelhaPage() {
  return <ServicoPage
    schema={schema}
    whatsapp={whatsapp}
    eyebrow="Romana Hair Studio · Vila Romana"
    titulo="Design de sobrancelha"
    destaque="na Vila Romana"
    intro="Sobrancelhas desenhadas de acordo com o formato do seu rosto. Design por R$ 65, com henna ou coloração por R$ 105 e brow lamination por R$ 100, na Rua Roma, 236, Vila Romana, Lapa."
    capa={{ src: '/images/sobrancelha-resultado-03.webp', alt: 'Antes e depois de design de sobrancelha com coloração no Romana Hair Studio' }}
    servicos={[
      ['Design de sobrancelha', 'Limpeza e desenho dos fios respeitando o formato natural das sobrancelhas e o equilíbrio do rosto.', 'R$ 65'],
      ['Design com henna ou coloração', 'Design com aplicação de henna ou coloração para preencher falhas e destacar o desenho.', 'R$ 105'],
      ['Brow lamination', 'Técnica que alinha e disciplina os fios, deixando as sobrancelhas com aspecto mais cheio e penteado.', 'R$ 100'],
    ]}
    resultadosTitulo="Sobrancelhas feitas no Romana"
    resultados={[
      { src: '/images/sobrancelha-resultado-03.webp', alt: 'Antes e depois de design de sobrancelha com coloração' },
      { src: '/images/sobrancelha-resultado-02.webp', alt: 'Antes e depois de design de sobrancelha com desenho mais definido' },
      { src: '/images/sobrancelha-resultado-04.webp', alt: 'Antes e depois de design de sobrancelha arqueada' },
      { src: '/images/sobrancelha-resultado-01.webp', alt: 'Antes e depois de design de sobrancelha em sobrancelhas grossas' },
      { src: '/images/sobrancelha-resultado-05.webp', alt: 'Antes e depois de design de sobrancelha com henna' },
    ]}
    precos={[
      ['Design de sobrancelha', 'R$ 65,00'],
      ['Design de sobrancelha com henna ou coloração', 'R$ 105,00'],
      ['Brow lamination', 'R$ 100,00'],
    ]}
    observacao="A técnica indicada é definida com a profissional no atendimento."
    relacionado={{ titulo: 'Cílios também', texto: 'Complete o olhar com alongamento de cílios ou lash lifting.', href: '/cilios', link: 'Ver cílios' }}
  />
}
