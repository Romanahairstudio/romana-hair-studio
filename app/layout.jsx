import './globals.css'

const siteUrl = 'https://www.romanahairstudio.com.br'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Salão de Beleza na Vila Romana | Romana Hair Studio',
  description: 'Salão de beleza na Vila Romana, São Paulo. Cabelo, Mega Hair, unhas, maquiagem, estética, podologia e bronzeamento. Conheça o Romana Hair Studio.',
  openGraph: {
    title: 'Salão de Beleza na Vila Romana | Romana Hair Studio',
    description: 'Cabelo, Mega Hair, unhas, estética e mais na Vila Romana, São Paulo.',
    siteName: 'Romana Hair Studio',
    locale: 'pt_BR',
    type: 'website',
  },
}

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  '@id': siteUrl + '/#business',
  name: 'Romana Hair Studio',
  url: siteUrl,
  telephone: '+55 11 98120-1661',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Roma, 236',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '05050-090',
    addressCountry: 'BR',
  },
  areaServed: ['Vila Romana', 'Lapa', 'Perdizes', 'Pinheiros', 'Alto de Pinheiros'],
  sameAs: ['https://www.instagram.com/romanahairstudio/'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '19:00',
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17233082756"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17233082756');
        ` }} />
        <script dangerouslySetInnerHTML={{ __html: `
          // Registra cliques em links de WhatsApp, inclusive quando o clique ocorre em elementos internos do botão.
          document.addEventListener('click', function (event) {
            var target = event.target;
            if (!(target instanceof Element)) return;
            var link = target.closest('a[href*="wa.me/"], a[href*="api.whatsapp.com/"], a[href*="whatsapp.com/send"]');
            if (!link) return;
            // A fila dataLayer recebe o evento mesmo enquanto a biblioteca gtag.js carrega.
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push((function () {
              return arguments;
            })('event', 'conversion', {
              send_to: 'AW-17233082756/RwwlCPTz8pQdEITzr5lA',
              value: 1.0,
              currency: 'BRL'
            }));
          }, true);
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
