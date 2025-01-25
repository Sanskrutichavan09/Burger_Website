const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const shadowHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass?.classList.add('active-link');
        } else {
            sectionClass?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
});

// Revealing elements with delays and specific configurations
sr.reveal('.home-data, .footer');
sr.reveal('.home-dish', { delay: 500, distance: '100px', origin: 'bottom' });
sr.reveal('.home-burger', { delay: 1200, distance: '100px', duration: 1500 });
sr.reveal('.home-ingredient', { delay: 1600, interval: 100 });
sr.reveal('.recipe-img, .delivery-img, .contact-image', { origin: 'left' });
sr.reveal('.recipe-data, .delivery-data, .contact-data', { origin: 'right' });
sr.reveal('.recipe-card', { interval: 100 });
