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
    if (4230<= Scroll) {
        main.classList.remove("hide_footer_animation")
        main.classList.add("show_footer_animation")
        
    }else if(4230>= Scroll){
        main.classList.remove("show_footer_animation")
        main.classList.add("hide_footer_animation")

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