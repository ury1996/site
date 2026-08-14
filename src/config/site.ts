export const site = {
  nome: 'Sites Rankly',
  url: 'https://www.sitesrankly.com.br',
  titulo: 'Sites para Empresas de Energia Solar | Sites Rankly',
  descricao:
    'Sites para empresas de energia solar, com SEO local e captação por WhatsApp para gerar orçamentos todos os dias. Proposta grátis em 24h.',
  /**
   * Descrição institucional da empresa (agência), usada no JSON-LD
   * ProfessionalService em TODAS as páginas — precisa ser genérica o
   * bastante para descrever a empresa como um todo, não um nicho
   * específico. Não confundir com `descricao`, que é o meta description
   * padrão da home (sobrescrito por página via <Layout descricao={...}>).
   */
  descricaoEmpresa:
    'Agência digital de criação de sites, Google Ads e SEO. Atendemos mais de 40 segmentos — construção, instalações e energia, segurança, automotivo, saúde, jurídico, hospitalidade, educação, serviços domésticos, indústria e agronegócio — com sites rápidos, SEO local e captação de clientes por WhatsApp.',
  ogImage: '/og.png',
  locale: 'pt_BR',
  lang: 'pt-BR',

  telefone: '+55 31 97339-2303',
  telefoneLink: 'tel:5531973392303',
  whatsapp: '5531973392303',
  whatsappMensagem: 'Olá! Tenho uma empresa de energia solar e quero um site.',
  email: 'contato@sitesrankly.com.br',

  endereco: {
    rua: 'Atendimento remoto para todo o Brasil',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    cep: '30000-000',
    pais: 'BR',
    lat: -19.9167,
    lng: -43.9345,
  },

  /* Usado nos textos das páginas de nicho. O atendimento é nacional —
     a sede em BH aparece só no endereço, para o SEO local. */
  regiao: 'todo o Brasil',
  instagram: 'https://www.instagram.com/sitesrankly',

  avaliacao: {
    nota: '5.0',
    quantidade: '32',
  },
} as const;

/** Monta um link wa.me com uma mensagem customizada já codificada. */
export function whatsappUrlPara(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

/** Link do WhatsApp já com a mensagem padrão (institucional) codificada. */
export const whatsappUrl = whatsappUrlPara(site.whatsappMensagem);
