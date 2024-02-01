import"./assets/vendor-db7463ae.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i=document.querySelector(".js-search-form"),u=document.querySelector(".js_picture_container");i.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.form.value;a(o).then(n=>{d(n)})});function a(r){const o="https://pixabay.com/api/",n="42108829-54920070c40067c28d8228e80",c=`?symbol=${r}`,e=o+n+c;return fetch(e).then(t=>t.json())}function l(r){return`<div class="hero-card card">
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
</div>`}function d(r){const o=l(r);u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
