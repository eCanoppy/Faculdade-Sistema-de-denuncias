const fluxo = sessionStorage.getItem('fluxo');
const r = load('ruido'); const d = load('rua');
const saida = document.getElementById('saida');
function table(obj){ return '<table><tbody>' + Object.entries(obj).map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join('') + '</tbody></table>'; }
let html = '';
if (r.local) html += `<h3>Denúncia: Ruído Excessivo</h3>${table(r)}`;
if (d.rua)   html += `<h3>Denúncia: Buraco na Rua</h3>${table(d)}`;
saida.innerHTML = html || '<p>Sem dados para mostrar.</p>';
document.getElementById('enviar').addEventListener('click', (e)=>{
  e.preventDefault();
  alert('Denúncia enviada! (simulação)');
  sessionStorage.clear();
  location.href = 'index.html';
});
