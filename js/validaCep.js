const limparFormulario = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
};

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
};

const cepEhNumero = (numero) => /^[0-9]+$/.test(numero);
const cepCorreto = (cep) => cep.length === 8 && cepEhNumero(cep);

const pesquisarCep = () => {
    limparFormulario()

    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cepCorreto(cep)) {
        try {
            const requisicao = new XMLHttpRequest();
            requisicao.open('GET', url, true);

            requisicao.onload = function () {
                if (requisicao.status === 200) {
                    const endereco = JSON.parse(requisicao.responseText);
                    if (endereco.hasOwnProperty('erro')) {
                        document.getElementById('endereco').value = 'Cep não encontrado';
                    } else {
                        preencherFormulario(endereco);
                    }
                } else {
                    throw new Error('Erro ao pesquisar CEP!');
                }
            };

            requisicao.onerror = function () {
                throw new Error('Erro de rede ao pesquisar CEP!');
            };

            requisicao.send();
        } catch (error) {
            document.getElementById('endereco').value = 'Erro ao pesquisar CEP!';
            console.error(error);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
