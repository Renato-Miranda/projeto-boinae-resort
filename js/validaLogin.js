function validarEmail(email) {
    let temArroba = false;

    if (email.length == 0) {
        alert("Informe o email");
        return;
}
    for (let i = 0; i < email.length; i++) {
        let char = email.charCodeAt(i);

        switch (true) {
        case (char == 64):
            temArroba = true;
            break;
}

    if (temArroba) {
        const emailSeparado = email.split("@");

        if (emailSeparado[0].length == 0 || emailSeparado[1].length == 0) {
        alert("Email inválido!");
        }
        return;
}}

    alert("Email inválido!");
    return;
}

function validarSenha() {
    const senha = document.querySelector('.senha-login').value;

    if (senha.length < 8) {
        alert("Senha inválida. A senha deve ter 8 caracteres alfanuméricos.");
        return;
}
    let temApenasNumeros = true;

    for (let i = 0; i < senha.length; i++) {
        const char = senha.charCodeAt(i);

        if (!(char > 47 && char < 58)) {
        temApenasNumeros = false;
        break;
    }
    }

    if (temApenasNumeros) {
        alert("Senha inválida. A senha não pode conter apenas números.");
        return;
    }

    alert("Senha valida!");

    window.location.href = '../index.html'

}

function validarFormulario() {
    

    const campoEmail = document.querySelector('.login-input').value;
    validarEmail(campoEmail);

    const senha = document.querySelector('.senha-login').value;
    validarSenha(senha)

    
}

const botaoValida = document.getElementById("btn-acessar")
    botaoValida.addEventListener("click",validarFormulario)