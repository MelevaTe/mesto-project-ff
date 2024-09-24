const container = document.querySelector('.content');
const cardContainer = container.querySelector('.places__list');
const addButton = container.querySelector('.profile__add-button');

const addCard = (item, deleteFunc) => {
  const cardTemplate=document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = item.name;
  const cardLink = item.link; 
  cardElement.querySelector('.card__image').src = cardLink;
  cardElement.querySelector('.card__image').alt = cardTitle;
  cardElement.querySelector('.card__title').textContent = cardTitle;
  
  cardElement.querySelector(".card__delete-button").addEventListener("click", deleteFunc)
  cardContainer.append(cardElement);
}


addButton.addEventListener('click', function () {
  initialCards.forEach(item => addCard(item, deleteCard));
});


const deleteCard = event => event.target.parentElement.remove();

