const score=[0,0];
var select_pc=['shir','khat'];
var time1;
export function Check(point) {

    var number_random=Math.floor(Math.random()*2);
    
    if (point===select_pc[number_random]) {
        clearTimeout(time1);
       document.getElementById('p-top').innerHTML="your win";
       score[0]++; 
       document.getElementById('USER').innerHTML=score[0].toString();
       document.getElementById('div-button').style.backgroundColor="green";
       time1 = setTimeout(clear_1,2000);
    } else {
        clearTimeout(time1);
        document.getElementById('p-top').innerHTML="your filed"; 
        score[1]++;
        document.getElementById('PC').innerHTML=score[1].toString(); 
        document.getElementById('div-button').style.backgroundColor="red";
        time1 = setTimeout(clear_1,2000);
    }
    function clear_1() {
        document.getElementById('div-button').style.backgroundColor="white";
    }
}