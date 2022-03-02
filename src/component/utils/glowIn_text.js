

export const show_text_information = (layout) => {
    let glowInTexts = document.querySelectorAll(`.glowIn_text_${layout}`);
    glowInTexts.forEach(glowInText => {
      let letters = glowInText.textContent.split("");
      glowInText.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.01}s`;
        glowInText.append(span);
      });
    });
  }