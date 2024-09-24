const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const addButton = container.querySelector('.profile__add-button');
const cardTemplate=document.querySelector("#card-template").content;


const addCard = (item, deleteFunc) => {
  const cardElement = createCard(item, deleteFunc);
  cardContainer.append(cardElement);
}

const createCard = (item, deleteFunc) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = item.name;
  const cardLink = item.link; 
  cardImage.src = cardLink;
  cardImage.alt = cardTitle;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteFunc);
  return cardElement;
}

const deleteCard = event => event.target.closest(".places__item").remove();

initialCards.forEach(item => addCard(item, deleteCard));



