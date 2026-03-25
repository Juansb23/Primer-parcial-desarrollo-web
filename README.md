Descripcion:
Este proyecto es una aplicación web de una tienda llamada Coffe Time, donde los usuarios pueden iniciar sesión para acceder al catálogo de productos, esta página muestra diferentes tipos de café organizados en tarjetas visuales, permitiendo agregarlos a un carrito de compras dinámico.

El sistema incluye funcionalidades como autenticación básica, visualización de productos, gestión de carrito (agregar, eliminar y modificar cantidades) y almacenamiento de datos en el navegador mediante localStorage. Además, su diseño es hecho utilizando HTML, CSS, JavaScript y .JSON .

El apartado del login es con fines educativos solamente, esto para tener un mejor aprendizaje sobre los temas vistos, tenemos claridad que este sistema no funciona en la vida real.

Coffe Time☕:
Este proyecto es una aplicación web, la cual simula una tienda de café. Permite a los usuarios iniciar sesión, visualizar productos y gestionar un carrito de compras dinámico. La información se almacena en el navegador utilizando localStorage.

Fragmentos:
Los fragmentos son partes reutilizables de HTML que se cargan dinámicamente en la página.
En este proyecto se utilizan archivos como:
header.html
sidebar.html
footer.html

Estos se cargan con fetch() en el archivo main.js, permitiendo reutilizar código y mantener una mejor organización.

Plantillas:
Las plantillas permiten generar contenido dinámico en HTML.
En este proyecto se usan plantillas con template strings de JavaScript para crear los productos:

cont.innerHTML += `
<div class="card-producto">
    <h3>${p.nombre}</h3>
</div>`;

Esto facilita mostrar información desde el archivo productos.json.

Web Components:
Los Web Components son elementos personalizados reutilizables, aunque no se implementaron como clases personalizadas, el proyecto simula este concepto mediante el uso de componentes HTML separados y cargados dinámicamente.

Inicio de sesion:
El inicio de sesión se desarrolló utilizando JavaScript en el archivo login.js siguiendo los siguientes pasos:
Se capturan los datos del formulario.
Se validan campos vacíos.
Se comparan con credenciales básicas (Coffe / 2026).
Si son correctas se guarda el estado en localStorage, luego se redirige a index.html.
Si son incorrectas se muestra un mensaje de error(Usuario y/o contraseña incorrectos). También se protege el acceso a la página principal verificando el login en main.js.

Buenas Practicas:
Separación de archivos (HTML, CSS y JS)
Uso de localStorage para persistencia de datos
Organización por carpetas (components, Css, JS, data, images, img).-
Reutilización de código mediante fragmentos.
Uso de eventos delegados en JavaScript.
Diseño responsive y uso de estilos modernos.
Nombres claros en variables y funciones.

# Primer-parcial-desarrollo-web
