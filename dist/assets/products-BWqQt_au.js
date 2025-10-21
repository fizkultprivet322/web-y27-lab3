const c="https://ceramic-api.onrender.com",r={tea:5,kitchen:3,plants:2},i=t=>`
  <article class="catalog__item">
    <img src="${new URL(t.image,c)}" alt="${t.title}" loading="lazy">
    <div class="catalog__info">
      <h3>${t.title}</h3>
      <p>${t.price} €</p>
    </div>
  </article>`,l=async()=>{const t=await fetch(`${c}/api/products`);if(!t.ok)throw new Error(`Failed to fetch: ${t.status}`);return t.json()},o=async(t="tea")=>{const e=document.querySelector(".catalog__grid");if(e){e.innerHTML='<div class="loading">Loading…</div>';try{const a=await l(),s=r[t]||5,n=a.slice(0,s);e.innerHTML=n.map(i).join("")}catch(a){console.error(a),e.innerHTML='<div class="error">Failed to load</div>'}}},d=()=>{const t=document.querySelectorAll(".catalog__filter");t.length&&t.forEach(e=>{e.addEventListener("click",async()=>{t.forEach(a=>a.classList.remove("active")),e.classList.add("active"),await o(e.dataset.category)})})};document.addEventListener("DOMContentLoaded",()=>{d(),o("tea")});
