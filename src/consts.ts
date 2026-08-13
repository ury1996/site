/* =========================================================================
   CENTRAL DE CONTEÚDO — edite aqui e o site inteiro muda.
   Tudo que está marcado com  // EDITE  precisa ser conferido antes de publicar.
   ========================================================================= */

export const SITE = {
  nome: 'Sites Rankly',
  nomeLegal: 'Sites Rankly',
  url: 'https://www.sitesrankly.com.br', // domínio final (com www), igual ao src/config/site.ts
  titulo: 'Criação de Sites, Google Ads e SEO em MG | Sites Rankly',
  descricao:
    'Agência digital de criação de sites, Google Ads e SEO. Sites rápidos, otimizados e prontos para ranquear no Google. Minas Gerais e todo o Brasil.',
  idioma: 'pt-BR',
  locale: 'pt_BR',
  temaCor: '#050D1F',
  fundadaEm: '2020', // EDITE
  ogImagem: '/images/marca/og-image.jpg', // 1200x630 — subir depois
  logo: '/images/marca/logo.png', // subir a logo aqui
  logoQuadrada: '/images/marca/logo-quadrada.png',
};

export const CONTATO = {
  email: 'contato@sitesrankly.com.br', // EDITE
  telefoneExibicao: '(31) 97339-2303',
  telefoneE164: '+5531973392303',
  whatsapp: '5531973392303',
  whatsappMensagem:
    'Olá, Sites Rankly! Vi o site de vocês e quero um orçamento para o meu projeto.',
  cidade: 'Ribeirão das Neves', // EDITE
  estado: 'MG',
  estadoNome: 'Minas Gerais',
  regiao: 'BR-MG',
  pais: 'BR',
  cep: '33800-000', // EDITE
  endereco: 'Atendimento online e presencial na Grande BH', // EDITE
  geo: { lat: -19.7669, lng: -44.0869 }, // EDITE (coordenadas aproximadas)
  horario: 'Seg a Sex, 09h às 18h',
  instagram: 'https://instagram.com/sitesrankly', // EDITE
  linkedin: 'https://www.linkedin.com/company/sitesrankly', // EDITE
};

