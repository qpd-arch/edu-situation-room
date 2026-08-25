const menuBtn=document.getElementById('menuBtn'),mainNav=document.getElementById('mainNav');
menuBtn?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

const toast=document.getElementById('toast');
let toastTimer;
function showToast(text){toast.textContent=text;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
document.querySelectorAll('[data-msg]').forEach(btn=>btn.addEventListener('click',()=>showToast(btn.dataset.msg)));

const search=document.getElementById('searchInput'), cards=[...document.querySelectorAll('#indicatorCards .card')], empty=document.getElementById('emptyState');
search?.addEventListener('input',()=>{
  const q=search.value.trim().toLowerCase(); let count=0;
  cards.forEach(c=>{const ok=!q||c.dataset.search.toLowerCase().includes(q);c.hidden=!ok;if(ok)count++});
  empty.hidden=count!==0;
});
document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formMsg').textContent='تم استلام رسالتك في النسخة التجريبية. عند النشر سنربط النموذج بجهة الاستقبال.';
  e.target.reset();
});
