import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loadBtn = document.querySelector(".load-more");
const topLoader = document.querySelector('.top-loader');
const bottomLoader = document.querySelector('.bottom-loader');

let loaderPosition = "top";

function setLoaderPosition(position) {
  loaderPosition = position;
}

const lightbox = new SimpleLightbox(".gallery a", {captionDelay: 250, captionsData: 'alt'} );

function createGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><span>Likes:</span> ${image.likes}</p>
        <p><span>Views:</span> ${image.views}</p>
        <p><span>Comments:</span> ${image.comments}</p>
        <p><span>Downloads:</span> ${image.downloads}</p>
      </div>
    </li>
  `).join('');
  
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  }

function clearGallery() {
    gallery.innerHTML = "";
}

function showLoader() {
  if (loaderPosition === 'top') {
    topLoader.classList.remove('hidden');
  } else {
    bottomLoader.classList.remove('hidden');
  }
}

function hideLoader() {
  if (loaderPosition === 'top') {
    topLoader.classList.add('hidden');
  } else {
    bottomLoader.classList.add('hidden');
  }
}

function showLoadMoreButton() {
  loadBtn.classList.remove("hidden");
}

function hideLoadMoreButton() {
  loadBtn.classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, setLoaderPosition };