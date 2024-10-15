import './pages/index.css';
import { openModal, closeModal } from './components/modal.js';
import { deleteCard, createCard, getLike } from './components/cards.js';
import { initialCards } from './components/initialCards.js';

const containerElement = document.querySelector(".content");
const cardContainerElement = containerElement.querySelector(".places__list");

const addCard = (item, deleteFunc, cardContainerElement) => {
  const cardElement = createCard(item, deleteFunc);
  cardContainerElement.prepend(cardElement);
};

initialCards.forEach(item => addCard(item, deleteCard, cardContainerElement));

const profileEditForm = document.forms["edit-profile"];
const nameInput = profileEditForm.elements.name;
const jobInput = profileEditForm.elements.description;



const setCloseListeners = (pops) => {
  const popupCloseBtn = pops.querySelector(".popup__close");
  popupCloseBtn.addEventListener("click", () => {
      closeModal(pops)
  });

  pops.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
          closeModal(pops);
      }
  });
}

const title = containerElement.querySelector(".profile__title");
const description = containerElement.querySelector(".profile__description");


const popupProfileEdit = document.querySelector(".popup_type_edit")
const popupNewCardEdit = document.querySelector(".popup_type_new-card")
const popupImage = document.querySelector(".popup_type_image")

setCloseListeners(popupProfileEdit);
setCloseListeners(popupNewCardEdit);
setCloseListeners(popupImage);

const profileEditBtn = containerElement.querySelector(".profile__edit-button");
const profileNewCardBtn = containerElement.querySelector(".profile__add-button");


profileEditBtn.addEventListener("click", () => {
  nameInput.value = title.textContent;
  jobInput.value = description.textContent;
  openModal(popupProfileEdit);
});

profileNewCardBtn.addEventListener("click", () => openModal(popupNewCardEdit));


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closeModal(popupProfileEdit);
}


const newCardEditForm = document.forms["new-place"];
const placenameInput = newCardEditForm.elements["place-name"];
const linkInput = newCardEditForm.elements.link;

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const item = {
      name: placenameInput.value,
      link: linkInput.value,
  };
  addCard(item, deleteCard, cardContainerElement);
  newCardEditForm.reset();
  closeModal(popupNewCardEdit);
}

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
newCardEditForm.addEventListener("submit", handleCardFormSubmit);


cardContainerElement.addEventListener("click", getLike);