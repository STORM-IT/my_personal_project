var check_start=false;
var button =document.getElementById('b-check');
var container1=document.getElementById('container-number');
var list_number =[];
var effort=document.getElementById('effort');
var effort_check=0;

function get_number() {
    
    if(check_start===false)
    {
        container1.innerHTML="";
        for (let index = 0; index < 5; index++) {
            let element=document.createElement('input');
            element.type='number';
            element.style.width='50px';
            element.style.height='50px';
            element.style.marginTop='2px';
            element.style.fontSize='30px';
            element.min=0;
            element.max=10;
            element.value=0;
            element.ali=Math.floor(Math.random()*10);
            //list_number.push(Math.floor(Math.random()*10));
            
            container1.appendChild(element);
            
        }
        check_start=true;
        button.innerHTML='check number';
    }
    else
    {
        
        var number_all=document.querySelectorAll('input');
        var win=0;
        //effort_check++;
        effort.innerHTML=++effort_check;
        //console.log(number_all);
        for (let i = 0; i < 5; i++) {
            debugger
            if (number_all[i].value > number_all[i].ali) {
                number_all[i].style.background='red';
            }
            else if (number_all[i].value < number_all[i].ali)
            {
                number_all[i].style.background='blue';
            }
            else{
                number_all[i].style.background='green';
                win++;
            }
            
        }
        if(win===5){
            button.innerHTML='start game';
            check_start=false;
            win=0;
            
            
        }

    }
}