const projectImages = document.querySelectorAll('#projects .project-item img');

projectImages.forEach(img => {
    img.addEventListener('mousedown', () => {
        img.style.transform = 'scale(0.8)';
    });
    img.addEventListener('mouseup', () => {
        img.style.transform = 'scale(1)';
    });
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
})

const techImages = document.querySelectorAll('#technologies .icon img');

techImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
})

const contactImages = document.querySelectorAll('#contact .icons');

contactImages.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
})

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('header nav');


menuToggle.addEventListener('click', (e) => {
    nav.classList.toggle('active');
    e.stopPropagation();
});


document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target)) {
        nav.classList.remove('active'); 
    }
});
