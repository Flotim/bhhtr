//effet glissement texte
document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var parallaxTexts = document.querySelectorAll('.parallax-text');

    // Ajuster la position verticale de tous les textes en fonction du défilement
    if (parallaxTexts) {
        parallaxTexts.forEach(function(parallaxText) {
            parallaxText.style.transform = 'translateY(' + scrollPosition * (-1) + 'px)';
        });
    }
});

document.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var parallaxTexts = document.querySelectorAll('.parallax-text1');

    // Ajuster la position verticale de tous les textes en fonction du défilement
    if (parallaxTexts) {
        parallaxTexts.forEach(function(parallaxText) {
            parallaxText.style.transform = 'translateY(' + scrollPosition * (-0.3) + 'px)';
        });
    }
});





// effet de réaparition de la navbar
document.addEventListener("DOMContentLoaded", function() {
    var mainHeader = document.querySelector("header");
    var nav = document.querySelector("nav");
    var lastScrollTop = 0;
    var navHeight = nav.offsetHeight;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Faire défiler vers le bas, masquer la barre de navigation
            nav.style.top = `-${navHeight}px`;
        } else {
            // Faire défiler vers le haut, afficher la barre de navigation
            nav.style.top = "0";
        }

        // Ajoutez cette condition pour rendre la barre de navigation fixe après le header
        if (scrollTop >= mainHeader.offsetHeight) {
            nav.style.position = "fixed";
            nav.style.top = "0";
            nav.style.background = "rgba(255, 255, 255, 0.0)";
            nav.style.width= "100%"
            document.body.style.marginTop = `${navHeight}px`;
        } else {
            nav.style.position = "relative";
            document.body.style.marginTop = "0";
        }

       
    });
});