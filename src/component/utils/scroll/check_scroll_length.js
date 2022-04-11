import { useState } from "react";
import { scroll_card_expertise } from "./cardExpertise";
import { scroll_footer } from "./footer";
import { scroll_img_background } from "./imgBackground";
import { scroll_nav } from "./nav";
import { set_effect_glowIn } from "./set_glowIn";
import { scroll_sociaNetwork } from "./socialNetwork";
import { scroll_text_head } from "./textHead";

window.addEventListener('scroll', () => { Scroll_utils(window.pageYOffset) });
var LastScroll=0;
export const Scroll_utils = (Scroll) => {
    
    // console.log(Scroll)
    // console.log(window.innerWidth)

    set_effect_glowIn(Scroll,window.innerWidth)
    scroll_nav(Scroll); // Scroll >= 600
    scroll_text_head(Scroll,LastScroll); //
    scroll_img_background(Scroll);// Scroll <= 1300 || 3900 <= Scroll
    scroll_card_expertise(Scroll);// Scroll > 1300
    scroll_sociaNetwork(Scroll); // Scroll >= 3900
    scroll_footer(Scroll,window.innerWidth);// Scroll >= 4300
    LastScroll=Scroll;
}