
/*
case sensitive

pegar elemento por id: getElementById()
pegar elemento por tag: getElementByTagName()
pegar elemento por classe: getElementByClassName()
pegar elemento por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = "red"
    } else {
        txt.innerHTML = ''
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto(){
   let txtAssunto = document.querySelector('#txtAssunto')

   if(assunto.value.length >100){
    txtAssunto.innerHTML = 'Digite no máximo 100 caracteres'
    txtAssunto.style.color ='red'
   } else {
    txtAssunto.innerHTML = ''
    assuntoOk = true
   }
}

function enviar(){

    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('formulario enviado com sucesso')
    } else {
        alert('Preencha todo o formulário antes de enviar')
    }
}

function mapaZoom(){

mapa.style.width ='800px'
mapa.style.height = '600px'
}

function mapaNormal(){

  mapa.style.width ='400px'
    mapa.style.height = '200px'
}
