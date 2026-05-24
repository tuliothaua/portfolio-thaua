/************ TULIO-JAVASCRIPT ************/

/************ BARRA DE NAVEGAÇÃO ************/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.add("open");
});

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("open");
});

/************ ABA DE MENU ************/
const menu = document.querySelector(".logo")

function toggleMenu() {
    alert("Menu em desenvolvimento! Em breve estará disponível.");
}


/************ AUDIO WICK ************/
const audioWick = document.querySelector("#audwick");

audioWick.volume = 0.1;
audioWick.autoplay = true;
audioWick.play().catch(() => {});

/************ LOADING SCREEN ************/
window.addEventListener("load", function () {
const loadingElement = document.querySelector("#loading-screen");

    /* --- Verifica se o elemento de carregamento existe --- */
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

/************ TEXTO [DESENVOLVEDOR DE SOFTWARE ▯] ************/
const developerText = document.querySelector(".futuro-software");
if (developerText) {
    const text = "[> Information Systems Student & Tech Problem Solver <]...";
    let index = 0;
    const speed = 200;

    /* --- Função para digitar o texto --- */
    function typeText() {
        if (index < text.length) {
            developerText.textContent += text[index++];
            setTimeout(typeText, speed);
        } else {
        /* --- Adiciona o cursor piscante após o texto ser completamente digitado --- */
            const cursor = document.createElement("span");
            cursor.textContent = "▯";
            cursor.classList.add("blinking-cursor");
            developerText.appendChild(cursor);
        }
    }
    developerText.classList.add("futuro-software");
    typeText();
}

/************ Seleciona o elemento onde o texto será exibido ************/
const helloWorldContact = document.querySelector("#helloWorld");

// Verifica se o elemento existe na página
if (helloWorldContact) {
    const text = "[Gostou do que viu?]...";
    let index = 0;
    const speed = 150; 

    /* --- Função para digitar o texto --- */
    function typeText() {
        if (index < text.length) {
         
            helloWorldContact.textContent += text[index];
            index++; 
            setTimeout(typeText, speed); 
        } else {
        /* --- Adiciona o cursor piscante após o texto ser completamente digitado --- */
            const cursor = document.createElement("span");
            cursor.textContent = "▯";
            cursor.classList.add("blinking-cursor");
            helloWorldContact.appendChild(cursor);
        }
    }
    /* --- Função para verificar se o elemento está visível na tela --- */
    function isElementVisible() {
        const rect = helloWorldContact.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    /* --- Função que inicia a animação quando o elemento aparece na tela --- */
    function startTypingWhenVisible() {
        if (isElementVisible()) {
            typeText(); 
            window.removeEventListener("scroll", startTypingWhenVisible); 
        }
    }

    /* --- Adiciona um evento para verificar o scroll da página --- */
    window.addEventListener("scroll", startTypingWhenVisible);
}

/******************* CAROUSEL *******************/
const track = document.getElementById('carousel-track');
const cards = track.querySelectorAll('.project-card');
const dotsEl = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
});

function goTo(i) {
    current = i;
    track.style.transform = `translateX(-${current * (cards[0].offsetWidth + 30)}px)`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === cards.length - 1;
    document.querySelectorAll('.carousel-dot').forEach((d, idx) => {
        d.classList.toggle('active', idx === current);
    });
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));