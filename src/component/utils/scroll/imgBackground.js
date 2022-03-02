export const scroll_img_background=(Scroll)=>{
    const short_img = document.querySelector(".header-short-img");
    if (Scroll <= 1800 || 4300 <= Scroll) {

        short_img.classList.add("display-block")
        short_img.classList.replace("display-block", "display-none")
        console.log("block")
    } else {
        short_img.classList.add("display-none")
        short_img.classList.replace("display-none", "display-block")
        console.log("none")
    }
}