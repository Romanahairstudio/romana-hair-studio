import './globals.css'

export const metadata = {
  title: 'Romana Hair Studio',
  description: 'Salão de beleza na Lapa, São Paulo. Cabelo, Mega Hair, estética, unhas, podologia e bronzeamento artificial.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
