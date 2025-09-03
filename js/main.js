
(function(){
  const root = document.documentElement;
  const body = document.body;
  // theme persistence: data-theme attribute on body
  const saved = localStorage.getItem('ib_theme');
  if(saved) body.setAttribute('data-theme', saved);
  else body.setAttribute('data-theme','dark');
  const btn = document.getElementById('themeToggle');
  btn?.addEventListener('click', ()=>{
    const cur = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', cur);
    localStorage.setItem('ib_theme', cur);
  });
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  const shareBtn = document.getElementById('shareBtn');
  shareBtn?.addEventListener('click', async ()=>{
    const data = { title: document.title, text: 'Yuk gabung di Indonesia Bisa 2025', url: window.location.href };
    if(navigator.share) try{ await navigator.share(data); }catch(e){} else { window.open('https://wa.me/?text=' + encodeURIComponent(data.text + ' ' + data.url)); }
  });
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('/sw.js').catch(()=>{}); }
})();
