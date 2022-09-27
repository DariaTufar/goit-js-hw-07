import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ----------1-Creating Markup-------------

const renderMarkupTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description} />
    </a>
  </div>`;

const imgContainer = document.querySelector(".gallery");
const galleryList = galleryItems
  .map((item) => renderMarkupTemplate(item))
  .join(``);
imgContainer.insertAdjacentHTML("afterbegin", galleryList);

// ----------2 --- EventListener for opening  -----
imgContainer.addEventListener(`click`, onImageHandleClick);

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
  const store = { lightbox: null };
  store.lightbox = instanceModal;
  instanceModal.show();
}
// ---------EventListener for closing  with Escape on  keyboard-----
imgContainer.addEventListener(`keydown`, onEscCloseModal, { once: true });

function onEscCloseModal(evt) {
  if (evt.key === "Escape") {
    if (store.lightbox && store.lightbox.close) {
      store.lightbox.close();
    }
  }
  console.log(`escape is pressed!!!!evtlst working!!!!`);
}
