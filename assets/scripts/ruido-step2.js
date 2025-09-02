const r2 = load('ruido');
if (r2.data) document.getElementById('data').value = r2.data;
if (r2.hora) document.getElementById('hora').value = r2.hora;
if (r2.dataAprox) document.getElementById('data-aprox').checked = !!r2.dataAprox;
if (r2.horaAprox) document.getElementById('hora-aprox').checked = !!r2.horaAprox;
document.getElementById('form-ruido-2').addEventListener('submit', (e)=>{
  e.preventDefault();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const dataAprox = document.getElementById('data-aprox').checked;
  const horaAprox = document.getElementById('hora-aprox').checked;
  if(!data || !hora) return alert('Preencha data e hora :)');
  upsert('ruido', { data, hora, dataAprox, horaAprox });
  location.href = 'review.html';
});
