import type { Cidade } from './tipos';

export const saoPaulo: Cidade = {
  slug: 'sao-paulo',
  nome: 'São Paulo',
  uf: 'SP',
  estado: 'São Paulo',
  regiao: 'Sudeste',
  geo: { lat: -23.5505, lng: -46.6333 },

  tituloSeo: 'Criação de Sites em São Paulo | Sites Rankly',
  descricaoSeo:
    'Criação de sites em São Paulo com SEO local, Google Ads e captação por WhatsApp. Sites feitos para disputar as buscas mais concorridas do país. Proposta grátis em 24h.',

  hero: {
    eyebrow: 'Criação de sites · São Paulo — SP',
    tituloHtml:
      'Criação de sites em <em>São Paulo</em> para empresas que precisam aparecer no mercado mais disputado do Brasil',
    subHtml:
      'Site rápido, otimizado para as buscas de quem procura pelo seu serviço <strong>no seu bairro</strong> — da Paulista ao Tatuapé — com orçamento chegando direto no WhatsApp.',
    selos: ['SEO local por bairro', 'Google Ads e SEO no mesmo time', 'Proposta em 24h úteis'],
  },

  whatsappMensagem: 'Olá! Tenho uma empresa em São Paulo e quero um site.',

  situacoes: [
    'Não tenho site ainda',
    'Tenho site, mas não aparece no Google',
    'Meu site é antigo e não converte',
    'Quero disputar buscas de bairro em SP',
  ],

  bairros: [
    'Avenida Paulista',
    'Faria Lima e Itaim Bibi',
    'Vila Olímpia e Brooklin',
    'Pinheiros e Vila Madalena',
    'Moema e Vila Mariana',
    'Tatuapé e Zona Leste',
    'Santana e Zona Norte',
    'Santo Amaro e Morumbi',
  ],

  nichosDestaque: [
    'advocacia',
    'contabilidade',
    'odontologia',
    'estetica',
    'imobiliarias',
    'restaurantes',
  ],

  setoresTitulo: 'Os setores que mais nos procuram em São Paulo',
  setoresTexto:
    'São Paulo concentra a maior densidade de escritórios de serviço profissional do país — advocacia, contabilidade, clínicas e imobiliárias dividem o mesmo quarteirão e brigam pelas mesmas palavras-chave. Nossas páginas de nicho foram escritas exatamente para esses mercados: cada uma trata do jeito específico como o cliente daquele segmento pesquisa, compara e decide.',

  diagnostico: {
    titulo: 'Por que o seu site não aparece nas buscas de São Paulo',
    introHtml:
      'Em São Paulo a disputa não é só com o concorrente da esquina: é com franquias nacionais, marketplaces e escritórios com equipe de marketing própria. <strong>Site bonito não basta</strong> — se ele não responde ao que o algoritmo lê, ele simplesmente não entra na página 1. Os pontos abaixo aparecem em quase toda auditoria que fazemos na capital paulista.',
    notaTexto:
      'Fazemos esse diagnóstico de graça: você recebe a lista do que está travando o seu site hoje, sem compromisso de contratar nada.',
    itens: [
      'Uma única página tentando ranquear para a cidade inteira, sem conteúdo por bairro ou por região.',
      'Google Business Profile abandonado, sem categoria correta, sem fotos e sem avaliações recentes.',
      'Site lento no 4G — em São Paulo boa parte das buscas acontece em deslocamento, e a página fecha antes de carregar.',
      'Nenhum dado estruturado: o Google não sabe que você é um escritório, uma clínica ou uma loja.',
      'Contato só por formulário, quando o paulistano resolve tudo pelo WhatsApp.',
      'Textos genéricos, iguais aos de milhares de sites — sem nada que diferencie você do concorrente da mesma avenida.',
    ],
  },

  beneficios: {
    titulo: 'O que muda com um site pensado para São Paulo',
    itens: [
      {
        icone: 'icone-lupa',
        titulo: 'SEO local bairro a bairro',
        texto:
          'Em vez de disputar só "advogado em São Paulo", trabalhamos as buscas por região — Pinheiros, Tatuapé, Santo Amaro — onde a concorrência é menor e a intenção de contratar é muito maior.',
      },
      {
        icone: 'icone-raio',
        titulo: 'Velocidade de verdade',
        texto:
          'Sites entregues com nota alta nos Core Web Vitals, testados em conexão móvel. Quem busca no metrô ou no trânsito não espera cinco segundos por uma página.',
      },
      {
        icone: 'icone-whats',
        titulo: 'Contato direto no WhatsApp',
        texto:
          'Botão fixo, mensagem pré-preenchida e rastreamento de clique. O lead chega qualificado, já dizendo o que precisa, sem passar por formulário que ninguém responde.',
      },
      {
        icone: 'icone-alvo',
        titulo: 'Conteúdo escrito para o seu nicho',
        texto:
          'Não usamos texto genérico. O conteúdo é escrito para como o cliente do seu segmento pesquisa em São Paulo, com as dúvidas e objeções reais daquele mercado.',
      },
      {
        icone: 'icone-calc',
        titulo: 'Google Ads sem desperdício',
        texto:
          'CPC em São Paulo é dos mais caros do Brasil. Estruturamos campanha com segmentação por raio, negativação de termos e conversão rastreada — para cada real ir para quem realmente pode comprar.',
      },
      {
        icone: 'icone-escudo',
        titulo: 'Tudo no seu nome',
        texto:
          'Domínio, hospedagem e acessos ficam registrados na sua empresa. Sem fidelidade e sem refém: se um dia quiser sair, leva o site inteiro com você.',
      },
    ],
  },

  depoimentos: {
    titulo: 'Empresas de São Paulo que já trabalham com a gente',
    itens: [
      {
        texto:
          'Tínhamos um site institucional parado há seis anos. Depois da reformulação, começamos a receber contato de gente da região do escritório, que antes nem sabia que existíamos.',
        autor: 'Escritório de advocacia',
        detalhe: '★★★★★',
      },
      {
        texto:
          'O que mais pesou foi o WhatsApp integrado. O paciente clica, a mensagem já vem escrita e a secretária responde na hora. A agenda encheu sem precisar aumentar o investimento em anúncio.',
        autor: 'Clínica odontológica',
        detalhe: '★★★★★',
      },
      {
        texto:
          'Fizeram páginas separadas para as regiões onde a gente atua. Em três meses a imobiliária passou a aparecer em buscas de bairro que a gente nunca tinha alcançado.',
        autor: 'Imobiliária',
        detalhe: '★★★★★',
      },
    ],
  },

  faq: [
    {
      pergunta: 'Quanto custa criar um site em São Paulo?',
      resposta:
        'Depende do escopo. Um site institucional enxuto, com cinco a sete páginas, SEO técnico e integração com WhatsApp fica em uma faixa; um projeto com várias landing pages por bairro, blog e campanha de Ads fica em outra. Fazemos o diagnóstico gratuito e enviamos uma proposta fechada em até 24h úteis, com preço final, prazo e o que está incluído — sem cobrança por hora e sem surpresa no meio do caminho.',
    },
    {
      pergunta: 'Vocês atendem presencialmente em São Paulo?',
      resposta:
        'Nosso atendimento é remoto, e isso é uma vantagem para o cliente paulistano: você não perde meia manhã em deslocamento para uma reunião de alinhamento. Fazemos tudo por videochamada e WhatsApp, com prazos combinados por escrito. Quando o projeto exige captação de fotos ou vídeos no local, indicamos um profissional da própria cidade e coordenamos a produção junto com você.',
    },
    {
      pergunta: 'Em quanto tempo o site começa a aparecer no Google em São Paulo?',
      resposta:
        'São Paulo é o mercado mais competitivo do Brasil, então o prazo é maior do que em cidades menores. Buscas de bairro e termos de cauda longa costumam mostrar movimento entre 30 e 60 dias depois da publicação. Termos genéricos e muito disputados — "advogado em São Paulo", por exemplo — levam de seis meses a um ano de trabalho consistente. Quem precisa de resultado imediato normalmente combina SEO com Google Ads, para ter contato entrando enquanto o orgânico amadurece.',
    },
    {
      pergunta: 'Faz sentido criar páginas separadas por bairro?',
      resposta:
        'Faz, desde que cada página tenha conteúdo próprio de verdade. Copiar o mesmo texto trocando "Moema" por "Tatuapé" é o que o Google chama de doorway page, e isso derruba o site inteiro. Nós só criamos página de bairro quando existe informação real para colocar nela: perfil da região, tipo de cliente que atendemos ali, casos, referências de localização e diferenças de serviço. Em geral três ou quatro regiões bem trabalhadas rendem mais do que vinte páginas rasas.',
    },
    {
      pergunta: 'Meu concorrente investe pesado em anúncio. Ainda vale investir em SEO?',
      resposta:
        'Vale, e em São Paulo vale ainda mais. O clique pago na capital está entre os mais caros do país em vários segmentos, e quem depende só de Ads para quando para de pagar. O tráfego orgânico é um ativo: uma página bem posicionada continua trazendo contato meses depois de publicada. A estratégia que funciona para a maioria dos nossos clientes é usar o Ads para gerar caixa no curto prazo e o SEO para reduzir, ao longo do tempo, a dependência do anúncio.',
    },
    {
      pergunta: 'Vocês cuidam do Google Business Profile também?',
      resposta:
        'Sim. Em busca local, o perfil do Google costuma pesar mais do que o próprio site: é ele que aparece no mapa e no bloco de resultados locais. Configuramos categoria principal e secundárias, área de atuação, horários, serviços, fotos e o link correto para as páginas certas do site. Também deixamos uma rotina simples para a sua equipe pedir avaliação de cliente, porque volume e recência de avaliações são dos fatores que mais movem posição no mapa.',
    },
    {
      pergunta: 'Atendo a Grande São Paulo, não só a capital. O site cobre isso?',
      resposta:
        'Cobre. Deixamos claro na estrutura do site e no Google Business Profile qual é a sua área de atendimento — se inclui ABC, Guarulhos, Osasco, Barueri ou a Zona Leste inteira. Isso muda o que o Google entende como raio de relevância e evita o erro comum de aparecer só para quem está a dois quarteirões do endereço cadastrado, deixando de fora a maior parte da região metropolitana que você realmente atende.',
    },
    {
      pergunta: 'Já tenho site. Vocês reformam ou precisa refazer do zero?',
      resposta:
        'Analisamos antes de responder. Se a base é sólida — plataforma atual, código limpo, estrutura razoável — muitas vezes compensa reformar: melhoramos performance, arquitetura de conteúdo e conversão sem jogar fora o histórico de domínio. Quando o site é um construtor antigo, lento e travado, refazer sai mais barato do que remendar. De todo jeito, preservamos as URLs que já têm posição no Google e fazemos os redirecionamentos, para não perder o que você já conquistou.',
    },
  ],

  artigo: {
    eyebrow: 'Guia completo',
    titulo: 'Criação de sites em São Paulo: como aparecer no Google na maior cidade do Brasil',
    secoes: [
      {
        titulo: 'Um mercado de 12 milhões de pessoas e uma disputa proporcional',
        paragrafos: [
          'São Paulo é a maior economia urbana da América Latina e concentra a maior densidade empresarial do Brasil. Isso significa uma base de clientes gigantesca, mas também significa que nenhum termo de busca é barato. Para praticamente qualquer serviço, existem dezenas de empresas na cidade brigando pelas mesmas palavras-chave, muitas delas com equipe de marketing interna e orçamento mensal de anúncios que uma empresa pequena não consegue acompanhar.',
          'A consequência prática é que a estratégia vencedora em São Paulo raramente é a mesma que funciona em uma cidade média. Disputar o termo genérico de frente costuma ser caro e demorado demais. O caminho que dá resultado é a especificidade: buscas que combinam serviço, região e situação do cliente. Quem pesquisa "clínica odontológica aberta sábado em Moema" está muito mais perto de agendar do que quem digita "dentista São Paulo" — e a segunda busca custa dez vezes mais para disputar.',
        ],
      },
      {
        titulo: 'Como o paulistano realmente busca por serviços',
        paragrafos: [
          'Três comportamentos definem a busca local em São Paulo. O primeiro é a pressa: as consultas são feitas majoritariamente no celular, muitas vezes em deslocamento, e a paciência com página lenta é próxima de zero. O segundo é a referência geográfica: quase ninguém busca pela cidade inteira, porque atravessar São Paulo pode levar duas horas. As pessoas buscam por bairro, por proximidade de estação de metrô, por região — "perto de mim" é uma das expressões mais usadas.',
          'O terceiro comportamento é a comparação rápida. O usuário abre três ou quatro resultados em abas, olha avaliações, olha preço quando existe, e decide em poucos minutos. Isso torna dois elementos decisivos: a nota do Google Business Profile e a clareza da primeira dobra do site. Se em cinco segundos a pessoa não entende o que você faz, onde atende e como falar com você, ela volta para a busca e abre o próximo resultado. Não há segunda chance.',
        ],
      },
      {
        titulo: 'O que faz um site ranquear em busca local na capital paulista',
        paragrafos: [
          'A base técnica não é negociável: site rápido, responsivo, com HTTPS, títulos e descrições únicas por página, headings organizados e dados estruturados informando o tipo de negócio, endereço, telefone e horário. Sem isso o Google entende o site como mais um endereço genérico e não o associa a nenhuma intenção local específica. É a parte invisível do trabalho, e é a que separa um site que aparece de um site que só existe.',
          'Acima da base entra a arquitetura de conteúdo. Um site que trata cada serviço em uma página própria, com texto suficiente para responder às dúvidas reais do cliente, tem muito mais chance do que um site de página única com tudo empilhado. E acima disso entram os sinais de autoridade: consistência de nome, endereço e telefone em todos os diretórios, avaliações recentes no Google e menções da empresa em sites da própria região. Em São Paulo, onde a base técnica de todo mundo já é boa, são esses sinais que decidem a posição.',
        ],
      },
      {
        titulo: 'Os setores que mais disputam atenção na cidade',
        paragrafos: [
          'A capital paulista é, antes de tudo, uma economia de serviços profissionais. Escritórios de advocacia e de contabilidade se concentram no centro expandido, na Paulista e na Faria Lima, e competem em termos de busca com custo por clique altíssimo. Clínicas odontológicas, dermatológicas e de estética estão espalhadas por todos os bairros de classe média, e a decisão do paciente é fortemente influenciada por avaliação e facilidade de agendamento.',
          'Do outro lado, o setor imobiliário e o de alimentação vivem uma dinâmica diferente: dependem de busca hiperlocal e de conteúdo que fale de bairro específico. Uma imobiliária que trabalha bem "apartamento para alugar em Pinheiros" ganha mais do que uma que investe em "imóveis São Paulo". O mesmo vale para restaurantes, que dependem de mapa, foto, cardápio acessível e horário atualizado muito mais do que de um site institucional bonito.',
        ],
      },
      {
        titulo: 'Os erros que mais custam dinheiro em São Paulo',
        paragrafos: [
          'O primeiro erro é tratar o site como cartão de visita digital. Uma página institucional sem estratégia de busca não traz cliente — ela só confirma que a empresa existe para quem já conhecia o nome. Em um mercado do tamanho de São Paulo, isso é desperdiçar o canal mais barato de aquisição que existe. O segundo erro é depender exclusivamente de anúncio: funciona enquanto o cartão está passando, e no dia em que o orçamento aperta o telefone silencia.',
          'O terceiro erro, mais sutil e mais grave, é a fábrica de páginas de bairro. Existe uma tentação óbvia de gerar cinquenta páginas trocando o nome do bairro no mesmo texto. As diretrizes de spam do Google descrevem exatamente esse padrão como doorway page, e a penalização não atinge só as páginas ruins: atinge o domínio inteiro. Página de região só se sustenta quando tem conteúdo próprio, e conteúdo próprio dá trabalho — não existe atalho seguro aqui.',
        ],
      },
      {
        titulo: 'Prazo, investimento e o que esperar de retorno',
        paragrafos: [
          'Um site profissional bem construído leva de duas a cinco semanas entre briefing, redação, desenvolvimento e ajustes. O que varia é o volume de conteúdo: um site de cinco páginas sai rápido; um projeto com blog, várias páginas de serviço e material para campanha leva mais tempo, porque escrever conteúdo que ranqueia é a parte lenta do processo e não deve ser apressada.',
          'Sobre retorno, o realismo importa mais do que a promessa. Em São Paulo, um site novo com SEO bem-feito costuma começar a receber tráfego orgânico relevante entre o segundo e o quarto mês, crescendo de forma composta a partir daí. Google Ads dá contato na primeira semana, mas com custo por lead que só faz sentido se a margem do seu serviço aguentar. A combinação dos dois é o que dá previsibilidade: o pago sustenta o caixa enquanto o orgânico constrói o ativo.',
        ],
      },
      {
        titulo: 'Por que trabalhar com a Sites Rankly em São Paulo',
        paragrafos: [
          'Trabalhamos com mais de quarenta segmentos e mantemos uma página de conteúdo específica para cada um, justamente porque o comportamento de busca de um paciente de clínica não tem nada a ver com o de quem procura uma transportadora. Esse acúmulo faz diferença no briefing: já sabemos quais são as objeções do seu mercado, quais dúvidas precisam estar respondidas no site e onde o contato costuma travar antes de virar cliente.',
          'Entregamos o projeto completo — site, SEO técnico, conteúdo, Google Business Profile e rastreamento de conversão — com o domínio e todos os acessos registrados no seu nome, sem contrato de fidelidade. O primeiro passo é gratuito: fazemos o diagnóstico da sua presença digital atual e mostramos, ponto a ponto, o que está impedindo a sua empresa de aparecer nas buscas de São Paulo. Se fizer sentido seguir, você recebe a proposta fechada em até 24 horas úteis.',
        ],
      },
    ],
  },

  ctaFinal: {
    titulo: 'Peça o diagnóstico gratuito do seu site em São Paulo',
    sub: 'Analisamos a sua presença digital hoje — site, Google Business Profile e concorrentes da sua região — e mostramos o que precisa mudar para você aparecer. Resposta em até 24h úteis.',
  },

  relacionadas: ['campinas', 'rio-de-janeiro', 'belo-horizonte'],

  resumoCard:
    'Criação de sites para empresas da capital paulista, com SEO local por bairro e estratégia para o mercado mais concorrido do país.',
};
