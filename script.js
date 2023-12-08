//boton de subir todo
window.onscroll = function() { showFloatingButton() };

function showFloatingButton() {
    var btnFloat = document.querySelector('.btn-float');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnFloat.style.display = 'block';
    } else {
        btnFloat.style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// fin de boton subir todo
// inicio de carruzel de fotos
let currentIndex = 0;

function showImage(index) {
    const carousel = document.querySelector('.carousel');
    const totalImages = document.querySelectorAll('.carousel img').length;

    if (index >= 0 && index < totalImages) {
        currentIndex = index;
    } else {
        currentIndex = (currentIndex + 1) % totalImages;
    }

    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

// Configurar intervalo para cambiar automáticamente las imágenes cada 5 segundos
setInterval(() => showImage(currentIndex + 1), 4000);
// fin del carruzel
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}



document.addEventListener('DOMContentLoaded', function () {
    var navBar = document.querySelector('.nav-bar');

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            // Si el desplazamiento es más de 50 píxeles, agrega una clase para fijar la barra de navegación
            navBar.classList.add('fixed-nav');
        } else {
            // Si el desplazamiento es menos de 50 píxeles, quita la clase para que la barra de navegación siga el scroll
            navBar.classList.remove('fixed-nav');
        }
    });
});