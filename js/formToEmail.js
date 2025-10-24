// Inicializar EmailJS con la clave pública
(function() {
  emailjs.init("awVFO68i2zSk18J28");
})();

// Agregar event listener al formulario
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Validar que los checkboxes estén marcados
  const checkbox1 = document.getElementById("autorizo1");
  const checkbox2 = document.getElementById("autorizo2");

  if (!checkbox1.checked || !checkbox2.checked) {
    iziToast.warning({
      title: 'Atención',
      message: 'Debes aceptar ambas autorizaciones para continuar',
      position: 'topRight',
      timeout: 4000,
    });
    return; // Detener el envío si no están marcados
  }

  // Obtener los valores de los campos del formulario
  const name = document.getElementById("user-name").value.trim();
  const email = document.getElementById("user-email").value.trim();
  const dni = document.getElementById("user-DNI").value.trim();
  const celular = document.getElementById("user-cel").value.trim();
  const message = document.getElementById("consulta").value.trim();

  // Validación básica
  if (!name || !email || !dni || !celular || !message) {
    iziToast.warning({
      title: 'Campos incompletos',
      message: 'Por favor, completa todos los campos',
      position: 'topRight',
      timeout: 3000,
    });
    return;
  }

  // Deshabilitar el botón mientras se envía
  const btnEnviar = document.getElementById("enviar");
  btnEnviar.disabled = true;
  btnEnviar.textContent = "Enviando...";

  // Parámetros del template
  const templateParams = {
    to_name: "Equipo Wolf Security", // Cambia esto por el nombre del destinatario
    user_name: name,
    user_email: email,
    user_dni: dni,
    user_cel: celular,
    message: message
  };

  // Enviar el correo usando EmailJS
  emailjs.send("service_6x4gfoh", "template_yg2y52e", templateParams)
    .then(function(response) {
      console.log("✅ Correo enviado exitosamente:", response.status, response.text);
      
      // Mostrar notificación de éxito
      iziToast.success({
        title: '¡Éxito!',
        message: 'Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.',
        position: 'topRight',
        timeout: 4000,
      });

      // Resetear el formulario
      document.getElementById("contact-form").reset();
      
      // Rehabilitar el botón
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
    })
    .catch(function(error) {
      console.error("❌ Error al enviar el correo:", error);
      
      // Mostrar notificación de error
      iziToast.error({
        title: 'Error',
        message: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.',
        position: 'topRight',
        timeout: 5000,
      });

      // Rehabilitar el botón
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Enviar";
    });
});