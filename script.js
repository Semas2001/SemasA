document.addEventListener("scroll", function () {
    requestAnimationFrame(() => {
        const content = document.querySelector(".content");
        const header = document.querySelector("#header");
        const scrollPosition = window.scrollY;
        const maxScroll = 300; // Adjust this value as needed
        const scale = Math.max(1 - scrollPosition / maxScroll, 0.5); // Scale down to 50%

        // Adjust content transformation
        content.style.transform = `translateY(${Math.min(scrollPosition, maxScroll)}px)`;
        content.style.fontSize = `${35 * scale}px`; // Adjust starting size as needed

        // Move content into header when scrolling ends
        if (scrollPosition > maxScroll) {
            header.style.transform = 'translateY(0)';
        } else {
            header.style.transform = 'translateY(-100%)';
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
        window.removeEventListener('scroll', handleScroll); // Remove event listener once triggered
      }
    }
  
    // Simulate the end of the title animation
    setTimeout(() => {
        content.classList.add('fade-out');
    }, 3000); // Adjust this timeout to match the duration of your title animation

    window.addEventListener('scroll', handleScroll);
});


  document.addEventListener('scroll', function() {
    const scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        scrollHint.style.display = 'none';
    }
}, { once: true });  // The event listener is removed after the first scroll event
