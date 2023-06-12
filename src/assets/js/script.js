const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const mensagem = document.querySelector("#mensagem");

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let cepOk = false;

function validarNome() {
    let txtNome = document.querySelector("#txtNome");

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome muito curto";
        txtNome.style.color = "red";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "✔";
        txtNome.style.color = "green";
        nomeOk = true;
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    }
}

function validarEmail2() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");

    if (email.value.match(regex)) {
        txtEmail.innerHTML = "✔";
        txtEmail.style.color = "green";
        emailOk = true;
    } else {
        txtEmail.innerHTML = "E-mail inválido";
        txtEmail.style.color = "red";
        emailOk = false;
    }
}

function validarMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem");

    if (mensagem.value.length >= 50) {
        txtMensagem.innerHTML = "Mensagem muito grande!";
        txtMensagem.style.color = "red";
        mensagemOk = false;
    } else {
        txtMensagem.innerHTML = "✔";
        txtMensagem.style.color = "green";
        mensagemOk = true;
    }
}

function enviarForm() {
    if (nomeOk === true && emailOk === true && mensagemOk === true) {
        alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}