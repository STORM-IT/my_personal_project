import { scroll_sociaNetwork } from "./socialNetwork"

export const scroll_footer = (Scroll,innerWidth)=>{
    const main = document.querySelector(".SocialNetwork-container")
    const moveTopIcon = document.querySelector(".move-top")
    // if ( Scroll >= 3790 & innerWidth <=375 || Scroll >= 3810 && innerWidth >=376 & innerWidth <=490 || Scroll >= 4340 && innerWidth >=491 & innerWidth <=600 || Scroll >= 4345 && innerWidth <=601 & innerWidth >=768 || Scroll >= 5330 && innerWidth >=769 & innerWidth <=1000  || Scroll >= 5550 & innerWidth >=1001) {
    if ( Scroll >= 3790 & innerWidth <=375 || Scroll >= 3810 && innerWidth >=376 & innerWidth <=490 || Scroll >= 4670 && innerWidth >=491 & innerWidth <=600 || Scroll >= 5210 && innerWidth >=601 & innerWidth <=768 || Scroll >= 5330 && innerWidth >=769 & innerWidth <=1000  || Scroll >= 5550 & innerWidth >=1001) {
        moveTopIcon.classList.add("showIconTop")
        moveTopIcon.classList.replace("hideIconTop", "showIconTop")
        
        main.classList.add("socialNetwork_move_top_class")
        main.classList.replace("socialNetwork_move_bottom_class","socialNetwork_move_top_class" )
        
        scroll_sociaNetwork(Scroll);
    } else {
        if(main.classList.contains("socialNetwork_move_top_class")){
            main.classList.add("socialNetwork_move_bottom_class")
            main.classList.replace("socialNetwork_move_top_class","socialNetwork_move_bottom_class" )
        }

        moveTopIcon.classList.add("hideIconTop")
        moveTopIcon.classList.replace("showIconTop", "hideIconTop")
    }
}