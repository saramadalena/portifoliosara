import fs from 'node:fs'

const file = new URL('../src/App.tsx', import.meta.url)
let s = fs.readFileSync(file, 'utf8')
const r = (a,b) => { s = s.split(a).join(b) }

r('Projetos reais, resultados mensuráveis.', 'Projetos reais, contextos e entregas.')
r('A Intermodal South America reuniu os principais agentes do setor de logística e mobilidade. O desafio era ampliar a presença digital do Grupo SADA durante o evento e transformar a participação presencial em conteúdo relevante para os canais institucionais.', 'A participação do Grupo SADA na Intermodal envolvia diferentes frentes, áreas e profissionais. Minha responsabilidade esteve concentrada na comunicação digital do projeto.')
r('Estruturei uma cobertura integrada, conectando planejamento editorial, roteiro, produção audiovisual e conteúdos em tempo real.', 'Fiquei responsável pelo planejamento da frente digital, envolvendo gestão das mídias sociais e canais, calendário de publicações e planejamento da cobertura antes, durante e depois do evento.')
r('Desenvolvimento do roteiro, organização da pauta, acompanhamento da produção, publicação dos conteúdos e desdobramentos para Instagram e LinkedIn.', 'O planejamento contemplou Feed, Stories e Reels, com conteúdos anteriores ao evento, cobertura durante os três dias e materiais posteriores de fechamento. A produção acontecia de forma integrada às demais pessoas envolvidas no projeto.')
r('A estratégia ampliou a visibilidade da participação do Grupo SADA no evento e gerou crescimento expressivo de alcance nos canais institucionais.', 'A cobertura digital ampliou a visibilidade do segmento de Carga Geral durante a Intermodal e colocou profissionais da empresa, liderança e cliente como parte dos conteúdos produzidos para os canais.')
r('Resultado da cobertura digital durante o período do evento', 'Março de 2024 em comparação com janeiro de 2024')
r('Os indicadores refletem o desempenho dos conteúdos publicados durante a estratégia de cobertura da Intermodal South America 2024 — não representam crescimento permanente dos canais.', 'Resultados da cobertura digital da Intermodal 2024. A variação de alcance compara março de 2024 com janeiro de 2024, referência utilizada pela área.')
r('Planejamento, produção e gestão de comunicação para fortalecer a marca, apoiar a cultura organizacional e manter uma linguagem consistente entre canais, públicos e iniciativas.', 'Atuação em equipe envolvendo canais digitais, comunicação interna, demandas corporativas, eventos, processos e indicadores, com responsabilidades definidas conforme cada projeto.')
r('Da estratégia à execução, cada entrega buscou manter consistência editorial, clareza de mensagem e alinhamento com a marca.', 'As entregas eram desenvolvidas em conjunto com diferentes profissionais e áreas, respeitando o escopo e a responsabilidade de cada frente.')
r('Estratégia digital, cobertura editorial e produção audiovisual durante a maior feira de logística da América Latina — com entrevistas, conteúdo em tempo real e aftermovie.', 'Planejamento e comunicação digital da participação do Grupo SADA na Intermodal 2024, com conteúdos antes, durante e depois do evento.')
r('Aproximando o time da cultura da empresa.', 'Comunicação, marca e produtos em uma empresa de tecnologia para saúde.')
r('Campanha de endomarketing completa — do conceito às peças — reconhecida pela liderança.', 'Projeto de comunicação interna desenvolvido dentro da rotina da área, com identidade e diferentes desdobramentos.')
r('Dois produtos, dois públicos, duas identidades visuais. Padronizei a presença digital das linhas SPDATA e Minha Clínica com linguagem diferenciada por público — paleta fria/tech para B2B hospitalar, paleta quente/humanizada para clínicas menores.', 'O trabalho com as linhas de produtos envolveu a organização visual de diferentes soluções, preservando sua relação com a marca institucional. Entre os materiais do meu acervo está o trabalho desenvolvido para o SPDATA Minha Clínica, com identidade e aplicações de comunicação para o produto.')
r('Cultura, pessoas e marca alinhadas.', 'Comunicação interna, marca e produtos na mesma rotina.')
r('Conceito, identidade e execução da campanha SPDATA&Você — elogiada pelo CEO.', 'Conceito, identidade e desdobramentos da campanha SPDATA&Você dentro da comunicação interna.')
r('Linguagem diferenciada para SPDATA hospitalar e Minha Clínica, com consistência entre canais.', 'Organização visual de materiais de produto e comunicação, preservando a relação com a marca institucional.')
r('Consultoria Estratégica · move.e', 'move.e · 2025')
r('Freelance de Marketing, Branding e Conteúdo · 2024–2025', 'move.e · 2025')
r('Cobertura e representação institucional da move.e', 'Conteúdo e cobertura digital')
r('Marketing · Branding · Conteúdo', 'Branding · Conteúdo multimídia · Canais · Indicadores')
r('Ver projetos', 'Ver cases')
r('© 2025', '© 2026')

