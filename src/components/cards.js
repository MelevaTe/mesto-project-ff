export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  }
];

const cardTemplateElement=document.querySelector("#card-template").content;

export const addCard = (item, deleteFunc, cardContainerElement) => {
  const cardElement = createCard(item, deleteFunc);
  cardContainerElement.prepend(cardElement);
};


export const createCard = (item, deleteFunc, GetLike) => {
  const cardElement = cardTemplateElement.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitle = item.name;
  const cardLink = item.link; 
  cardImageElement.src = cardLink;
  cardImageElement.alt = cardTitle;
  cardElement.querySelector(".card__title").textContent = cardTitle;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteFunc );
  return cardElement;
}

export const deleteCard = (event) => {
  event.target.closest(".places__item").remove();
};




export function GetLike(evt) {
  if (evt.target.classList.contains("card__like-button")) {
    evt.target.classList.toggle("card__like-button_is-active");
  }
}