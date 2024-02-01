import"./assets/vendor-db7463ae.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelector(".js-search-form"),u=document.querySelector(".js_picture_container");i.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.form.value;a(o).then(n=>{l(n)})});function a(r){const o="https://pixabay.com/api/?key=",n="42108829-54920070c40067c28d8228e80",s="&q=",e=encodeURIComponent(`${r}`),t=o+n+s+e;return fetch(t).then(c=>c.json())}function d(r){return`<div class="hero-card card">
  <div class="image-container">
    <img
      src="${r}"
      alt="#"
      class="picture-image"
    />
  </div>
  // <div class="hero-body">
  //   <h4 class="hero-name">${r.name}</h4>
  //   <p class="hero-bio">
  //   </p>
  // </div>
</div>`}function l(r){const o=d(r);u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
