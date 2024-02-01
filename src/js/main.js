import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector('.js-search-form');
const picCont = document.querySelector('.js_picture_container');

input.addEventListener('submit', e =>{
  e.preventDefault();

  const name = e.target.elements.form.value;

  searchPicture(name).then(data => {
    renderPicture(data);
  });
});

function searchPicture(pixabay){
  const BASE_URL = 'https://pixabay.com/api/?key=';
  const API_KEY = '42108829-54920070c40067c28d8228e80';
  const Q = '&q=';
  const PARAMS = encodeURIComponent(`${pixabay}`);
  const url = BASE_URL + API_KEY + Q + PARAMS;

  return fetch(url).then(res => res.json());

}

// var API_KEY = '42108829-54920070c40067c28d8228e80';
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });

function pictureTemplate(picture) {
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${picture}"
      alt="#"
      class="picture-image"
    />
  </div>
  // <div class="hero-body">
  //   <h4 class="hero-name">${picture.name}</h4>
  //   <p class="hero-bio">
  //   </p>
  // </div>
</div>`;
}

function renderPicture(picture) {
  const markup = pictureTemplate(picture);
  picCont.insertAdjacentHTML('beforeend', markup);
}