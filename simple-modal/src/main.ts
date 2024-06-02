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

  class Css {
    commonCss: string;
    pinkCss: string;
    skyCss: string;
    yellowCss: string;

    constructor() {
      this.commonCss = "rounded-lg block px-8 py-2 shadow-xl duration-300";
      this.pinkCss = "text-pink-50/60 bg-pink-800 shadow-pink-900 hover:text-pink-100 hover:bg-pink-600 hover:shadow-pink-700" + " " + this.commonCss;
      this.skyCss = "text-sky-50/60 bg-sky-800 shadow-sky-900 hover:text-sky-100 hover:bg-sky-600 hover:shadow-sky-700" + " " + this.commonCss;
      this.yellowCss = "text-yellow-50/60 bg-yellow-800 shadow-yellow-900 hover:text-yellow-100 hover:bg-yellow-600 hover:shadow-yellow-700" + " " + this.commonCss;
    }

    deleteOpenButton() {
      const openButton = document.getElementById("open-modal-button") as HTMLElement;
      const buttonWrapper = document.getElementById("button-wrapper") as HTMLElement;
      buttonWrapper.removeChild(openButton);
    }

    changeButtonColor($color: "sky" | "yellow" | "pink") {
      let cssType = "";

      switch ($color) {
        case "pink":
          cssType = this.pinkCss;
          break;
        case "sky":
          cssType = this.skyCss;
          break;
        case "yellow":
          cssType = this.yellowCss;
          break;
      }

      const buttonWrapper = document.getElementById("button-wrapper") as HTMLElement;
      buttonWrapper.innerHTML = `<button id="open-modal-button" class="${cssType}">Click Me 🥰</button>`;
    }
  }

  class Event {
    css: Css;
    modal: Modal;

    constructor() {
      this.css = new Css();
      this.modal = new Modal();
    }

    setOpenEvent() {
      const openButton = document.getElementById("open-modal-button") as HTMLElement | null;

      openButton?.addEventListener("click", () => {
        this.modal.open();
      });
    }

    setCloseEvent() {
      const closeModal = document.getElementById("close-modal") as HTMLElement | null;

      closeModal?.addEventListener("click", () => {
        this.modal.close();
        this.css.changeButtonColor("pink");
        this.setOpenEvent();
      });
    }

    setSkyButtonClickEvent() {
      const skyButton = document.getElementById("sky-button") as HTMLElement | null;
      skyButton?.addEventListener("click", () => {
        this.css.changeButtonColor("sky");
        this.modal.close();
        event.setOpenEvent();
      });
    }

    setYellowButtonClickEvent() {
      const yellowButton = document.getElementById("yellow-button") as HTMLElement | null;
      yellowButton?.addEventListener("click", () => {
        this.css.changeButtonColor("yellow");
        this.modal.close();
        event.setOpenEvent();
      });
    }
  }

  // staticのついたものはインスタンス化しなくても使える
  // const css = new Css();
  // const modal = new Modal();
  const event = new Event();

  event.setOpenEvent();
  event.setCloseEvent();
  event.setSkyButtonClickEvent();
  event.setYellowButtonClickEvent();
}
