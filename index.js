import{a as d,S as p,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const m="https://pixabay.com/api/",g="50807386-01a9bb8c8dc5d7c785d84b37d";function h(s){const o={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(e=>e.data).catch(e=>{throw console.error("Error fetching images:",e.message),e})}const c=document.querySelector(".gallery"),f=document.querySelector(".loader"),y=new p(".gallery a",{captionDelay:250,captionsData:"alt"});function b(s){const o=s.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p><span>Likes:</span> ${e.likes}</p>
        <p><span>Views:</span> ${e.views}</p>
        <p><span>Comments:</span> ${e.comments}</p>
        <p><span>Downloads:</span> ${e.downloads}</p>
      </div>
    </li>
  `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function L(){c.innerHTML=""}function w(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}const u=document.querySelector(".form"),C=u.elements["search-text"];u.addEventListener("submit",s=>{s.preventDefault();const o=C.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search query.",position:"topRight",timeout:3e3,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});return}L(),w(),h(o).then(e=>{if(l(),!e.hits.length){a.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"});return}b(e.hits)}).catch(e=>{l(),a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",timeout:3e3,backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})})});
//# sourceMappingURL=index.js.map
