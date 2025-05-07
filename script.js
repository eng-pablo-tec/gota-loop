let nivel = 0;
const agua = document.getElementById("agua");
const cenario = document.querySelector(".cenario");

const intervalo = setInterval(() => {
  // Cria uma nova gota 💧
  const gota = document.createElement("div");
  gota.textContent = "💧";
  gota.classList.add("gota-animada");
  cenario.appendChild(gota);

  // Remove a gota após 1 segundo (depois da animação)
  setTimeout(() => {
    gota.remove();
  }, 1000);

  // Enche o balde
  if (nivel < 100) {
    nivel += 10;
    agua.style.height = nivel + "%";
  } else {
    clearInterval(intervalo);
    alert("piiii");
  }
}, 1000);
