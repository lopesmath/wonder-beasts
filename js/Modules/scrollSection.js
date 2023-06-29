export default function initScrollSection() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const windowMetade = window.innerHeight * 0.6

  function scrollAnimate() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = sectionTop - windowMetade < 0
      if (isSectionVisible) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  if (sections.length) {
    window.addEventListener('scroll', scrollAnimate)

    scrollAnimate()
  }
}
