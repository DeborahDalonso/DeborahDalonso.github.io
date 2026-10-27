# Portfólio · Deborah Dalonso

Site estático (HTML, CSS e JS puros, sem build).

```
index.html        conteúdo de todas as seções
css/style.css     tokens de cor e tipografia no topo
js/main.js        borda do menu ao rolar e link da área atual
assets/           favicon, imagem da capa e prints dos projetos
```

## Rodar localmente

```
npx serve .
```

## Adicionar um projeto

Copie um `<article class="showcase ...">` em `index.html`, troque textos, links e o print em `assets/projects/`.
As cores de faixa disponíveis são `showcase--cherry`, `--butter`, `--tint`, `--ink` e `--choc`.

## Publicação

O site é publicado pelo GitHub Pages a partir da branch `main`.

Para usar um domínio próprio:

1. Em Settings → Pages → Custom domain, informe o domínio (isso cria o arquivo `CNAME`).
2. No DNS do domínio:
   - `A` em `@` para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` em `www` para `deborahdalonso.github.io`
3. Marque "Enforce HTTPS" quando o certificado for emitido.
