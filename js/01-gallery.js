import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function createdGalery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>`;
    })
    .join("");
}

galleryEl.addEventListener("click", onClickImages);

function onClickImages(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  instance.show();

  galleryEl.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      galleryEl.removeEventListener("keydown", onEscKeyPress);
      instance.close();
    }
  }
}

galleryEl.insertAdjacentHTML("beforeend", createdGalery(galleryItems));
