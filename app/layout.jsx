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
      </head>
      <body>{children}</body>
    </html>
  )
}
