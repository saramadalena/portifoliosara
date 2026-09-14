import fs from 'node:fs'
const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { if (s.includes(a)) s = s.split(a).join(b) }

// Regra transversal: textos corridos ficam um pouco mais largos e blocos de apoio mais discretos.
r("maxWidth: '480px'", "maxWidth: '560px'")
r("maxWidth:'480px'", "maxWidth:'560px'")
r("maxWidth: '520px'", "maxWidth: '580px'")
r("maxWidth:'520px'", "maxWidth:'580px'")

// SADA: o contexto passa a fazer parte da leitura principal, sem aparência de callout independente.
r("<div style={{ borderLeft: `2px solid ${T.ruleLight}`, paddingLeft: '16px', marginBottom: '32px', maxWidth: '480px' }}>", "<div style={{ marginBottom: '28px', maxWidth: '580px' }}>")
r("fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkLight", "fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid")

// Chips e tags deixam de parecer botões. Mantém informação, mas reduz ruído visual em todos os pontos que usam esse padrão.
r("padding: '5px 13px', border: `1px solid ${T.rule}`,\n                whiteSpace: 'nowrap',", "padding: '3px 0', borderBottom: `1px solid ${T.ruleLight}`,\n                whiteSpace: 'nowrap',")
r("padding:'5px 12px',border:`1px solid ${T.ruleLight}`,backgroundColor:T.bg", "padding:'4px 0',borderBottom:`1px solid ${T.ruleLight}`,backgroundColor:'transparent'")

// Menos espaço vertical entre pequenos cabeçalhos e o conteúdo seguinte.
r("margin:'0 0 14px' }}>Contexto", "margin:'0 0 10px' }}>Contexto")
r("margin:'0 0 14px' }}>Desafio", "margin:'0 0 10px' }}>Desafio")
r("margin:'0 0 14px' }}>Atuação", "margin:'0 0 10px' }}>Atuação")
r("margin:'0 0 14px' }}>Entregas", "margin:'0 0 10px' }}>Entregas")

// Evita repetição visual do resultado como um novo grande capítulo quando ele já é evidência do case.
r('>Resultados</p>', '>Evidências</p>')
r('>Resultados</span>', '>Evidências</span>')

fs.writeFileSync(file, s)
console.log('Fluxo de leitura refinado: textos mais contínuos, tags discretas e menos caixas visuais.')
