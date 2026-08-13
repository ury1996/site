# Guia de imagens — o que enviar e em que tamanho

Coloque cada arquivo no caminho indicado, com o nome exato da tabela. Assim que o arquivo
existir, o retângulo tracejado some sozinho — não precisa mexer no código.

Regra geral: **envie sempre no dobro do tamanho que aparece na tela** (é o que deixa nítido
em celular e tela Retina). Os tamanhos abaixo já estão nesse dobro.

---

## 1. Marca — `/public/images/marca/`

| Arquivo | Tamanho | Formato | Para que serve |
|---|---|---|---|
| `logo.png` | 400 × 112px | PNG com fundo transparente | cabeçalho e rodapé |
| `logo-quadrada.png` | 512 × 512px | PNG transparente | dados estruturados do Google |
| `og-image.jpg` | 1200 × 630px | **JPG ou PNG** (não use WebP) | prévia no WhatsApp, Facebook, LinkedIn |
| `apple-touch-icon.png` | 180 × 180px | PNG | ícone quando salvam o site no iPhone |
| `icon-192.png` | 192 × 192px | PNG | ícone do app |
| `icon-512.png` | 512 × 512px | PNG | ícone do app |

**Sobre a logo:** o site tem fundo azul-marinho escuro, então a logo precisa ser a versão de
fundo transparente com o texto em branco ou claro. A que você me mandou tem o "Rankly" em
azul-marinho — nesse fundo ela praticamente sumiria. Se não existir a versão clara, me avise
que eu gero a partir do arquivo original.

**Sobre a `og-image`:** é a imagem que aparece quando alguém cola o link do site no WhatsApp.
Sugestão: fundo azul-marinho, logo centralizada e uma frase curta do tipo "Criação de sites,
Google Ads e SEO". Deixe cerca de 100px de folga nas bordas, porque cada rede corta um pouco
diferente. Precisa ser JPG ou PNG — o WhatsApp não lê WebP.

---

## 2. Fotos das seções — `/public/images/`

| Arquivo | Tamanho | Proporção | Onde aparece |
|---|---|---|---|
| `hero-equipe.webp` | 1000 × 1250px | vertical (4/5) | ao lado do título principal |
| `sobre-escritorio.webp` | 900 × 900px | quadrada (1/1) | seção "Quem faz" |

**`hero-equipe` — a mais importante do site.** É a primeira imagem que a pessoa vê e é ela
que o Google mede no tempo de carregamento. Sugestões, da melhor para a mais fraca:

1. Você (ou a equipe) trabalhando de verdade — tela com um projeto aberto, foto de lado,
   luz natural;
2. o setup de trabalho: mesa, monitor com um site em edição, caderno, café;
3. um cliente sendo atendido, reunião acontecendo.

Evite banco de imagem genérico com gente de terno apertando as mãos — o visitante reconhece
na hora e isso derruba a confiança. Foto de celular boa vale mais que stock ruim.

Como é vertical e fica no topo, deixe o rosto ou o ponto de interesse no **terço superior**
da foto: em telas menores a parte de baixo pode ser cortada.

**`sobre-escritorio`** — clima de bastidor: telas com painel do Google Ads, um site sendo
montado, detalhe do ambiente. Mais fechada e mais solta que a do topo.

---

## 3. Projetos — `/public/images/projetos/`

| Arquivo | Tamanho | Proporção |
|---|---|---|
| `folha-jundiaiense.webp` | 1600 × 900px | 16/9 — **é o card grande, ocupa duas colunas** |
| `doctor-insect.webp` | 900 × 675px | 4/3 |
| `kgiro.webp` | 900 × 675px | 4/3 |
| `atena-pro.webp` | 900 × 675px | 4/3 |
| `rede-calejados.webp` | 900 × 675px | 4/3 |
| `age-tu-e-eu.webp` | 900 × 675px | 4/3 |
| `livro-terezinha.webp` | 900 × 675px | 4/3 |
| `energia-solar.webp` | 900 × 675px | 4/3 |

**Como tirar o print de cada projeto:**

- Abra o site no Chrome com a janela em **1440px de largura** e capture só a área do topo (o
  hero do projeto) — a página inteira fica comprida demais e ilegível dentro do card.
- No DevTools, `Ctrl+Shift+P` e digite "screenshot" para capturar em alta resolução.
- Se quiser um visual mais caprichado, coloque o print dentro de um mockup de notebook ou de
  janela de navegador. Fica bonito, mas não é obrigatório.
- Mantenha o mesmo estilo nos oito: ou todos com mockup, ou todos sem. Misturado fica
  bagunçado.

---

## 4. Regras técnicas que valem para todas

**Formato.** WebP em tudo, menos nos ícones e na og-image. WebP pesa de 30% a 50% menos que
JPG com a mesma qualidade, e peso é nota no PageSpeed. Para converter: Squoosh (grátis, no
navegador) ou o Photoshop exportando como WebP.

**Peso máximo:**
- fotos das seções e dos projetos: **até 200 KB** cada;
- o card grande da Folha Jundiaiense: até 300 KB;
- logo e ícones: até 50 KB.

**Nome do arquivo.** Minúsculo, com hífen, sem acento e sem espaço. O Google lê o nome do
arquivo como sinal de relevância — `criacao-site-dedetizadora.webp` diz mais que
`IMG_9432.webp`. Os nomes da tabela já seguem esse padrão; se quiser trocar, troque também
em `src/consts.ts`.

**Texto dentro da imagem.** Evite. O Google não lê texto dentro de foto, e em celular ele
encolhe e some. O que precisa ser lido tem que estar em HTML — e já está.

**Texto alternativo.** O alt de todas as imagens já está escrito em `src/consts.ts`. Se
trocar a foto ou o projeto, atualize a descrição junto — é o que faz a imagem aparecer no
Google Imagens.

**Contraste.** O fundo do site é azul-marinho quase preto; fotos muito escuras somem nele.
Se a sua estiver escura, clareie um pouco antes de enviar.

---

## Prioridade, se você não tiver tudo agora

Dá para publicar sem as oito fotos de projeto. Ordem do que faz mais falta:

1. `logo.png` na versão clara — é a identidade em toda página;
2. `og-image.jpg` — sem ela, o link no WhatsApp fica sem prévia;
3. `hero-equipe.webp` — primeira impressão;
4. os prints dos projetos — pode subir aos poucos;
5. `sobre-escritorio.webp`.

Os cards sem foto continuam mostrando o retângulo tracejado, que é discreto e não quebra o
layout. Mas antes de divulgar o site para cliente, vale ter pelo menos os quatro primeiros
projetos com print.
