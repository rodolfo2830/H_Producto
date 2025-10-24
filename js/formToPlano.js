// form.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío tradicional del formulario

      //validar checkbox
      const checkbox1 = document.getElementById("autorizo1");
      const checkbox2 = document.getElementById("autorizo2");
      if (!checkbox1.checked || !checkbox2.checked) {
        alert("Por favor, acepte los dos consentimientos para continuar.");
        return;
      }

      //definir los patrones de validacion
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const dniPattern = /^\d{7,8}$/;
      const celularPattern = /^\d{9}$/;

      // Obtener los valores de los campos del formulario
      const name = document.getElementById("user-name").value.trim();
      const email = document.getElementById("user-email").value.trim();
      const dni = document.getElementById("user-DNI").value.trim();
      const celular = document.getElementById("user-cel").value.trim();
      const message = document.getElementById("consulta").value.trim();

      // Validar los campos del formulario
      if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
      }
      if (!dniPattern.test(dni)) {
        alert("Por favor, ingrese un DNI válido (7 u 8 dígitos).");
        return;
      }
      if (!celularPattern.test(celular)) {
        alert("Por favor, ingrese un número de celular válido (10 dígitos).");
        return;
      }

      // Crear el contenido del archivo .txt
      const contenidoArchivo = `Registro de Contacto
=================

Nombre: ${name}
Correo Electrónico: ${email}
DNI: ${dni}
Celular: ${celular}
Mensaje: ${message}

Fecha: ${new Date().toLocaleString()} 
`; // Opcional: Agregar la fecha y hora

      // Crear un Blob (Binary Large Object) con el contenido
      const blob = new Blob([contenidoArchivo], { type: "text/plain" });

      // Crear un enlace (elemento <a>) temporal
      const link = document.createElement("a");
      // Crear una URL para el Blob
      link.href = URL.createObjectURL(blob);
      // Nombre sugerido para el archivo descargado
      link.download = "registro_contacto.txt"; // Nombre del archivo, se puede cambiar el nombre
      // Ocultar el enlace
      link.style.display = "none";

      // Agregar el enlace al cuerpo del documento
      document.body.appendChild(link);

      // Simular un clic en el enlace para iniciar la descarga
      link.click();

      // Eliminar el enlace temporal del documento
      document.body.removeChild(link);

      // Limpia el formulario después de generar el archivo plano txt
      form.reset();

      // Opcional: Mostrar un mensaje de éxito
      alert("Los datos se han guardado en un archivo .txt. Revise su carpeta de descargas.");
    });
  } else {
    console.error("No se encontró el formulario con id 'contact-form'.");
    form.reset();
  }
});
