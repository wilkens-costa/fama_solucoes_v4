# Fama Soluções - Website

Projeto front-end do site corporativo, otimizado para alta performance e hospedagem estática.

## Estrutura do Projeto

- `/public`: Contém os arquivos prontos para produção. Todo o código do site finalizado encontra-se aqui.
  - `index.html`: A página principal limpa e estruturada.
  - `/assets`: Contém apenas as imagens, folhas de estilo (CSS), SVG e scripts estritamente usados pelo site.

- `/src`: Contém arquivos antigos/originais não otimizados (para fins de backup).

## Como Fazer o Deploy

O site foi preparado de forma profissional para rodar com **zero-config** em qualquer servidor web moderno. Recomendamos Vercel ou Netlify.

### Usando Vercel
1. Instale a Vercel CLI com `npm i -g vercel`.
2. Rode `vercel` na raiz do projeto.
3. As configurações do site já estão otimizadas via arquivo `vercel.json`.

### Usando Netlify
1. Conecte o repositório Github ao painel da Netlify.
2. A Netlify lerá automaticamente o `netlify.toml` presente na raiz do projeto.
3. Se preferir rodar manualmente com `netlify-cli`, rode `netlify deploy`.

---
Desenvolvido focado em acessibilidade, velocidade de carregamento, e modernidade de estruturação web.
