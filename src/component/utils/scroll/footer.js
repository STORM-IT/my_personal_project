export const scroll_footer = (Scroll,innerWidth)=>{
    const main = document.querySelector(".SocialNetwork-container")
    const moveTopIcon = document.querySelector(".move-top")
    // if ( Scroll >= 4900) { 768
    // if ( Scroll >= 4340) { 600
    // if ( Scroll >= 4080) { 490
    // debugger
    // if ( Scroll >= 4050 & innerWidth <=375 || Scroll >= 4340 && innerWidth >=376 & innerWidth <=600 || Scroll >= 4875 && innerWidth <=768 & innerWidth >=599 || Scroll >= 5340 && innerWidth >=600 & innerWidth <=999  || Scroll >= 5550 & innerWidth >=1000) {
    if ( Scroll >= 4060 & innerWidth <=375 || Scroll >= 4080 && innerWidth >=376 & innerWidth <=490 || Scroll >= 4340 && innerWidth >=491 & innerWidth <=600 || Scroll >= 4345 && innerWidth <=601 & innerWidth >=768 || Scroll >= 5330 && innerWidth >=769 & innerWidth <=1000  || Scroll >= 5550 & innerWidth >=1001) {
        moveTopIcon.classList.add("showIconTop")
        moveTopIcon.classList.replace("hideIconTop", "showIconTop")
        
        main.classList.add("socialNetwork_move_top_class")
        main.classList.replace("socialNetwork_move_bottom_class","socialNetwork_move_top_class" )
        
    } else {
        if(main.classList.contains("socialNetwork_move_top_class")){
            main.classList.add("socialNetwork_move_bottom_class")
            main.classList.replace("socialNetwork_move_top_class","socialNetwork_move_bottom_class" )
        }

        moveTopIcon.classList.add("hideIconTop")
        moveTopIcon.classList.replace("showIconTop", "hideIconTop")
    }
}