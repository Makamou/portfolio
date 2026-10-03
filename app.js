'use strict';
const projects=document.getElementById('projects'),dialog=document.getElementById('project-dialog');
let data=[],lastTrigger;
const featuredTitles=['QuranRoots','Assure Coaching','Chez Christian'];
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tagHTML=p=>`<div class="tags">${p.stack.split(' · ').map(t=>`<span>${escapeHTML(t)}</span>`).join('')}</div>`;
const detailButton=p=>`<button class="detail-button" data-project="${data.indexOf(p)}">Project details</button>`;
function render(filter='All'){
 const list=data.filter(p=>!featuredTitles.includes(p.title)&&p.category!=='In progress'&&(filter==='All'||p.category===filter));
 document.getElementById('count').textContent=`${list.length} projects`;
 projects.innerHTML=list.map(p=>`<article class="project-card"><button class="project-visual" data-project="${data.indexOf(p)}" aria-label="Read about ${escapeHTML(p.title)}"><img src="assets/${p.image}.webp" alt="${escapeHTML(p.title)} project screenshot" width="1200" height="800" loading="lazy"><span class="project-label">${escapeHTML(p.status)}</span></button><div class="project-info"><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><div class="project-bottom"><span>${escapeHTML(p.category)}</span>${detailButton(p)}</div></div></article>`).join('');
}
function renderFeatures(){
 const feature=(p,i)=>`<article class="${i===0?'featured-main':'featured-secondary'}"><div class="feature-image">${p.image?`<img src="assets/${p.image}.webp" alt="${escapeHTML(p.title)} screenshot" width="1400" height="1000" loading="lazy">`:'<div class="assure-title"><span>WEBSITE REDESIGN</span><strong>Assure<br>Coaching.</strong><small>Clarity. Consistency. Connection.</small></div>'}</div><div class="feature-copy"><span class="feature-index">0${i+1} / ${escapeHTML(p.status.toUpperCase())}</span><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p>${tagHTML(p)}<div class="feature-links">${detailButton(p)}<a href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer">View project</a></div></div></article>`;
 const f=featuredTitles.map(t=>data.find(p=>p.title===t));
 document.getElementById('featured-projects').innerHTML=feature(f[0],0)+`<div class="feature-pair">${feature(f[1],1)}${feature(f[2],2)}</div>`;
 document.getElementById('building-projects').innerHTML=data.filter(p=>p.category==='In progress').map(p=>`<article class="building-card"><span class="building-label">${escapeHTML(p.status.toUpperCase())}</span><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p>${tagHTML(p)}${detailButton(p)}</article>`).join('');
}
document.addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(!button)return;const p=data[Number(button.dataset.project)];lastTrigger=button;document.getElementById('dialog-content').innerHTML=`<p class="eyebrow">${escapeHTML(p.status)}</p><h2 id="dialog-title">${escapeHTML(p.title)}</h2>${p.image?`<img class="dialog-image" src="assets/${p.image}.webp" alt="${escapeHTML(p.title)} screenshot">`:''}<p>${escapeHTML(p.detail)}</p>${tagHTML(p)}${p.url?`<a class="button gold" href="${escapeHTML(p.url)}" target="_blank" rel="noopener noreferrer">View project</a>`:'<p>Public demo not available.</p>'}`;dialog.showModal();document.body.classList.add('modal-open')});
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');lastTrigger?.focus()});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});render(button.dataset.filter)}));
document.getElementById('year').textContent=new Date().getFullYear();
fetch('projects.json').then(r=>{if(!r.ok)throw Error('Unable to load projects');return r.json()}).then(p=>{data=p;renderFeatures();render()}).catch(()=>{projects.innerHTML='<p>Projects could not load. Please refresh the page or get in touch by email.</p>'});
