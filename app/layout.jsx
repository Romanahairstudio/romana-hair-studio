import './globals.css'

export const metadata = {
  title: 'Romana Hair Studio',
  description: 'Salão de beleza na Lapa, São Paulo. Cabelo, Mega Hair, estética, unhas, podologia e bronzeamento artificial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17233082756"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17233082756');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function (event) {
                var link = event.target.closest && event.target.closest('a[href*="wa.me"], a[href*="api.whatsapp.com"], a[href*="whatsapp.com/send"]');
                if (!link || typeof window.gtag !== 'function') return;

                gtag('event', 'conversion', {
                  'send_to': 'AW-17233082756/RwwlCPTz8pQdEITzr5lA',
                  'value': 1.0,
                  'currency': 'BRL'
                });
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
