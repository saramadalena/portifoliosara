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
    subtree: true
  })

  setTimeout(apply, 300)
  setTimeout(apply, 1200)
})()
