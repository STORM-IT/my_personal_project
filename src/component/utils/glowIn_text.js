
export const show_text_information = (layout) => {

  let glowInText = document.querySelector(`.glowIn_text_${layout}`);
  glowInText.classList.add("visible");

  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {

    let span = document.createElement("span");
    let p = document.createElement("p");


    span.style.animationDelay = `${i * 0.019}s`;
    span.style.animationDelay = `${i * 0.019}s`;

    span.textContent = letter;
    if (letter == ".") {

      p.style.marginBottom = "0.2em";
      glowInText.append(span,p);

    } else {

      glowInText.append(span);

    }
  });

}