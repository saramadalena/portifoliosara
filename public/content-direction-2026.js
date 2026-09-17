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

  const portfolioAssets = {
    spdataCover: '/assets/portfolio/spdata/spdata-voce-capa.jpg',
    spdataBatePapo: '/assets/portfolio/spdata/spdata&voce-bate-papo.png',
    minhaClinicaMotivos: '/assets/portfolio/spdata/spdata-minha-clinica-5-motivos.png.jpg',
    minhaClinicaAcesse: '/assets/portfolio/spdata/spdata-minha-clinica-acesse-onde-estiver.png.jpg',
    minhaClinicaCasa: '/assets/portfolio/spdata/spdata-minha-clinica-consulta-em-casa.png.jpg'
  }

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

  function addPersonalPortfolioToTimeline() {
    const sobre = document.querySelector('#sobre')
    if (!sobre || sobre.querySelector('[data-personal-portfolio="true"]')) return

    const paragraphs = Array.from(sobre.querySelectorAll('p'))
    const moveeTitle = paragraphs.find((p) => (p.textContent || '').trim() === 'move.e')
    if (!moveeTitle || !moveeTitle.parentElement || !moveeTitle.parentElement.parentElement) return

    const firstItem = moveeTitle.parentElement.parentElement
    const timelineContainer = firstItem.parentElement
    if (!timelineContainer) return

    const item = firstItem.cloneNode(true)
    if (!(item instanceof HTMLElement)) return
    item.dataset.personalPortfolio = 'true'

    const itemParagraphs = item.querySelectorAll('p')
    if (itemParagraphs[0]) itemParagraphs[0].textContent = '2026 · atual'
    if (itemParagraphs[1]) itemParagraphs[1].textContent = 'Projeto pessoal · Portfólio digital'
    if (itemParagraphs[2]) itemParagraphs[2].textContent = 'Figma · GitHub · IA'

    const textColumn = itemParagraphs[1]?.parentElement
    if (textColumn) {
      const summary = document.createElement('p')
      summary.textContent = 'Concepção e desenvolvimento do portfólio para apresentar meus projetos com mais estrutura e autonomia. Organizei conteúdo e experiência no Figma, levei o projeto para o GitHub e usei IA como apoio no desenvolvimento, revisão e evolução do site, mantendo autoria sobre as decisões, o conteúdo e a produção.'
      summary.style.fontSize = '11px'
      summary.style.fontWeight = '300'
      summary.style.color = '#909090'
      summary.style.margin = '7px 0 0'
      summary.style.lineHeight = '1.65'
      summary.style.maxWidth = '420px'
      textColumn.appendChild(summary)
    }

    const marker = item.querySelector('svg circle:nth-of-type(2)')
    if (marker) marker.setAttribute('fill', '#FF007F')

    timelineContainer.insertBefore(item, firstItem)

    const oldYear = firstItem.querySelector('p')
    if (oldYear && oldYear.textContent) oldYear.textContent = oldYear.textContent.replace(' · atual', '')
  }

  function openPortfolioImage(src) {
    if (document.querySelector('[data-portfolio-lightbox="true"]')) return
    const overlay = document.createElement('div')
    overlay.dataset.portfolioLightbox = 'true'
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0', zIndex: '9999', background: 'rgba(0,0,0,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', padding: '24px'
    })
    const img = document.createElement('img')
    img.src = src
    img.alt = ''
    Object.assign(img.style, { maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', display: 'block' })
    overlay.appendChild(img)
    overlay.addEventListener('click', () => overlay.remove())
    document.body.appendChild(overlay)
  }

  function removeSadaInstitutionalBoard() {
    document.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || ''
      if (!src.includes('rs-sada-0001')) return
      const tile = img.parentElement
      if (!tile || tile.dataset.sadaInstitutionalExcluded === 'true') return
      tile.dataset.sadaInstitutionalExcluded = 'true'
      const grid = tile.parentElement
      tile.remove()
      if (grid instanceof HTMLElement) grid.style.gridTemplateColumns = '1fr'
    })
  }

  function addSpdataAssets() {
    const spdataDetailMarker = Array.from(document.querySelectorAll('h2, h3')).find((el) =>
      (el.textContent || '').includes('SPDATA') || (el.textContent || '').includes('SPDATA&Você')
    )
    if (!spdataDetailMarker) return

    const hero = document.querySelector('img[alt="SPDATA&Você — Juntos, Somos Melhores"]')
    if (hero && hero.getAttribute('src') !== portfolioAssets.spdataCover) {
      hero.setAttribute('src', portfolioAssets.spdataCover)
      hero.setAttribute('alt', 'SPDATA&Você · capa do projeto')
      hero.style.objectFit = 'cover'
      hero.style.objectPosition = 'center'
    }

    const firstCampaignImage = document.querySelector('img[alt="Juntos, Somos Melhores"]')
    const campaignTile = firstCampaignImage?.parentElement
    const campaignGrid = campaignTile?.parentElement
    if (campaignGrid instanceof HTMLElement) {
      campaignGrid.style.gridTemplateColumns = window.innerWidth < 700 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'
      if (!campaignGrid.querySelector('[data-spdata-bate-papo="true"]') && campaignTile) {
        const tile = campaignTile.cloneNode(true)
        if (tile instanceof HTMLElement) {
          tile.dataset.spdataBatePapo = 'true'
          const image = tile.querySelector('img')
          const label = tile.querySelector('p')
          if (image) {
            image.setAttribute('src', portfolioAssets.spdataBatePapo)
            image.setAttribute('alt', 'SPDATA&Você · Bate-papo com Mário')
          }
          if (label) label.textContent = 'Bate-papo com Mário'
          tile.onclick = () => openPortfolioImage(portfolioAssets.spdataBatePapo)
          campaignGrid.appendChild(tile)
        }
      }
    }

    const footerLabel = Array.from(document.querySelectorAll('p')).find((p) => (p.textContent || '').trim() === 'Identidade Digital')
    const footer = footerLabel?.parentElement
    const section = footer?.parentElement
    if (footer && section && !section.querySelector('[data-minha-clinica-gallery="true"]')) {
      const block = document.createElement('div')
      block.dataset.minhaClinicaGallery = 'true'
      block.style.padding = '0 20px 3px'

      const heading = document.createElement('div')
      heading.style.padding = '14px 0 12px'
      heading.innerHTML = '<p style="font-size:9px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#FF007F;margin:0 0 5px">Minha Clínica</p><p style="font-size:10px;font-weight:300;color:#909090;margin:0">Autoria de design e produção das peças de comunicação do produto</p>'
      block.appendChild(heading)

      const grid = document.createElement('div')
      Object.assign(grid.style, {
        display: 'grid', gridTemplateColumns: window.innerWidth < 700 ? '1fr' : 'repeat(3, 1fr)', gap: '3px'
      })

      const items = [
        [portfolioAssets.minhaClinicaMotivos, '5 motivos para usar o SPDATA Minha Clínica'],
        [portfolioAssets.minhaClinicaAcesse, 'Acesse quando e onde estiver'],
        [portfolioAssets.minhaClinicaCasa, 'Sua consulta sem sair de casa']
      ]

      items.forEach(([src, alt]) => {
        const tile = document.createElement('div')
        Object.assign(tile.style, {
          position: 'relative', overflow: 'hidden', aspectRatio: '1 / 1', cursor: 'zoom-in', background: '#f0f0f0'
        })
        const image = document.createElement('img')
        image.src = src
        image.alt = alt
        Object.assign(image.style, { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' })
        tile.appendChild(image)
        tile.addEventListener('click', () => openPortfolioImage(src))
        grid.appendChild(tile)
      })

      block.appendChild(grid)
      section.insertBefore(block, footer)
    }
  }

  function apply() {
    adjustHeroTitle()
    renameCaseLanguage()
    addPersonalPortfolioToTimeline()
    removeSadaInstitutionalBoard()
    addSpdataAssets()
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

  window.addEventListener('resize', scheduleApply)
  setTimeout(apply, 300)
  setTimeout(apply, 1200)
})()
