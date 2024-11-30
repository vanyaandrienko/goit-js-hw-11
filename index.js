import{a as g,i as p,S as y}from"./assets/vendor-DeexXyb9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="47359148-e6bdc7b546b5534c01c17ed5e",b="https://pixabay.com/api/";async function L(n){const o={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await g.get(b,{params:o})).data}catch(r){throw console.error("Error fetching images:",r),r}}const u=document.getElementById("gallery"),w=document.getElementById("loader");let c=null;function E(){u.innerHTML=""}function l(n){w.hidden=!n}function a(n,o,r){p[n]({title:o,message:r})}function S(n){const o=n.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:i,comments:d,downloads:m})=>`
      <a href="${s}">
        <img src="${r}" alt="${e}" loading="lazy" />
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${i}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </a>
    `).join("");u.insertAdjacentHTML("beforeend",o),c?c.refresh():c=new y(".gallery a")}const f=document.getElementById("search-form");f.addEventListener("submit",$);async function $(n){n.preventDefault();const o=f.elements.query.value.trim();if(!o){a("warning","Warning","Please enter a search term.");return}E(),l(!0);try{const r=await L(o),s=r.hits;if(s.length===0){a("info","Info","Sorry, there are no images matching your search query.");return}S(s),a("success","Success",`Found ${r.totalHits} images.`)}catch{a("error","Error","Something went wrong. Please try again later.")}finally{l(!1)}}
//# sourceMappingURL=index.js.map
