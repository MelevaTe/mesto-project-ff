export const openModal = (modal) => {
  modal.classList.add("popup_is-animated");
  setTimeout(() => {
    modal.classList.add("popup_is-opened");
  }, 1);
  document.addEventListener("keydown", handleEscKeyUp);
};

export const closeModal= (modal) => {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKeyUp);
};

export const handleEscKeyUp = (evt) => {
  if (evt.key === "Escape") {
      const openPopup = document.querySelector(".popup_is-opened")
      closeModal(openPopup);
  }
};