import"./assets/vendor-db7463ae.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.querySelector(".js-search-form");document.querySelector(".js-search-form input");const l=document.querySelector(".js_picture_container");n.addEventListener("submit",r=>{r.preventDefault();const i=r.target.elements.form.value;a(i).then(s=>{m(s)}),r.target.reset()});function a(r){const i="https://pixabay.com/api/",s="?key=42108829-54920070c40067c28d8228e80",o=`&q=${r}`,e=i+s+o;return fetch(e).then(t=>t.json())}function u({webformatURL:r,largeImageURL:i,tags:s,likes:o,views:e,comments:t,downloads:c,total:f}){return`<div class="img-card card">
  <div class="image-container">
    <img class="picture-image" src="${r}" alt="#">
    <ul class="description">
      <li class="description-item">
        <h2>likes</h2>
        <h3>${o}</h3>
      </li>
      <li class="description-item">
        <h2>views</h2>
        <h3>${e}</h3>
      </li>
      <li class="description-item">
        <h2>comments</h2>
        <h3>${t}</h3>
      </li>
      <li class="description-item">
        <h2>downloads</h2>
        <h3>${c}</h3>
      </li>
    </ul>
</div>
</div>`}function d(r){return r.hits.map(u).join("")}function m(r){const i=d(r);l.insertAdjacentHTML("beforeend",i),console.log(r)}
//# sourceMappingURL=commonHelpers.js.map
