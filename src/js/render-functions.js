import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

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
    loader.classList.remove("hidden");
}

function hideLoader() {
    loader.classList.add("hidden");
}

export { createGallery, clearGallery, showLoader, hideLoader };