export const scroll_footer = (Scroll)=>{
    const main = document.querySelector("main")
    const moveTopIcon = document.querySelector(".move-top")
    if ( Scroll >= 4300 ) {
        moveTopIcon.classList.add("showIconTop")
        moveTopIcon.classList.replace("hideIconTop", "showIconTop")

        main.classList.add("hide_footer_animation")
        main.classList.replace("hide_footer_animation", "show_footer_animation")
    } else {


        main.classList.add("show_footer_animation")
        main.classList.replace("show_footer_animation", "hide_footer_animation")


        moveTopIcon.classList.add("hideIconTop")
        moveTopIcon.classList.replace("showIconTop", "hideIconTop")
    }
}