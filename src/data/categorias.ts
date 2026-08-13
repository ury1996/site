export interface Categoria {
  slug: string;
  nome: string;
  emoji: string;
  /** Usado no <h1>/hero da página de categoria. */
  titulo: string;
  descricao: string;
}

export const categorias: Categoria[] = [
  {
    slug: 'construcao-e-engenharia',
    nome: 'Construção & Engenharia',
    emoji: '🏗️',
    titulo: 'Sites para empresas de Construção & Engenharia',
    descricao:
      'Construtoras, engenheiros, arquitetos e fornecedores de material e esquadrias — sites com portfólio de obras e captação de orçamento.',
  },
  {
    slug: 'instalacoes-e-energia',
    nome: 'Instalações & Energia',
    emoji: '⚡',
    titulo: 'Sites para empresas de Instalações & Energia',
    descricao:
      'Eletricistas, encanadores, climatização, gás, vidraçarias e poços artesianos — sites que captam chamado de serviço e urgência.',
  },
  {
    slug: 'seguranca',
    nome: 'Segurança',
    emoji: '🛡️',
    titulo: 'Sites para empresas de Segurança',
    descricao:
      'Segurança eletrônica e proteção contra incêndio — sites que geram orçamento de instalação e contrato de manutenção.',
  },
  {
    slug: 'automotivo-e-transporte',
    nome: 'Automotivo & Transporte',
    emoji: '🚗',
    titulo: 'Sites para empresas do setor Automotivo & Transporte',
    descricao:
      'Oficinas, funilaria, pneus e transportadoras — sites que captam agendamento de serviço e cotação de frete.',
  },
  {
    slug: 'saude-e-bem-estar',
    nome: 'Saúde & Bem-estar',
    emoji: '💪',
    titulo: 'Sites para empresas de Saúde & Bem-estar',
    descricao:
      'Academias, clínicas, óticas, salões e pet shops — sites com agendamento direto no WhatsApp e SEO local.',
  },
  {
    slug: 'juridico-e-administrativo',
    nome: 'Jurídico & Administrativo',
    emoji: '⚖️',
    titulo: 'Sites para empresas do setor Jurídico & Administrativo',
    descricao:
      'Advocacia, contabilidade e imobiliárias — sites institucionais que captam contato qualificado e respeitam as regras de cada conselho profissional.',
  },
  {
    slug: 'hospitalidade-e-eventos',
    nome: 'Hospitalidade & Eventos',
    emoji: '🍽️',
    titulo: 'Sites para empresas de Hospitalidade & Eventos',
    descricao:
      'Hotéis, restaurantes, cerimonialistas e fotógrafos — sites com portfólio visual forte e verificação de disponibilidade.',
  },
  {
    slug: 'educacao',
    nome: 'Educação',
    emoji: '🎓',
    titulo: 'Sites para instituições de Educação',
    descricao:
      'Escolas, cursos livres e escolas infantis — sites que captam pré-matrícula e agendamento de visita.',
  },
  {
    slug: 'casa-e-servicos-domesticos',
    nome: 'Casa & Serviços Domésticos',
    emoji: '🏡',
    titulo: 'Sites para empresas de Casa & Serviços Domésticos',
    descricao:
      'Limpeza, jardinagem, piscinas, lavanderia, decoração e móveis planejados — sites que captam orçamento recorrente e por projeto.',
  },
  {
    slug: 'industria-logistica-e-agro',
    nome: 'Indústria, Logística & Agro',
    emoji: '🏭',
    titulo: 'Sites para empresas de Indústria, Logística & Agronegócio',
    descricao:
      'Fabricantes, distribuidoras, manutenção industrial e fornecedores rurais — sites institucionais B2B com captação de cotação.',
  },
];

export function getCategoriaPorSlug(slug: string): Categoria | undefined {
  return categorias.find((c) => c.slug === slug);
}
