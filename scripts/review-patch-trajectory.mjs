import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { s = s.split(a).join(b) }

// Textos de trajetória usados como complemento dos cards, sem alterar a estrutura visual.
const trajectoryDetails = {
  Qualitycert: 'Na Qualitycert, empresa de certificação digital, entrei em um momento de implementação da frente de Marketing. Trabalhei na construção e padronização da identidade visual dos canais digitais, organização de calendário editorial, produção de conteúdos e campanhas, além de uma experiência inicial com Facebook Ads. Também desenvolvi materiais promocionais, incluindo a criação autoral do calendário institucional de 2020, produzido integralmente no Illustrator, e participei da organização de ações internas.',
  Polycare: 'Na Polycare, distribuidora de produtos para áreas cirúrgicas e de medicina estética, atuei durante a estruturação do Marketing, com forte interface e suporte ao Comercial. Desenvolvia materiais de comunicação e vendas, identidade para a marca, produtos e cursos, conteúdos para canais digitais e um portfólio comercial interativo. Também realizava lives pelo Instagram com profissionais do setor e apoiava eventos e cursos hands-on.',
  Arnaldo: 'Na Coordenação de Comunicação, atendia demandas das unidades Funcionários e Anchieta e da instituição em uma rotina de grande volume. Produzia peças gráficas, fotografias, vídeos e materiais para campanhas, eventos e ações de captação. Nas redes sociais, a atuação era operacional, com recebimento e publicação de conteúdos enviados pelas áreas. Também realizava atualizações pontuais no site WordPress.',
  Prodemge: 'Atuei na Gerência de Comunicação, com foco em comunicação interna durante um período de reestruturação. Apoiei atividades relacionadas ao diagnóstico de clima e à comunicação daquele contexto, além da produção gráfica e textual de cartazes e da organização dos quadros de avisos. Foi uma experiência concentrada no ambiente interno e nos canais físicos.',
  BancoDoBrasil: 'Minha primeira vivência profissional em comunicação aconteceu na área de Comunicação e Apoio da Superintendência de Governo e Varejo. Era uma rotina essencialmente presencial e operacional, com apoio a ações internas, eventos, premiações e relacionamento com empregados. Produzia convites, cartões e outros materiais gráficos e apoiava a organização de brindes, documentos e demandas da área.'
}

// Mantém os textos disponíveis no bundle para a etapa de detalhamento da trajetória.
const marker = '// ─── GRAPHIC PRIMITIVES'
if (!s.includes('const trajectoryDetails =')) {
  s = s.replace(marker, `const trajectoryDetails = ${JSON.stringify(trajectoryDetails, null, 2)}\n\n${marker}`)
}

r('Auxiliar de Comunicação', 'Assistente de Comunicação')
r('PolyCare', 'Polycare')
r('QualityCert', 'Qualitycert')

fs.writeFileSync(file, s)
console.log('Conteúdo detalhado da trajetória preparado.')
