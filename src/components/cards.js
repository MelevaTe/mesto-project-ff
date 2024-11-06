import {deleteCardServer, putLike, deleteLike} from './api'
import {handleDeleteCard} from "../index.js"



const cardTemplateElement=document.querySelector("#card-template").content;
export const imageInPopupImg = document.querySelector(".popup_type_image .popup__image");
export const captionInPopupImg = document.querySelector(".popup_type_image .popup__caption");



export const createCard = (item, deleteFunc, getLike, handleImageClick, userId) => {
  const cardElement = cardTemplateElement.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");
  const likesCounter = cardElement.querySelector(".likes-counter");
  const cardTitle = item.name;
  const cardLink = item.link; 
  const cardLikes = item.likes.length;
  const cardId = item._id;
  const isLiked = item.likes.some(like => like._id === userId);
  cardImageElement.src = cardLink;
  cardImageElement.alt = cardTitle;
  cardElement.querySelector(".card__title").textContent = cardTitle;
  likesCounter.textContent = cardLikes;
  if (isLiked) {
    cardElement.querySelector(".card__like-button").classList.add("card__like-button_is-active");
  }
  if (userId === item.owner._id) {
    cardElement.querySelector(".card__delete-button").addEventListener("click", () => {
      handleDeleteCard(cardId, cardElement);
    });
  }
  else {
    cardElement.querySelector(".card__delete-button").remove();
  }
  
  cardImageElement.addEventListener("click", () => {
    handleImageClick(cardLink, cardTitle);
  });

  cardElement.querySelector(".card__like-button").addEventListener("click", (evt) =>{
    getLike(cardId, evt, likesCounter);
  });
  return cardElement;
}

export const deleteCard = (cardId,evt) => {
  deleteCardServer(cardId);
  evt.target.closest(".places__item").remove();
};


export function getLike(cardId, evt, likesCounter) {
  if (evt.target.classList.contains("card__like-button")) {
    const likeMethod = evt.target.classList.contains("card__like-button_is-active") ? deleteLike : putLike;
    likeMethod(cardId) 
      .then((result) => {
          likesCounter.textContent= result.likes.length; 
           evt.target.classList.toggle("card__like-button_is-active"); 
        })
    .catch(err => console.log(err));
  }
}