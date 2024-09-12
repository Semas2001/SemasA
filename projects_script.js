document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");
    header.style.top = "0";
    header.style.transition = "0"});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.flip-card').forEach(card => {
    const flipCardBack = card.querySelector('.flip-card-back');
    const description = flipCardBack.getAttribute('data-description');

    if (!flipCardBack.querySelector('.text-container')) {
      const textContainer = document.createElement('span');
      textContainer.className = 'text-container';
      flipCardBack.appendChild(textContainer);

      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      cursor.textContent = '|';
      flipCardBack.appendChild(cursor);

      card.addEventListener('mouseover', () => {
        if (!flipCardBack.dataset.typed) {
          flipCardBack.classList.add('expanded');

          setTimeout(() => typeText(textContainer, description, cursor), 500);

          flipCardBack.dataset.typed = true;
        }
      });
    }
  });

  function typeText(element, text, cursor) {
    let index = 0;
    const textWithLineBreaks = text.replace(/(\n\s*•)/g, '\n•');

    const interval = setInterval(() => {
      if (index < textWithLineBreaks.length) {
        const char = textWithLineBreaks[index++];
        if (char === '\n' && textWithLineBreaks[index] === '•') {
          element.innerHTML += index === 1 ? '<br><br>' : '<br>';
        } else {
          element.innerHTML += char;
        }
      } else {
        clearInterval(interval);
        cursor.classList.add('blinking');
      }
    }, 5); // Typing speed
  }
});
