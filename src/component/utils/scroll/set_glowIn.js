import { show_text_information } from "../glowIn_text"

var List_Information=[];
export const set_effect_glowIn = (Scroll,innerWidth) => {

    if (Scroll > 500 & Scroll < 1300 & innerWidth >=769 || Scroll > 400 & Scroll < 600 & innerWidth <=768) {
        let find=List_Information.find(e=>e=="info")
        if(!find){
            let img=document.querySelector("#img_info")
            img.classList.add("img_brightness_class")
            List_Information.push("info")
            show_text_information("info")
        }
    }
}
