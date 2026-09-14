import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')

const replacements = [
  ['Engajamento orgânico (2024)', 'Engajamento orgânico · contexto do projeto'],
  ['Alcance Instagram — Intermodal', 'Alcance Instagram · Intermodal'],
  ['Alcance LinkedIn — Intermodal', 'Alcance LinkedIn · Intermodal'],
  ['Comunicação interna, endomarketing e identidade digital — de ponta a ponta.', 'Comunicação, marca e produtos em uma empresa de tecnologia para saúde.'],
  ['Campanha reconhecida pela liderança pelo impacto cultural. Presença digital padronizada e linguagem visual diferenciada por produto — tecnologia médica falando direto com quem precisa entender.', 'O trabalho reuniu comunicação interna, marca e produtos em uma mesma rotina, com retornos positivos da liderança sobre a comunicação e o interesse pelos conteúdos internos.'],
  ['Cuidando da comunicação de duas unidades e da mantenedora sem firula, no ritmo da escola.', 'Produção multimídia e comunicação em uma rotina de alto volume.'],
  ['Comunicação das duas unidades funcionando sem travar, campanhas de rematrícula no ar e as redes e o site sempre atualizados — mesmo com o volume alto de demandas do dia a dia escolar.', 'Foi uma experiência marcada por produção, agilidade e atendimento simultâneo a diferentes assuntos, áreas e públicos.'],
  ['Estratégia, criação e execução integradas — do posicionamento de marca à produção de conteúdo, conectando comunicação, identidade e resultado.', 'Atuo entre estratégia e execução, conectando comunicação, conteúdo, marca e canais às necessidades das pessoas e do negócio.'],
]

for (const [from, to] of replacements) s = s.split(from).join(to)

// Remove travessões do texto público sem alterar intervalos de datas.
s = s.replaceAll(' — ', ', ')

fs.writeFileSync(file, s)
console.log('Varredura editorial final aplicada.')
