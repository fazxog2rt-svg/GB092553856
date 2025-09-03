// js/main.js
(function(){
  const body = document.body;
  const saved = localStorage.getItem('ib_theme');
  if(saved) body.setAttribute('data-theme', saved);
  else body.setAttribute('data-theme','dark');

  document.addEventListener('click', (e) => {
    if(e.target && e.target.id === 'themeToggle'){
      const cur = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      body.setAttribute('data-theme', cur);
      localStorage.setItem('ib_theme', cur);
    }
  });

  // Simple countdown rendering if element exists (deadline fixed)
  document.addEventListener('DOMContentLoaded', ()=>{
    const el = document.getElementById('countdown');
    if(!el) return;
    const deadline = new Date('2025-12-31T23:59:59+07:00');
    function update(){
      const now = new Date();
      let diff = Math.max(0, deadline - now);
      const d = Math.floor(diff / 86400000); diff -= d*86400000;
      const h = Math.floor(diff / 3600000); diff -= h*3600000;
      const m = Math.floor(diff / 60000); diff -= m*60000;
      const s = Math.floor(diff / 1000);
      el.innerHTML = `
        <div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${String(d).padStart(2,'0')}</div><div class="text-xs text-slate-400">Hari</div></div>
        <div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${String(h).padStart(2,'0')}</div><div class="text-xs text-slate-400">Jam</div></div>
        <div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${String(m).padStart(2,'0')}</div><div class="text-xs text-slate-400">Menit</div></div>
        <div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${String(s).padStart(2,'0')}</div><div class="text-xs text-slate-400">Detik</div></div>
      `;
    }
    update();
    setInterval(update, 1000);
  });
})();
