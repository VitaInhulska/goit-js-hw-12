import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";


const form = document.querySelector(".form");
const input = form.elements["search-text"];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();

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

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      hideLoader();

      if (!data.hits.length) {
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
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
        timeout: 3000,
        backgroundColor: "#ef4040",
        titleColor: "#fff",
        messageColor: "#fff",
      });
    });
});