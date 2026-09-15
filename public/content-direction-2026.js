(() => {
  const textReplacements = [
    ['Marketing · Branding · Conteúdo', 'Comunicação · Marketing · Design'],
    ['Marketing & Estratégia', 'Comunicação & Marketing'],
    ['Branding & Posicionamento', 'Design & Branding'],
    ['Conteúdo & Narrativa', 'Produção Multimídia'],
    ['Técnicas e ferramentas.', 'Técnicas, ferramentas e repertório visual.'],
    ['Do planejamento estratégico à execução — em todas as frentes.', 'Do planejamento à produção, com comunicação, marketing e design trabalhando juntos.'],
    ['marketing, branding, produção de conteúdo, comunicação corporativa e consultoria estratégica.', 'comunicação, marketing, design, produção multimídia, comunicação corporativa e projetos de conteúdo.'],

    ['Comunicação, marca e produtos em tecnologia para saúde.', 'Comunicação, Marketing e Design em tecnologia para saúde.'],
    ['Endomarketing · Cultura Organizacional · Comunicação Interna', 'Design · Produção Multimídia · Comunicação Interna'],
    ['A partir dos briefings, desenhava a solução de comunicação e acompanhava as etapas da entrega até a finalização e validação. Também preparava e operava lives pelo Microsoft Teams em campanhas internas e apresentações corporativas.', 'A partir dos briefings, desenhava a solução de comunicação, criava as peças e acompanhava as etapas da entrega até a finalização e validação. Também atuava como produtora multimídia, preparando e operando lives pelo Microsoft Teams em campanhas internas e apresentações corporativas.'],
    ['Conteúdos e materiais da campanha SPDATA & Você', 'Autoria das peças, conteúdos e materiais da campanha SPDATA & Você'],
    ['Organização visual de produtos', 'Design e organização visual de produtos'],
    ['Na SPDATA, tive autonomia na condução de demandas de Comunicação e Marketing, com suporte e validação da gestora de RH. Conduzi entregas de comunicação interna, endomarketing, marca, produtos, apresentações e materiais institucionais e comerciais, acompanhando o processo do briefing à finalização.', 'Na SPDATA, tive autonomia na condução de demandas de Comunicação, Marketing e Design, com suporte e validação da gestora de RH. Atuei como designer e produtora multimídia, com autoria das peças de comunicação interna, endomarketing, marca, produtos, apresentações e materiais institucionais e comerciais, acompanhando o processo do briefing à finalização.'],
    ['Campanha de endomarketing completa', 'Autoria de campanha e peças'],

    ['Comunicação, Branding, conteúdo e materiais estratégicos.', 'Comunicação, Marketing, Design e materiais estratégicos.'],
    ['Posicionamento · Narrativa Institucional · Comunicação para Stakeholders', 'Design · Narrativa Institucional · Comunicação para Stakeholders'],
    ['Desenvolvi materiais de comunicação e posicionamento para apoiar a apresentação da solução. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores.', 'Desenvolvi materiais de comunicação, design e posicionamento para apoiar a apresentação da solução, com autoria das peças, organização visual e produção de conteúdo. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores.'],
    ['Materiais desenvolvidos para apoiar o posicionamento da solução e o relacionamento com diferentes públicos.', 'Materiais com autoria de conteúdo, design e diagramação, desenvolvidos para apoiar o posicionamento da solução e o relacionamento com diferentes públicos.'],
    ['Material estratégico entregue com clareza visual, rigor técnico e proteção das informações sensíveis do cliente.', 'Material estratégico com autoria de design e diagramação, mantendo clareza visual, rigor técnico e proteção das informações sensíveis do cliente.'],

    ['Comunicação para diferentes públicos da comunidade escolar.', 'Design, produção multimídia e comunicação para a comunidade escolar.'],
    ['Produção de peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e ações de captação, além de publicação operacional em redes sociais e atualizações pontuais no WordPress.', 'Autoria de peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e ações de captação, além de publicação operacional em redes sociais e atualizações pontuais no WordPress.'],
    ['Apoiei eventos internos e externos, produzi materiais em diferentes formatos e atendia demandas de áreas e públicos diversos da comunidade escolar.', 'Atuei como designer e produtora multimídia, apoiando eventos internos e externos, produzindo materiais em diferentes formatos e atendendo demandas de áreas e públicos diversos da comunidade escolar.'],
    ['Produção, publicação e atualização de conteúdos em diferentes formatos, atendendo duas unidades e a instituição', 'Autoria de peças, produção multimídia, publicação e atualização de conteúdos em diferentes formatos, atendendo duas unidades e a instituição'],

    ['Planejamento e gestão de redes sociais, calendário editorial, publicação, monitoramento e indicadores, com apoio do MLabs, RD Station, Salesforce e gestores dos próprios canais.', 'Planejamento e gestão de redes sociais, calendário editorial, publicação, monitoramento, indicadores e desdobramento de peças para canais, com apoio do MLabs, RD Station, Salesforce e gestores dos próprios canais.'],
    ['Da estratégia à execução, cada entrega buscou manter consistência editorial, clareza de mensagem e alinhamento com a marca.', 'Na SADA, a atuação visual esteve ligada a desdobramentos de peças e adaptação de materiais para canais, sem autoria principal de design.']
  ]

  function replaceTextNodes(root) {
    if (!root) return
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
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
      textReplacements.forEach(([from, to]) => {
        if (value.includes(from)) value = value.split(from).join(to)
      })
      node.nodeValue = value
    })
  }

  function adjustHeroTitle() {
    const heroTitle = document.querySelector('#hero h1')
    if (!heroTitle) return
    const text = heroTitle.textContent || ''
    if (!text.includes('Marketing') || !text.includes('Conteúdo')) return

    const ems = heroTitle.querySelectorAll('em')
    if (ems[0]) ems[0].textContent = 'Comunicação'
    if (ems[1]) ems[1].textContent = 'Marketing'

    heroTitle.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue) {
        node.nodeValue = node.nodeValue.replace('e Conteúdo.', 'e Design.')
      }
    })
  }

  function renameCaseLanguage() {
    replaceTextNodes(document.body)
    document.querySelectorAll('a, button, span, p').forEach((el) => {
      if (el.childNodes.length === 1 && el.textContent) {
        const value = el.textContent.trim()
        if (value === 'Cases') el.textContent = 'Projetos'
        if (value === 'Ver case') el.textContent = 'Ver projeto'
        if (value === '← Todos os cases') el.textContent = '← Todos os projetos'
        if (value === '← Portfólio') el.textContent = '← Portfólio'
      }
    })
  }

  function apply() {
    adjustHeroTitle()
    renameCaseLanguage()
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
