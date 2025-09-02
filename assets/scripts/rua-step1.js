sessionStorage.setItem('fluxo', 'rua');
const d0 = load('rua');
if (d0.rua) document.getElementById('rua').value = d0.rua || '';
if (d0.bairro) document.getElementById('bairro').value = d0.bairro || '';
if (d0.diametro) document.getElementById('diametro').value = d0.diametro || '';
document.getElementById('form-rua-1').addEventListener('submit', (e)=>{
  e.preventDefault();
  const rua = document.getElementById('rua').value.trim();
  const bairro = document.getElementById('bairro').value.trim();
  const diametro = document.getElementById('diametro').value.trim();
  if(!rua || !bairro || !diametro) return alert('Preencha tudo :)');
  upsert('rua', { rua, bairro, diametro });
  location.href = 'review.html';
});
