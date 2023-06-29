export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  function activeTab(event) {
    tabContent.forEach((item) => {
      item.classList.remove('ativo')
    })
    const direction = tabContent[event].dataset.anime
    tabContent[event].classList.add('ativo', direction)
  }

  if (tabMenu.length && tabContent.length) tabContent[0].classList.add('ativo')
  tabMenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      activeTab(index)
    })
  })
}
