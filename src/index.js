import './pages/index.css';
import { openModal, closeModal } from './components/modal.js';
import { initialCards, addCard, deleteCard, createCard, GetLike } from './components/cards.js';

const containerElement = document.querySelector(".content");
const cardContainerElement = containerElement.querySelector(".places__list");

initialCards.forEach(item => addCard(item, deleteCard, cardContainerElement));



const GetListener = (pops) => {
  const krest= pops.querySelector(".popup__close");
  krest.addEventListener("click", () => {
      closeModal(pops)
  });

  pops.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup")) {
          closeModal(pops);
      }
  });
}




const PopupProfileEdit = document.querySelector(".popup_type_edit")
const PopupNewCardEdit = document.querySelector(".popup_type_new-card")
const PopupImage = document.querySelector(".popup_type_image")

GetListener(PopupProfileEdit);
GetListener(PopupNewCardEdit);
GetListener(PopupImage);

const profileEditBtn = containerElement.querySelector(".profile__edit-button");
const profileNewCardBtn = containerElement.querySelector(".profile__add-button");


profileEditBtn.addEventListener("click", () => openModal(PopupProfileEdit));
profileNewCardBtn.addEventListener("click", () => openModal(PopupNewCardEdit));
cardContainerElement.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("card__image")) {
      poimg.src = evt.target.src;
      poimg.alt = evt.target.alt;
      potext.textContent = evt.target.alt;
      openModal(PopupImage);
  }
});


const poimg = PopupImage.querySelector(".popup__image");
const potext = PopupImage.querySelector(".popup__caption")

const ProfileEditForm = document.forms["edit-profile"];


const nameInput = ProfileEditForm.elements.name;
const jobInput = ProfileEditForm.elements.description;


function handleFormSubmit(evt) {
  evt.preventDefault();
  const title = containerElement.querySelector(".profile__title");
  const description = containerElement.querySelector(".profile__description");
  title.textContent = nameInput.value;
  description.textContent = jobInput.value;
  closeModal(PopupProfileEdit);
}


const NewCardEditForm = document.forms["new-place"];
const placenameInput = NewCardEditForm.elements["place-name"];
const linkInput = NewCardEditForm.elements.link;

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const item = {
      name: placenameInput.value,
      link: linkInput.value,
  };
  addCard(item, deleteCard, cardContainerElement);
  NewCardEditForm.reset();
  closeModal(PopupNewCardEdit);
}

ProfileEditForm.addEventListener("submit", handleFormSubmit);
NewCardEditForm.addEventListener("submit", handleFormSubmitCard);


cardContainerElement.addEventListener("click", GetLike);






































































// const profileEditBtn = containerElement.querySelector(".profile__edit-button");
// const profileNewCardBtn = containerElement.querySelector(".profile__add-button");


// const PopupProfileEdit = document.querySelector(".popup_type_edit")
// const PopupNewCardEdit = document.querySelector(".popup_type_new-card")
// const PopupImage = document.querySelector(".popup_type_image")

// const ProfileEditForm = document.forms["edit-profile"];
// const NewCardEditForm = document.forms["new-place"];

// const Popups = document.querySelectorAll(".popup")
// const PopupCloseBtn = document.querySelector(".popup__close");
// const PopupSaveBtn = document.querySelector(".popup__button")


// profileEditBtn.addEventListener("click", () => openModal(PopupProfileEdit));
// profileNewCardBtn.addEventListener("click", () => openModal(PopupNewCardEdit));
// cardContainerElement.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("card__image")) {
//         openModal(PopupImage);
//     }
// });



// const nameInput = ProfileEditForm.elements.name;
// const jobInput = ProfileEditForm.elements.description;
// const title = containerElement.querySelector(".profile__title");
// const description = containerElement.querySelector(".profile__description");

// function handleFormSubmit(evt) {
//     evt.preventDefault();
//     title.textContent = nameInput.value;
//     description.textContent = jobInput.value;
// }




// const poimg = PopupImage.querySelector(".popup__image");
// const potext = PopupImage.querySelector(".popup__caption")

// PopupProfileEdit.addEventListener("click", closeModal);
// PopupNewCardEdit.addEventListener("click", closeModal);
// PopupImage.addEventListener("click", closeModal);



// PopupProfileEdit.addEventListener("keydown", closeescape);
// PopupNewCardEdit.addEventListener("keydown", closeescape);

// function openModal(modal) {
//   modal.classList.add("popup_is-opened")
//   modal.classList.add("popup_is-animated")
// };


// function closeModal(evt){
//   if (evt.target.classList.contains("popup__close") || evt.target === evt.currentTarget || evt.target.classList.contains("popup__button")) {
//     evt.currentTarget.classList.remove("popup_is-opened");
//   }
// }


// function closeescape(evt) {
//   if (evt.key==="Escape") {
//     evt.currentTarget.classList.remove("popup_is-opened");
//   }
//   evt.target.removeEventListener("keydown", closeescape);
// }



// const placenameInput = NewCardEditForm.elements["place-name"];
// const linkInput = NewCardEditForm.elements.link;

// function handleFormSubmitCard(evt) {
//   evt.preventDefault();
//   const item = {
//     name: placenameInput.value,
//     link: linkInput.value,
//   };
//   addCard(item, deleteCard)
//   NewCardEditForm.reset();
// }

// ProfileEditForm.addEventListener("submit", handleFormSubmit);
// NewCardEditForm.addEventListener("submit", handleFormSubmitCard);



// cardContainerElement.addEventListener("click", GetLike);


// function GetLike(evt){
//   if (evt.target.classList.contains("card__like-button")) {
//     evt.target.classList.toggle("card__like-button_is-active");
//   }
// }
