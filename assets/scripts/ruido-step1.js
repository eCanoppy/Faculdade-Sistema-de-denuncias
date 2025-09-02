sessionStorage.setItem('fluxo', 'ruido');
const r1 = load('ruido');
if (r1.local) document.getElementById('local').value = r1.local || '';
if (r1.tipo)  document.getElementById('tipo').value  = r1.tipo  || '';
if (r1.nivel) document.getElementById('nivel').value = r1.nivel || '';
document.getElementById('form-ruido-1').addEventListener('submit', (e)=>{
  e.preventDefault();
  const local = document.getElementById('local').value.trim();
  const tipo  = document.getElementById('tipo').value.trim();
  const nivel = document.getElementById('nivel').value.trim();
  if(!local || !tipo || !nivel) return alert('Preencha todos os campos :)');
  upsert('ruido', { local, tipo, nivel });
  location.href = 'ruido-step2.html';
});
