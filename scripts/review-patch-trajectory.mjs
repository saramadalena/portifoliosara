import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { s = s.split(a).join(b) }

const trajectoryDetails = {
  'move.e': 'Em 2025, passei a desenvolver projetos de comunicação contratados e administrados pela move.e. A experiência reúne Branding, conteúdo, materiais corporativos, apresentações, comunicação institucional e projetos relacionados a eventos.',
  'Grupo SADA': 'Atuação na Gerência de Comunicação e Marketing em uma estrutura corporativa ampla, com trabalho transversal entre canais digitais, comunicação interna, demandas corporativas, eventos, processos e indicadores.',
  'SPDATA': 'Atuação em Comunicação e Marketing com forte participação em projetos de marca, produtos, comunicação interna, endomarketing, conteúdos, apresentações e lives corporativas.',
  'Polycare': 'Atuei durante a estruturação do Marketing, com forte interface e suporte ao Comercial. Desenvolvia materiais de comunicação e vendas, identidade para marca, produtos e cursos, conteúdos digitais, portfólio comercial interativo, lives e apoio a eventos.',
  'Qualitycert': 'Entrei em um momento de implementação da frente de Marketing. Trabalhei na identidade visual dos canais digitais, calendário editorial, conteúdos, campanhas e experiência inicial com Facebook Ads. Também desenvolvi materiais promocionais e o calendário institucional de 2020 no Illustrator.',
  'Colégio Arnaldo': 'Na Coordenação de Comunicação, atendia as unidades Funcionários e Anchieta e a instituição em uma rotina de grande volume. Produzia peças gráficas, fotografias, vídeos e materiais para campanhas e eventos. A atuação em redes sociais era operacional e também realizava atualizações pontuais no WordPress.',
  'Prodemge': 'Atuei na Gerência de Comunicação, com foco em comunicação interna durante um período de reestruturação. Apoiei atividades relacionadas ao diagnóstico de clima, produção gráfica e textual de cartazes e organização dos quadros de avisos, em uma experiência concentrada nos canais físicos.',
  'Banco do Brasil': 'Minha primeira vivência profissional em comunicação aconteceu na área de Comunicação e Apoio da Superintendência de Governo e Varejo. A rotina era presencial e operacional, com ações internas, eventos, premiações, materiais gráficos, brindes e documentos.'
}

const marker = '// ─── GRAPHIC PRIMITIVES'
if (!s.includes('const trajectoryDetails')) {
  s = s.replace(marker, `const trajectoryDetails: Record<string, string> = ${JSON.stringify(trajectoryDetails, null, 2)}\n\n${marker}`)
}

r('Auxiliar de Comunicação', 'Assistente de Comunicação')
r('PolyCare', 'Polycare')
r('QualityCert', 'Qualitycert')

const oldCompany = `<p style={{ fontSize: '12px', fontWeight: 300, color: T.inkLight, margin: 0 }}>{item.empresa}</p>`
const newCompany = `<p style={{ fontSize: '12px', fontWeight: 300, color: T.inkLight, margin: 0 }}>{item.empresa}</p>
                      {trajectoryDetails[item.empresa] && (
                        <details style={{ marginTop: '7px', maxWidth: '520px' }}>
                          <summary style={{ fontSize: '10px', fontWeight: 600, color: item.atual ? T.magenta : T.navy, cursor: 'pointer', letterSpacing: '0.04em', listStylePosition: 'inside' }}>Ver detalhes</summary>
                          <p style={{ fontSize: '12px', fontWeight: 300, color: T.inkMid, lineHeight: 1.7, margin: '8px 0 0' }}>{trajectoryDetails[item.empresa]}</p>
                        </details>
                      )}`
r(oldCompany, newCompany)

r("          {item('Método', () => onNav('forma'))}\n", '')
s = s.replace(/\s*<NavLink href="#forma"[^\n]*>Método<\/NavLink>\n/, '\n')

fs.writeFileSync(file, s)
console.log('Trajetória detalhada e navegação revisadas.')
