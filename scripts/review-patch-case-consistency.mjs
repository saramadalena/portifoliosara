import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { s = s.split(a).join(b) }

// Régua editorial comum: remove contagens artificiais e transforma os cards em entregas legíveis.
r("{ valor: '1', label: 'Campanha de endomarketing completa' },", "{ valor: 'Campanha', label: 'SPDATA&Você · comunicação interna e pesquisa de clima' },")
r("{ valor: '2', label: 'Identidades visuais por produto' },", "{ valor: 'Produtos', label: 'Identidade e aplicações para as linhas SPDATA e Minha Clínica' },")
r("{ valor: '100%', label: 'Consistência visual entre canais' },", "{ valor: 'Canais', label: 'Peças digitais, apresentações e materiais de comunicação' },")
r("{ valor: '1', label: 'Arquitetura de mensagens estruturada' },", "{ valor: 'Posicionamento', label: 'Narrativa institucional e arquitetura de mensagens' },")
r("{ valor: '3', label: 'Públicos mapeados' },", "{ valor: 'Materiais', label: 'Apresentações, One-Page, sumário executivo e conteúdos ASG/ESG' },")
r("{ valor: '2', label: 'Campanhas de captação executadas' },", "{ valor: 'Campanhas', label: 'Captação, rematrícula e comunicação de eventos' },")
r("{ valor: '1', label: 'Identidade editorial estruturada' },", "{ valor: 'Produção', label: 'Peças gráficas, fotografia, vídeo, redes e atualizações de site' },")

// Os quatro cases usam a mesma nomenclatura de leitura, reduzindo a sensação de texto fragmentado.
r("<MiniLabel cor={c.cor}>O contexto</MiniLabel>", "<MiniLabel cor={c.cor}>Contexto</MiniLabel>")
r("<MiniLabel cor={c.cor}>O desafio</MiniLabel>", "<MiniLabel cor={c.cor}>Desafio</MiniLabel>")
r("<MiniLabel cor={c.cor}>Estratégia</MiniLabel>", "<MiniLabel cor={c.cor}>Atuação</MiniLabel>")
r("<MiniLabel cor={c.cor}>Execução</MiniLabel>", "<MiniLabel cor={c.cor}>Entregas</MiniLabel>")
r("<MiniLabel cor={c.cor}>Resultados</MiniLabel>", "<MiniLabel cor={c.cor}>Evidências e entregas</MiniLabel>")

// SADA: o primeiro bloco já explica escopo e contexto. Retira a segunda introdução e reduz as tags a quatro eixos úteis.
r("{['Gestão de canais', 'Estratégia de conteúdo', 'Branding', 'Comunicação corporativa', 'ESG', 'Eventos'].map(chip => (", "{['Canais digitais', 'Conteúdo', 'Comunicação corporativa', 'Processos e indicadores'].map(chip => (")
r("<p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 14px' }}>Atuação integrada</p>\n          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 12px' }}>\n            Uma estratégia, diferentes pontos de contato.\n          </h3>\n          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: 0, maxWidth: '480px' }}>\n            Planejamento, produção e gestão de comunicação para fortalecer a marca, apoiar a cultura organizacional e manter uma linguagem consistente entre canais, públicos e iniciativas.\n          </p>", "<p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 10px' }}>Frentes e evidências</p>\n          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', color: T.ink, margin: 0 }}>\n            Comunicação aplicada a diferentes pontos de contato.\n          </h3>")

// SPDATA: o nome do projeto passa a carregar contexto suficiente, sem repetir a mesma ideia em várias etiquetas.
r('SPDATA&Você · Comunicação interna · Pesquisa de clima', 'SPDATA&Você · Comunicação interna')
r('Campanha SPDATA&Você · Comunicação interna · Pesquisa de clima', 'Campanha SPDATA&Você · Comunicação interna')
r('SPDATA&Você · comunicação interna e pesquisa de clima', 'SPDATA&Você · comunicação interna')

// move.e: reduz a repetição entre subtítulo, materiais e resultados.
r('Posicionamento, materiais estratégicos e comunicação para uma startup de tecnologia voltada à gestão ASG.', 'Comunicação e posicionamento para uma startup de tecnologia voltada à gestão ASG.')
r('Documentos institucionais desenvolvidos para posicionamento da marca e relacionamento com investidores, clientes e parceiros.', 'Materiais desenvolvidos para apresentar a solução e apoiar conversas com diferentes públicos.')
r('Posicionamento estruturado, narrativa pronta para o mercado.', 'Materiais e mensagens organizados para diferentes públicos.')

// Arnaldo: evita repetir produção multimídia no título, no resumo e nas entregas.
r('Produção multimídia e comunicação em uma rotina de alto volume.', 'Comunicação para duas unidades e a instituição em uma rotina de alto volume.')

fs.writeFileSync(file, s)
console.log('Cases simplificados: menos tags, menos introduções repetidas e hierarquia mais contínua.')
