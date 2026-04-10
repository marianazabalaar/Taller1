const nombreInput = document.getElementById("nombre");
const btnMostrar = document.getElementById("btnMostrar");
const btnLimpiar = document.getElementById("btnLimpiar");
const mensaje = document.getElementById("mensaje");

// Evitar números
nombreInput.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, "");
});

// Mostrar mensaje
btnMostrar.addEventListener("click", function () {
  const nombre = nombreInput.value.trim();
  const genero = document.getElementById("genero").value;

  if (nombre === "" || genero === "") {
    mensaje.style.display = "block";
    mensaje.className = "error";
    mensaje.textContent = "Por favor, complete todos los campos.";
    return;
  }

  mensaje.style.display = "block";

  if (genero === "H") {
    mensaje.textContent = `Bienvenido, ${nombre}.`;
    mensaje.className = "azul";
  } else {
    mensaje.textContent = `Bienvenida, ${nombre}.`;
    mensaje.className = "rosado";
  }
});

// Limpiar formulario
btnLimpiar.addEventListener("click", function () {
  nombreInput.value = "";
  document.getElementById("genero").value = "";
  mensaje.textContent = "";
  mensaje.className = "";
  mensaje.style.display = "none";
});