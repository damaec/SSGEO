# Site da Dra. Geovana Batista

Site institucional estático criado com Astro. O conteúdo é pré-renderizado em HTML e pode ser servido por hospedagem estática; não há servidor de aplicação ou banco de dados.

## Requisitos

- Node.js 22.23.4 ou superior
- npm

## Desenvolvimento local

    npm ci
    npm run dev

O Astro informa o endereço local no terminal. Para gerar e visualizar a versão final:

    npm run build
    npm run preview

## Estrutura

    src/
      components/       componentes pequenos da interface
      data/site.ts      dados profissionais, contatos e links
      layouts/          estrutura HTML e metadados globais
      pages/            página e rotas SEO estáticas
      styles/           estilos globais e responsivos
    public/
      images/           imagens otimizadas locais
      favicon.svg       ícone do site
    .github/workflows/  publicação automática no GitHub Pages

## Conteúdo e SEO

Os dados da profissional, o endereço, os contatos e os links estão centralizados em **src/data/site.ts**. Os metadados e dados estruturados JSON-LD ficam em **src/layouts/BaseLayout.astro**. O sitemap XML e o arquivo robots.txt são gerados como rotas estáticas Astro e usam o domínio e o caminho definidos para cada publicação.

O site usa imagens locais em WebP, fontes do sistema e HTML pré-renderizado. Os botões de agendamento abrem o WhatsApp com uma mensagem preenchida; as rotas abrem no Google Maps. O formulário da plataforma original não foi recriado porque depende de um backend; o contato está disponível por WhatsApp, telefone e e-mail.

## Publicar no GitHub Pages

O workflow em **.github/workflows/deploy.yml** publica o site quando há um push para **main**. Para uma conta GitHub Free, o repositório precisa ser público para usar GitHub Pages. Os runners padrão do GitHub Actions são gratuitos para repositórios públicos.

1. Crie um repositório público no GitHub. Não marque a opção para adicionar README se quiser evitar conflitos com os arquivos locais.
2. No terminal, dentro desta pasta, vincule o repositório remoto e envie a branch **main**:

       git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
       git add .
       git commit -m "Cria site estático da Dra. Geovana Batista"
       git push -u origin main

3. No GitHub, abra **Settings → Pages** e escolha **GitHub Actions** como origem de publicação.
4. Aguarde a execução do workflow em **Actions**. O endereço aparecerá no ambiente **github-pages**.

Sem domínio próprio, o workflow configura automaticamente o caminho base e o domínio canônico para o endereço do projeto no GitHub Pages. Ao ativar o domínio próprio, o site, o canonical, o robots.txt e o sitemap usam o domínio da página de referência.

### Usar o domínio próprio

Se o site for publicado no domínio da página de referência:

1. Em **Settings → Pages → Custom domain**, informe **fisiogeovanabatista.com.br**.
2. No arquivo **.github/workflows/deploy.yml**, altere **GITHUB_PAGES_CUSTOM_DOMAIN** de **'false'** para **'true'** para publicar na raiz do domínio.
3. Envie essa alteração e aguarde a publicação.
4. Configure os registros DNS no provedor do domínio com os valores indicados pelo GitHub Pages.
5. Ative HTTPS em **Settings → Pages** quando a opção estiver disponível.

Como o projeto publica com GitHub Actions, não é necessário adicionar um arquivo **CNAME**.

O GitHub Pages pode hospedar sem cobrança em repositórios públicos. O domínio próprio continua sujeito à renovação cobrada pelo registrador.
