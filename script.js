const menuBtn=document.getElementById('menuBtn'),mainNav=document.getElementById('mainNav');
menuBtn?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

const toast=document.getElementById('toast');let timer;
function showToast(text){toast.textContent=text;toast.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove('show'),3000)}
document.querySelectorAll('[data-msg]').forEach(b=>b.addEventListener('click',()=>showToast(b.dataset.msg)));

const track=document.querySelector('.ticker-track'), pause=document.getElementById('tickerPause');
pause?.addEventListener('click',()=>{const stopped=track.classList.toggle('paused');track.style.animationPlayState=stopped?'paused':'running';pause.textContent=stopped?'▶':'Ⅱ'});

const counters=[...document.querySelectorAll('[data-count]')];
const runCounters=()=>counters.forEach(el=>{const target=+el.dataset.count;let n=0;const step=Math.max(1,Math.ceil(target/28));const t=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n;if(n>=target)clearInterval(t)},35)});
const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){runCounters();observer.disconnect()}},{threshold:.25});
const metrics=document.querySelector('.metrics');if(metrics)observer.observe(metrics);

const links=[...document.querySelectorAll('nav a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}}),{rootMargin:'-45% 0px -45% 0px'});
sections.forEach(s=>io.observe(s));
