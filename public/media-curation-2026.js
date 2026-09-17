(() => {
  const excludedAssets = ['rs-sada-0001']

  const spdataVoceAdditions = [
    {
      src: '/assets/portfolio/spdata/spdata-voce-capa.jpg',
      label: 'SPDATA & Você · peça institucional',
    },
    {
      src: '/assets/portfolio/spdata/spdata%26voce-bate-papo.png',
      label: 'SPDATA & Você · Bate-papo com o Mário',
    },
  ]

  const minhaClinicaAdditions = [
    {
      src: '/assets/portfolio/spdata/spdata-minha-clinica-5-motivos.png.jpg',
      label: '5 motivos para usar o SPDATA Minha Clínica',
    },
    {
      src: '/assets/portfolio/spdata/spdata-minha-clinica-acesse-onde-estiver.png.jpg',
      label: 'Acesse quando e onde estiver',
    },
    {
      src: '/assets/portfolio/spdata/spdata-minha-clinica-consulta-em-casa.png.jpg',
      label: 'Sua consulta sem sair de casa',
    },
  ]

  function removeExcludedMedia() {
    document.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || ''
      if (!excludedAssets.some((asset) => src.includes(asset))) return

      const parent = img.parentElement
      if (parent && parent.children.length === 1) {
        parent.remove()
      } else {
        img.remove()
      }
    })
  }

  function openLightbox(src) {
    const existing = document.querySelector('[data-curation-lightbox="true"]')
    if (existing) existing.remove()

    const overlay = document.createElement('div')
    overlay.dataset.curationLightbox = 'true'
    Object.assign(overlay.style, {
      position: 'fixed', inset: '0', zIndex: '9999',
      backgroundColor: 'rgba(0,0,0,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'zoom-out', padding: '24px', boxSizing: 'border-box'
    })

    const image = document.createElement('img')
    image.src = src
    image.alt = ''
    Object.assign(image.style, {
      maxWidth: '92vw', maxHeight: '90vh', objectFit: 'contain', display: 'block',
      boxShadow: '0 24px 80px rgba(0,0,0,0.6)'
    })
    image.addEventListener('click', (event) => event.stopPropagation())

    const close = document.createElement('button')
    close.type = 'button'
    close.textContent = '×'
    Object.assign(close.style, {
      position: 'absolute', top: '20px', right: '24px',
      background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)',
      fontSize: '30px', lineHeight: '1', cursor: 'pointer', fontFamily: 'Inter, sans-serif'
    })
    close.addEventListener('click', () => overlay.remove())
    overlay.addEventListener('click', () => overlay.remove())

    overlay.appendChild(image)
    overlay.appendChild(close)
    document.body.appendChild(overlay)
  }

  function createMediaCard(asset, accent, ratio = '1 / 1') {
    const card = document.createElement('div')
    Object.assign(card.style, {
      position: 'relative', overflow: 'hidden', aspectRatio: ratio,
      cursor: 'zoom-in', backgroundColor: '#f4f4f4'
    })

    const image = document.createElement('img')
    image.src = asset.src
    image.alt = asset.label
    image.loading = 'lazy'
    Object.assign(image.style, {
      width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block',
      transition: 'transform 0.45s ease'
    })
    image.addEventListener('mouseenter', () => { image.style.transform = 'scale(1.04)' })
    image.addEventListener('mouseleave', () => { image.style.transform = 'scale(1)' })

    const shade = document.createElement('div')
    Object.assign(shade.style, {
      position: 'absolute', inset: '0',
      background: 'linear-gradient(to top, rgba(0,0,0,0.46) 0%, transparent 48%)',
      pointerEvents: 'none'
    })

    const label = document.createElement('p')
    label.textContent = asset.label
    Object.assign(label.style, {
      position: 'absolute', left: '10px', right: '10px', bottom: '9px',
      margin: '0', fontSize: '9px', fontWeight: '400', lineHeight: '1.4',
      color: 'rgba(255,255,255,0.92)', fontFamily: 'Inter, sans-serif',
      textShadow: '0 1px 8px rgba(0,0,0,0.35)', pointerEvents: 'none'
    })

    const accentLine = document.createElement('span')
    Object.assign(accentLine.style, {
      position: 'absolute', left: '0', top: '0', width: '100%', height: '2px',
      backgroundColor: accent, pointerEvents: 'none'
    })

    card.addEventListener('click', () => openLightbox(asset.src))
    card.appendChild(image)
    card.appendChild(shade)
    card.appendChild(label)
    card.appendChild(accentLine)
    return card
  }

  function addSpdataVocePieces() {
    if (document.querySelector('[data-spdata-voce-additions="true"]')) return

    const campaignGrid = Array.from(document.querySelectorAll('div')).find((el) => {
      const style = el.style.gridTemplateColumns || ''
      const imgs = Array.from(el.querySelectorAll(':scope > div > img'))
      return style.includes('repeat(5') && imgs.length >= 5 && imgs.some((img) => (img.getAttribute('src') || '').includes('spdata_voce'))
    })

    if (!campaignGrid || !campaignGrid.parentElement) return

    const row = document.createElement('div')
    row.dataset.spdataVoceAdditions = 'true'
    Object.assign(row.style, {
      display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '3px', marginBottom: '3px'
    })

    spdataVoceAdditions.forEach((asset) => row.appendChild(createMediaCard(asset, '#FF007F', '4 / 3')))

    campaignGrid.insertAdjacentElement('afterend', row)
  }

  function addMinhaClinicaPieces() {
    if (document.querySelector('[data-minha-clinica-additions="true"]')) return

    const identityLabel = Array.from(document.querySelectorAll('p')).find((p) => (p.textContent || '').trim() === 'Identidade Digital')
    if (!identityLabel || !identityLabel.parentElement || !identityLabel.parentElement.parentElement) return

    const captionRow = identityLabel.parentElement
    const section = captionRow.parentElement
    if (!(section.textContent || '').includes('Minha Clínica')) return

    const block = document.createElement('div')
    block.dataset.minhaClinicaAdditions = 'true'

    const heading = document.createElement('div')
    Object.assign(heading.style, {
      padding: '20px 36px 14px', borderTop: '1px solid #EBEBEA', backgroundColor: '#ffffff'
    })

    const eyebrow = document.createElement('p')
    eyebrow.textContent = 'Minha Clínica · autoria de design e conteúdo'
    Object.assign(eyebrow.style, {
      fontSize: '9px', fontWeight: '700', letterSpacing: '0.18em', textTransform: 'uppercase',
      color: '#FF007F', margin: '0 0 6px', fontFamily: 'Inter, sans-serif'
    })

    const intro = document.createElement('p')
    intro.textContent = 'Peças de comunicação do produto desenvolvidas dentro da atuação em Comunicação, Marketing e Design.'
    Object.assign(intro.style, {
      fontSize: '11px', fontWeight: '300', lineHeight: '1.65', color: '#4A4A4A',
      margin: '0', maxWidth: '520px', fontFamily: 'Inter, sans-serif'
    })

    heading.appendChild(eyebrow)
    heading.appendChild(intro)

    const row = document.createElement('div')
    Object.assign(row.style, {
      display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '3px'
    })
    minhaClinicaAdditions.forEach((asset) => row.appendChild(createMediaCard(asset, '#FF007F', '1 / 1')))

    block.appendChild(heading)
    block.appendChild(row)
    section.insertBefore(block, captionRow)
  }

  function apply() {
    removeExcludedMedia()
    addSpdataVocePieces()
    addMinhaClinicaPieces()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply)
  } else {
    apply()
  }

  new MutationObserver(apply).observe(document.documentElement, {
    childList: true,
    subtree: true
  })

  setTimeout(apply, 300)
  setTimeout(apply, 1200)
})()

