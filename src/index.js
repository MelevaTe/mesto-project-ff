import './pages/index.css';
import { openModal, closeModal } from './components/modal.js';
import { deleteCard, createCard, getLike, imageInPopupImg, captionInPopupImg } from './components/cards.js';
import { enableValidation, clearValidation} from './components/validation';
import { getInitialCards, getProfileInfo, pathProfileInfo, postNewCard, pathProfileAvatar, deleteCardServer } from './components/api'
import {validationConfig} from "./components/validationconfig"

const containerElement = document.querySelector(".content");
const cardContainerElement = containerElement.querySelector(".places__list");
const title = containerElement.querySelector(".profile__title");
const description = containerElement.querySelector(".profile__description");
const profileImage = containerElement.querySelector(".profile__image")

let userId='';

const handleImageClick = (src, alt) => {
  imageInPopupImg.src = src;
  imageInPopupImg.alt = alt;
  captionInPopupImg.textContent = alt;
  openModal(popupImage);
}

const addCard = (item, deleteFunc, cardContainerElement, userId) => {
  const cardElement = createCard(item, deleteFunc, getLike, handleImageClick, userId);
  cardContainerElement.prepend(cardElement);
};



const promises = [getProfileInfo(), getInitialCards()]
Promise.all(promises) 
  .then(([userInfo, cards]) => { 
    title.textContent = userInfo.name;
    description.textContent = userInfo.about;
    userId = userInfo._id;
    profileImage.style.backgroundImage = `url(${userInfo.avatar})`;
    cards.forEach(item => addCard(item, deleteCard, cardContainerElement, userId));
  })
.catch(err => console.error(err));


  

const profileEditForm = document.forms["edit-profile"];
const nameInput = profileEditForm.elements.name;
const jobInput = profileEditForm.elements.description;



const setCloseListeners = (popup) => {
  const popupCloseBtn = popup.querySelector(".popup__close");
  popupCloseBtn.addEventListener("click", () => {
      closeModal(popup)
  });

  popup.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
          closeModal(popup);
      }
  });
}




const popupProfileEdit = document.querySelector(".popup_type_edit")
const popupNewCardEdit = document.querySelector(".popup_type_new-card")
const popupImage = document.querySelector(".popup_type_image")
const popupNewAvatar = document.querySelector(".popup_type_new-avatar")
export const popupDeleteCard = document.querySelector(".popup_type_delete-card")


setCloseListeners(popupProfileEdit);
setCloseListeners(popupNewCardEdit);
setCloseListeners(popupImage);
setCloseListeners(popupNewAvatar);
setCloseListeners(popupDeleteCard);


const profileEditBtn = containerElement.querySelector(".profile__edit-button");
const profileNewCardBtn = containerElement.querySelector(".profile__add-button");
const profileNewAvatarBtn = containerElement.querySelector(".profile__image");


profileEditBtn.addEventListener("click", () => {
  nameInput.value = title.textContent;
  jobInput.value = description.textContent;
  clearValidation(popupProfileEdit, validationConfig); 
  openModal(popupProfileEdit);
});

profileNewCardBtn.addEventListener("click", () => openModal(popupNewCardEdit));

profileNewAvatarBtn.addEventListener("click", () => openModal(popupNewAvatar));


function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupProfileEdit.querySelector(".popup__button"));
  pathProfileInfo(nameInput.value, jobInput.value)
    .then((result) => {
      title.textContent = result.name;
      description.textContent = result.about;
      profileImage.style.backgroundImage = `url(${result.avatar})`;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupProfileEdit.querySelector(".popup__button"));
    })
  closeModal(popupProfileEdit);
};

const newProfileAvatarForm = document.forms["new-avatar"];
const avatarInput = newProfileAvatarForm.elements["link-avatar"];

function handleAvatarForSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupNewAvatar.querySelector(".popup__button"));
  pathProfileAvatar(avatarInput.value)
    .then((result) => {
      console.log(result)
      profileImage.style.backgroundImage = `url(${result.avatar})`;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, popupNewAvatar.querySelector(".popup__button"));
    })
  closeModal(popupNewAvatar);
};

  

const newCardEditForm = document.forms["new-place"];
const placenameInput = newCardEditForm.elements["place-name"];
const linkInput = newCardEditForm.elements.link;

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, popupNewCardEdit.querySelector(".popup__button"));
  postNewCard(placenameInput.value, linkInput.value)
  .then((result) => {
    const item = result;
    addCard(item, deleteCard, cardContainerElement, userId);
    clearValidation(popupNewCardEdit, validationConfig);
    newCardEditForm.reset();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoading(false, popupNewCardEdit.querySelector(".popup__button"));
  })
  closeModal(popupNewCardEdit);
}

function renderLoading(isLoading, button) {
  button.textContent=isLoading ? "Сохранение..." : "Сохранить"
}


let cardForDelete = null;

export const handleDeleteCard = (cardId, cardElement) => {
  cardForDelete = {
    id: cardId,
    cardElement
  };
  openModal(popupDeleteCard);
};

const deleteCardForm = document.forms["delete-card"];

deleteCardForm.addEventListener("submit", handleDeleteCardSubmit);

function handleDeleteCardSubmit(evt) {
  evt.preventDefault();

  if (!cardForDelete.cardElement) return;

  deleteCardServer(cardForDelete.id)
    .then(() => {
      cardForDelete.cardElement.remove();
      closeModal(popupDeleteCard);
      cardForDelete = {};
    })
    .catch((err) => {
      console.log(err);
    });
  
}


profileEditForm.addEventListener("submit", handleProfileFormSubmit);
newCardEditForm.addEventListener("submit", handleCardFormSubmit);
newProfileAvatarForm.addEventListener("submit", handleAvatarForSubmit);


enableValidation(validationConfig);