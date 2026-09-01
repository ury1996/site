import type { Cidade } from '../data/cidades/tipos';
import { buildOgSvg } from './og-base';

/**
 * Imagem de compartilhamento de cada página de cidade. Usa o mesmo
 * layout das imagens de nicho (src/lib/og-base.ts), trocando o eyebrow
 * pelo nome da cidade e o subtítulo pela praça atendida — o título da
 * imagem é o mesmo título da página, para o alt e o og:image ficarem
 * coerentes com o <h1>.
 */
export function buildCidadeOgSvg(cidade: Cidade): string {
  return buildOgSvg({
    tituloPagina: cidade.tituloSeo,
    eyebrow: `CRIAÇÃO DE SITES EM ${cidade.nome.toUpperCase()} — ${cidade.uf}`,
    linha1: 'Sites que geram',
    destaquePalavra: 'clientes',
    destaqueSufixo: 'todos os dias',
    subtitulo: `para empresas de ${cidade.nome} e região.`,
  });
}
