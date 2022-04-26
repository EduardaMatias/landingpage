let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOK = false;
let emailOK = false;
let assuntoOK = false

function validaNome() {
    if (nome.value.length <= 3) {
        nome.style.border = '2px solid #F38B8A'
        nome.style.color = '#F38B8A'
        nomeOK = false;
    } else {
        nome.style.border = '2px solid #004C2E'
        nome.style.color = '#004C2E'
        nomeOK = true;
    }
}

function validaEmail() {
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

    if (email.value.match(regex)) {
        email.style.border = '2px solid #004C2E'
        email.style.color = '#004C2E'
        emailOK = true
    } else {
        email.style.border = '2px solid #F38B8A'
        email.style.color = '#F38B8A'
        emailOK = false
    }
}

function validaAssunto() {
    if (assunto.value.length <= 100) {
        assunto.style.border = '2px solid #004C2E'
        assunto.style.color = '#004C2E'
        assuntoOK = true
    } else {
        assunto.style.border = '3px solid #F38B8A'
        assunto.style.color = '#F38B8A'
        assuntoOK = false
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert('Formulário enviado!')
    } else {
        alert('Preencha os campos corretamente!')
    }

}