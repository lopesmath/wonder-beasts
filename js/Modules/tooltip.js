export default function initTooltip() {
  const tooltip = document.querySelectorAll('[data-tooltip]')

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY}20px`
      this.tooltipBox.style.left = `${e.pageX}20px`
    },
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseLeave)
    },
  }
  function criarTooltip(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }

  function onMouseOver(e) {
    const tooltipBox = criarTooltip(this)
    tooltipBox.style.top = `${e.pageY}px`
    tooltipBox.style.left = `${e.pageX}px`

    onMouseMove.tooltipBox = tooltipBox
    this.addEventListener('mousemove', onMouseMove)

    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
    this.addEventListener('mouseleave', onMouseLeave)
  }

  tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
}
