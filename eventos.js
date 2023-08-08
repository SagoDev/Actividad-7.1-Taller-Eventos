const  div = document.getElementById("container");
const btnSaludar = document.getElementById("btnSaludar");

div.addEventListener("click",  () => {
    alert("Hola! Soy el div!");
});

btnSaludar.addEventListener("click", (e) =>{
    alert('Hola!');
    e.stopPropagation();
});