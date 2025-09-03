
(function(){ document.addEventListener('DOMContentLoaded', ()=>{ const q = document.getElementById('faqSearch'); const items = Array.from(document.querySelectorAll('#faq details')); if(q){ q.addEventListener('input', ()=>{ const v = q.value.toLowerCase(); items.forEach(d=>{ d.style.display = d.innerText.toLowerCase().includes(v) ? '' : 'none'; }); }); } }); })();
