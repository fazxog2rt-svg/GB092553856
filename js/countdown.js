
(function(){
  function render(el, deadline){ function fmt(n){return String(n).padStart(2,'0');}
    function update(){ const now = new Date(); const d = new Date(deadline) - now; if(d<=0){ el.innerHTML='--'; return; }
      const days = Math.floor(d/86400000); const hours = Math.floor(d%86400000/3600000); const mins = Math.floor(d%3600000/60000); const secs = Math.floor(d%60000/1000);
      el.innerHTML = `<div class="flex gap-2"><div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${fmt(days)}</div><div class="text-xs text-slate-400">Hari</div></div><div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${fmt(hours)}</div><div class="text-xs text-slate-400">Jam</div></div><div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${fmt(mins)}</div><div class="text-xs text-slate-400">Menit</div></div><div class="px-3 py-2 bg-slate-800 rounded text-center"><div class="text-xl font-bold">${fmt(secs)}</div><div class="text-xs text-slate-400">Detik</div></div></div>`;
    }
    update(); setInterval(update,1000);
  }
  document.addEventListener('DOMContentLoaded', ()=>{ const el = document.getElementById('countdown'); if(el) render(el, '2025-12-31T23:59:59+07:00'); });
})();