// Sobre: formação e narrativa profissional.
r('Sara Madalena Silva.<br/><em style={{ fontStyle:\'italic\',fontWeight:400,color:T.magenta }}>Estratégia, criação e execução.</em>', 'Comunicação que começa entendendo o contexto.<br/><em style={{ fontStyle:\'italic\',fontWeight:400,color:T.magenta }}>Repertório construído em diferentes estruturas e públicos.</em>')
r('Publicitária formada pela <strong style={{ fontWeight:600,color:T.ink }}>PUC Minas</strong>, com <strong style={{ fontWeight:600,color:T.ink }}>MBA em Comunicação e Marketing</strong>. Mais de <strong style={{ fontWeight:600,color:T.ink }}>10 anos</strong> estruturando áreas, processos e narrativas para empresas que precisam falar com clareza.', 'Publicitária e especialista em <strong style={{ fontWeight:600,color:T.ink }}>Comunicação e Marketing pela PUC Minas</strong>. Minha trajetória passou por educação, tecnologia, saúde, certificação digital, logística, mobilidade e indústria, além de experiências ligadas aos setores financeiro e público.')
r('Vivência integrada com <em>RH, Educação Corporativa, ESG, Compliance e LGPD</em>. Atuação que conecta diagnóstico, estratégia, criação e execução — sempre com foco em consistência e resultado.', 'Trabalhar em estruturas tão diferentes me colocou em contato com muitos assuntos, áreas e públicos. Ao longo desse percurso, aprendi que comunicar também exige entender o contexto: quem precisa falar, com quem, por qual canal, com quais limites e para qual necessidade.')
r("['PUC Minas', 'MBA Comunicação e Marketing', 'Contagem, MG', 'B2B & B2C']", "['Publicidade e Propaganda · PUC Minas · 2014–2017', 'MBA Comunicação e Marketing · PUC Minas · 2023–2024', 'Marketing Digital Avançado · ESPM · 2023', 'Inglês intermediário · CCAA', 'CENEX/FALE UFMG · leitura em inglês · 2026']")

r("{n:'+33%',l:'de abertura de comunicados internos em 2024, atingindo a meta estabelecida',cor:T.magenta},", "{n:'Branding',l:'marca, identidade e posicionamento aplicados a diferentes contextos',cor:T.magenta},")
r("{n:'+7%',l:'de engajamento no Instagram e LinkedIn, com aumento perceptível de 2023 para 2024',cor:T.navy},", "{n:'Canais',l:'comunicação interna, digital e relacionamento com diferentes públicos',cor:T.navy},")

r("{ ano: '2025', cargo: 'Freelance de Marketing, Branding e Conteúdo', empresa: 'Autônoma', atual: true }", "{ ano: '2025', cargo: 'Comunicação, Branding e projetos', empresa: 'move.e', atual: true }")
r("{ ano: '2018–19', cargo: 'Auxiliar de Comunicação', empresa: 'Colégio Arnaldo' }", "{ ano: '2018–19', cargo: 'Assistente de Comunicação', empresa: 'Colégio Arnaldo' },\n  { ano: '2017', cargo: 'Estagiária · Gerência de Comunicação', empresa: 'Prodemge' },\n  { ano: '2015–17', cargo: 'Estagiária · Comunicação e Apoio', empresa: 'Banco do Brasil' }")
r('PolyCare', 'Polycare')
r('QualityCert', 'Qualitycert')

fs.writeFileSync(file, s)
console.log('Ajustes de cases, sobre, formação e trajetória aplicados.')
