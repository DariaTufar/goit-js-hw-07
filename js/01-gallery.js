import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line

// ----------1-Creating Markup-------------

const renderMarkupTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        
      />
    </a>
  </div>`;

const imgContainer = document.querySelector(".gallery");
const galleryList = galleryItems
  .map((item) => renderMarkupTemplate(item))
  .join(``);
imgContainer.insertAdjacentHTML("afterbegin", galleryList);

// -----------------------------------------------------------

// ----------2 --- EventListener -----

imgContainer.addEventListener(`click`, onImageHandleClick);

// let instanceModal = basicLightbox.create(`<div class="modal">
//       </div>`);
// instanceModal.show();

// ---------EventListener for opening ------------
function onImageHandleClick(evt) {
  evt.preventDefault();

  const isImgActive = evt.target.classList.contains("gallery__image");

  if (!isImgActive) {
    return;
  }
  const activeImg = evt.target;

  const instanceModal = basicLightbox.create(
    `<img src="${activeImg.dataset.source}"/>`
  );

  instanceModal.show();
}
// ---------EventListener for closing  with Escape on  keyboard-----
// ------ need tutors help ----
imgContainer.addEventListener(`keydown`, onEscCloseModal, { once: true });

function onEscCloseModal(evt) {
  if (evt.key === "Escape") {
    console.log(`escape is pressed`);
    console.log(instanceModal);
    instanceModal.close();
  }
}
