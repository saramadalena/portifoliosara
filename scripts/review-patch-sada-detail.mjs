import fs from 'node:fs'
const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
s = s.replaceAll('Uma estratégia, diferentes pontos de contato.', 'Diferentes frentes, responsabilidades definidas por projeto.')
s = s.replaceAll('Da estratégia à execução, cada entrega buscou manter consistência editorial, clareza de mensagem e alinhamento com a marca.', 'As entregas combinaram conteúdo, canais, processos e acompanhamento de indicadores dentro da rotina da área.')
fs.writeFileSync(file, s)
console.log('Detalhamento SADA revisado.')
