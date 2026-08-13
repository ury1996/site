import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { CONTATO } from '../consts';
import { nichos, getNichosPorCategoria } from '../data/nichos';
import { categorias } from '../data/categorias';

export const prerender = true;

/**
 * llms.txt (convenção de llmstxt.org) gerado a partir dos mesmos dados que
 * alimentam o site. Antes era um arquivo estático em /public, que ficou
 * desatualizado assim que o número de nichos cresceu de 8 para 44 — como
 * rota, a lista se mantém sozinha a cada build.
 */
export const GET: APIRoute = () => {
  const secoesPorCategoria = categorias
    .map((categoria) => ({ categoria, itens: getNichosPorCategoria(categoria.slug) }))
    .filter(({ itens }) => itens.length > 0)
    .map(({ categoria, itens }) => {
      const linhas = itens
        .map(
          (nicho) =>
            `- [Sites para ${nicho.nomePlural}](${site.url}/sites-para-${nicho.slug}): ${nicho.resumoCard}`,
        )
        .join('\n');
      return `### ${categoria.nome}\n\n${categoria.descricao}\n\n${linhas}`;
    })
    .join('\n\n');

  const body = `# ${site.nome}

> Agência digital de criação de sites, Google Ads e SEO, com sede em
> ${CONTATO.cidade} (${CONTATO.estadoNome}) e atendimento em todo o Brasil.
> Sites rápidos, com SEO técnico desde a primeira linha e captação de
> clientes integrada ao WhatsApp. Além do serviço geral, mantemos páginas
> específicas para ${nichos.length} segmentos de negócio, cada uma escrita
> para o comportamento de busca daquele mercado.

Contato: ${CONTATO.email} · WhatsApp/telefone: ${CONTATO.telefoneExibicao} ·
${CONTATO.horario} · ${CONTATO.endereco}.

## Páginas principais

- [Início — Criação de Sites, Google Ads e SEO](${site.url}/): página institucional da agência, com serviços, projetos entregues e processo de trabalho.
- [Nichos atendidos](${site.url}/sites-para-empresas): diretório com todos os segmentos, agrupados por categoria.
- [Contato](${site.url}/contato): formulário e canais diretos para orçamento.
- [Sites para Empresas de Energia Solar](${site.url}/sites-para-energia-solar): página dedicada a integradoras e empresas de energia fotovoltaica.

## Serviços

- Criação de sites (Astro, WordPress e Elementor Pro), com SEO técnico e design responsivo.
- Google Ads: pesquisa, Performance Max e remarketing, com rastreamento de conversão no GTM.
- SEO e conteúdo: auditoria técnica, SEO local, dados estruturados e Core Web Vitals.
- Presença digital completa: site, tráfego, rastreamento e manutenção com o mesmo time.

## Nichos atendidos por categoria

${secoesPorCategoria}

## Sobre o serviço

Cada site é construído sob medida (não é template genérico), com: SEO local
(dados estruturados e Google Business Profile), captação de leads integrada ao
WhatsApp, velocidade de carregamento otimizada e conteúdo específico para o
comportamento de busca de cada segmento. O domínio e todos os acessos ficam no
nome do cliente, sem contrato de fidelidade. Diagnóstico gratuito da presença
digital atual em até 24h úteis.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
