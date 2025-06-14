import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const myApiKey = '50807386-01a9bb8c8dc5d7c785d84b37d'; 

export default function getImagesByQuery(query) {
  const params = {
    key: myApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios
    .get(baseUrl, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images:', error.message);
      throw error;
    });
}


