{
  createOpenButtonAction();
  function createOpenButtonAction() {
    const openButton = document.getElementById("open-modal-button") as HTMLElement | null;

    openButton?.addEventListener("click", () => {
      openModalActions();
    });
  }

  createCloseButtonAction();
  function createCloseButtonAction() {
    const closeModal = document.getElementById("close-modal") as HTMLElement | null;

    closeModal?.addEventListener("click", () => {
      closeModalActions();
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

  const pinkCss = "rounded-lg block bg-pink-800 text-pink-50/60 px-8 py-2 shadow-xl shadow-pink-900 hover:text-pink-100 hover:bg-pink-600 hover:shadow-pink-700 duration-300";

  const yellowCss = "rounded-lg block bg-yellow-800 text-yellow-50/60 px-8 py-2 shadow-xl shadow-yellow-900 hover:text-yellow-100 hover:bg-yellow-600 hover:shadow-yellow-700 duration-300";

  const skyCss = "rounded-lg block bg-sky-800 text-sky-50/60 px-8 py-2 shadow-xl shadow-sky-900 hover:text-sky-100 hover:bg-sky-600 hover:shadow-sky-700 duration-300";

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
      case "sky":
        cssType = skyCss;
        break;
      case "yellow":
        cssType = yellowCss;
        break;
      case "pink":
        cssType = pinkCss;
        break;
    }

    buttonWrapper.innerHTML = `<button id="open-modal-button" class="${cssType}">Click Me</button>`;
  }
}
