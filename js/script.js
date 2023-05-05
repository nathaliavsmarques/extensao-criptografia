let texto = document.querySelector('#texto');
let caixaDeTexto = document.querySelector('#caixa-de-texto');
let btnCriptografar = document.querySelector('#criptografar');
let btnDescriptografar = document.querySelector('#descriptografar');
let btnCopiar = document.querySelector('#copiar');
let btnLimpar = document.querySelector('#limpar');


function criptografar() {
    let txt = texto.value;
    let txtCriptografado = txt.replace(/e|i|a|o|u/g, function (txt) {
            if (txt === 'e') {
                return 'enter'
            } else if (txt === 'i') {
                return 'imes'
            } else if (txt === 'a') {
                return 'ai'
            } else if (txt === 'o') {
                return 'ober'
            } else if (txt === 'u') {
                return 'ufat'
            }; 
        })
        caixaDeTexto.innerHTML = txtCriptografado;
    }

function descriptografar() {
    let txt = texto.value;
    let txtDescriptografado = txt.replace(/enter|imes|ai|ober|ufat/g , function (txtD) {
        if (txtD === 'enter') {
            return 'e'
        } else if (txtD === 'imes') {
            return 'i'
        } else if (txtD === 'ai') {
            return 'a'
        } else if (txtD === 'ober') {
            return 'o'
        } else if (txtD === 'ufat') {
            return 'u'
        }
    });
    caixaDeTexto.innerHTML = txtDescriptografado;
}


function copiar() {
    navigator.clipboard.writeText(caixaDeTexto.innerHTML);
    alert('Texto copiado.')

}

function limpar() {
    texto.value = ' ';
    texto.focus();
    caixaDeTexto.innerHTML = 'Nenhuma mensagem encontrada.'

}

btnCriptografar.addEventListener('click', () => criptografar());
btnDescriptografar.addEventListener('click', () => descriptografar())
btnCopiar.addEventListener('click', () => copiar());
btnLimpar.addEventListener('click', () => limpar());

