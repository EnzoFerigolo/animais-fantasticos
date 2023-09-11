export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.container = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.container) {
      this.botaoAbrir.addEventListener("click", this.eventToggleModal);
      this.botaoFechar.addEventListener("click", this.eventToggleModal);
      this.container.addEventListener("click", this.cliqueForaModal);
    }
    return this;
  }
}
