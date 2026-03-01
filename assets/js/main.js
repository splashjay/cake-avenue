function setActiveNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav] a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path){ a.setAttribute('aria-current','page'); }
    else{ a.removeAttribute('aria-current'); }
  });
}
function toggleMobileMenu(){
  const m = document.getElementById('mobileMenu');
  if(!m) return;
  const expanded = m.getAttribute('data-open') === 'true';
  m.setAttribute('data-open', (!expanded).toString());
  m.style.display = expanded ? 'none' : 'block';
}
function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 3200);
}
function setupOrderForm(){
  const f = document.getElementById('orderForm');
  if(!f) return;
  f.addEventListener('submit', (e)=>{
    const action = (f.getAttribute('action')||'').trim();
    if(!action || action === '#'){
      e.preventDefault();
      toast('To receive orders, set your Formspree URL in order.html (search: FORM_ACTION).');
    }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  setActiveNav();
  setupOrderForm();
});