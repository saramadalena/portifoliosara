import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')

const start = s.indexOf('const competencias = [')
const end = s.indexOf('\n\nconst timeline = [', start)

if (start !== -1 && end !== -1) {
  const competencias = `const competencias = [
  { grupo: 'Branding', cor: T.navy, itens: ['Posicionamento de marca', 'Identidade visual', 'Arquitetura de mensagens', 'Comunicação institucional', 'Materiais corporativos', 'Interface com stakeholders'] },
  { grupo: 'Conteúdo multimídia', cor: T.magenta, itens: ['Planejamento de conteúdo', 'Copywriting', 'Storytelling', 'Fotografia', 'Vídeo', 'Apresentações', 'Comunicação de eventos'] },
  { grupo: 'Canais', cor: T.navy, itens: ['Comunicação interna', 'Redes sociais', 'RD Station', 'WordPress', 'MLabs', 'Meta Business Suite', 'LinkedIn Ads', 'Google Ads'] },
  { grupo: 'Indicadores', cor: T.magenta, itens: ['Monitoramento de canais', 'Leitura de métricas', 'Relatórios', 'Gestão de demandas', 'SLAs', 'POPs', 'Salesforce', 'Monday.com', 'Trello'] },
]

const ferramentas = ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe Premiere Pro', 'Figma', 'Canva', 'CorelDRAW', 'Microsoft 365']
const ferramentasIA = ['ChatGPT', 'Claude', 'Gemini', 'Adobe Firefly']`
  s = s.slice(0, start) + competencias + s.slice(end)
}

const target = `          </div>\n        </div>\n      </section>\n\n      {/* ── SOBRE ── */}`
const replacement = `          </div>

          <div style={{ marginTop:'28px',display:'grid',gridTemplateColumns:isMobile?'1fr':'1fr 1fr',gap:'2px',backgroundColor:T.rule }}>
            <div style={{ backgroundColor:T.white,padding:isMobile?'24px 20px':'28px' }}>
              <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:T.navy,margin:'0 0 16px' }}>Ferramentas</p>
              <div style={{ display:'flex',flexWrap:'wrap',gap:'6px' }}>
                {ferramentas.map(item => <span key={item} style={{ fontSize:'11px',fontWeight:300,color:T.inkMid,padding:'5px 12px',border:\`1px solid \${T.ruleLight}\`,backgroundColor:T.bg }}>{item}</span>)}
              </div>
            </div>
            <div style={{ backgroundColor:T.white,padding:isMobile?'24px 20px':'28px' }}>
              <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:T.magenta,margin:'0 0 16px' }}>Inteligência artificial</p>
              <div style={{ display:'flex',flexWrap:'wrap',gap:'6px' }}>
                {ferramentasIA.map(item => <span key={item} style={{ fontSize:'11px',fontWeight:300,color:T.inkMid,padding:'5px 12px',border:\`1px solid \${T.ruleLight}\`,backgroundColor:T.bg }}>{item}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}`

if (!s.includes('Inteligência artificial</p>')) s = s.replace(target, replacement)

s = s.replace('Do planejamento estratégico à execução — em todas as frentes.', 'Competências construídas entre criação, canais, marca e acompanhamento de resultados.')

fs.writeFileSync(file, s)
console.log('Competências e ferramentas reorganizadas.')