;(() => {
  const replacements = [
    ['Atuação integrada para fortalecer a presença institucional, organizar a comunicação dos canais e ampliar a consistência da marca em diferentes pontos de contato.', 'Atuação do planejamento à execução em diferentes iniciativas de comunicação e marketing, com responsabilidades definidas conforme cada projeto e trabalho conjunto com profissionais, áreas e lideranças.'],
    ['Em um grupo empresarial de grande porte e atuação diversificada, a comunicação precisava equilibrar identidade institucional, proximidade com os públicos e coerência entre canais internos e externos.', 'No Grupo SADA, atuei como Analista de Marketing na Gerência de Comunicação e Marketing, em uma estrutura formada por diferentes empresas, áreas e públicos. Meu trabalho acontecia de forma transversal e em equipe, principalmente em comunicação digital, canais, comunicação interna e projetos atendidos pela Gerência.'],
    ['Planejamento, produção e gestão de comunicação para fortalecer a marca, apoiar a cultura organizacional e manter uma linguagem consistente entre canais, públicos e iniciativas.', 'Planejamento e gestão de canais, conteúdo, comunicação interna, processos e indicadores, em interface com diferentes profissionais e áreas solicitantes.'],
    ['A Intermodal South America reuniu os principais agentes do setor de logística e mobilidade. O desafio era ampliar a presença digital do Grupo SADA durante o evento e transformar a participação presencial em conteúdo relevante para os canais institucionais.', 'Na Intermodal South America 2024, minha responsabilidade esteve concentrada na comunicação digital do Grupo SADA, com planejamento dos canais e cobertura antes, durante e depois do evento.'],
    ['Estruturei uma cobertura integrada, conectando planejamento editorial, roteiro, produção audiovisual e conteúdos em tempo real.', 'Fiquei responsável pelo planejamento da frente digital, envolvendo mídias sociais e canais, calendário de publicações, pautas e roteiros para conteúdos com profissionais da empresa, lideranças e cliente.'],
    ['Desenvolvimento do roteiro, organização da pauta, acompanhamento da produção, publicação dos conteúdos e desdobramentos para Instagram e LinkedIn.', 'A execução reuniu feed, Stories e Reels, com organização de pauta, roteiros, publicação, acompanhamento da cobertura e desdobramentos para Instagram e LinkedIn.'],
    ['Aproximando o time da cultura da empresa.', 'Comunicação, design e produção multimídia em tecnologia para saúde.'],
    ['Campanha de endomarketing completa — do conceito às peças — reconhecida pela liderança.', 'Autoria de conceito, design e peças da campanha SPDATA & Você, com condução do briefing à finalização.'],
    ['Conceito, identidade e execução da campanha SPDATA&Você — elogiada pelo CEO.', 'Autoria de conceito, design e peças da campanha SPDATA & Você, com retorno positivo da liderança sobre a evolução da comunicação interna.'],
    ['Linguagem diferenciada para SPDATA hospitalar e Minha Clínica, com consistência entre canais.', 'Organização visual e produção de materiais para diferentes soluções, preservando a relação com a marca institucional.'],
    ['Endomarketing · Cultura Organizacional · Comunicação Interna', 'Design · Produção Multimídia · Comunicação Interna'],
    ['Campanha de endomarketing · Comunicação interna · Pesquisa de clima', 'Design · Comunicação interna · Produção multimídia']
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
    ;['Abertura de comunicados internos', 'Pessoas no Dia V', 'Cidades impactadas', 'Consistência visual entre canais', 'Organização visual de produtos', 'Identidades visuais por produto'].forEach(removeResultByLabel)
  }

  function strengthenSpdataAuthorship() {
    document.querySelectorAll('span').forEach((span) => {
      const text = (span.textContent || '').trim()
      if (text === 'Identidade Visual') span.textContent = 'Design'
      if (text === 'Eventos') span.textContent = 'Produção Multimídia'
    })
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
