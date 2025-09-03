
(function(){
  const form = document.getElementById('daftarForm');
  const listWrap = document.getElementById('pesertaList');
  function load(){ const data = JSON.parse(localStorage.getItem('ib_peserta')||'[]'); if(!data.length){ listWrap.innerHTML='<div class="text-sm text-slate-400">Belum ada pendaftar.</div>'; return; } let html='<table class="w-full text-sm"><thead><tr class="text-left'><th class="pr-3">Nama</th><th>Email</th><th>WA</th><th>Kota</th><th>Minat</th></tr></thead><tbody>'; html += data.slice(-30).reverse().map(p=>`<tr class="border-t border-slate-700"><td class="pr-3 py-2">${p.nama}</td><td class="py-2">${p.email}</td><td class="py-2">${p.wa}</td><td class="py-2">${p.kota}</td><td class="py-2">${p.minat}</td></tr>`).join(''); html += '</tbody></table>'; listWrap.innerHTML = html; }
  form?.addEventListener('submit', async (e)=>{ e.preventDefault(); const fd = new FormData(form); const data = Object.fromEntries(fd.entries()); data.t = Date.now(); const arr = JSON.parse(localStorage.getItem('ib_peserta')||'[]'); arr.push(data); localStorage.setItem('ib_peserta', JSON.stringify(arr)); load(); form.reset(); const msg = document.createElement('div'); msg.className='mt-3 p-3 rounded bg-green-700 text-white'; msg.textContent='Pendaftaran berhasil — cek email (jika aktif).'; form.prepend(msg); setTimeout(()=>msg.remove(),5000); // Optional: EmailJS hook (configure keys)
    try{ if(window.emailjs){ await emailjs.init('YOUR_PUBLIC_KEY'); await emailjs.send('YOUR_SERVICE_ID','YOUR_TEMPLATE_ID', data); } }catch(err){ console.warn('emailjs',err); }
  });
  document.addEventListener('DOMContentLoaded', load);
})();
