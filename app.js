let listaDeNúmerosSorteados = [];
let numerolimte = 30
let numeroSecreto = gerarNúmeroAleatorio();
let tentativas = 1;

function exibirTextos(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male',
    {rate : 1.2})
}

function textoInicial() {
    exibirTextos('h1', 'Guess Number')
    exibirTextos('p' , 'Digite Um Número entre 1 e 30 aí, bb') 
}

textoInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto) {
        exibirTextos('h1', 'acertou, facin');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativa}`;
         exibirTextos ('p', mensagemTentativas);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto) {
            exibirTextos('p', 'o número é maior, mofiu');
        } else {
            exibirTextos('p', 'o número é menor, parceiro');
        }
        tentativas++;
        limparCampo();
    }

}
function gerarNúmeroAleatorio () {
  let numeroEscolhido = parseInt(Math.random() * numerolimte + 1);
  let quantidadeDeElementos = listaDeNúmerosSorteados.length;

if (quantidadeDeElementos == numerolimte) {
    listaDeNúmerosSorteados = [];
}

  if (listaDeNúmerosSorteados.includes(numeroEscolhido)) {
    return gerarNúmeroAleatorio();
  } else{
    listaDeNúmerosSorteados.push(numeroEscolhido)
    return numeroEscolhido;
  }
    
} function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';

} function reiniciarJogo(){
  numeroSecreto = gerarNúmeroAleatorio();
  limparCampo();
  tentativas = 1;
  textoInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
} 
