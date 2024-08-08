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
