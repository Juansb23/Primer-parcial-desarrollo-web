document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("login") !== "true") {
        window.location.href = "login.html";
    }

    document.addEventListener("click", function(e) {
        if (e.target.id === "logoutBtn") {
            localStorage.removeItem("login");
            window.location.href = "login.html";
        }
    });

    function cargar(id, archivo) {
        fetch(archivo)
        .then(res => res.text())
        .then(data => document.getElementById(id).innerHTML = data);
    }

    cargar("header", "components/header.html");
    cargar("sidebar", "components/sidebar.html");
    cargar("footer", "components/footer.html");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

document.addEventListener("click", function(e) {

    if (e.target.id === "btn-comprar") {

        if (carrito.length === 0) {
            alert("🛒 El carrito está vacío");
            return;
        }
        alert("Gracias por tu compra en Coffe Time☕");  

        carrito = [];
        guardar();
        mostrar();
        }
    });

    fetch("data/productos.json")
    .then(res => res.json())
    .then(productos => {

        const cont = document.getElementById("products-container");
        cont.innerHTML = "";

        productos.forEach((p, i) => {
            cont.innerHTML += `
            <div class="card-producto">
                <div class="producto-img">
                    <img src="images/cafe${i+1}.jpg">
                </div>
                <h3>${p.nombre}</h3>
                <p>${p.descripcion}</p>
                <p>$${p.precio}</p>
                <button class="btn-agregar" data-nombre="${p.nombre}" data-precio="${p.precio}">
                    ☕ Agregar
                </button>
            </div>`;
        });
    });

    document.addEventListener("click", function(e) {

        if (e.target.classList.contains("btn-agregar")) {

            const nombre = e.target.dataset.nombre;
            const precio = parseInt(e.target.dataset.precio);

            let p = carrito.find(x => x.nombre === nombre);

            if (p) p.cantidad++;
            else carrito.push({nombre, precio, cantidad:1});

            guardar();
            mostrar();

            efectoClick(e.target);
        }

        if (e.target.classList.contains("btn-restar")) {

            const nombre = e.target.dataset.nombre;
            let p = carrito.find(x => x.nombre === nombre);

            if (p) {
                p.cantidad--;
                if (p.cantidad <= 0) {
                    carrito = carrito.filter(x => x.nombre !== nombre);
                }
            }

            guardar();
            mostrar();
        }

        if (e.target.classList.contains("btn-eliminar")) {

            const nombre = e.target.dataset.nombre;
            carrito = carrito.filter(x => x.nombre !== nombre);

            guardar();
            mostrar();
        }
    });

    function guardar() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function mostrar() {
        const cont = document.getElementById("carrito");
        if (!cont) return;

        cont.innerHTML = "";
        let total = 0;

        carrito.forEach(p => {
            total += p.precio * p.cantidad;

            cont.innerHTML += `
            <div class="item-carrito">
                <span>${p.nombre}</span>

                <div class="controles">
                    <button class="btn-restar" data-nombre="${p.nombre}">-</button>
                    <span>${p.cantidad}</span>
                    <button class="btn-agregar" data-nombre="${p.nombre}" data-precio="${p.precio}">+</button>
                </div>

                <span>$${p.precio * p.cantidad}</span>
                <button class="btn-eliminar" data-nombre="${p.nombre}">X</button>
            </div>`;
        });

        cont.innerHTML += `<p class="total">Total: $${total}</p>`;
    }

    function efectoClick(btn) {
        btn.textContent = "✅ Agregado";
        btn.style.background = "#28a745";

        setTimeout(() => {
            btn.textContent = "☕ Agregar";
            btn.style.background = "#6f4e37";
        }, 800);
    }

    mostrar();
});