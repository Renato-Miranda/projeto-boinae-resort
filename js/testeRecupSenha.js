
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

    window.location.href = '../html/paginaLogin.html'

    return true
}

document.addEventListener("DOMContentLoaded", function () {
    let btnEnviar = document.getElementById('btn-enviar')
    btnEnviar.addEventListener("click", validarRecupSenha)
})
