import type { Cidade } from './tipos';

export const rioDeJaneiro: Cidade = {
  slug: 'rio-de-janeiro',
  nome: 'Rio de Janeiro',
  uf: 'RJ',
  estado: 'Rio de Janeiro',
  regiao: 'Sudeste',
  geo: { lat: -22.9068, lng: -43.1729 },

  tituloSeo: 'Criação de Sites no Rio de Janeiro | Sites Rankly',
  descricaoSeo:
    'Criação de sites no Rio de Janeiro com SEO local, Google Ads e captação por WhatsApp. Sites pensados para a busca por zona — Sul, Norte, Oeste e Centro. Proposta grátis em 24h.',

  hero: {
    eyebrow: 'Criação de sites · Rio de Janeiro — RJ',
    tituloHtml:
      'Criação de sites no <em>Rio de Janeiro</em> para empresas que dependem de quem busca por perto',
    subHtml:
      'No Rio, ninguém atravessa a cidade por um serviço. Seu site precisa aparecer para quem procura <strong>na sua zona</strong> — e resolver o contato no WhatsApp, ali mesmo.',
    selos: ['SEO local por zona', 'Site rápido no 4G', 'Proposta em 24h úteis'],
  },

  whatsappMensagem: 'Olá! Tenho uma empresa no Rio de Janeiro e quero um site.',

  situacoes: [
    'Não tenho site ainda',
    'Tenho site, mas não aparece no Google',
    'Meu site é antigo e não converte',
    'Quero aparecer na busca da minha zona',
  ],

  bairros: [
    'Centro e Cinelândia',
    'Botafogo e Flamengo',
    'Copacabana e Ipanema',
    'Barra da Tijuca e Recreio',
    'Tijuca e Vila Isabel',
    'Méier e Zona Norte',
    'Jacarepaguá e Freguesia',
    'Niterói e São Gonçalo',
  ],

  nichosDestaque: [
    'hoteis-e-pousadas',
    'restaurantes',
    'cerimonial-e-eventos',
    'fotografia',
    'estetica',
    'advocacia',
  ],

  setoresTitulo: 'Os setores que mais nos procuram no Rio de Janeiro',
  setoresTexto:
    'O Rio tem uma economia que poucas capitais brasileiras têm: turismo o ano inteiro, uma indústria de eventos e audiovisual concentrada, e um setor de serviços que atende tanto o carioca quanto o visitante. Isso muda o tipo de site que funciona aqui — e cada uma das páginas abaixo trata de um desses mercados em detalhe.',

  diagnostico: {
    titulo: 'Por que o seu site não aparece nas buscas do Rio de Janeiro',
    introHtml:
      'A geografia do Rio é recortada: entre a Barra e a Tijuca podem ser duas horas de trânsito, e por isso <strong>a busca é sempre por zona</strong>. Um site que fala genericamente "atendemos o Rio de Janeiro" perde exatamente para quem diz "atendemos Copacabana e Ipanema". Veja os problemas que mais aparecem nas auditorias que fazemos na cidade.',
    notaTexto:
      'O diagnóstico é gratuito: você recebe a lista do que trava o seu site hoje e o que os seus concorrentes diretos estão fazendo melhor.',
    itens: [
      'Nenhuma referência de zona ou bairro no conteúdo — o site não se conecta a nenhuma busca local.',
      'Google Business Profile sem fotos atuais e sem responder avaliação, num mercado em que review pesa muito.',
      'Site pesado que trava em conexão móvel instável, comum em boa parte da cidade.',
      'Ausência de dados estruturados: o Google não identifica o tipo de negócio nem o horário de funcionamento.',
      'Nenhum caminho direto para o WhatsApp, que é onde o carioca fecha atendimento e reserva.',
      'Conteúdo que ignora a sazonalidade: alta temporada, réveillon e carnaval mudam a demanda e o site nunca reflete isso.',
    ],
  },

  beneficios: {
    titulo: 'O que muda com um site pensado para o Rio de Janeiro',
    itens: [
      {
        icone: 'icone-lupa',
        titulo: 'Busca por zona, não pela cidade inteira',
        texto:
          'Estruturamos o conteúdo em torno de como o carioca pesquisa: por zona e por bairro. É onde a concorrência é menor e a chance de a pessoa realmente ir até você é muito maior.',
      },
      {
        icone: 'icone-raio',
        titulo: 'Rápido mesmo em sinal ruim',
        texto:
          'Imagem otimizada, código enxuto e carregamento progressivo. O site abre no celular na rua, no ônibus e em área de sinal fraco — que é onde a maioria das buscas acontece.',
      },
      {
        icone: 'icone-whats',
        titulo: 'Reserva e orçamento pelo WhatsApp',
        texto:
          'Botão fixo com mensagem já preenchida. Para hotel, restaurante e prestador de serviço no Rio, é o canal que converte — o formulário longo fica para depois.',
      },
      {
        icone: 'icone-alvo',
        titulo: 'Preparado para a sazonalidade',
        texto:
          'Estrutura que permite destacar alta temporada, réveillon, carnaval e grandes eventos sem precisar refazer o site toda vez que a demanda muda de perfil.',
      },
      {
        icone: 'icone-calc',
        titulo: 'Google Ads com raio bem desenhado',
        texto:
          'Segmentação por região real de atendimento, não pela cidade inteira. Evita pagar por clique de quem está a 40 quilômetros e nunca vai atravessar a cidade até você.',
      },
      {
        icone: 'icone-escudo',
        titulo: 'Domínio e acessos no seu nome',
        texto:
          'Você é dono de tudo: domínio, hospedagem, contas de anúncio e analytics. Sem fidelidade, sem depender de agência para mexer no próprio site.',
      },
    ],
  },

  depoimentos: {
    titulo: 'Empresas do Rio de Janeiro que já trabalham com a gente',
    itens: [
      {
        texto:
          'Antes a gente dependia só das plataformas de reserva, pagando comissão em tudo. Com o site novo, uma parte boa das reservas passou a entrar direto pelo WhatsApp.',
        autor: 'Pousada na Zona Sul',
        detalhe: '★★★★★',
      },
      {
        texto:
          'Nosso site nem abria direito no celular. Refizeram do zero, ficou rápido e a gente finalmente começou a aparecer nas buscas de quem está no bairro.',
        autor: 'Restaurante',
        detalhe: '★★★★★',
      },
      {
        texto:
          'O que resolveu foi a página de contato entrar direto no WhatsApp com a mensagem pronta. Diminuiu muito o tempo entre o cliente achar a gente e fechar o orçamento.',
        autor: 'Produtora de eventos',
        detalhe: '★★★★★',
      },
    ],
  },

  faq: [
    {
      pergunta: 'Quanto custa criar um site no Rio de Janeiro?',
      resposta:
        'O valor depende do tamanho do projeto. Um site institucional com cinco a sete páginas, SEO técnico e integração de WhatsApp fica em uma faixa; um projeto com sistema de reservas, galeria grande, várias landing pages e campanha de anúncio fica em outra. Fazemos o diagnóstico gratuito, entendemos o seu caso e enviamos proposta fechada em até 24h úteis, com preço final e prazo definidos — sem cobrança por hora.',
    },
    {
      pergunta: 'Vocês entendem a diferença entre atender a Zona Sul e a Barra?',
      resposta:
        'Sim, e ela é grande. São públicos, preços médios e comportamentos de busca diferentes. A Zona Sul tem forte peso de turista e de busca por proximidade a pé; a Barra é mais orientada a carro, condomínio e serviços de bairro. A Zona Norte tem seu próprio comércio consolidado e pouco cruzamento com as outras zonas. Isso muda o vocabulário do site, as referências de localização e até a segmentação da campanha de anúncio.',
    },
    {
      pergunta: 'Meu negócio depende de turista. O site precisa ser em inglês?',
      resposta:
        'Depende de quanto do seu faturamento vem de fora. Para hotéis, pousadas e passeios, uma versão em inglês costuma se pagar. Para restaurantes e serviços locais, quase sempre é melhor investir primeiro num site em português muito bem posicionado e num Google Business Profile impecável — é ali que o turista realmente procura, já dentro do mapa. Avaliamos o seu caso antes de sugerir uma segunda versão, porque site bilíngue mal-feito atrapalha o SEO em vez de ajudar.',
    },
    {
      pergunta: 'Em quanto tempo começo a aparecer no Google no Rio?',
      resposta:
        'Buscas de bairro e de cauda longa costumam mostrar movimento entre 30 e 60 dias após a publicação. Termos disputados na escala da cidade inteira levam de seis meses a um ano de trabalho contínuo, porque o Rio é um dos mercados mais competitivos do país em turismo, gastronomia e serviços. Quem precisa de resultado rápido combina o SEO com Google Ads: o anúncio traz contato desde a primeira semana enquanto o orgânico amadurece.',
    },
    {
      pergunta: 'Como vocês lidam com a sazonalidade do Rio?',
      resposta:
        'Construímos o site de forma que dê para destacar períodos de pico sem refazer nada: uma seção de destaque na home, páginas de campanha para réveillon, carnaval e alta temporada, e conteúdo que pode ser atualizado por você mesmo. A parte de SEO é planejada com antecedência, porque conteúdo de temporada precisa estar publicado meses antes para chegar ao pico já ranqueado — publicar em dezembro uma página de réveillon é tarde demais.',
    },
    {
      pergunta: 'Vocês cuidam do Google Business Profile e das avaliações?',
      resposta:
        'Sim. No Rio, especialmente para restaurante, hotel e serviço de atendimento ao público, o perfil do Google costuma trazer mais contato do que o site. Configuramos categorias, área de atuação, horários, fotos e links corretos, e deixamos uma rotina simples para a sua equipe pedir avaliação após cada atendimento. Volume e recência de avaliações estão entre os fatores que mais movem posição no mapa, e é um trabalho contínuo, não uma configuração de uma vez só.',
    },
    {
      pergunta: 'Atendo também Niterói e a Baixada. O site cobre isso?',
      resposta:
        'Cobre. Declaramos a área de atendimento real no site e no Google Business Profile, incluindo Niterói, São Gonçalo, Baixada Fluminense ou Região dos Lagos, conforme o seu caso. Isso amplia o raio que o Google considera relevante e evita o erro clássico de aparecer apenas para quem está muito perto do endereço cadastrado, deixando de fora boa parte da região metropolitana que você de fato atende.',
    },
    {
      pergunta: 'Já tenho um site antigo. Compensa reformar ou refazer?',
      resposta:
        'Avaliamos antes de opinar. Se a plataforma é atual e a estrutura razoável, reformar costuma valer: melhoramos velocidade, conteúdo e conversão preservando o histórico de domínio, que é um ativo real de SEO. Se o site foi feito em construtor antigo, é lento e não dá para mexer sem quebrar, refazer sai mais barato do que remendar. Em qualquer cenário mantemos as URLs que já têm posição no Google e configuramos os redirecionamentos necessários.',
    },
  ],

  artigo: {
    eyebrow: 'Guia completo',
    titulo: 'Criação de sites no Rio de Janeiro: como aparecer na busca de uma cidade dividida por zonas',
    secoes: [
      {
        titulo: 'Uma economia de serviços que vive de quem está por perto',
        paragrafos: [
          'O Rio de Janeiro é a segunda maior economia urbana do Brasil e tem um perfil bastante particular: petróleo e gás, audiovisual, turismo e uma malha densa de serviços que atende simultaneamente o morador e o visitante. Poucas cidades brasileiras têm um fluxo turístico tão constante ao longo do ano, e isso significa que boa parte dos negócios locais atende dois públicos com comportamentos de busca completamente diferentes.',
          'Para quem vende serviço, a implicação prática é direta: o site precisa funcionar tanto para o carioca que procura um profissional no próprio bairro quanto para o visitante que chegou ontem e está pesquisando no celular, sem referência nenhuma da cidade. São duas jornadas distintas, e um site genérico não atende bem nenhuma das duas.',
        ],
      },
      {
        titulo: 'A geografia manda na busca local',
        paragrafos: [
          'O Rio é uma cidade longa, cortada por morros, túneis e vias expressas. Ir do Recreio ao Centro em horário de pico pode consumir mais de uma hora, e da Barra à Tijuca a distância percebida é ainda maior. Isso cria um comportamento de busca em que a zona é praticamente parte da palavra-chave: as pessoas não procuram um serviço "no Rio", procuram na Zona Sul, na Barra, na Tijuca, no Méier.',
          'Sites que ignoram esse recorte perdem duas vezes. Perdem em relevância, porque o Google não consegue associá-los a nenhuma intenção geográfica específica. E perdem em conversão, porque mesmo quando aparecem, o visitante não encontra a confirmação de que aquele negócio atende a região dele — e sai da página para procurar alguém que deixe isso claro logo na primeira dobra.',
        ],
      },
      {
        titulo: 'O que faz um site ranquear em busca local carioca',
        paragrafos: [
          'A base técnica vale para qualquer cidade: velocidade, responsividade, HTTPS, títulos e descrições únicos, headings organizados e dados estruturados descrevendo o negócio, endereço, telefone e horários. Sem essa fundação, nenhuma estratégia de conteúdo compensa — o Google simplesmente não tem informação suficiente para posicionar o site em resultado local.',
          'Sobre essa base, o que decide no Rio é a combinação entre conteúdo com referência geográfica real e força de perfil no Google Business Profile. Um restaurante bem avaliado com fotos atuais e horário correto ganha do concorrente com site mais bonito e perfil abandonado. E a consistência importa: nome, endereço e telefone precisam ser idênticos em todos os diretórios, porque divergência é um dos motivos mais comuns de um negócio local não ranquear como deveria.',
        ],
      },
      {
        titulo: 'Os setores que mais disputam atenção na cidade',
        paragrafos: [
          'Hotelaria e alimentação estão entre os mercados mais competitivos do Rio. A disputa não é só entre concorrentes diretos: é também contra plataformas de reserva e agregadores que dominam a primeira página e cobram comissão sobre cada venda. Um site próprio bem posicionado, com reserva direta pelo WhatsApp, é a forma mais concreta de recuperar margem nesses setores.',
          'Ao lado deles, a indústria de eventos e audiovisual — produtoras, cerimonial, fotografia — tem um ciclo de decisão diferente: o cliente pesquisa com antecedência, compara portfólios e valoriza demonstração visual de trabalho. Aqui o site importa mais do que o mapa, e a qualidade da galeria e dos cases pesa tanto quanto o posicionamento. E há ainda o grande setor de serviços profissionais, com advocacia e estética disputando termos de alto custo por clique em toda a Zona Sul.',
        ],
      },
      {
        titulo: 'Os erros mais caros que vemos no Rio',
        paragrafos: [
          'O primeiro é depender inteiramente de plataformas de terceiros. Hotel que só vende por agregador e restaurante que só existe no aplicativo de entrega estão alugando o próprio canal de vendas — e pagando caro por isso, todo mês, sem construir nenhum ativo próprio. Um site que ranqueia é a única forma de reduzir gradualmente essa dependência.',
          'O segundo erro é a página de bairro vazia. É tentador criar vinte páginas trocando "Copacabana" por "Ipanema" no mesmo texto, mas isso é exatamente o padrão que as diretrizes de spam do Google classificam como doorway page, e o efeito colateral atinge o domínio inteiro. Só criamos página de região quando existe conteúdo próprio para ela: perfil da área, tipo de cliente, referências reais e diferenças concretas de atendimento.',
        ],
      },
      {
        titulo: 'Prazo, investimento e expectativa de retorno',
        paragrafos: [
          'Um site profissional leva de duas a cinco semanas para ficar pronto, contando briefing, redação, desenvolvimento e ajustes. Projetos com muito conteúdo visual — o caso típico de hotelaria, gastronomia e eventos no Rio — costumam levar mais tempo na etapa de produção de imagens do que na de desenvolvimento propriamente dita.',
          'Quanto ao retorno, vale separar os canais. Google Ads entrega contato na primeira semana e serve para gerar caixa imediato ou testar demanda. O SEO leva de dois a quatro meses para produzir tráfego orgânico relevante, mas cresce de forma composta e continua rendendo depois. Para a maioria dos negócios cariocas que atendemos, a combinação dos dois é o arranjo que dá previsibilidade sem depender eternamente de anúncio.',
        ],
      },
      {
        titulo: 'Por que trabalhar com a Sites Rankly no Rio de Janeiro',
        paragrafos: [
          'Mantemos páginas de conteúdo específicas para mais de quarenta segmentos, e isso encurta muito o começo do projeto: já conhecemos as objeções do seu mercado, as dúvidas que precisam estar respondidas no site e o ponto em que o contato costuma travar antes de virar cliente. Você não gasta semanas explicando como o seu setor funciona.',
          'Entregamos o pacote completo — site, SEO técnico, conteúdo, Google Business Profile e rastreamento de conversão — com domínio e acessos registrados no seu nome, sem contrato de fidelidade. O primeiro passo não custa nada: analisamos a sua presença digital atual, comparamos com os concorrentes que aparecem à sua frente na busca da sua zona e mostramos o que precisa mudar. Se fizer sentido seguir, a proposta chega em até 24 horas úteis.',
        ],
      },
    ],
  },

  ctaFinal: {
    titulo: 'Peça o diagnóstico gratuito do seu site no Rio de Janeiro',
    sub: 'Analisamos o seu site, o seu perfil no Google e quem está aparecendo à sua frente na busca da sua zona. Resposta em até 24h úteis, sem compromisso.',
  },

  relacionadas: ['sao-paulo', 'vitoria', 'belo-horizonte'],

  resumoCard:
    'Criação de sites para empresas cariocas, com SEO local por zona e estratégia para turismo, gastronomia e serviços.',
};
