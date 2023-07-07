
function validarRecupSenha() {
    

    let email = document.getElementById('email-recup-senha').value

    if (email === '') {
        alert('Por favor, insira um endereço de e-mail.')
        return false
    }
    if (email.length < 3 || !email.includes('@', 2) || !email.includes('.', email.indexOf('@'))) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false
    }

    alert('Um e-mail de recuperação de senha foi enviado')

    // window.location.href = 'inserir link para pagina de login'

    return true
}

document.addEventListener("DOMContentLoaded", function () {
    let btnEnviar = document.getElementById('btn-enviar')
    btnEnviar.addEventListener("click", validarRecupSenha)
})

// function validarRecupSenha(event) {
//     event.preventDefault();

//     const email = document.getElementById('email-recup-senha').value;

//     if (email === '') {
//         alert('Por favor, insira um endereço de e-mail.');
//         return false;
//     }

//     if (email.length < 3 || !email.includes('@', 2) || !email.includes('.', email.indexOf('@'))) {
//         alert('Por favor, insira um endereço de e-mail válido.');
//         return false;
//     }

//     alert('Um e-mail de recuperação de senha foi enviado');

//     // window.location.href = 'inserir link para pagina de login';

//     return true;
// }

// document.addEventListener("DOMContentLoaded", () => {
//     let formRecupSenha = document.getElementById('form-recup-senha');
//     formRecupSenha.addEventListener("submit", validarRecupSenha);
// });




// function clicarBTN(){
//     alert("cliquei no btn")
// }

// const alertaBtn = document.getElementById('btn-enviar')
// alertaBtn.addEventListener("click", clicarBTN)