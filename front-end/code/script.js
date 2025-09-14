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

/* AUDIO WICK */
const audioWick = document.querySelector("#audwick");

audioWick.volume = 0.1;
audioWick.autoplay = true;
audioWick.play().catch(() => {
});

/* LOADING SCREEN */

window.addEventListener("load", function () {
    const loadingElement = document.querySelector("#loading-screen");

    // Verifica se o elemento de carregamento existe
    if (loadingElement) {
        setTimeout(() => {
            loadingElement.style.transition = "opacity 2s";
            loadingElement.style.opacity = "0";
            setTimeout(() => {
                loadingElement.style.display = "none";
            }, 1500);
        }, 1500);
    }
});

// TEXTO [DESENVOLVEDOR DE SOFTWARE ▯]
const developerText = document.querySelector(".futuro-software")
  if (developerText) {
    const text = "[> Futuro Desenvolvedor de Software <]..."
    let index = 0
    const speed = 200

    // Função para digitar o texto
    function typeText() {
        if (index < text.length) {
            developerText.textContent += text[index++]
            setTimeout(typeText, speed)
        } else {
            // Adiciona o cursor piscante após o texto ser completamente digitado
            const cursor = document.createElement("span")
            cursor.textContent = "▯";
            cursor.classList.add("blinking-cursor")
            developerText.appendChild(cursor)
        }
    }
    developerText.classList.add("futuro-software")
    typeText()
}