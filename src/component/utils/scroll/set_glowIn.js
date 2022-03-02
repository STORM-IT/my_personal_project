import { show_text_information } from "../glowIn_text"

var List_Information=[];
export const set_effect_glowIn = (Scroll) => {

    if (Scroll > 100 && Scroll < 1100) {
        // alert("start")
        let find=List_Information.find(e=>e=="info")
        if(!find){
            List_Information.push("info")
            show_text_information("info")
        }
    }
}
