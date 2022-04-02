export const scroll_footer = (Scroll)=>{
    const main = document.querySelector(".SocialNetwork-container")
    const moveTopIcon = document.querySelector(".move-top")
    if ( Scroll >= 3700 ) {
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