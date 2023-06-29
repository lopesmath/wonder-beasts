export default function initScrollSmooth() {
  const linkInterno = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  )

  function scrollToSection(event) {
    event.preventDefault()
    const href = this.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linkInterno.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })
}
