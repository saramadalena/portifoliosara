import fs from 'node:fs'
const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { if (s.includes(a)) s = s.split(a).join(b) }

// A home apresenta o repertório, os cases guardam o detalhamento.
r('Projetos reais, <em style={{ fontStyle:\'italic\',fontWeight:400,color:T.magenta }}>resultados mensuráveis.</em>', 'Projetos reais, <em style={{ fontStyle:\'italic\',fontWeight:400,color:T.magenta }}>contextos e entregas.</em>')
r("{!isMobile && <p style={{ fontSize:'12px',fontWeight:300,color:T.inkLight,maxWidth:'260px',lineHeight:1.75,margin:0,textAlign:'right',flexShrink:0 }}>Estrutura: <em>Contexto · Desafio · Estratégia<br/>Execução · Resultados</em></p>}", "{!isMobile && <p style={{ fontSize:'12px',fontWeight:300,color:T.inkLight,maxWidth:'300px',lineHeight:1.75,margin:0,textAlign:'right',flexShrink:0 }}>Quatro recortes de uma trajetória em Comunicação e Marketing.</p>}")

// Hero: quatro eixos já posicionam a atuação. Remove a segunda enumeração visual na fotografia.
r("<span style={{ fontSize:'9px',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(255,255,255,0.45)' }}>Marketing · Branding · Conteúdo</span>", "<span style={{ fontSize:'9px',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(255,255,255,0.45)' }}>Comunicação e Marketing</span>")

// Competências: evita outra nuvem de tags. Itens viram lista editorial leve.
r("padding: isMobile?'7px 14px':'5px 12px',border:`1px solid ${T.ruleLight}`,backgroundColor:T.bg,letterSpacing:'0.02em',lineHeight:1.4", "padding:'4px 0',borderBottom:`1px solid ${T.ruleLight}`,backgroundColor:'transparent',letterSpacing:'0.02em',lineHeight:1.4")

// Sobre: formação já aparece no texto e na trajetória. Retira tags redundantes e geografia que não acrescenta à narrativa.
const sobreTags = `              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '36px' }}>\n                {['PUC Minas', 'MBA Comunicação e Marketing', 'Contagem, MG', 'B2B & B2C'].map((tag) => (\n                  <span key={tag} style={{ padding: '5px 12px', border: \`1px solid \${T.rule}\`, fontSize: '11px', fontWeight: 400, color: T.inkMid, backgroundColor: T.bg, letterSpacing: '0.02em' }}>\n                    {tag}\n                  </span>\n                ))}\n              </div>\n`
r(sobreTags, '')

// Rodapé mais coerente com os quatro eixos, sem uma nova taxonomia no fim da página.
r("['Marketing & Estratégia','Branding & Posicionamento','Conteúdo & Narrativa','Comunicação Corporativa']", "['Branding','Conteúdo multimídia','Canais','Indicadores']")

fs.writeFileSync(file, s)
console.log('Home refinada: menos taxonomias repetidas, cases mais convidativos e competências mais leves.')
