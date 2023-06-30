export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  activeTab(event) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass)
    })
    const direction = this.tabContent[event].dataset.anime
    this.tabContent[event].classList.add(this.activeClass, direction)
  }

  addTabEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0)
      this.addTabEvent()
    }
  }
}
