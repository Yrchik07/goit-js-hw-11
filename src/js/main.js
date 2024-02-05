import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector('.js-search-form');
// const picCont = document.querySelector('.js_picture_container');
const picCont = document.querySelector('.gallery');


input.addEventListener('submit', e =>{
  e.preventDefault();

  const name = e.target.elements.form.value;

  searchPicture(name).then(data => {
    renderPicture(data);
  });
  e.target.reset();
  picCont.innerHTML = "";
});


function searchPicture(pixabay){
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = `?key=42108829-54920070c40067c28d8228e80`;
  const Q = `&q=${pixabay}`;
  // const TYPE ='&image_type=photo';
  // const OR = '&orientation=horizontal';
  // const RCH = '&safesearch=true';
  const url = BASE_URL + API_KEY + Q;
// console.log(url)
// const options = {
//   headers: {
//     // image_type:'photo',
//     // orientation:'horizontal',
//     // safesearch:'true',
//     'X-RateLimit-Limit':	'The maximum number of requests that the consumer is permitted to make in 30 minutes',
//     'X-RateLimit-Remaining':	'The number of requests remaining in the current rate limit window',
//     'X-RateLimit-Reset':	'The remaining time in seconds after which the current rate limit window resets',
//   },
// };
  return fetch(url).then(res => res.json());
}


function pictureTemplate({webformatURL,largeImageURL,tags,likes,views,comments,downloads,total}) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
</li>`;
}
//   return `<div class="img-card card">
//   <div class="image-container">
//   <a class="gallery-link" href="${largeImageURL}">
//     <img class="picture-image" src="${webformatURL}" alt="#">
//     </a>
//     <ul class="description">
//       <li class="description-item">
//         <h2>likes</h2>
//         <h3>${likes}</h3>
//       </li>
//       <li class="description-item">
//         <h2>views</h2>
//         <h3>${views}</h3>
//       </li>
//       <li class="description-item">
//         <h2>comments</h2>
//         <h3>${comments}</h3>
//       </li>
//       <li class="description-item">
//         <h2>downloads</h2>
//         <h3>${downloads}</h3>
//       </li>
//     </ul>
// </div>
// </div>`;}

function picturesTemplate(picture){
  return picture.hits.map(pictureTemplate).join('');
}

function renderPicture(picture) {
  const markup = picturesTemplate(picture);
  picCont.insertAdjacentHTML('beforeend', markup);
  console.log(picture)
}

const gallery = new SimpleLightbox('.gallery a', {captionDelay: 250, captionsData: 'alt'});
