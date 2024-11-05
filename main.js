(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{K:()=>A});var t=function(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),1),document.addEventListener("keydown",o)},n=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)},o=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");n(t)}},r={baseUrl:"https://nomoreparties.co/v1/wff-cohort-26",headers:{authorization:"949df248-dfe2-4ce4-ad7e-ee64373739f4","Content-Type":"application/json"}},c=function(){return fetch("".concat(r.baseUrl,"/cards"),{method:"GET",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},a=function(){return fetch("".concat(r.baseUrl,"/users/me"),{method:"GET",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))},u=document.querySelector("#card-template").content,i=document.querySelector(".popup_type_image .popup__image"),s=document.querySelector(".popup_type_image .popup__caption");function l(e,t,n){t.target.classList.contains("card__like-button")&&t.target.classList.toggle("card__like-button_is-active"),t.target.classList.contains("card__like-button_is-active")?function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(e).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(e).then((function(e){n.textContent=e.likes.length})).catch((function(e){console.log(e)}))}var d={};document.forms["delete-card"].addEventListener("submit",(function(e){var t;(e.preventDefault(),d.cardElement)&&(t=d.id,fetch("".concat(r.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:r.headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))).then((function(){d.cardElement.remove(),n(A),d={}})).catch((function(e){console.log(e)}))}));var p={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"form__input-error_active"},f=function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(p.inputErrorClass),n.classList.remove(p.errorClass),n.textContent=""},m=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove(n):t.classList.add(n)},_=function(e,t){var n=t.inputSelector,o=t.submitButtonSelector,r=t.inactiveButtonClass,c=Array.from(e.querySelectorAll(n)),a=e.querySelector(o);c.forEach((function(t){f(e,t)})),m(c,a,r)},y=document.querySelector(".content"),v=y.querySelector(".places__list"),h=y.querySelector(".profile__title"),S=y.querySelector(".profile__description"),b=y.querySelector(".profile__image"),q="";a().then((function(e){h.textContent=e.name,S.textContent=e.about,q=e._id,b.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)}));var g=function(e,n){i.src=e,i.alt=n,s.textContent=n,t(w)},k=function(e,n,o,r){var c=function(e,n,o,r,c){var a=u.querySelector(".card").cloneNode(!0),i=a.querySelector(".card__image"),s=a.querySelector(".likes-counter"),l=e.name,p=e.link,f=e.likes.length,m=e._id,_=e.likes.some((function(e){return e._id===c}));return i.src=p,i.alt=l,a.querySelector(".card__title").textContent=l,s.textContent=f,_&&a.querySelector(".card__like-button").classList.add("card__like-button_is-active"),c===e.owner._id?a.querySelector(".card__delete-button").addEventListener("click",(function(){!function(e,n){d={id:e,cardElement:n},t(A)}(m,a)})):a.querySelector(".card__delete-button").remove(),i.addEventListener("click",(function(){r(p,l)})),a.querySelector(".card__like-button").addEventListener("click",(function(e){o(m,e,s)})),a}(e,0,l,g,r);o.prepend(c)};c().then((function(e){e.forEach((function(e){return k(e,0,v,q)}))})).catch((function(e){console.log(e)}));var E=[a,c];Promise.all(E).then((function(e){console.log(e)}));var L=document.forms["edit-profile"],C=L.elements.name,j=L.elements.description,P=function(e){e.querySelector(".popup__close").addEventListener("click",(function(){n(e)})),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&n(e)}))},x=document.querySelector(".popup_type_edit"),T=document.querySelector(".popup_type_new-card"),w=document.querySelector(".popup_type_image"),U=document.querySelector(".popup_type_new-avatar"),A=document.querySelector(".popup_type_delete-card");P(x),P(T),P(w),P(U),P(A);var D=y.querySelector(".profile__edit-button"),O=y.querySelector(".profile__add-button"),B=y.querySelector(".profile__image");D.addEventListener("click",(function(){C.value=h.textContent,j.value=S.textContent,_(x,p),t(x)})),O.addEventListener("click",(function(){return t(T)})),B.addEventListener("click",(function(){return t(U)}));var z=document.forms["new-avatar"],N=z.elements["link-avatar"],I=document.forms["new-place"],J=I.elements["place-name"],M=I.elements.link;function G(e,t){t.textContent=e?"Сохранение...":"Сохранить"}L.addEventListener("submit",(function(e){e.preventDefault(),G(!0,x.querySelector(".popup__button")),function(e,t){return fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:"949df248-dfe2-4ce4-ad7e-ee64373739f4","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),about:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(C.value,j.value).then((function(e){h.textContent=e.name,S.textContent=e.about,b.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)})).finally((function(){G(!1,x.querySelector(".popup__button"))})),n(x)})),I.addEventListener("submit",(function(e){e.preventDefault(),G(!0,T.querySelector(".popup__button")),function(e,t){return fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:{authorization:"949df248-dfe2-4ce4-ad7e-ee64373739f4","Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e),link:"".concat(t)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(J.value,M.value).then((function(e){k(e,0,v,q),_(T,p),I.reset()})).catch((function(e){console.log(e)})).finally((function(){G(!1,T.querySelector(".popup__button"))})),n(T)})),z.addEventListener("submit",(function(e){e.preventDefault(),G(!0,U.querySelector(".popup__button")),function(e){return fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:"949df248-dfe2-4ce4-ad7e-ee64373739f4","Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e)})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}(N.value).then((function(e){console.log(e),b.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)})).finally((function(){G(!1,U.querySelector(".popup__button"))})),n(U)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=t.inputSelector,o=t.submitButtonSelector,r=t.inactiveButtonClass,c=Array.from(e.querySelectorAll(n)),a=e.querySelector(o);m(c,a,r),c.forEach((function(t){t.addEventListener("input",(function(){(function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(p.inputErrorClass),o.textContent=n,o.classList.add(p.errorClass)}(e,t,t.validationMessage)})(e,t),m(c,a,r)}))}))}(t,e)}))}(p)})();