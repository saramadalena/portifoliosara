(() => {
  const textFixes = [
    ['move.e · 2024–2025', 'move.e · Jul–Out/2025'],
    ['Freelance de Marketing, Branding e Conteúdo · 2024–2025', 'move.e · Jul–Out/2025'],
    ['Campanha reconhecida pela liderança pelo impacto cultural.', 'Feedback recebido: percepção de uma mudança concreta na comunicação, que ganhou mais vida e passou a despertar maior interesse do público interno.'],
    ['com retorno positivo da liderança.', 'com retorno positivo sobre a mudança percebida na comunicação interna.'],
    ['Material estratégico com autoria de design e diagramação, mantendo clareza visual, rigor técnico e proteção das informações sensíveis do cliente.', 'Material estratégico com autoria de design e diagramação, organizando informações complexas com clareza visual e preservando as informações sensíveis do projeto.']
  ]

  function fixMetadata() {
    document.documentElement.lang = 'pt-BR'
    document.title = 'Sara Madalena | Comunicação, Marketing e Design'
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', 'Portfólio de Sara Madalena Silva, profissional de Comunicação, Marketing e Design, com atuação em conteúdo, produção multimídia, marca e canais.')
  }

  function replaceText(root) {
    if (!root) return
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent || ['SCRIPT', 'STYLE', 'TEXTAREA'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      }
    })
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach((node) => {
      let value = node.nodeValue || ''
      textFixes.forEach(([from, to]) => {
        if (value.includes(from)) value = value.split(from).join(to)
      })
      node.nodeValue = value
    })
  }

  function findLabel(needles) {
    const list = Array.isArray(needles) ? needles : [needles]
    return Array.from(document.querySelectorAll('p')).find((p) => {
      const text = (p.textContent || '').trim()
      return list.some((needle) => text.includes(needle))
    })
  }

  function removeMetric(needles) {
    const label = findLabel(needles)
    if (!label) return
    const card = label.parentElement
    if (!card || card.dataset.metricRemoved === 'true') return
    card.dataset.metricRemoved = 'true'
    card.remove()
  }

  function relabelMetric(needles, value, labelText) {
    const label = findLabel(needles)
    if (!label || !label.parentElement) return
    const card = label.parentElement
    const ps = Array.from(card.querySelectorAll('p'))
    if (ps.length < 2) return
    ps[0].textContent = value
    ps[ps.length - 1].textContent = labelText
  }

  function cleanEvidenceCards() {
    removeMetric('Abertura de comunicados internos')
    removeMetric('Pessoas no Dia V')
    removeMetric('Cidades impactadas')

    relabelMetric(['Campanha de endomarketing completa', 'Autoria de campanha e peças'], 'Design', 'Autoria de campanha e peças')
    relabelMetric(['Identidades visuais por produto', 'Design e organização visual de produtos'], 'Design', 'Produtos e materiais')
    relabelMetric('Consistência visual entre canais', 'Multimídia', 'Lives e conteúdos internos')

    relabelMetric(['Arquitetura de mensagens estruturada', 'Organização de mensagens'], 'Conteúdo', 'Organização de mensagens')
    relabelMetric('Públicos mapeados', 'Design', 'Autoria de materiais e diagramação')

    relabelMetric(['Campanhas de captação executadas', 'Unidades atendidas'], 'Design', 'Autoria de peças e campanhas')
    relabelMetric(['Identidade editorial estruturada', 'Rotina de alto volume'], 'Multimídia', 'Fotografia, vídeo e materiais')
  }

  function fixMoveePeriod() {
    const candidates = Array.from(document.querySelectorAll('p, span'))
    const movee = candidates.find((el) => (el.textContent || '').trim() === 'move.e')
    if (!movee) return
    const region = movee.closest('article') || movee.parentElement?.parentElement?.parentElement || movee.parentElement
    if (!region) return
    Array.from(region.querySelectorAll('p, span')).forEach((el) => {
      const text = (el.textContent || '').trim()
      if (text === '2024–2025' || text === '2024-2025') el.textContent = 'Jul–Out/2025'
    })
  }

  function apply() {
    fixMetadata()
    replaceText(document.body)
    cleanEvidenceCards()
    fixMoveePeriod()
  }

  let scheduled = false
  function schedule() {
    if (scheduled) return
    scheduled = true
    requestAnimationFrame(() => {
      scheduled = false
      apply()
    })
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule)
  else schedule()

  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true, characterData: true })
  setTimeout(apply, 400)
  setTimeout(apply, 1400)
})()
