(() => {
  const excludedAssets = ['rs-sada-0001']

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

  function apply() {
    removeExcludedMedia()
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
