# Segurança do site

O site é exportado como arquivos estáticos. Não há API, login próprio ou banco de dados neste repositório. O contato é feito pelo WhatsApp.

## Validação das alterações

- Use `npm ci`, `npm audit --audit-level=high` e `npm run build`.
- A exportação fica em `out/`. Valide as páginas, imagens, sitemap, robots.txt e o evento de conversão do WhatsApp.
- Os cabeçalhos de segurança são definidos em `vercel.json`, pois a exportação estática não executa os cabeçalhos do servidor Next.js.
- A CSP inicial restringe enquadramento, plugins, endereço base e envio de formulários. Ela ainda não restringe fontes de scripts: uma política mais estrita requer validação dos scripts de hidratação do Next.js, Google Ads e Maps.
- O workflow de segurança não usa segredos e tem apenas leitura do conteúdo. As ações estão fixadas por SHA. O Dependabot propõe atualizações semanais; não há aprovação ou merge automático.

## Controles de acesso a conferir no painel

- GitHub: habilitar 2FA/passkey e guardar códigos de recuperação fora do repositório.
- GitHub: revisar membros da organização, colaboradores, convites, GitHub Apps, deploy keys e tokens; remover acessos antigos somente após identificar sua finalidade.
- Proteger `main`: exigir pull request e o check `Build and dependency audit`; bloquear force push e exclusão. Para operação individual, a exigência de aprovação por outra pessoa depende da existência de um segundo revisor de confiança.
- Confirmar o check e a integração Vercel antes de torná-los obrigatórios. Uma regra de branch não substitui Deployment Checks da Vercel e não garante sozinha o bloqueio de publicação de um build reprovado.
- Vercel: manter MFA e proteção dos previews; revisar integrações, tokens e links temporários de compartilhamento.
- Manter o domínio de produção público para clientes e mecanismos de busca.

Não coloque senhas em `NEXT_PUBLIC_*`: esses valores são entregues ao navegador. O identificador público do Google Ads não é uma credencial.
