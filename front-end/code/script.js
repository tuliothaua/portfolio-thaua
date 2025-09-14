/* SCRIPT JAVASCRIPT */

//BARRA DE NAV
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
}

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

// DESENVOLVEDOR DE SOFTWARE
const developerText = document.querySelector(".futuro-software");

if (developerText) {
    const text = "[> Futuro Desenvolvedor de Software <]... ";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            developerText.textContent += text[index];
            developerText.style.color = "green";
            developerText.style.fontWeight = "bold";
            developerText.style.textAlign = "center";
            developerText.style.fontSize = "30px";
            developerText.style.padding = "15px";
            developerText.style.fontFamily = "'Courier New', Courier, monospace";
            developerText.style.letterSpacing = "2px";
            developerText.style.backgroundColor = "#1a1a1a";
            developerText.style.borderRadius = "15px";
            developerText.style.width = "fit-content";
            developerText.style.margin = "0 auto";
            developerText.style.marginTop = "20px";
            index++;
            setTimeout(typeText, 200);
        } else {
            addBlinkingCursor(); // Adiciona o cursor piscante após o texto ser digitado
        }
    }

    function addBlinkingCursor() {
        const cursor = document.createElement("span");
        cursor.textContent = "▯";
        cursor.style.display = "inline-block";
        cursor.style.animation = "blink 1s step-end infinite";
        developerText.appendChild(cursor);

        // Adiciona o estilo de animação para o cursor piscante
        const style = document.createElement("style");
        style.textContent = `
            @keyframes blink {
                50% {
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    typeText();
}