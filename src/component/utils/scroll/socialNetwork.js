export const scroll_sociaNetwork=(Scroll)=>{
    if ( Scroll >= 5400 ) {
        let line = document.querySelector(".line")
        let logo = document.querySelector(".line img")
        let userName = document.querySelector(".line div")
        line.classList.add("animation_socialNetwork_line")
        logo.classList.add("animation_socialNetwork_logo")
        userName.classList.add("animation_socialNetwork_userName")
    }
}