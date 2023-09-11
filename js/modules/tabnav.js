export default class initTabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.content.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add("ativo", direcao);
  }

  addTabNavEvent() {
    this.content[0].classList.add("ativo");
    this.menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.menu.length && this.content.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
