let cardDatabase = [
  { cardNumber: "1234567890123456", pin: "1234" },
  { cardNumber: "9876543210987654", pin: "5678" },
  { cardNumber: "1357924680246813", pin: "2468" }
];

function addNumber(num) {
  const input = document.getElementById("cardNumber");
  if (input.value.length < 16 && /^\d$/.test(num)) {
      input.value += num;
  }
  
}

function removeLast() {
  const input = document.getElementById("cardNumber");
  input.value = input.value.slice(0, -1);
}

function clearNumber() {
  const input = document.getElementById("cardNumber");
  input.value = "";
}

function checkCardNumber() {
  const input = document.getElementById("cardNumber");
  const cardNumber = input.value.trim();

  // Verificar que el número ingresado contenga solo dígitos
  if (/^\d{16}$/.test(cardNumber)) {
      if (validateCardNumber(cardNumber)) {
          // Redirigir a la página de ingreso de clave
          window.location.href = "Pin.html?cardNumber=" + encodeURIComponent(cardNumber);
      } else {
          // Mostrar mensaje de error
          document.getElementById("cardError").textContent = "Número de tarjeta incorrecto";
      }
  } else {
      // Mostrar mensaje de error si se ingresan caracteres no numéricos o no se ingresan 16 dígitos
      document.getElementById("cardError").textContent = "Ingrese un número de tarjeta válido";
  }
}

function validateCardNumber(number) {
  // En un sistema real, aquí se realizaría la validación con la base de datos o sistema backend
  return cardDatabase.some(card => card.cardNumber === number);
}