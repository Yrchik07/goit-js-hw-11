import{S as l}from"./assets/vendor-874053e3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".js-search-form"),i=document.querySelector(".gallery");a.addEventListener("submit",r=>{r.preventDefault();const o=r.target.elements.form.value;u(o).then(n=>{m(n)}),r.target.reset(),i.innerHTML=""});function u(r){const o="https://pixabay.com/api/",n="?key=42108829-54920070c40067c28d8228e80",s=`&q=${r}`,e=o+n+s;return fetch(e).then(t=>t.json())}function f({webformatURL:r,largeImageURL:o,tags:n,likes:s,views:e,comments:t,downloads:c,total:p}){return`<li class="gallery-item">
  <a class="gallery-link" href="${o}">
    <img
      class="gallery-image"
      src="${r}"
      alt="${n}"
    />
  </a>
</li>`}function d(r){return r.hits.map(f).join("")}function m(r){const o=d(r);i.insertAdjacentHTML("beforeend",o),console.log(r)}new l(".gallery a",{captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
