import fs from 'node:fs'
const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { if (s.includes(a)) s = s.split(a).join(b) }

// Intermodal é um subcase do SADA. A leitura precisa ser mais curta do que a de um case principal.
r('Estratégia digital · Cobertura · Conteúdo · Mensuração', 'Comunicação digital · Conteúdo · Canais')
r('Grupo SADA · Evento · São Paulo', 'Grupo SADA · Intermodal 2024')

// Remove os chips que repetem o parágrafo de atuação logo acima.
const chips = `          {/* disciplinas — chips internos */}\n          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>\n            {['Planejamento editorial', 'Roteiro', 'Produção audiovisual', 'Conteúdo em tempo real'].map(d => (\n              <span key={d} style={{ fontSize: '9px', fontWeight: 400, color: T.navy, padding: '3px 10px', border: \`1px solid rgba(0,0,128,0.25)\`, whiteSpace: 'nowrap' }}>{d}</span>\n            ))}\n          </div>\n`
r(chips, '')

// Nomenclatura alinhada à régua dos demais cases.
r('<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Estratégia</span>', '<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Atuação</span>')
r('<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Execução</span>', '<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Entregas</span>')
r('<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Resultados</span>', '<span style={{ fontSize: \'9px\', fontWeight: 700, letterSpacing: \'0.24em\', textTransform: \'uppercase\', color: T.inkLight }}>Evidências</span>')

// As duas métricas continuam em destaque, mas com escala menos dominante.
r("fontSize: 'clamp(40px, 5vw, 60px)'", "fontSize: 'clamp(32px, 4vw, 46px)'")
r("padding: '32px 32px 28px'", "padding: '24px 26px 22px'")

fs.writeFileSync(file, s)
console.log('Intermodal simplificado como subcase: menos tags, hierarquia alinhada e métricas mais proporcionais.')
