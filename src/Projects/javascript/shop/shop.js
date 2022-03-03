

// console.log(input_number[0].value);
// console.log(input_number[1].value);
// console.log(input_number[2].value);
// console.log(select_state.value);
// console.log(radio_Shipping.value);

function estimate() {
    var input_Basketball=document.querySelector("#input-Basketball"),money_B=90;
    var input_Jersey=document.querySelector("#input-Jersey"),money_J=25;
    var input_supplements=document.querySelector("#input-supplements"),money_S=30;
    var select_state=document.querySelector("#select-state");
    var radio_Shipping = document.querySelector('input[name=r-Shipping]:checked');
    var special_checkbox=document.querySelectorAll("input[type=checkbox]");
    var txt_area=document.getElementById("textarea");
    var txt_estimate=document.querySelector("#text-estimate");

    var money=0;
    //debugger
    if(input_Basketball.value){
       money+=money_B* parseInt(input_Basketball.value);
    }
    if(input_Jersey.value){
       money+=money_J*parseInt(input_Jersey.value);
    }
    if(input_supplements.value){
       money+=money_S*parseInt(input_supplements.value);
    }
    if (select_state.value==="CF") {
        money+=7.5%+money;
    }
    switch (radio_Shipping.value) {
        
        case 2:
            money+=2+money;
            break;
    
        
        case 3:
            money+=3+money;
            break;
    
       
    }
    txt_estimate.value="$"+money;
    //console.log(money);
    
    
}