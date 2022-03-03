var first_number;
var final;
var text_box=document.getElementById('input-show');
var marks=document.getElementById('marks');
var First_number=document.getElementById('First_number');
var key;
function operation(keyword) {
    

    switch (keyword) {
        case 1:
        if (final===undefined) {
            final=1;
            text_box.value=1;
        } else {
            final+='1';
        text_box.value=final;
        }
            break;
        //
        //
        case 2:
            if (final===undefined) {
                final=2;
                text_box.value=2;
            } else {
                final+='2';
    
            text_box.value=final;
            }
            break;
            //
            //
        case 3:
            if (final===undefined) {
                final=3;
                text_box.value=3;
            } else {
                final+='3';
            text_box.value=final;
            }
            break;
        case 4:
        if (final===undefined) {
            final=4;
            text_box.value=4;
        } else {
            final+='4';
        text_box.value=final;
        }
            break;
        //
        //
        case 5:
            if (final===undefined) {
                final=5;
                text_box.value=5;
            } else {
                final+='5';
    
            text_box.value=final;
            }
            break;
            //
            //
        case 6:
            if (final===undefined) {
                final=6;
                text_box.value=6;
            } else {
                final+='6';
            text_box.value=final;
            }
            break;
        case 7:
        if (final===undefined) {
            final=7;
            text_box.value=7;
        } else {
            final+='7';
        text_box.value=final;
        }
            break;
        //
        //
        case 8:
            if (final===undefined) {
                final=8;
                text_box.value=8;
            } else {
                final+='8';
    
            text_box.value=final;
            }
            break;
            //
            //
        case 9:
            if (final===undefined) {
                final=9;
                text_box.value=9;
            } else {
                final+='9';
            text_box.value=final;
            }
            break;
        case 0:
        if (final===undefined) {
            final=0;
            text_box.value=0;
        } else {
            final+='0';
        text_box.value=final;
        }
            break;
        //
        // ////////////////////////////////////////////////////////////////// //
        //
        //
        //
        //
        case '.':
            
            if (final!=undefined || final !='') {
                if (final.includes('.')==false) {
                    console.log(final.includes('.'));
                final+='.';
                text_box.value=final;
                }
                
            } 
            break;
            //
            //
        case '*':   
           if (text_box.value != '') {
          
               if (first_number=='' || first_number===undefined) {
                first_number=final;
                First_number.innerHTML=final;
                final='';
                text_box.value='';
               }
            marks.innerHTML='x';
            key='*';
           }
                
            break;
            //
            //
        case '+':   
           if (text_box.value != '') {
               if (first_number=='' || first_number===undefined) {
                first_number=final;
                First_number.innerHTML=final;
                final='';
                text_box.value='';
               }
            marks.innerHTML='+';
            key='+';
           }
                
            break;
            //
            //
        case '-':   
           if (text_box.value != '') {
          debugger
               if (first_number=='' || first_number===undefined) {
                first_number=final;
                First_number.innerHTML=final;
                final='';
                text_box.value='';
               }
            marks.innerHTML='-';
            key='-';
           }
                
            break;
            //
            //
































        case '%':
            
        if (marks !='' && first_number !='' && text_box.value != '') {
            
            debugger

            let numbers=(1000/100)*20;
            let number=(parseFloat(first_number)/100)*parseFloat(text_box.value);
            text_box.value= eval(parseFloat(first_number) + key + number );
         first_number='';
         final=text_box.value;
         marks.innerHTML='';
         First_number.innerHTML='';
        }
            break;
            //
            //
        case '/':   
           if (text_box.value != '') {
          debugger
               if (first_number=='' || first_number===undefined) {
                first_number=final;
                First_number.innerHTML=final;
                final='';
                text_box.value='';
               }
            marks.innerHTML='/';
            key='/';
           }
                
            break;











































            //
            //
        case '-/+':   
           if (text_box.value != '') {
debugger
            if (text_box.value.includes('-') == true) {
                text_box.value= text_box.value.replace('-','');
                final= final.replace('-','');
            } else {
                text_box.value='-'+text_box.value;
                final='-'+final;
            }
          
           }
                
            break;
    
            //
            //
        case 'C':   
        text_box.value='';
        First_number.innerHTML='';
        first_number='';
        marks.innerHTML='';
        final='';
        key='';
         break;
            //
            //
        case '<--':   
        debugger
        text_box.value= text_box.value.slice(0,text_box.value.length-1);
        final= final.slice(0,final.length-1)
        
         break;
            //
            //
        
        default:
            break;
    }
    console.log(key);
}

function show_final() {
    if(first_number != '')
    {
        text_box.value= eval(parseFloat(first_number) + key + parseFloat(text_box.value) );
        first_number='';
        final=text_box.value;
        marks.innerHTML='';
        First_number.innerHTML='';
    }
    
}