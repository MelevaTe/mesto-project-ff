const cardTemplateElement=document.querySelector("#card-template").content;
export const imageInPopupImg = document.querySelector(".popup_type_image .popup__image");
export const captionInPopupImg = document.querySelector(".popup_type_image .popup__caption");


export const createCard = (item, deleteFunc, getLike, handleImageClick) => {
  const cardElement = cardTemplateElement.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitle = item.name;
  const cardLink = item.link; 
  cardImageElement.src = cardLink;
  cardImageElement.alt = cardTitle;
  cardElement.querySelector(".card__title").textContent = cardTitle;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteFunc);
  cardImageElement.addEventListener("click", () => {
    handleImageClick(cardLink, cardTitle);
  });
  cardElement.querySelector(".card__like-button").addEventListener("click", getLike);
  return cardElement;
}

export const deleteCard = (event) => {
  event.target.closest(".places__item").remove();
};


export function getLike(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}

