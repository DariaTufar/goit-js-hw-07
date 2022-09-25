import { galleryItems } from "./gallery-items.js";
// Change code below this line

const renderMarkupTemplate = ({ preview, original, description }) =>
  `<li>
  <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description}  />
</a>; </li>`;

const imgContainer = document.querySelector(".gallery");
const galleryList = galleryItems
  .map((item) => renderMarkupTemplate(item))
  .join(``);

console.log(imgContainer);
imgContainer.insertAdjacentHTML("afterbegin", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  caption: true,
  captionDelay: 250,
});
