// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value;
  if (nombreAmigo == undefined || nombreAmigo == '') {
    alert("Por favor, inserte un nombre.");
  } else {
    listaAmigosSecretos.push(nombreAmigo);
    document.getElementById('amigo').value = '';
    console.log(listaAmigosSecretos);
    mostrarAmigosPantalla();
  }
}

function mostrarAmigosPantalla() {
  let elementosLista = '';
  for (let i = 0; i < listaAmigosSecretos.length; i++) {
    elementosLista += `<li>${listaAmigosSecretos[i]}</li>`;
  }
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = elementosLista;
}

function sortearAmigo() {
  if (listaAmigosSecretos.length > 0) {
    let numeroSorteado = Math.floor(Math.random() * listaAmigosSecretos.length) + 1;
    let amigoSorteado = listaAmigosSecretos[numeroSorteado - 1];

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    lista = document.getElementById('resultado');
    lista.innerHTML = `<li>El amigo secreto es ${amigoSorteado}</li>`;
  } else {
    alert('Es necesario almenos agregar un amigo a la lista.');
  }
}
