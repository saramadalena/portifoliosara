import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')

// A move.e pode ser apresentada integralmente no portfólio.
s = s.replaceAll('Material estratégico · Projeto sob confidencialidade', 'Material estratégico · Projeto de comunicação')
s = s.replaceAll('Projeto sob confidencialidade', 'Projeto de comunicação')

// Recupera a especificidade do case sem atribuir resultados ou autoria além do que está documentado.
s = s.replaceAll("empresa: 'Freelance de Marketing, Branding e Conteúdo'", "empresa: 'move.e'")
s = s.replaceAll("subtitulo: 'Do posicionamento de startups ao relatório de ESG: comunicação que serve pra quem decide.'", "subtitulo: 'Posicionamento, materiais estratégicos e comunicação para uma startup de tecnologia voltada à gestão ASG.'")
s = s.replaceAll("periodo: '2024–2025'", "periodo: 'jul–out/2025'")
s = s.replaceAll("periodo: '2025'", "periodo: 'jul–out/2025'")
s = s.replaceAll(
  "contexto: 'Startup de tecnologia com solução voltada à gestão e mensuração de indicadores ASG para empresas de médio e grande porte. Com produto em estágio de validação, a empresa não tinha posicionamento institucional definido nem narrativa estruturada para o mercado.'",
  "contexto: 'Na move.e, atuei em projetos de comunicação ligados a uma startup de tecnologia voltada à gestão e mensuração de indicadores ASG. O trabalho envolveu posicionamento, organização de mensagens e desenvolvimento de materiais para apresentar a solução a diferentes stakeholders.'"
)
s = s.replaceAll(
  "desafio: 'Construir do zero o posicionamento institucional da marca, criar a arquitetura de mensagens e desenvolver materiais de comunicação para relacionamento com stakeholders, captação de investidores e aproximação com clientes potenciais.'",
  "desafio: 'Traduzir uma solução de tecnologia e gestão ASG em uma narrativa institucional clara, organizando mensagens e materiais capazes de apoiar conversas com investidores, clientes corporativos, parceiros e outros públicos de relacionamento.'"
)
s = s.replaceAll(
  "estrategia: 'Diagnóstico de posicionamento e análise de mercado. Definição de arquitetura de mensagens por público (investidores, clientes corporativos, parceiros). Desenvolvimento de narrativa institucional com foco em proposta de valor, diferenciação e credibilidade.'",
  "estrategia: 'O trabalho reuniu posicionamento, arquitetura de mensagens por público e desenvolvimento de narrativa institucional. Entre as entregas estiveram materiais de síntese e apresentação, como One-Page Institucional e Sumário Executivo, além de conteúdos relacionados à agenda ASG e ESG.'"
)
s = s.replaceAll(
  "execucao: 'Desenvolvi do zero a identidade visual, o guia de marca e as apresentações para colocar a startup de pé no mercado de sustentabilidade e atrair parceiros. Fiz a ponte com investidores e parceiros na Expo Favela 2025 e cuidei dos materiais de relacionamento com cada público.'",
  "execucao: 'Desenvolvi materiais de comunicação e posicionamento para apoiar a apresentação da solução e o relacionamento com diferentes públicos. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores para os canais digitais.'"
)
s = s.replaceAll(
  "resultadoTexto: 'A startup saiu do zero com marca, posicionamento e materiais prontos para conversar com investidores, clientes e parceiros — cada um na sua linguagem.'",
  "resultadoTexto: 'Como resultado qualitativo, o trabalho foi reconhecido positivamente pela CEO da move.e nas diferentes frentes desenvolvidas. A organização visual e a diagramação dos relatórios também receberam avaliação muito positiva em relação ao que havia sido solicitado. O projeto consolidou mensagens e materiais para diferentes públicos, reunindo posicionamento institucional, conteúdos ASG e ESG e presença em evento.'"
)
s = s.replaceAll('Consultoria Estratégica · move.e', 'Comunicação e posicionamento · move.e')
s = s.replaceAll('Consultoria Estratégica<br/>', 'Comunicação e posicionamento<br/>')
s = s.replaceAll('Cobertura da Expo Favela 2025.', 'move.e na Expo Favela 2025.')
s = s.replaceAll('Freelance de Marketing, Branding e Conteúdo · 2024–2025', 'move.e · jul–out/2025')
s = s.replaceAll('move.e · 2025', 'move.e · jul–out/2025')

// Reverte a ocultação criada pelo patch editorial antigo e devolve o bloco ESG ao layout.
s = s.replace(
  "{/* Bloco reservado para projeto ainda não publicado */}\n      {false && <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:'#060f08' }}>",
  "{/* ── RELATÓRIO ESG ── */}\n      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:'#060f08' }}>"
)
s = s.replace(
  "      }\n\n      {/* ── NAVEGAÇÃO ── */}\n      <div style={{ padding:'20px 36px', backgroundColor:T.bg",
  "      {/* ── NAVEGAÇÃO ── */}\n      <div style={{ padding:'20px 36px', backgroundColor:T.bg"
)

// Mantém o texto do relatório ESG, mas remove o quadro escuro e os indicadores que não agregam ao case.
const esgStart = s.indexOf("      {/* ── RELATÓRIO ESG ── */}")
const esgEnd = s.indexOf("      {/* ── NAVEGAÇÃO ── */}", esgStart + 1)
if (esgStart !== -1 && esgEnd !== -1) {
  const esgBlock = `      {/* ── RELATÓRIO ESG ── */}
      <div style={{ borderTop:\`1px solid \${T.rule}\`, backgroundColor:T.white }}>
        <div style={{ padding: isMobile ? '32px 20px 36px' : '40px 36px 44px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.navy, margin:'0 0 14px' }}>Dentro do projeto · Relatório de Sustentabilidade</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.navy, margin:'0 0 12px' }}>
            Economia Circular Fotovoltaica & ESG
          </h3>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.navy, margin:0, maxWidth:'520px' }}>
            Transformei dados densos de sustentabilidade, legislação e regionalização em um material visual simples de ler, com rigor técnico, clareza executiva e proteção das informações sensíveis do cliente do setor de energia.
          </p>
        </div>
      </div>

`
  s = s.slice(0, esgStart) + esgBlock + s.slice(esgEnd)
}

fs.writeFileSync(file, s)
console.log('Case move.e revisado com período jul–out/2025, materiais ASG/ESG liberados e bloco ESG integrado ao layout.')
