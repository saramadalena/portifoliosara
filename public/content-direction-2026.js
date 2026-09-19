(() => {
  const replacements = [
    ['Marketing · Branding · Conteúdo', 'Comunicação · Marketing · Design'],
    ['Marketing & Estratégia', 'Comunicação & Marketing'],
    ['Branding & Posicionamento', 'Design & Branding'],
    ['Conteúdo & Narrativa', 'Produção Multimídia'],
    ['Técnicas e ferramentas.', 'Técnicas, ferramentas e repertório visual.'],
    ['Do planejamento estratégico à execução, em todas as frentes.', 'Do planejamento à produção, com comunicação, marketing e design trabalhando juntos.'],
    ['Comunicação, marca e produtos em tecnologia para saúde.', 'Comunicação, Marketing e Design em tecnologia para saúde.'],
    ['Endomarketing · Cultura Organizacional · Comunicação Interna', 'Design · Produção Multimídia · Comunicação Interna'],
    ['A partir dos briefings, desenhava a solução de comunicação e acompanhava as etapas da entrega até a finalização e validação. Também preparava e operava lives pelo Microsoft Teams em campanhas internas e apresentações corporativas.', 'A partir dos briefings, desenhava a solução de comunicação, criava as peças e acompanhava as etapas da entrega até a finalização e validação. Também atuava como produtora multimídia, preparando e operando lives pelo Microsoft Teams em campanhas internas e apresentações corporativas.'],
    ['Conteúdos e materiais da campanha SPDATA & Você', 'Autoria das peças, conteúdos e materiais da campanha SPDATA & Você'],
    ['Organização visual de produtos', 'Design e organização visual de produtos'],
    ['Na SPDATA, tive autonomia na condução de demandas de Comunicação e Marketing, com suporte e validação da gestora de RH. Conduzi entregas de comunicação interna, endomarketing, marca, produtos, apresentações e materiais institucionais e comerciais, acompanhando o processo do briefing à finalização.', 'Na SPDATA, tive autonomia na condução de demandas de Comunicação, Marketing e Design, com suporte e validação da gestora de RH. Atuei como designer e produtora multimídia, com autoria das peças de comunicação interna, endomarketing, marca, produtos, apresentações e materiais institucionais e comerciais, acompanhando o processo do briefing à finalização.'],
    ['Comunicação, Branding, conteúdo e materiais estratégicos.', 'Comunicação, Marketing, Design e materiais estratégicos.'],
    ['Posicionamento · Narrativa Institucional · Comunicação para Stakeholders', 'Design · Narrativa Institucional · Comunicação para Stakeholders'],
    ['Desenvolvi materiais de comunicação e posicionamento para apoiar a apresentação da solução. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores.', 'Desenvolvi materiais de comunicação, design e posicionamento para apoiar a apresentação da solução, com autoria das peças, organização visual e produção de conteúdo. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores.'],
    ['Materiais desenvolvidos para apoiar o posicionamento da solução e o relacionamento com diferentes públicos.', 'Materiais com autoria de conteúdo, design e diagramação, desenvolvidos para apoiar o posicionamento da solução e o relacionamento com diferentes públicos.'],
    ['Design, produção multimídia e comunicação para a comunidade escolar.', 'Design, produção multimídia e comunicação para a comunidade escolar.'],
    ['Produção de peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e ações de captação, além de publicação operacional em redes sociais e atualizações pontuais no WordPress.', 'Autoria de peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e ações de captação, além de publicação operacional em redes sociais e atualizações pontuais no WordPress.'],
    ['Apoiei eventos internos e externos, produzi materiais em diferentes formatos e atendia demandas de áreas e públicos diversos da comunidade escolar.', 'Atuei como designer e produtora multimídia, apoiando eventos internos e externos, produzindo materiais em diferentes formatos e atendendo demandas de áreas e públicos diversos da comunidade escolar.'],
    ['Planejamento e gestão de redes sociais, calendário editorial, publicação, monitoramento e indicadores, com apoio do MLabs, RD Station, Salesforce e gestores dos próprios canais.', 'Planejamento e gestão de redes sociais, calendário editorial, publicação, monitoramento, indicadores e desdobramento de peças para canais, com apoio do MLabs, RD Station e Salesforce.'],
    ['Da estratégia à execução, cada entrega buscou manter consistência editorial, clareza de mensagem e alinhamento com a marca.', 'Na SADA, a atuação visual esteve ligada a desdobramentos de peças e adaptação de materiais para canais, sem autoria principal de design.'],
    ['Estruturei uma cobertura integrada, conectando planejamento editorial, roteiro, produção audiovisual e conteúdos em tempo real.', 'Fiquei responsável pelo planejamento da comunicação digital da Intermodal 2024, organizando canais, calendário, pautas, cobertura e conteúdos antes, durante e depois do evento.'],
    ['Desenvolvimento do roteiro, organização da pauta, acompanhamento da produção, publicação dos conteúdos e desdobramentos para Instagram e LinkedIn.', 'Planejamento de feed, Stories e Reels, organização de pautas e roteiros para vídeos com profissionais da empresa, lideranças e cliente, além de publicação e acompanhamento dos conteúdos em Instagram e LinkedIn.'],
    ['A estratégia ampliou a visibilidade da participação do Grupo SADA no evento e gerou crescimento expressivo de alcance nos canais institucionais.', 'A cobertura digital apresentou crescimento de alcance em comparação com janeiro de 2024, referência utilizada pela área para a análise de março de 2024.'],
    ['Resultado da cobertura digital durante o período do evento', 'Comparação de março de 2024 com janeiro de 2024'],
    ['Os indicadores refletem o desempenho dos conteúdos publicados durante a estratégia de cobertura da Intermodal South America 2024, não representam crescimento permanente dos canais.', 'Os indicadores se referem à cobertura digital da Intermodal 2024. A variação de alcance compara março de 2024 com janeiro de 2024, referência utilizada pela área.']
  ]

  function replaceTextNodes(root) {
    if (!root) return
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT
        if (['SCRIPT', 'STYLE', 'TEXTAREA'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      }
    })
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach((node) => {
      let value = node.nodeValue || ''
      replacements.forEach(([from, to]) => {
        if (value.includes(from)) value = value.split(from).join(to)
      })
      node.nodeValue = value
    })
  }

  function adjustHeroTitle() {
    const heroTitle = document.querySelector('#hero h1')
    if (!heroTitle) return
    const ems = heroTitle.querySelectorAll('em')
    if (ems[0]) ems[0].textContent = 'Comunicação'
    if (ems[1]) ems[1].textContent = 'Marketing'
    heroTitle.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
        node.nodeValue = node.nodeValue.replace('e Conteúdo.', 'e Design.').replace('e Conteúdo', 'e Design')
      }
    })
  }

  function renameProjectLanguage() {
    document.querySelectorAll('a, button, span, p').forEach((el) => {
      if (!el.textContent || el.childNodes.length !== 1) return
      const value = el.textContent.trim()
      if (value === 'Cases') el.textContent = 'Projetos'
      if (value === 'Ver case') el.textContent = 'Ver projeto'
      if (value === '← Todos os cases') el.textContent = '← Todos os projetos'
    })
  }

  function setTimelineRow(row, year, title, company) {
    const ps = row.querySelectorAll('p')
    if (ps[0]) ps[0].textContent = year
    if (ps[1]) ps[1].textContent = title
    if (ps[2]) ps[2].textContent = company
  }

  function ensureTimeline() {
    const sobre = document.querySelector('#sobre')
    if (!sobre) return
    const paragraphs = Array.from(sobre.querySelectorAll('p'))
    const moveeTitle = paragraphs.find((p) => (p.textContent || '').trim() === 'move.e')
    if (!moveeTitle || !moveeTitle.parentElement?.parentElement) return

    const moveeRow = moveeTitle.parentElement.parentElement
    const container = moveeRow.parentElement
    if (!container) return
    setTimelineRow(moveeRow, 'Jul–Out/25', 'move.e', 'Comunicação, Branding e Conteúdo')

    if (!sobre.querySelector('[data-personal-portfolio="true"]')) {
      const personal = moveeRow.cloneNode(true)
      if (personal instanceof HTMLElement) {
        personal.dataset.personalPortfolio = 'true'
        setTimelineRow(personal, '2026 · atual', 'Projeto pessoal · Portfólio digital', 'Figma · GitHub · IA')
        const textColumn = personal.querySelectorAll('p')[1]?.parentElement
        if (textColumn) {
          const summary = document.createElement('p')
          summary.textContent = 'Concepção e desenvolvimento do portfólio para apresentar meus projetos com mais estrutura e autonomia. Organizei conteúdo e experiência no Figma, levei o projeto para o GitHub e usei IA como apoio no desenvolvimento, revisão e evolução do site, mantendo autoria sobre as decisões, o conteúdo e a produção.'
          Object.assign(summary.style, { fontSize: '11px', fontWeight: '300', color: '#909090', margin: '7px 0 0', lineHeight: '1.65', maxWidth: '420px' })
          textColumn.appendChild(summary)
        }
        container.insertBefore(personal, moveeRow)
      }
    }

    const allRows = Array.from(container.children).filter((el) => el instanceof HTMLElement)
    const lastRow = allRows[allRows.length - 1]
    if (!(lastRow instanceof HTMLElement)) return

    if (!sobre.querySelector('[data-prodemge="true"]')) {
      const prodemge = lastRow.cloneNode(true)
      if (prodemge instanceof HTMLElement) {
        prodemge.dataset.prodemge = 'true'
        setTimelineRow(prodemge, '2017', 'Estagiária de Comunicação', 'Prodemge')
        container.appendChild(prodemge)
      }
    }

    if (!sobre.querySelector('[data-banco-brasil="true"]')) {
      const banco = lastRow.cloneNode(true)
      if (banco instanceof HTMLElement) {
        banco.dataset.bancoBrasil = 'true'
        setTimelineRow(banco, '2015–17', 'Estagiária de Comunicação', 'Banco do Brasil')
        container.appendChild(banco)
      }
    }
  }

  function apply() {
    replaceTextNodes(document.body)
    adjustHeroTitle()
    renameProjectLanguage()
    ensureTimeline()
  }

  let scheduled = false
  function scheduleApply() {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(() => {
      scheduled = false
      apply()
    })
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleApply)
  else scheduleApply()

  new MutationObserver(scheduleApply).observe(document.documentElement, { childList: true, subtree: true, characterData: true })
  setTimeout(apply, 300)
  setTimeout(apply, 1200)
})()
