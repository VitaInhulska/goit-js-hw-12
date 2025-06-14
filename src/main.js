import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from "./js/pixabay-api.js";
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  setLoaderPosition
} from "./js/render-functions.js";


const form = document.querySelector(".form");
const input = form.elements["search-text"];
const loadBtn = document.querySelector(".load-more");

let query = "";
let page = 1;
let totalPages = 0;

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  query = input.value.trim();
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  hideLoader();

  if (query === "") {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 3000,
      backgroundColor: "#ef4040",
      titleColor: "#fff",
      messageColor: "#fff",
    });
    return;
  }
  setLoaderPosition("top");
  showLoader();
 
  try {
    const data = await getImagesByQuery(query, page);
    if (data.hits.length === 0) {
      hideLoader();
      iziToast.warning({
        title: 'Sorry',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        backgroundColor: "#ef4040",
        titleColor: "#fff",
        messageColor: "#fff",
      });
      return;
    }
    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / 15);
    if (page < totalPages) showLoadMoreButton();
  } catch (error) {
    iziToast.error({ message: 'Fetch error.', position: 'topRight' });
  } finally {
    hideLoader();
  }
});

loadBtn.addEventListener('click', async () => {
  page += 1;
  setLoaderPosition("bottom");
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    smoothScroll();

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        backgroundColor: "#ef4040",
        titleColor: "#fff",
        messageColor: "#fff",
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Fetch error.',
      position: 'topRight',
      backgroundColor: "#ef4040",
      titleColor: "#fff",
      messageColor: "#fff",
     });
  } finally {
    hideLoader();
  }
});

function smoothScroll() {
  const card = document.querySelector('.gallery-item');
  if (!card) return;

  const { height: cardHeight } = card.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
