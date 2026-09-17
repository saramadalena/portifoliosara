(() => {
  const replacements = [
    [
      'Atuação integrada para fortalecer a presença institucional, organizar a comunicação dos canais e ampliar a consistência da marca em diferentes pontos de contato.',
      'Atuação do planejamento à execução em diferentes iniciativas de comunicação e marketing, com responsabilidades definidas conforme cada projeto e trabalho conjunto com profissionais, áreas e lideranças.'
    ],
    [
      'Em um grupo empresarial de grande porte e atuação diversificada, a comunicação precisava equilibrar identidade institucional, proximidade com os públicos e coerência entre canais internos e externos.',
      'No Grupo SADA, atuei como Analista de Marketing na Gerência de Comunicação e Marketing, em uma estrutura formada por diferentes empresas, áreas e públicos. Meu trabalho acontecia de forma transversal e em equipe, principalmente em comunicação digital, canais, comunicação interna e projetos atendidos pela Gerência.'
    ],
    [
      'Planejamento, produção e gestão de comunicação para fortalecer a marca, apoiar a cultura organizacional e manter uma linguagem consistente entre canais, públicos e iniciativas.',
      'Planejamento e gestão de canais, conteúdo, comunicação interna, processos e indicadores, em interface com diferentes profissionais e áreas solicitantes.'
    ],
    [
      'A Intermodal South America reuniu os principais agentes do setor de logística e mobilidade. O desafio era ampliar a presença digital do Grupo SADA durante o evento e transformar a participação presencial em conteúdo relevante para os canais institucionais.',
      'Na Intermodal South America 2024, minha responsabilidade esteve concentrada na comunicação digital do Grupo SADA, com planejamento dos canais e cobertura antes, durante e depois do evento.'
    ],
    [
      'Estruturei uma cobertura integrada, conectando planejamento editorial, roteiro, produção audiovisual e conteúdos em tempo real.',
      'Fiquei responsável pelo planejamento da frente digital, envolvendo mídias sociais e canais, calendário de publicações, pautas e roteiros para conteúdos com profissionais da empresa, lideranças e cliente.'
    ],
    [
      'Desenvolvimento do roteiro, organização da pauta, acompanhamento da produção, publicação dos conteúdos e desdobramentos para Instagram e LinkedIn.',
      'A execução reuniu feed, Stories e Reels, com organização de pauta, roteiros, publicação, acompanhamento da cobertura e desdobramentos para Instagram e LinkedIn.'
    ],
    [
      'Aproximando o time da cultura da empresa.',
      'Comunicação, design e produção multimídia em tecnologia para saúde.'
    ],
    [
      'Campanha de endomarketing completa — do conceito às peças — reconhecida pela liderança.',
      'Autoria de conceito, design e peças da campanha SPDATA & Você, com condução do briefing à finalização.'
    ],
    [
      'Conceito, identidade e execução da campanha SPDATA&Você — elogiada pelo CEO.',
      'Autoria de conceito, design e peças da campanha SPDATA & Você, com retorno positivo da liderança sobre a evolução da comunicação interna.'
    ],
    [
      'Linguagem diferenciada para SPDATA hospitalar e Minha Clínica, com consistência entre canais.',
      'Organização visual e produção de materiais para diferentes soluções, preservando a relação com a marca institucional.'
    ],
    [
      'Endomarketing · Cultura Organizacional · Comunicação Interna',
      'Design · Produção Multimídia · Comunicação Interna'
    ],
    [
      'Campanha de endomarketing · Comunicação interna · Pesquisa de clima',
      'Design · Comunicação interna · Produção multimídia'
    ]
  ]

  function replaceTextNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT
        const tag = parent.tagName
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'TEXTAREA') return NodeFilter.FILTER_REJECT
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

  function removeResultByLabel(label) {
    const node = Array.from(document.querySelectorAll('p')).find((p) => (p.textContent || '').trim() === label)
    if (!node || !node.parentElement) return
    node.parentElement.remove()
  }

  function cleanUnsupportedMetrics() {
    ;[
      'Abertura de comunicados internos',
      'Pessoas no Dia V',
      'Cidades impactadas',
      'Consistência visual entre canais',
      'Organização visual de produtos',
      'Identidades visuais por produto'
    ].forEach(removeResultByLabel)
  }

  function strengthenSpdataAuthorship() {
    document.querySelectorAll('span').forEach((span) => {
      const text = (span.textContent || '').trim()
      if (text === 'Identidade Visual') span.textContent = 'Design'
      if (text === 'Eventos') span.textContent = 'Produção Multimídia'
    })

    const authorshipLabel = Array.from(document.querySelectorAll('p')).find((p) => (p.textContent || '').trim() === 'Autoria de campanha e peças')
    if (authorshipLabel && authorshipLabel.parentElement) {
      const value = authorshipLabel.parentElement.querySelector('p:nth-of-type(1)')
      if (value && (value.textContent || '').trim() === '1') value.textContent = 'Autoria'
    }
  }

  function clarifySadaVisualRole() {
    const labels = Array.from(document.querySelectorAll('p')).filter((p) => (p.textContent || '').trim() === 'Minha atuação')
    labels.forEach((label) => {
      const chips = label.nextElementSibling
      if (!chips) return
      const texts = Array.from(chips.querySelectorAll('span'))
      if (!texts.some((span) => (span.textContent || '').trim() === 'Gestão de canais')) return
      texts.forEach((span) => {
        if ((span.textContent || '').trim() === 'Branding') span.textContent = 'Desdobramento de peças'
      })
    })
  }

  function normalizeVisitorCopy() {
    document.querySelectorAll('a, button, span, p').forEach((el) => {
      if (el.childNodes.length !== 1 || !el.textContent) return
      const value = el.textContent.trim()
      if (value === '← Todos os cases') el.textContent = '← Todos os projetos'
      if (value === 'Cases') el.textContent = 'Projetos'
      if (value === 'Ver case') el.textContent = 'Ver projeto'
    })
  }

  function apply() {
    replaceTextNodes()
    cleanUnsupportedMetrics()
    strengthenSpdataAuthorship()
    clarifySadaVisualRole()
    normalizeVisitorCopy()
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scheduleApply)
  } else {
    scheduleApply()
  }

  new MutationObserver(scheduleApply).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  })

  setTimeout(apply, 300)
  setTimeout(apply, 1200)
})()
