const OPEN_CLASS = "mobile-nav-open"

const setOpen = (open: boolean) => {
  document.body.classList.toggle(OPEN_CLASS, open)
  const toggle = document.querySelector(".mobile-nav-toggle")
  if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false")
}

// Delegated handlers — registered ONCE, survive SPA DOM swaps.
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null
  if (!target) return

  // Toggle button click
  if (target.closest(".mobile-nav-toggle")) {
    e.stopPropagation()
    setOpen(!document.body.classList.contains(OPEN_CLASS))
    return
  }

  // Search trigger click — close the drawer so the search modal can
  // take over without the two overlays fighting for layout space.
  // We do NOT stopPropagation; Quartz's own handler will open search.
  if (target.closest("#search-icon")) {
    if (document.body.classList.contains(OPEN_CLASS)) setOpen(false)
    return
  }

  // Outside-the-drawer click closes the drawer
  if (document.body.classList.contains(OPEN_CLASS)) {
    const sidebar = document.querySelector("#quartz-body .sidebar.left")
    if (sidebar && !sidebar.contains(target)) {
      setOpen(false)
    }
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.body.classList.contains(OPEN_CLASS)) {
    setOpen(false)
    const t = document.querySelector(".mobile-nav-toggle") as HTMLElement | null
    t?.focus()
  }
})

// Close on every SPA navigation so a tap on a TOC/Explorer link
// doesn't leave the drawer open on the destination page.
document.addEventListener("nav", () => {
  setOpen(false)
})
