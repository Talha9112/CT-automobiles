
const phone='203-375-6260';
const wa='12033756260';
function whatsappFor(part,title){return `https://wa.me/${wa}?text=${encodeURIComponent('Hello CT Automotive Specialists, I am interested in '+part+' - '+title+'. Please contact me with availability.')}`}
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=whatsappFor(a.dataset.part,a.dataset.title)});
const search=document.querySelector('#productSearch');
const chips=[...document.querySelectorAll('.chip')];
const products=[...document.querySelectorAll('.product')];
function filter(){const q=(search?.value||'').toLowerCase();const active=document.querySelector('.chip.active')?.dataset.filter||'All';products.forEach(p=>{const okCat=active==='All'||p.dataset.cat===active;const okText=p.textContent.toLowerCase().includes(q);p.style.display=okCat&&okText?'block':'none'});} 
search?.addEventListener('input',filter);chips.forEach(c=>c.addEventListener('click',()=>{chips.forEach(x=>x.classList.remove('active'));c.classList.add('active');filter();}));
const main=document.querySelector('#mainProductImage');const stage=document.querySelector('.zoom-stage');
document.querySelectorAll('.thumbs button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.thumbs button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');main.src=btn.dataset.src;}));
if(stage&&main){let on=false;function move(e){const r=stage.getBoundingClientRect();const x=((e.touches?e.touches[0].clientX:e.clientX)-r.left)/r.width*100;const y=((e.touches?e.touches[0].clientY:e.clientY)-r.top)/r.height*100;main.style.transformOrigin=`${x}% ${y}%`;}['mousemove','touchmove'].forEach(ev=>stage.addEventListener(ev,move,{passive:true}));['mouseenter','touchstart','mousedown'].forEach(ev=>stage.addEventListener(ev,()=>{stage.classList.add('zooming','dragging')}));['mouseleave','touchend','mouseup'].forEach(ev=>stage.addEventListener(ev,()=>{stage.classList.remove('zooming','dragging');main.style.transformOrigin='center'}));}
const inquiry=document.querySelector('#inquiryForm');
inquiry?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(inquiry);const msg=`Parts Inquiry%0AName: ${d.get('name')}%0APhone: ${d.get('phone')}%0APart: ${d.get('part')}%0AVehicle: ${d.get('vehicle')}%0AMessage: ${d.get('message')}`;window.open(`https://wa.me/${wa}?text=${msg}`,'_blank');});

// Mobile navigation toggle
const menuToggle=document.querySelector('.menu-toggle');
const navEl=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{
  const open=navEl.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.mobile-menu a').forEach(link=>link.addEventListener('click',()=>{
  navEl?.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded','false');
}));
