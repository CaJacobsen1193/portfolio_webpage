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