export const whatsappLink = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(
  CONTATO.whatsappMensagem,
)}`;

/* ---------------------------------------------------------------- números */
export const NUMEROS = [
  { valor: '150+', rotulo: 'Projetos entregues' }, // EDITE
  { valor: '8', rotulo: 'Anos de estrada' }, // EDITE
  { valor: '95+', rotulo: 'Nota média no PageSpeed' },
  { valor: '0', rotulo: 'Projetos abandonados' },
];

/* --------------------------------------------------------------- serviços */
export const SERVICOS = [
  {
    numero: '01',
    slug: 'criacao-de-sites',
    titulo: 'Criação de sites',
    resumo:
      'Sites que carregam antes de você piscar. Estrutura pensada para o Google entender e para o visitante virar cliente. Nada de tema pronto engordado por plugin.',
    itens: ['Astro, WordPress ou Elementor Pro', 'SEO técnico desde a primeira linha', 'Design responsivo de verdade', 'Hospedagem e domínio configurados'],
  },
  {
    numero: '02',
    slug: 'google-ads',
    titulo: 'Google Ads',
    resumo:
      'Campanha estruturada por intenção de compra, não por chute. Palavra-chave certa, página certa, oferta certa — e o custo por lead caindo mês a mês.',
    itens: ['Pesquisa, Performance Max e Remarketing', 'Rastreamento de conversão no GTM', 'Relatório mensal sem enrolação', 'Otimização semanal'],
  },
  {
    numero: '03',
    slug: 'seo',
    titulo: 'SEO e conteúdo',
    resumo:
      'Aparecer no orgânico é o tráfego que não para quando o cartão vence. Auditoria técnica, conteúdo com intenção de busca e autoridade construída no tempo.',
    itens: ['Auditoria técnica completa', 'SEO local e Perfil da Empresa', 'Dados estruturados (Schema)', 'Core Web Vitals no verde'],
  },
  {
    numero: '04',
    slug: 'presenca-digital',
    titulo: 'Presença digital completa',
    resumo:
      'Site, anúncio, rastreamento e manutenção com um time só. Sem terceirizar responsabilidade, sem um culpar o outro quando o resultado não vem.',
    itens: ['Site + tráfego + análise', 'Landing pages para campanha', 'Manutenção e segurança', 'Suporte direto no WhatsApp'],
  },
];

/* -------------------------------------------------------------- projetos */
/* As imagens ainda não existem: o componente mostra um placeholder bonito
   até você subir o arquivo em /public/images/projetos/ com o nome indicado. */
export const PROJETOS = [
  {
    nome: 'Folha Jundiaiense',
    categoria: 'Portal de notícias',
    imagem: '/images/projetos/folha-jundiaiense.webp',
    descricao:
      'Portal regional de Jundiaí e do Noroeste Paulista, com editorias, busca, newsletter e arquitetura pensada para milhares de páginas indexadas no Google Notícias e no Discover.',
    tags: ['WordPress', 'SEO editorial', 'Discover', 'Alto volume'],
    destaque: true,
  },
  {
    nome: 'Doctor Insect',
    categoria: 'Site + Google Ads',
    imagem: '/images/projetos/doctor-insect.webp',
    descricao:
      'Dedetizadora 24h em São Paulo. Site novo com orçamento no WhatsApp, campanha de pesquisa e rastreamento de conversão ponta a ponta.',
    tags: ['Elementor Pro', 'Google Ads', 'GTM', 'SEO local'],
  },
  {
    nome: 'Kgiro Securitizadora',
    categoria: 'Landing page',
    imagem: '/images/projetos/kgiro.webp',
    descricao:
      'Antecipação de cheques e duplicatas. Página de captação com simulador, prova de números e foco em lead qualificado.',
    tags: ['Landing page', 'Simulador', 'CRO', 'Copy'],
  },
  {
    nome: 'Atena PRO',
    categoria: 'Página de produto',
    imagem: '/images/projetos/atena-pro.webp',
    descricao:
      'Software de bancada para manutenção de videogames. Página de venda com demonstração do produto e checkout integrado.',
    tags: ['HTML', 'Conversão', 'Checkout'],
  },
  {
    nome: 'Azul Sol Energia Solar',
    categoria: 'Site + geração de leads',
    imagem: '/images/projetos/azul-sol.webp',
    descricao:
      'Energia fotovoltaica com foco em economia na conta de luz. Site institucional com portfólio de obras, blog e formulário de cotação.',
    tags: ['WordPress', 'SEO', 'Blog', 'Leads'],
  },
  {
    nome: 'Brasil Mídia Móvel',
    categoria: 'Institucional',
    imagem: '/images/projetos/brasil-midia-movel.webp',
    descricao:
      'Mídia em movimento com 20 anos de estrada. Site com galeria de campanhas, números da operação e contato direto.',
    tags: ['WordPress', 'Galeria', 'Institucional'],
  },
  {
    nome: 'Nítido Painéis',
    categoria: 'Portfólio + SEO local',
    imagem: '/images/projetos/nitido-paineis.webp',
    descricao:
      'Mídia out of home em Goiás desde 2002. Portfólio de front lights, outdoors, empenas e painéis de LED organizado por praça.',
    tags: ['Portfólio', 'SEO local', 'OOH'],
  },
  {
    nome: 'Clínica Anapelle',
    categoria: 'Site + agendamento',
    imagem: '/images/projetos/anapelle.webp',
    descricao:
      'Clínica de estética premium no Itaim Bibi. Página por tratamento, depoimentos verificados e agendamento de avaliação.',
    tags: ['WordPress', 'Agendamento', 'SEO local'],
  },
  /* Prontos para entrar — basta descomentar (as imagens já estão na pasta):
  {
    nome: 'Teceart',
    categoria: 'Marca e decoração',
    imagem: '/images/projetos/teceart.webp',
    descricao: 'Site de marca de decoração autoral, com forte apelo visual e catálogo de peças.',
    tags: ['WordPress', 'Visual', 'Catálogo'],
  },
  {
    nome: 'Curaçao Vacations Tours',
    categoria: 'Turismo receptivo',
    imagem: '/images/projetos/curacao-tours.webp',
    descricao: 'Receptivo em Curaçao: passeios, traslados e contato internacional em português.',
    tags: ['WordPress', 'Turismo', 'Multilíngue'],
  },
  */
];

/* ---------------------------------------------------------- outros serviços */
export const EXTRAS = [
  {
    titulo: 'Rastreamento e GTM',
    texto: 'Google Tag Manager, GA4, Pixel e conversões offline. Se não dá para medir, não dá para melhorar.',
  },
  {
    titulo: 'Google Meu Negócio',
    texto: 'Perfil otimizado, categorias certas, fotos e avaliações. É o que faz você aparecer no mapa da sua cidade.',
  },
  {
    titulo: 'Automação e WhatsApp',
    texto: 'Lead cai no seu WhatsApp já qualificado. Respostas automáticas, integração com planilha e CRM.',
  },
  {
    titulo: 'Performance e Core Web Vitals',
    texto: 'Site lento perde posição e perde venda. Deixamos LCP, CLS e INP no verde e mantemos assim.',
  },
  {
    titulo: 'Manutenção e segurança',
    texto: 'Backup, atualização, monitoramento e limpeza de malware. Já resgatamos site infectado mais de uma vez.',
  },
  {
    titulo: 'Migração e redesign',
    texto: 'Site antigo virando site novo sem perder o que você já ranqueou. Redirecionamento 301 planejado.',
  },
];

/* ------------------------------------------------------------------ stack */
export const STACK = [
  { grupo: 'Sites', itens: ['Astro', 'WordPress', 'Elementor Pro', 'HTML/CSS'] },
  { grupo: 'Tráfego', itens: ['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio'] },
  { grupo: 'SEO', itens: ['Search Console', 'Schema.org', 'Semrush', 'PageSpeed'] },
  { grupo: 'Infra', itens: ['Cloudflare', 'Hospedagem LiteSpeed', 'SSL', 'Backup'] },
];

/* --------------------------------------------------------------- processo */
export const PROCESSO = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    texto: 'A gente escuta. Qual o objetivo, quem é o cliente, quanto vale um lead para você. Conversa curta, sem apresentação de 40 slides.',
  },
  {
    numero: '02',
    titulo: 'Layout',
    texto: 'Você vê o site antes de ele existir. Protótipo aprovado, sem surpresa na entrega.',
  },
  {
    numero: '03',
    titulo: 'Construção',
    texto: 'Desenvolvimento, textos, SEO técnico e rastreamento. Você acompanha por link, não por promessa.',
  },
  {
    numero: '04',
    titulo: 'Publicação e crescimento',
    texto: 'Subiu no ar, começa o trabalho de verdade: medir, corrigir e crescer. A gente não some depois do lançamento.',
  },
];

/* -------------------------------------------------------------------- FAQ */
export const FAQ = [
  {
    pergunta: 'Quanto tempo leva para criar um site?',
    resposta:
      'Uma landing page fica pronta em 5 a 10 dias. Um site institucional completo, entre 3 e 5 semanas. O prazo depende principalmente da velocidade com que você envia textos, fotos e aprovações — a parte técnica raramente é o gargalo.',
  },
  {
    pergunta: 'Quanto custa um site com a Sites Rankly?',
    resposta:
      'Depende do escopo. Landing page de campanha começa em uma faixa; site institucional com blog e SEO fica em outra; projeto com e-commerce em outra. Na primeira conversa mapeamos o que você realmente precisa e enviamos uma proposta fechada, sem valor variável no meio do caminho.',
  },
  {
    pergunta: 'O site já vem otimizado para o Google?',
    resposta:
      'Sim, e não como item opcional. Todo projeto sai com estrutura de headings correta, títulos e descrições únicos, dados estruturados, sitemap, robots.txt, imagens comprimidas, Core Web Vitals no verde e Search Console configurado. SEO técnico é a base, não um upsell.',
  },
  {
    pergunta: 'Em quanto tempo eu apareço na primeira página do Google?',
    resposta:
      'No orgânico, resultado consistente aparece entre 3 e 6 meses, dependendo da concorrência da sua palavra-chave e da sua região. Para termos locais menos disputados, costuma ser mais rápido. Se você precisa de cliente agora, o caminho é Google Ads em paralelo — o orgânico constrói o médio prazo.',
  },
  {
    pergunta: 'Vocês atendem fora de Minas Gerais?',
    resposta:
      'Atendemos o Brasil inteiro. A operação é remota, com reunião por vídeo e acompanhamento no WhatsApp. Clientes em São Paulo, Minas e outros estados trabalham com a gente exatamente do mesmo jeito.',
  },
  {
    pergunta: 'Já tenho um site. Dá para melhorar em vez de refazer?',
    resposta:
      'Muitas vezes sim. Fazemos auditoria técnica, mostramos o que está travando a performance e o ranqueamento e apontamos o que vale corrigir e o que vale reconstruir. Quando o site é refeito, planejamos os redirecionamentos para não perder as posições já conquistadas.',
  },
  {
    pergunta: 'O que acontece depois que o site vai ao ar?',
    resposta:
      'Você recebe treinamento para editar o conteúdo e pode contratar o plano de manutenção: backup, atualizações, monitoramento de segurança, pequenos ajustes e acompanhamento de SEO. Também mantemos o canal aberto no WhatsApp para dúvidas rápidas.',
  },
  {
    pergunta: 'Por que contratar a Sites Rankly e não uma agência grande?',
    resposta:
      'Porque quem conversa com você é quem executa. Não há camada de atendimento repassando recado para um time que você nunca vê. Menos intermediário significa decisão mais rápida, custo menor e alguém que conhece seu projeto pelo nome, não pelo número do chamado.',
  },
];

/* ------------------------------------------------------------- navegação */
export const NAV = [
  { rotulo: 'Serviços', href: '/#servicos' },
  { rotulo: 'Projetos', href: '/#projetos' },
  /* Hub com os 44 nichos atendidos, agrupados por categoria. */
  { rotulo: 'Nichos', href: '/sites-para-empresas' },
  { rotulo: 'Processo', href: '/#processo' },
  { rotulo: 'Contato', href: '/contato' },
];
