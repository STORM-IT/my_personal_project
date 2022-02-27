export const scroll_text_head = (Scroll, LastScroll) => {
    const div_text_head = document.querySelector(".div_text_head")
    if (Scroll >= 600) {
        if (Scroll >= LastScroll) {
            for (let i = 1; i <= 9; i++) {
                // const span = document.querySelector(`div span:nth-child(${i}) `)
                div_text_head.classList.add("minimizing_text_head")
                div_text_head.classList.replace("maximizing_text_head", "minimizing_text_head")
            }
        }
        else {
            div_text_head.classList.add("maximizing_text_head")
            div_text_head.classList.replace("minimizing_text_head", "maximizing_text_head")

        }
    }
    else {
        div_text_head.classList.add("maximizing_text_head")
        div_text_head.classList.replace("minimizing_text_head", "maximizing_text_head")

    }
}