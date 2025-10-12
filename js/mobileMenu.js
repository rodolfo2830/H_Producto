document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.style.overflow = 'hidden'; // Bloquea scroll del body
  });

  cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.style.overflow = ''; // Restaura scroll del body
  });

  // Cerrar menú al hacer clic fuera
  nav.addEventListener("click", (e) => {
    if (e.target === nav) {
      nav.classList.remove("visible");
      document.body.style.overflow = '';
    }
  });
});