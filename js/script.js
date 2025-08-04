document.addEventListener('DOMContentLoaded', function () {
 
  const pontos = {
    belle: 0,
    victor: 0,
  };

 
  const botoes = document.querySelectorAll('.botao');

  const modalElement = document.getElementById('vencedorModal');
  const mensagemVencedor = document.getElementById('mensagemVencedor');
  const modalBootstrap = new bootstrap.Modal(modalElement);


  function atualizarPlacar(jogador) {
    const placarElemento = document.getElementById(`placar-${jogador}`);
    placarElemento.textContent = pontos[jogador];
  }

  function verificarVencedor() {
    for (const jogador in pontos) {
      if (pontos[jogador] >= 12) {
        mensagemVencedor.textContent = `${jogador === 'belle' ? 'Belle' : 'Victinho'} ganhou! 🎉`;
        modalBootstrap.show();
        pontos.belle = 0;
        pontos.victor = 0;
        atualizarPlacar('belle');
        atualizarPlacar('victor');
        break; 
      }
    }
  }

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function (e) {
      e.preventDefault(); 

      const jogador = this.getAttribute('data-jogador');
      const pontosBotao = this.getAttribute('data-pontos');

      if (pontosBotao === 'ZERAR') {
        pontos[jogador] = 0; 
      } else {
        pontos[jogador] += parseInt(pontosBotao);
        if (pontos[jogador] > 12) pontos[jogador] = 12; 
      }

      atualizarPlacar(jogador);
      verificarVencedor();
    });
  });
});