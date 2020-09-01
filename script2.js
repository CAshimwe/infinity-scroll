const imageContainer = document.getElementById('image-Container');
const loader= document.getElementById();


let photosArray = [];

const count = 10;
const apiKey = 'nsGXI3oHx2GdGcsW6kc1fi08WpRv6ScPZz0Z7yAAHpg';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

async function getPhotos(){
 const response = await fetch (apiUrl);
 photosArray = await response.json();
}
