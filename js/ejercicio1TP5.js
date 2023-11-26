const btnIniciarJuego = document.querySelector(".btnIniciarJuego");
const form = document.getElementById("form");
let numAleatorio = 0;

function iniciarJuego() {
  btnIniciarJuego.className = "ocultarBoton";
  numAleatorio = Math.round(Math.random() * 30);
  console.log(numAleatorio);

  const titulo = document.createElement("h2");
  titulo.innerHTML = "Adivine el número mágico <br> entre 0 y 30";
  form.appendChild(titulo);

  const input = document.createElement("input");
  input.className = "form-control w-100 my-4";
  form.appendChild(input);

  const btnEnviar = document.createElement("button");
  btnEnviar.innerHTML = "Enviar";
  btnEnviar.className = "btn btn-danger";
  form.appendChild(btnEnviar);
  const verificarNum = (e) => {
    e.preventDefault()
    if (input.value == numAleatorio) {
      alert("¡Felicidades, adivinaste el número mágico!");
    } else if (input.value > numAleatorio) {
      alert("El número ingresado es mayor al número mágico");
    } else {
      alert("El número ingresado es menor al número mágico");
    }
  };
  btnEnviar.addEventListener("click", verificarNum);
}

btnIniciarJuego.addEventListener("click", iniciarJuego);
