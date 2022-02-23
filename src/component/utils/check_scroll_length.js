import { useState } from "react";

window.addEventListener('scroll', () => { Show_footer(window.pageYOffset) });
export const Show_footer = (Scroll) => {
    console.log(window.pageYOffset)
    if (Scroll >= 1300) {
        // console.log("dds")
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
    // const first=Scroll;
    // console.log(first)
    switch (true) {
        case (1300 <= Scroll):
             // console.log("dds")
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
            break;
        



        default:
            break;
    }
}