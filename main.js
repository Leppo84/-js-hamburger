// identifico dove fare apparire e scomparire l'html: "hamburger-menu" di default none, "hamburger-menu active" in display block.

let menuHidden = document.querySelector("hamburger-menu");

// identifico i due punti dell'evento click: i.fas.fa-bars e a.close

const menuOpen = document.querySelector("fa-bars");

const menuClose = document.querySelector("close");

// genero un evento click con funnzione apri

menuOpen.addEventListener ('click',
    function() {
        menuHidden.classList.add("active");
        }
)

// genero un evento click con funzione chiudi

menuClose.addEventListener ('click',
    function() {
        menuHidden.className = "hamburger-menu";
        }
)



