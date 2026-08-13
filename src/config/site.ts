export const site = {
  nome: 'Sites Rankly',
  url: 'https://www.sitesrankly.com.br',
  titulo: 'Sites para Empresas de Energia Solar em MG | Sites Rankly',
  descricao:
    'Criação de sites e landing pages para empresas de energia solar em Minas Gerais. Site rápido, SEO local e captação por WhatsApp para gerar orçamentos todos os dias. Proposta grátis em 24h.',
  ogImage: '/og.png',
  locale: 'pt_BR',
  lang: 'pt-BR',

  telefone: '+55 31 97339-2303',
  telefoneLink: 'tel:5531973392303',
  whatsapp: '5531973392303',
  whatsappMensagem: 'Olá! Tenho uma empresa de energia solar e quero um site.',
  email: 'contato@sitesrankly.com.br',

  endereco: {
    rua: 'Atendimento em todo o estado',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    cep: '30000-000',
    pais: 'BR',
    lat: -19.9167,
    lng: -43.9345,
  },

  regiao: 'Minas Gerais',
  instagram: 'https://www.instagram.com/sitesrankly',

  avaliacao: {
    nota: '5.0',
    quantidade: '32',
  },
} as const;

/** Link do WhatsApp já com a mensagem padrão codificada. */
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMensagem,
)}`;
