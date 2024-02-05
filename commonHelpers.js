import{S as l,i as a}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const u=document.querySelector(".js-search-form"),c=document.querySelector(".gallery");u.addEventListener("submit",r=>{r.preventDefault();const t=r.target.elements.form.value.trim();if(t===""){r.target.reset(),c.innerHTML="";return}h(t).then(o=>{p(o),d.refresh()}),r.target.reset(),c.innerHTML=""});function h(r){const t="https://pixabay.com/api/?",o=new URLSearchParams({key:"42108829-54920070c40067c28d8228e80",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),s=t+o;return fetch(s).then(e=>e.json()).catch()}function m({webformatURL:r,largeImageURL:t,tags:o,likes:s,views:e,comments:i,downloads:n}){return`<li class="gallery-item">
  <a class="gallery-link" href="${t}">
    <img class="gallery-image" src="${r}" alt="${o}">
    </a>
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${s}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${e}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${i}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${n}</h3>
      </li>
    </ul>
</li> `}function f(r){let t=r.hits.map(m).join("");if(t.length===0){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"});return}else return t}function p(r){const t=f(r);t.length!==0&&(c.insertAdjacentHTML("beforeend",t),console.log(t))}const d=new l(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
