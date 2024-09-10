document.addEventListener("scroll", function () {
    requestAnimationFrame(() => {
        const content = document.querySelector(".content");
        const header = document.querySelector("#header");
        const scrollPosition = window.scrollY;
        const maxScroll = 300;
        const scale = Math.max(1 - scrollPosition / maxScroll, 0.5);


        content.style.transform = `translateY(${Math.min(scrollPosition, maxScroll)}px)`;
        content.style.fontSize = `${35 * scale}px`;
        if (scrollPosition > maxScroll) {
            header.style.transform = 'translateY(0)';
        } else if (scrollPosition <= maxScroll) {
            header.style.transform = 'translateY(0)'; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');
    const aboutSection = document.querySelector('.h2container');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('active');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    setTimeout(() => {
        content.classList.add('fade-out');
    }, 3000);

    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('scroll', function() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.style.display = 'none';
    }
}, { once: true }); 


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    let hasScrolledDown = false;

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 0 && !hasScrolledDown) {
            header.style.top = "0"; 
            hasScrolledDown = true; 
        }
        if (hasScrolledDown && scrollPosition === 0) {
            header.style.top = "0";
        }
    });
});

document.addEventListener('scroll', function() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.style.display = 'none';
    }
}, { once: true });