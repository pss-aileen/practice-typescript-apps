{
  const openButton: HTMLElement | null = document.getElementById("open-modal");
  const modal: HTMLElement | null = document.getElementById("modal");

  if (openButton && modal) {
    openButton.addEventListener("click", () => {
      modal.classList.remove("opacity-0", "pointer-events-none");
    });

    const closeModal = document.getElementById("close-modal");
    closeModal?.addEventListener("click", () => {
      modal.classList.add("opacity-0", "pointer-events-none");
    });
  }
}
