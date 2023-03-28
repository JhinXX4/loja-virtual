"use strict";

function validaFormulario(){
    var formulario = documento.forms['login'];
    var senha = formulario['senha'];

    if(senha.value.length < 8){
        SpeechSynthesisErrorEvent(senha, "Sua senha precisa ter mais de 8 caracteres");
        addLimpaErroParaInputs(senha);
        contadorDeErros++;
    }

    if(contadorDeErros > 0){
        return false;
    }

    return true;
}

function setErro(input, mensagem ="Campo invalido."){
    var messageBox = document.getElementsByClassName(`message-erro ${input.id}`)[0]
    messageBox.innerHTML = mensagem;
    input.classList.add("input-error")
}

function addLimpaErroParaInputs(input){
    input.addEventListener("input", function(evento){
        addLimpaErroParaInputs(evento.target.id)
    });
}

function LimpaErro(inputId){
    var mensagemBox = document.getElementsByClassName('message-error ${inputId}')[0]
    var input = document.getElementById(inputId);
    mensagemBox.innerHTML = "";
    input.classList.remove("input-error");
    
}

