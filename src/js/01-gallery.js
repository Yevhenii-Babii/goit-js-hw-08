import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector(`.gallery`);
const cardsMake = createPiсtures(galleryItems);


galleryList.insertAdjacentHTML("beforeend", cardsMake);
// console.log(cardsMake);
function createPiсtures(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {
        
        return ` <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`}).join(``);
     
}

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    overlayOpacity: 0.9,
  });