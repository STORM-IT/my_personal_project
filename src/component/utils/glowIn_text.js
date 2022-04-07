

export const show_text_information = (layout) => {

    let glowInText = document.querySelector(`.glowIn_text_${layout}`);
    glowInText.classList.add("visible");
    // glowInTexts.forEach(glowInText => {
      let letters = glowInText.textContent.split("");
      glowInText.textContent = "";
      letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.019}s`;
        glowInText.append(span);
      });
    // });
  }