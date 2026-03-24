document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const user = document.getElementById("user").value.trim();
    const pass = document.getElementById("pass").value.trim();
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "";

    if (user === "" || pass === "") {
        mensaje.textContent = "¡¡¡Todos los campos son obligatorios!!!";
        mensaje.style.color = "#ffcc00";
        return;
    }

    mensaje.textContent = "Verificando...⏳";
    mensaje.style.color = "white";

    setTimeout(() => {
        if (user === "admin" && pass === "1234") {
            mensaje.textContent = "Bienvenido ✅";
            mensaje.style.color = "#00ff99";

            localStorage.setItem("login", "true");

            setTimeout(() => {
                window.location.href = "index.html";
            }, 800);

        } else {
            mensaje.textContent = "❌Usuario o contraseña incorrectos❌";
            mensaje.style.color = "#fff";
        }
    }, 800);
});