import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')

// A move.e pode ser apresentada integralmente no portfólio.
s = s.replaceAll('Material estratégico · Projeto sob confidencialidade', 'Material estratégico · Projeto de comunicação')
s = s.replaceAll('Projeto sob confidencialidade', 'Projeto de comunicação')

// Reverte a ocultação criada pelo patch editorial antigo e devolve o bloco ESG ao layout.
s = s.replace(
  "{/* Bloco reservado para projeto ainda não publicado */}\n      {false && <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:'#060f08' }}>",
  "{/* ── RELATÓRIO ESG ── */}\n      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:'#060f08' }}>"
)
s = s.replace(
  "      }\n\n      {/* ── NAVEGAÇÃO ── */}\n      <div style={{ padding:'20px 36px', backgroundColor:T.bg",
  "      {/* ── NAVEGAÇÃO ── */}\n      <div style={{ padding:'20px 36px', backgroundColor:T.bg"
)

fs.writeFileSync(file, s)
console.log('Materiais move.e e bloco ESG liberados para exibição.')
