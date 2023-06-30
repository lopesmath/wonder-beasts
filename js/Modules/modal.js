export default class Modal {
  constructor(abrir, fechar, container) {
    this.botaoAbrir = document.querySelector(abrir)
    this.botaoFechar = document.querySelector(fechar)
    this.containerModal = document.querySelector(container)

    //bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.foraDoModal = this.foraDoModal.bind(this)
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  eventToggleModal(e) {
    e.preventDefault()
    this.toggleModal()
  }

  foraDoModal(e) {
    if (e.target === this.containerModal) this.toggleModal()
  }

  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.foraDoModal)
  }

  init() {
    this.addModalEvents()
  }
}
