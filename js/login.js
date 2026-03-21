const USER="admin";
const PASSWORD="1234";

document.getElementById("loginForm").addEventListener("submit",function(e){
  e.preventDefault();

  const user=document.getElementById("user").value;
  const pass=document.getElementById("pass").value;

  if(user===USER && pass===PASSWORD){
    localStorage.setItem("login","true");
    window.location.href="index.html";
  }else{
    document.getElementById("error-msg").textContent="Error en credenciales";
  }
});