/* SCRIPT JAVASCRIPT */

//BARRA DE NAV
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("open");
});

// Aba de Menu
const menu = document.querySelector(".logo")

function toggleMenu() {
    alert("Menu em desenvolvimento! Em breve estará disponível.");
}


/* AUDIO WICK */
const audioWick = document.querySelector("#audwick");

audioWick.volume = 0.1;
audioWick.autoplay = true;
audioWick.play().catch(() => {});

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
const developerText = document.querySelector(".futuro-software");
if (developerText) {
    const text = "[> Futuro Desenvolvedor de Software <]...";
    let index = 0;
    const speed = 200;

    // Função para digitar o texto
    function typeText() {
        if (index < text.length) {
            developerText.textContent += text[index++];
            setTimeout(typeText, speed);
        } else {
            // Adiciona o cursor piscante após o texto ser completamente digitado
            const cursor = document.createElement("span");
            cursor.textContent = "▯";
            cursor.classList.add("blinking-cursor");
            developerText.appendChild(cursor);
        }
    }
    developerText.classList.add("futuro-software");
    typeText();
}

// Seleciona o elemento onde o texto será exibido
const helloWorldContact = document.querySelector("#helloWorld");

// Verifica se o elemento existe na página
if (helloWorldContact) {
    const text = "[E aí pronto para ver o que vem depois?]...";
    let index = 0;
    const speed = 150; 

    // Função para digitar o texto
    function typeText() {
        if (index < text.length) {
         
            helloWorldContact.textContent += text[index];
            index++; 
            setTimeout(typeText, speed); 
        } else {
            // Adiciona o cursor piscante após o texto ser completamente digitado
            const cursor = document.createElement("span");
            cursor.textContent = "▯";
            cursor.classList.add("blinking-cursor");
            helloWorldContact.appendChild(cursor);
        }
    }

    // Função para verificar se o elemento está visível na tela
    function isElementVisible() {
        const rect = helloWorldContact.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Função que inicia a animação quando o elemento aparece na tela
    function startTypingWhenVisible() {
        if (isElementVisible()) {
            typeText(); 
            window.removeEventListener("scroll", startTypingWhenVisible); 
        }
    }

    // Adiciona um evento para verificar o scroll da página
    window.addEventListener("scroll", startTypingWhenVisible);
}
