export default class ScrollSmooth {
  constructor(links, options) {
    this.linkInterno = document.querySelectorAll(links)
    this.scrollToSection = this.scrollToSection.bind(this)

    if (options === undefined)
      this.options = { behavior: 'smooth', block: 'start' }
    else this.options = options
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView(this.options)
  }

  addLinkEvent() {
    this.linkInterno.forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })
  }

  init() {
    if (this.linkInterno.length) {
      this.addLinkEvent()
    }
    return this
  }
}
