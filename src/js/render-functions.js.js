import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");
let lightbox = null;

export function clearGallery() {
  gallery.innerHTML = "";
}


export function toggleLoader(show) {
  loader.hidden = !show;
}


export function showMessage(type, title, message) {
  iziToast[type]({
    title: title,
    message: message,
  });
}


export function renderGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>
    `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

  
  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
}
