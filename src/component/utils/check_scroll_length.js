import { useState } from "react";

window.addEventListener('scroll', () => { Show_footer(window.pageYOffset) });
export const Show_footer = (Scroll) => {
    
    console.log(window.pageYOffset)
    const nav = document.querySelector(".nav-container")
    if (Scroll >= 600) {
        nav.classList.remove("hidOpacity")
        nav.classList.add("opacity")
    }
    else{
        nav.classList.add("hidOpacity")
        nav.classList.remove("opacity")
    }


    const short_img=document.querySelector(".header-short-img");
    if(Scroll<=1300||3900<=Scroll){
        
        short_img.classList.add("display-block")
        short_img.classList.replace("display-block", "display-none")
        console.log("block")
    }else{
        short_img.classList.add("display-none")
        short_img.classList.replace("display-none", "display-block")
        console.log("none")
    }

    if (Scroll >= 200) {
        // short_img.classList.remove("hidOpacity")
    }else{
        // short_img.classList.remove("opacity")
    }
    
    
    const card = document.querySelectorAll(".card-body > div");
    if (Scroll >= 1300) {
        for (let i = 0; i < card.length; i++) {
            if (i % 2 == 1) {
                setTimeout(() => {
                    
                    card[i].classList.add("moveExpertiseLeft");
                }, 700 * i);
            } else {
                setTimeout(() => {
                    
                    card[i].classList.add("moveExpertiseRight");
                }, 700 * i);
            }
        }
        
    }


    if (3900 <= Scroll) {
        let line = document.querySelector(".line")
        let logo = document.querySelector(".line img")
        let userName = document.querySelector(".line div")
        line.classList.add("animation_socialNetwork_line")
        logo.classList.add("animation_socialNetwork_logo")
        userName.classList.add("animation_socialNetwork_userName")

        
    }else{
        

    }


    const main = document.querySelector("main")
    const moveTopIcon = document.querySelector(".move-top")
    if (4300 <= Scroll) {
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