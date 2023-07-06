const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//identificar o clic no botão//
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        //desmarcar botao selecionado anterior //
        desativarBotaoSelecionado();

        //marcar botao clicadocomo se estivesse selecionado//
        botao.classList.add('selecionado');

        // esconder a imagem de fundo //
        esconderImagemAtiva();

        //aparecer a imagem correspondente ao botao clicado//
       mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

