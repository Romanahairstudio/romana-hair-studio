export default function sitemap() {
  const base = 'https://www.romanahairstudio.com.br'
  const paths = ['/', '/mega-hair', '/unhas', '/maquiagem', '/penteados', '/resultados-cortes', '/bronzeamento']
  return paths.map((path) => ({
    url: base + path,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
