const modalEnviarMensagem = document.getElementById("enviarMensagem");
const iconeEnviarMensagem = document.getElementById("iconeEnviarMensagem");
modalEnviarMensagem.style.display = "none";
const listaMenu = document.getElementById("listaCabecalho");
const menu = document.getElementById("iconeMenu");

iconeEnviarMensagem.addEventListener("click", function() {
    if(modalEnviarMensagem.style.display == "none"){
        modalEnviarMensagem.style.display = "block";
    }else{
        modalEnviarMensagem.style.display = "none";
    }
})
menu.addEventListener("click", function() {
    if(listaMenu.style.display == "none"){
        listaMenu.style.display = "inline-grid";
    }else{
        listaMenu.style.display = "none";
    }
})

