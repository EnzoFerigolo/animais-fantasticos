export default class Accordion {
  constructor(lista) {
    this.accordionlist = document.querySelectorAll(lista);
  }

  toggleAccordion(item) {
    item.classList.toggle("ativo");
    item.nextElementSibling.classList.toggle("ativo");
  }

  addAccordionEvent() {
    this.accordionlist.forEach((item) => {
      item.addEventListener("click", () => {
        this.toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionlist.length) {
      this.toggleAccordion(this.accordionlist[0]);
      this.addAccordionEvent();
    }
  }
}
