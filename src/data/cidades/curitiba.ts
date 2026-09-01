import type { Cidade } from './tipos';

export const curitiba: Cidade = {
  slug: 'curitiba',
  nome: 'Curitiba',
  uf: 'PR',
  estado: 'Paraná',
  regiao: 'Sul',
  geo: { lat: -25.4284, lng: -49.2733 },

  tituloSeo: 'Criação de Sites em Curitiba | Sites Rankly',
  descricaoSeo:
    'Criação de sites em Curitiba com SEO local, Google Ads e captação por WhatsApp. Sites para indústria, serviços e comércio da capital paranaense. Proposta grátis em 24h.',

  hero: {
    eyebrow: 'Criação de sites · Curitiba — PR',
    tituloHtml:
      'Criação de sites em <em>Curitiba</em> para empresas que vendem para um cliente que pesquisa antes de decidir',
    subHtml:
      'O curitibano compara, lê e só depois entra em contato. Seu site precisa <strong>responder às dúvidas antes da ligação</strong> — e deixar o caminho para o WhatsApp aberto o tempo todo.',
    selos: ['SEO local por bairro', 'Foco em indústria e serviços', 'Proposta em 24h úteis'],
  },

  whatsappMensagem: 'Olá! Tenho uma empresa em Curitiba e quero um site.',

  situacoes: [
    'Não tenho site ainda',
    'Tenho site, mas não aparece no Google',
    'Meu site é antigo e não converte',
    'Quero aparecer nas buscas de Curitiba e região',
  ],

  bairros: [
    'Centro e Centro Cívico',
    'Batel e Bigorrilho',
    'Água Verde e Portão',
    'Cabral e Juvevê',
    'Santa Felicidade',
    'Boqueirão e Xaxim',
    'Cidade Industrial (CIC)',
    'São José dos Pinhais e Pinhais',
  ],

  nichosDestaque: [
    'industria-e-fabricas',
    'climatizacao',
    'moveis-planejados',
    'arquitetura',
    'contabilidade',
    'pet-shops',
  ],

  setoresTitulo: 'Os setores que mais nos procuram em Curitiba',
  setoresTexto:
    'Curitiba combina um parque industrial forte na Cidade Industrial e na região metropolitana — com destaque para automotivo e metalmecânica — e um setor de serviços qualificado no centro expandido. É um mercado em que o cliente industrial pesquisa fornecedor pelo Google e o cliente final valoriza informação técnica antes de decidir. Abaixo, os segmentos que mais nos procuram na capital paranaense.',

  diagnostico: {
    titulo: 'Por que o seu site não aparece nas buscas de Curitiba',
    introHtml:
      'Curitiba é uma cidade com boa densidade digital: muita empresa já tem site, o que eleva o padrão da disputa. Aqui <strong>o básico bem-feito não basta</strong> — o que separa quem aparece é conteúdo específico e um perfil local bem cuidado. Estes são os problemas que mais encontramos nas auditorias na capital paranaense.',
    notaTexto:
      'O diagnóstico é gratuito: mostramos o que está travando o seu site e o que os concorrentes que aparecem à sua frente estão fazendo melhor.',
    itens: [
      'Site institucional que não descreve os serviços em detalhe — só apresenta a empresa.',
      'Nenhuma menção aos bairros e cidades da região metropolitana que a empresa atende.',
      'Google Business Profile sem fotos atuais, sem serviços cadastrados e sem avaliações recentes.',
      'Site lento, feito em construtor antigo, com nota baixa nos Core Web Vitals.',
      'Ausência de dados estruturados descrevendo o tipo de negócio, endereço e horários.',
      'Contato apenas por formulário, sem WhatsApp visível — o canal que resolve mais rápido.',
    ],
  },

  beneficios: {
    titulo: 'O que muda com um site pensado para Curitiba',
    itens: [
      {
        icone: 'icone-alvo',
        titulo: 'Conteúdo técnico que o cliente lê',
        texto:
          'O curitibano pesquisa antes de ligar. Escrevemos páginas que explicam serviço, processo e diferencial em detalhe — é isso que faz a pessoa chegar ao contato já convencida.',
      },
      {
        icone: 'icone-lupa',
        titulo: 'SEO local por bairro e região metropolitana',
        texto:
          'Trabalhamos as buscas por bairro e pelos municípios vizinhos — São José dos Pinhais, Pinhais, Colombo, Araucária —, onde a concorrência é menor e a demanda é real.',
      },
      {
        icone: 'icone-raio',
        titulo: 'Site rápido e bem avaliado',
        texto:
          'Entregamos com nota alta nos Core Web Vitals. Em um mercado onde quase todo concorrente já tem site, velocidade vira critério de desempate no ranqueamento.',
      },
      {
        icone: 'icone-whats',
        titulo: 'Orçamento pelo WhatsApp',
        texto:
          'Botão fixo com mensagem pré-preenchida e clique rastreado. Funciona tanto para o cliente final quanto para o comprador industrial que quer cotação rápida.',
      },
      {
        icone: 'icone-calc',
        titulo: 'Google Ads com verba controlada',
        texto:
          'Campanhas segmentadas pela sua área real de atendimento, com negativação de termos e conversão medida. Sem desperdiçar clique de fora da região.',
      },
      {
        icone: 'icone-escudo',
        titulo: 'Domínio e acessos no seu nome',
        texto:
          'Site, hospedagem, Ads e analytics ficam registrados na sua empresa. Sem fidelidade e sem depender de agência para qualquer ajuste.',
      },
    ],
  },

  depoimentos: {
    titulo: 'Empresas de Curitiba que já trabalham com a gente',
    itens: [
      {
        texto:
          'Vendemos para outras indústrias e achávamos que site não faria diferença. Faz: hoje chega cotação de comprador que nos encontrou pesquisando o produto específico.',
        autor: 'Indústria metalmecânica',
        detalhe: '★★★★★',
      },
      {
        texto:
          'O nosso segmento é muito sazonal por causa do frio. O site foi montado para destacar isso, e a temporada de manutenção começou com a agenda já cheia.',
        autor: 'Empresa de climatização',
        detalhe: '★★★★★',
      },
      {
        texto:
          'O que mais funcionou foi a galeria de projetos bem organizada. O cliente chega no WhatsApp já sabendo o que quer e com uma referência do que a gente faz.',
        autor: 'Loja de móveis planejados',
        detalhe: '★★★★★',
      },
    ],
  },

  faq: [
    {
      pergunta: 'Quanto custa criar um site em Curitiba?',
      resposta:
        'Depende do escopo. Um site institucional com cinco a sete páginas, SEO técnico e integração com WhatsApp fica em uma faixa; um projeto com catálogo de produtos, páginas por linha de serviço, blog e campanha de Ads fica em outra. Fazemos o diagnóstico gratuito e enviamos proposta fechada em até 24h úteis, com preço final e prazo definidos — sem cobrança por hora e sem custo surpresa no meio do caminho.',
    },
    {
      pergunta: 'Vendo para outras empresas, não para o consumidor final. Site adianta?',
      resposta:
        'Adianta bastante, e Curitiba é um bom exemplo disso. Comprador industrial pesquisa fornecedor no Google como qualquer pessoa: procura pelo produto, pela peça, pela norma técnica. O que muda é o tipo de conteúdo que converte — em vez de apelo emocional, o que funciona é ficha técnica, capacidade produtiva, certificações, prazo e um canal direto de cotação. Sites B2B bem-feitos costumam ranquear com facilidade justamente porque poucos concorrentes investem em conteúdo técnico de verdade.',
    },
    {
      pergunta: 'Atendo São José dos Pinhais, Pinhais e Araucária. O site cobre a região metropolitana?',
      resposta:
        'Cobre. Declaramos a sua área real de atendimento tanto no conteúdo do site quanto no Google Business Profile, incluindo os municípios da região metropolitana onde você atua. É um ponto que muita empresa curitibana erra: configura o perfil como se atendesse só o entorno imediato do endereço e perde toda a demanda de Colombo, Pinhais, Araucária e São José dos Pinhais, que na prática fazem parte do mesmo mercado.',
    },
    {
      pergunta: 'Em quanto tempo começo a aparecer no Google em Curitiba?',
      resposta:
        'Buscas específicas e de cauda longa costumam mostrar movimento entre 30 e 60 dias após a publicação. Termos amplos levam de quatro a oito meses de trabalho consistente — Curitiba tem uma concorrência digital acima da média nacional, com boa parte das empresas já investindo em presença online. Quem precisa de contato desde o primeiro mês normalmente combina o SEO com Google Ads.',
    },
    {
      pergunta: 'Meu negócio é sazonal por causa do inverno. Dá para trabalhar isso no site?',
      resposta:
        'Dá, e em Curitiba isso importa mais do que na maioria das capitais. Segmentos como climatização, manutenção predial e alguns serviços domésticos têm picos claros ligados ao frio. Montamos a estrutura para destacar campanhas de temporada sem refazer o site, e planejamos o conteúdo com antecedência: uma página que precisa ranquear em maio tem que estar publicada em fevereiro. Publicar no meio do pico é chegar tarde demais para o orgânico.',
    },
    {
      pergunta: 'Vocês cuidam do Google Business Profile?',
      resposta:
        'Sim. Em busca local o perfil frequentemente traz mais contato que o próprio site, porque aparece antes, no mapa. Configuramos categoria principal e secundárias, área de atuação, horários, serviços, fotos e os links corretos para cada página. Também deixamos uma rotina simples para a sua equipe pedir avaliação após cada atendimento — volume e recência de avaliações estão entre os fatores que mais movem posição no bloco local.',
    },
    {
      pergunta: 'A concorrência daqui já investe em marketing digital. Dá para alcançar?',
      resposta:
        'Dá, mas não batendo de frente no termo mais disputado logo de início. Analisamos o que os concorrentes já dominam e procuramos as buscas que ficaram descobertas: serviços específicos, aplicações técnicas, regiões que ninguém trabalha, dúvidas mal respondidas. Em Curitiba quase sempre existe espaço nesse recorte, porque a maioria dos sites locais foca apenas no termo genérico. Ganhando tráfego por ali, o domínio ganha autoridade para disputar o resto depois.',
    },
    {
      pergunta: 'Já tenho site. Vocês reformam ou refazem?',
      resposta:
        'Avaliamos primeiro. Se a plataforma é atual e a estrutura tem base, reformar costuma valer: melhoramos velocidade, conteúdo e conversão sem perder o histórico do domínio, que é um ativo de SEO. Quando o site é de construtor antigo, lento e engessado, refazer sai mais barato do que remendar. Nos dois casos preservamos as URLs que já têm posição no Google e configuramos os redirecionamentos, para não jogar fora o que você já conquistou.',
    },
  ],

  artigo: {
    eyebrow: 'Guia completo',
    titulo: 'Criação de sites em Curitiba: como aparecer no Google numa cidade com concorrência digital madura',
    secoes: [
      {
        titulo: 'Indústria forte, serviços qualificados e um cliente que pesquisa',
        paragrafos: [
          'Curitiba e sua região metropolitana concentram um dos parques industriais mais relevantes do Brasil, com peso especial em automotivo, metalmecânica e alimentos. Ao lado disso, a capital desenvolveu um setor de serviços qualificado e um ecossistema de tecnologia que cresceu de forma consistente na última década. É uma economia mais equilibrada do que a de muitas capitais, sem depender de um único setor.',
          'Esse equilíbrio se reflete no comportamento de compra. O cliente curitibano — tanto o consumidor final quanto o comprador industrial — tem fama justificada de pesquisar bastante antes de decidir. Ele lê, compara, procura referência e só então entra em contato. Para o site, isso significa que conteúdo raso não sustenta: a página precisa responder às dúvidas antes da conversa, ou a pessoa vai procurar quem responde.',
        ],
      },
      {
        titulo: 'Uma concorrência digital acima da média nacional',
        paragrafos: [
          'Curitiba tem uma particularidade que muda a estratégia: a adoção digital das empresas locais é alta. Em muitos segmentos, praticamente todos os concorrentes relevantes já têm site, já mantêm Google Business Profile e alguns já investem em conteúdo. O piso da disputa é mais alto do que em capitais de porte parecido, e o "básico bem-feito" que resolve em outros lugares aqui apenas empata.',
          'O caminho que funciona é a especificidade. Quando todo mundo disputa o termo genérico, o espaço está nas buscas de cauda longa: a aplicação técnica particular, o serviço de nicho, o bairro que ninguém menciona, a dúvida que nenhum concorrente respondeu direito. São buscas de volume menor, mas de intenção muito maior — e é acumulando dezenas delas que um site novo ganha tração antes de ter autoridade para disputar os termos principais.',
        ],
      },
      {
        titulo: 'O que faz um site ranquear em busca local na capital paranaense',
        paragrafos: [
          'A fundação técnica precisa estar impecável: carregamento rápido, layout responsivo, HTTPS, títulos e meta descriptions únicos, hierarquia de headings correta e dados estruturados descrevendo o negócio, endereço, telefone e horário de funcionamento. Em um mercado onde os concorrentes já fazem o básico, falhas técnicas deixam de ser desvantagem sutil e passam a ser eliminatórias.',
          'Sobre a base, o que decide é profundidade de conteúdo somada a consistência de dados locais. Uma página por serviço, com texto que realmente explica, vale mais do que uma home que tenta cobrir tudo. E nome, endereço e telefone precisam ser idênticos em todos os diretórios: divergência entre site, Google e listagens é uma das causas mais frequentes de negócios bem estruturados que simplesmente não entram no bloco de mapa.',
        ],
      },
      {
        titulo: 'Os setores que mais disputam atenção na cidade',
        paragrafos: [
          'A indústria é o bloco mais característico de Curitiba. Fábricas, metalúrgicas e prestadores de manutenção industrial disputam buscas técnicas em que o comprador procura por produto, norma ou capacidade específica. É um mercado com pouca concorrência de conteúdo bem-feito: quem publica material técnico sério costuma ranquear rápido, porque a maioria dos concorrentes ainda trata o site como catálogo digitalizado.',
          'No lado do consumidor final, climatização tem um peso incomum aqui por causa do clima — a demanda por aquecimento e manutenção tem picos claros que precisam ser antecipados no calendário de conteúdo. Móveis planejados, arquitetura e escritórios de contabilidade completam os segmentos que mais nos procuram, todos com um traço comum: o cliente compara pelo menos três fornecedores e valoriza demonstração concreta de trabalho anterior.',
        ],
      },
      {
        titulo: 'Os erros que mais custam dinheiro em Curitiba',
        paragrafos: [
          'O erro mais caro é o site-folheto. Uma página que apresenta a empresa mas não descreve os serviços em profundidade não ranqueia para nada além do próprio nome — e, num mercado onde o cliente pesquisa muito, também não convence. Empresas industriais são as que mais caem nesse erro, tratando o site como uma versão online do catálogo impresso em vez de um canal de captação.',
          'O segundo erro é subestimar a região metropolitana. Configurar o Google Business Profile como se a empresa atendesse apenas o entorno do endereço descarta a demanda de Pinhais, Colombo, Araucária e São José dos Pinhais, que na prática fazem parte do mesmo mercado. E o terceiro erro, mais grave, é a fábrica de páginas de bairro: dezenas de páginas com o mesmo texto e o nome da região trocado é exatamente o padrão que as diretrizes do Google classificam como doorway page, com consequências para o domínio inteiro.',
        ],
      },
      {
        titulo: 'Prazo, investimento e o que esperar de retorno',
        paragrafos: [
          'Um site profissional leva de duas a cinco semanas entre briefing, redação, desenvolvimento e ajustes finais. Em projetos industriais, a etapa mais longa costuma ser a coleta de informação técnica: especificações, capacidades, certificações e fotos de produto e de planta. Vale investir tempo nessa fase, porque é exatamente esse material que diferencia o site no ranqueamento depois.',
          'Quanto ao retorno, os canais têm ritmos diferentes. Google Ads gera contato na primeira semana e é útil para testar quais termos realmente convertem antes de investir em conteúdo para eles. O SEO leva de dois a cinco meses para produzir tráfego orgânico relevante em Curitiba, dado o nível de concorrência, mas cresce de forma composta. Usar o Ads para descobrir e o SEO para consolidar é a combinação que mais funciona aqui.',
        ],
      },
      {
        titulo: 'Por que trabalhar com a Sites Rankly em Curitiba',
        paragrafos: [
          'Trabalhamos com mais de quarenta segmentos e mantemos conteúdo específico para cada um, o que faz diferença especialmente em projetos industriais: já sabemos que tipo de informação o comprador do seu setor procura, quais objeções aparecem antes da cotação e como estruturar a página para que o contato chegue qualificado, e não apenas em volume.',
          'Entregamos o projeto completo — site, SEO técnico, conteúdo, Google Business Profile e rastreamento de conversão — com domínio e todos os acessos registrados no seu nome, sem contrato de fidelidade. O primeiro passo é gratuito: analisamos a sua presença digital atual, comparamos com os concorrentes que aparecem à sua frente nas buscas de Curitiba e mostramos ponto a ponto o que precisa mudar. Se fizer sentido seguir, a proposta chega em até 24 horas úteis.',
        ],
      },
    ],
  },

  ctaFinal: {
    titulo: 'Peça o diagnóstico gratuito do seu site em Curitiba',
    sub: 'Analisamos o seu site, o seu perfil no Google e, principalmente, quais buscas os seus concorrentes já ocupam e quais ainda estão abertas. Resposta em até 24h úteis.',
  },

  relacionadas: ['florianopolis', 'porto-alegre', 'sao-paulo'],

  resumoCard:
    'Criação de sites para empresas da capital paranaense e região metropolitana, com foco em indústria, serviços técnicos e comércio.',
};
