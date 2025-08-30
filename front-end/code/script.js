/* SCRIPT JAVASCRIPT */

//BARRA DE NAV

/* AUDIO */
const audioWick = document.querySelector("#audwick");

audioWick.volume = 0.1;
audioWick.autoplay = true;
audioWick.play().catch(() => {
    // O navegador pode bloquear autoplay; trate o erro se necessário
});

/* LOADING SCREEN */

// Adiciona um ouvinte de eventos ao objeto window que será acionado quando a página estiver completamente carregada
window.addEventListener("load", function () {
    // Seleciona o elemento com o ID "loading-screen"
    const loadingElement = document.querySelector("#loading-screen");

    // Verifica se o elemento de carregamento existe
    if (loadingElement) {
        // Aguarda 2 segundos antes de iniciar a transição
        setTimeout(() => {
            // Define um efeito de transição para a propriedade de opacidade ao longo de 2 segundos
            loadingElement.style.transition = "opacity 2s";
            // Altera a opacidade do elemento de carregamento para 0 (desvanecer)
            loadingElement.style.opacity = "0";
            // Aguarda a conclusão da transição (2 segundos) antes de ocultar o elemento
            setTimeout(() => {
                // Define a propriedade display como "none" para ocultar completamente o elemento
                loadingElement.style.display = "none";
            }, 1500);
        }, 1500);
    }
});