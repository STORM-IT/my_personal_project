export const scroll_nav=(Scroll)=>{
    const nav = document.querySelector(".nav-container")
    if(nav){
        if (Scroll >= 600) {
            nav.classList.remove("hidOpacity")
            nav.classList.add("opacity")
        }
        else {
            nav.classList.add("hidOpacity")
            nav.classList.remove("opacity")
        }
    }
}