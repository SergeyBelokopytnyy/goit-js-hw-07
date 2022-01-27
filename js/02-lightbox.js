import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createdGalery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>`;
    })
    .join("");
}

galleryEl.insertAdjacentHTML("beforeend", createdGalery(galleryItems));

var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
