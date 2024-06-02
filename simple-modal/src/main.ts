{
  class Modal {
    modal: HTMLElement | null;

    constructor() {
      this.modal = document.getElementById("modal") as HTMLElement | null;
    }

    open(): void {
      this.modal?.classList.remove("opacity-0", "pointer-events-none");
    }

    close() {
      this.modal?.classList.add("opacity-0", "pointer-events-none");
    }
  }

  const modal = new Modal();

  class Css {
    static commonCss = "rounded-lg block px-8 py-2 shadow-xl duration-300";
    static pinkCss = "text-pink-50/60 bg-pink-800 shadow-pink-900 hover:text-pink-100 hover:bg-pink-600 hover:shadow-pink-700" + " " + this.commonCss;
    static skyCss = "text-sky-50/60 bg-sky-800 shadow-sky-900 hover:text-sky-100 hover:bg-sky-600 hover:shadow-sky-700" + " " + this.commonCss;
    static yellowCss = "text-yellow-50/60 bg-yellow-800 shadow-yellow-900 hover:text-yellow-100 hover:bg-yellow-600 hover:shadow-yellow-700" + " " + this.commonCss;

    constructor() {}
  }

  // staticのついたものはインスタンス化しなくても使える
  // const css = new Css();

  createOpenButtonAction();
  function createOpenButtonAction() {
    const openButton = document.getElementById("open-modal-button") as HTMLElement | null;

    openButton?.addEventListener("click", () => {
      modal.open();
    });
  }

  createCloseButtonAction();
  function createCloseButtonAction() {
    const closeModal = document.getElementById("close-modal") as HTMLElement | null;

    closeModal?.addEventListener("click", () => {
      modal.close();
      changeButtonColor("pink");
      createOpenButtonAction();
    });
  }

  function openModalActions() {
    const modal = document.getElementById("modal") as HTMLElement | null;
    modal?.classList.remove("opacity-0", "pointer-events-none");
  }

  function closeModalActions() {
    const modal = document.getElementById("modal") as HTMLElement | null;
    modal?.classList.add("opacity-0", "pointer-events-none");
  }

  const skyButton = document.getElementById("sky-button") as HTMLElement | null;
  skyButton?.addEventListener("click", () => {
    changeButtonColor("sky");
    closeModalActions();
    createOpenButtonAction();
  });

  const yellowButton = document.getElementById("yellow-button") as HTMLElement | null;
  yellowButton?.addEventListener("click", () => {
    changeButtonColor("yellow");
    closeModalActions();
    createOpenButtonAction();
  });

  function changeButtonColor($color: "sky" | "yellow" | "pink") {
    const openButton = document.getElementById("open-modal-button") as HTMLElement;
    const buttonWrapper = document.getElementById("button-wrapper") as HTMLElement;
    buttonWrapper.removeChild(openButton);

    let cssType = "";

    switch ($color) {
      case "pink":
        cssType = Css.pinkCss;
        break;
      case "sky":
        cssType = Css.skyCss;
        break;
      case "yellow":
        cssType = Css.yellowCss;
        break;
    }

    buttonWrapper.innerHTML = `<button id="open-modal-button" class="${cssType}">Click Me 🥰</button>`;
  }
}
