let attemptsLeft = 4 ; // Número de intentos restantes para ingresar la clave
let cardBlocked = false; // Variable para controlar si la tarjeta está bloqueada

function checkPin() {
    if (cardBlocked) {
        window.location.href = "index.html?cardBlocked=true";
        return;
    }

    const input = document.getElementById("pin");
    const pin = input.value.trim();

    // Verificar que la clave ingresada contenga solo dígitos y tenga longitud de 4 caracteres
    if (/^\d{4}$/.test(pin)) {
        if (validatePin(pin)) {
            // Redirigir a la página de menú del cajero
            window.location.href = "MenuCajero.html";
        } else {
            attemptsLeft--;
            if (attemptsLeft > 0) {
                document.getElementById("pinError").textContent = `Clave incorrecta. Intentos restantes: ${attemptsLeft}`;
            } else {
                cardBlocked = true;
                window.location.href = "index.html?cardBlocked=true";
            }
        }
    } else {
        // Mostrar mensaje de error si la clave no cumple con el formato deseado
        document.getElementById("pinError").textContent = "Ingrese una clave de 4 dígitos";
    }
}

function validatePin(pin) {
    // En un sistema real, aquí se realizaría la validación con el sistema backend
    const storedPin = "1234"; // Clave almacenada en el sistema

    return pin === storedPin;
}

function addNumber(num) {
    const input = document.getElementById("pin");
    if (input.value.length < 4) {
        input.value += num;
    }
}

function removeLast() {
    const input = document.getElementById("pin");
    input.value = input.value.slice(0, -1);
}

function clearPin() {
    const input = document.getElementById("pin");
    input.value = "";
}