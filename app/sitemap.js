export const dynamic = 'force-static'

export default function sitemap() {
  const base = 'https://www.romanahairstudio.com.br'
  const paths = ['/', '/cabeleireiro', '/mega-hair', '/unhas', '/maquiagem', '/penteados', '/resultados-cortes', '/bronzeamento', '/podologia', '/estetica-facial', '/estetica-corporal', '/depilacao-a-laser']
  return paths.map((path) => ({
    url: base + path,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
