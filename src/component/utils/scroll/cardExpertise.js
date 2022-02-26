export const scroll_card_expertise=(Scroll)=>{
    const card = document.querySelectorAll(".card-body > div");
    if (Scroll >= 1300) {
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
}