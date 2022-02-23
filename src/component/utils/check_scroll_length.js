import { useState } from "react";

window.addEventListener('scroll', () => { Show_footer(window.pageYOffset) });
export const Show_footer = (Scroll) => {
    console.log(window.pageYOffset)
    if (Scroll >= 1300) {
        const card = document.querySelectorAll(".card-body > div");
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
    if (3900<= Scroll) {
        let line = document.querySelector(".line")
        let logo = document.querySelector(".line img")
        let userName = document.querySelector(".line div")
        line.classList.add("animation_socialNetwork_line")
        logo.classList.add("animation_socialNetwork_logo")
        userName.classList.add("animation_socialNetwork_userName")
    }
    const main = document.querySelector("main")
    const moveTopIcon = document.querySelector(".move-top")
    if (4400<= Scroll) {
        main.classList.replace("hide_footer_animation","show_footer_animation")
        moveTopIcon.classList.replace("hideIconTop","showIconTop")
        // main.classList.add("show_footer_animation")
        // main.classList.remove("hide_footer_animation")
        // moveTopIcon.classList.add("showIconTop")
        // moveTopIcon.classList.remove("hideIconTop")
        
    }else if(4400>= Scroll){

        main.classList.replace("show_footer_animation","hide_footer_animation")
        moveTopIcon.classList.replace("showIconTop","hideIconTop")
        // main.classList.add("hide_footer_animation")
        // main.classList.remove("show_footer_animation")
        // moveTopIcon.classList.add("hideIconTop")
        // moveTopIcon.classList.remove("showIconTop")

    }
    // const first=Scroll;
    // console.log(first)
    // switch (true) {
    //     case (1300 <= Scroll):
    //          // console.log("dds")
    //     const card = document.querySelectorAll(".card-body > div");
    //     for (let i = 0; i < card.length; i++) {
    //         if (i % 2 == 1) {
    //             setTimeout(() => {

    //                 card[i].classList.add("moveExpertiseLeft");
    //             }, 700 * i);
    //         } else {
    //             setTimeout(() => {

    //                 card[i].classList.add("moveExpertiseRight");
    //             }, 700 * i);
    //         }
    //     }
    //         break;
    //     case (3900<= Scroll):
    //         let line = document.querySelector(".line")
    //         let logo = document.querySelector(".line img")
    //         let userName = document.querySelector(".line div")
    //         line.classList.add("animation_socialNetwork_line")
    //         logo.classList.add("animation_socialNetwork_logo")
    //         userName.classList.add("animation_socialNetwork_userName")
    //         break;
    //     default:
    //         break;
    // }
}