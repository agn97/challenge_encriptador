const textArea = document.querySelector('.text__area');
const mensagem = document.querySelector('.mensagem');

function btn__criptografar () {
    const textoEcriptado = encriptar(textArea.value);
    mensagem.value = textoEcriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btn__descriptografar () {
    const textoDescriptado = descriptar(textArea.value);
    mensagem.value = textoDescriptado;
    textArea.value = "";
}

function descriptar (stringDescriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDescriptada.includes(matrizCodigo[i][1])){
            stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDescriptada;
}

function btn__copiar(){
   mensagem.select();
   document.execCommand('copy');
}