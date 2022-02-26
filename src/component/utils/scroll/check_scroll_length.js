import { useState } from "react";
import { scroll_card_expertise } from "./cardExpertise";
import { scroll_footer } from "./footer";
import { scroll_img_background } from "./imgBackground";
import { scroll_nav } from "./nav";
import { scroll_sociaNetwork } from "./socialNetwork";
import { scroll_text_head } from "./textHead";

window.addEventListener('scroll', () => { scroll_utils(window.pageYOffset) });
var LastScroll=0;
export const scroll_utils = (Scroll) => {
    
    // console.log(LastScroll,Scroll);
    // console.log(window.pageYOffset)
    scroll_nav(Scroll); // Scroll >= 600
    scroll_text_head(Scroll,LastScroll);
    scroll_img_background(Scroll);// Scroll <= 1300 || 3900 <= Scroll
    scroll_card_expertise(Scroll);// Scroll > 1300
    scroll_sociaNetwork(Scroll); // Scroll >= 3900
    scroll_footer(Scroll);// Scroll >= 4300
    LastScroll=Scroll;
}