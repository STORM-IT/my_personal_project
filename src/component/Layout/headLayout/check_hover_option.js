export const hover_option = () => {

    const div_select = document.getElementById("Input_Select")
    const div_option = document.querySelector(".select-option")

    function option_mouseEnter() {

        div_option.classList.remove("hide_option_select_nav")
        div_option.classList.add("visible")
        // alert("d")
    }

    div_select.addEventListener('mouseenter', () => {
        div_option.classList.add("show_option_select_nav")
        div_option.classList.replace("hide_option_select_nav", "show_option_select_nav")
    })

    div_select.addEventListener('mouseleave', () => {
        div_option.classList.add("hide_option_select_nav")
        div_option.classList.replace("show_option_select_nav", "hide_option_select_nav")
    })

    div_option.addEventListener('mouseenter',()=> option_mouseEnter())


    div_option.addEventListener('mouseleave', () => {
        div_option.removeEventListener('mouseenter', option_mouseEnter)
        div_option.classList.add("hide_option_select_nav")
    })
}