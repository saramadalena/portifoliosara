import fs from 'node:fs'
const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { if (s.includes(a)) s = s.split(a).join(b) }

// Intermodal: equipe deixa de dominar o bloco ao lado da peça.
r("gridTemplateColumns: '1fr auto', gap: '3px', marginBottom: '3px', alignItems: 'stretch'", "gridTemplateColumns: 'minmax(0, 1.35fr) minmax(180px, .65fr)', gap: '10px', marginBottom: '10px', alignItems: 'center'")
r("style={{ position: 'relative', overflow: 'hidden', height: '220px', cursor: 'zoom-in' }}", "style={{ position: 'relative', overflow: 'hidden', height: '180px', cursor: 'zoom-in' }}")
r("style={{ width: '220px', position: 'relative', overflow: 'hidden', cursor: 'zoom-in', flexShrink: 0 }}", "style={{ width: '100%', height:'180px', position: 'relative', overflow: 'hidden', cursor: 'zoom-in', flexShrink: 0 }}")

// Capa dos cases: move.e usa contain para a arte não ser cortada nos dois contextos principais.
r("<img src={c.imagens[0]} alt={c.empresa}\n            style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block' }} />", "<img src={c.imagens[0]} alt={c.empresa}\n            style={{ width:'100%',height:'100%',objectFit: c.id === 3 ? 'contain' : 'cover',objectPosition:'center',display:'block',backgroundColor: c.id === 3 ? T.bg : 'transparent' }} />")

// SPDATA: acrescenta um recorte de produto com peças Minha Clínica já existentes no acervo.
const marker = "const crachaCampanha = [\n    { src: spdataCracha2, label: 'Campanha Crachá — Identidade' },\n    { src: spdataCracha3, label: 'Campanha Crachá — RFID' },\n  ]"
if (s.includes(marker)) {
  s = s.replace(marker, marker + `\n\n  const produtoImages = [\n    { src: spdataRS1, label: 'SPDATA · conteúdo de produto' },\n    { src: spdataCI5, label: 'SPDATA · certificação e produto' },\n  ]`)
}

const galleryMarker = "{/* ── CAMPANHA CRACHÁ"
const produtoBlock = `      {/* ── PRODUTO ── */}\n      <div style={{ borderTop:\`1px solid \${T.rule}\`, backgroundColor:T.white }}>\n        <div style={{ padding:'32px 36px 20px' }}>\n          <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.24em',textTransform:'uppercase',color:T.magenta,margin:'0 0 8px' }}>Produto</p>\n          <h3 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(17px,1.8vw,22px)',fontWeight:600,color:T.ink,margin:'0 0 8px' }}>Comunicação visual das soluções SPDATA</h3>\n          <p style={{ fontSize:'12px',fontWeight:300,lineHeight:1.75,color:T.inkMid,margin:0,maxWidth:'520px' }}>Peças desenvolvidas para aproximar a linguagem de tecnologia e saúde do público, com identidade visual aplicada aos produtos e aos canais digitais.</p>\n        </div>\n        <div style={{ display:'grid',gridTemplateColumns:'repeat(2,minmax(0,1fr))',gap:'8px',padding:'0 36px 36px' }}>\n          {produtoImages.map(item => (\n            <div key={item.label} onClick={() => setLightbox(item.src)} style={{ backgroundColor:T.bg,cursor:'zoom-in',display:'flex',alignItems:'center',justifyContent:'center',minHeight:'260px',overflow:'hidden' }}>\n              <img src={item.src} alt={item.label} style={{ width:'100%',height:'100%',maxHeight:'360px',objectFit:'contain',display:'block' }} />\n            </div>\n          ))}\n        </div>\n      </div>\n\n`
if (s.includes(galleryMarker) && !s.includes('Comunicação visual das soluções SPDATA')) s = s.replace(galleryMarker, produtoBlock + '      ' + galleryMarker)

fs.writeFileSync(file, s)
console.log('Balanço visual aplicado: Intermodal, capas move.e e bloco de produto SPDATA.')
