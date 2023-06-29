export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

  accordionList[0].classList.toggle('ativo')
  accordionList[0].nextElementSibling.classList.toggle('ativo')

  function accordionToggle() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  accordionList.forEach((item) => {
    item.addEventListener('click', accordionToggle)
  })
}
