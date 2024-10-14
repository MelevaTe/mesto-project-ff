export const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
  modal.classList.add("popup_is-animated");
  modal.addEventListener("keydown", handleEscKeyUp);
};

export const closeModal= (modal) => {
  modal.classList.remove("popup_is-opened");
  modal.removeEventListener("keydown", handleEscKeyUp);
};

export const handleEscKeyUp = (evt) => {
  if (evt.key === "Escape") {
      const openpop = document.querySelector(".popup_is-opened")
      closeModal(openpop);
  }
};
