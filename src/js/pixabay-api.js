import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const myApiKey = '50807386-01a9bb8c8dc5d7c785d84b37d'; 
const per_page = 15;

export default async function getImagesByQuery(query, page = 1) {
  const params = {
    key: myApiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page,
    page,
  };
  const response = await axios.get(baseUrl, { params });
  return response.data;  
}


