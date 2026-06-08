import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Romana Hair Studio | Beleza que Transforma',
  description: 'Salão de beleza completo na Lapa, São Paulo. Mega hair, cabelo, unhas, estética e muito mais. Agende agora!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
