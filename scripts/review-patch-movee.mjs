import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')

// A move.e pode ser apresentada integralmente no portfólio.
s = s.replaceAll('Material estratégico · Projeto sob confidencialidade', 'Material estratégico · Projeto de comunicação')
s = s.replaceAll('Projeto sob confidencialidade', 'Projeto de comunicação')

fs.writeFileSync(file, s)
console.log('Revisão pública dos materiais move.e aplicada.')
