function validarNome(nome) {
    if (nome.length == 0) {
        alert("Informe o nome");
        return;
    }

    for (let i = 0; i < nome.length; i++) {
        let char = nome.charCodeAt(i);

        switch (true) {
        case (char == 32):
            break;
        case (char > 64 && char < 91):
        case (char > 96 && char < 123):
            break;
        default:
            alert("Nome inválido, apenas letras");
            return;
}}}

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
    const senha = document.getElementById("senha").value;

    if (senha.length !== 8) {
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

}

function validarRG(rg) {
    let rgNumerico = '';
    for (let i = 0; i < rg.length; i++) {
        const charCode = rg.charCodeAt(i);
        if (charCode >= 48 && charCode <= 57) {
        rgNumerico += rg.charAt(i);
}}
    if (rgNumerico.length !== 9) {
        return false;
    }

    return true;
}

    function validarFormulario() {
    const campoNome = document.getElementById("nome").value;
    validarNome(campoNome);

    const campoEmail = document.getElementById("email").value;
    validarEmail(email);

    const senha = document.getElementById("senha").value;
    validarSenha(senha)

    const rgValida = document.getElementById("rg").rg;
    validarRG(rgValida)
}

const botaoValida = document.getElementById("btn-valida")
    botaoValida.addEventListener("click",validarFormulario)