
var check_start = false;
var button;
var list_input;
var list_text_math;
var effort;
var effort_check = 0;

button = document.getElementById('b-check');
list_input = document.querySelectorAll(".input-number");
list_text_math = document.querySelectorAll(".math-text");
effort = document.getElementById('effort');

export const get_number = () => {
    const list_operator_math = [" + ", " - ", " * "]
    var list_math = []
    for (let i = 0; i < 5; i++) {
        const length_math = Math.floor(Math.random() * 2 + 1)
        var number = Math.floor(Math.random() * 9 + 1);

        for (let i = 0; i < length_math; i++) {
            number += `${list_operator_math[Math.floor(Math.random() * 3)]} ${Math.floor(Math.random() * 10)}`
        }
        list_math.push(number);
    }

    if (check_start === false) {
        for (let i = 0; i < 5; i++) {
            list_text_math[i].innerHTML = list_math[i].replaceAll(" * ", " x ");
            list_text_math[i].classList.add("animation_text_math")
            list_input[i].correct = eval(list_math[i]);
        }
        check_start = true;
        button.innerHTML = 'check number';
    }
    else {
        var number_all = document.querySelectorAll('.input-number');
        var win = 0;
        effort.innerHTML = ++effort_check;
        for (let i = 0; i < 5; i++) {
            debugger
            if (number_all[i].value > number_all[i].correct) {
                number_all[i].style.background = 'red';
            }
            else if (number_all[i].value < number_all[i].correct) {
                number_all[i].style.background = 'blue';
            }
            else {
                number_all[i].style.background = 'green';
                win++;
            }

        }
        if (win === 5) {
            button.innerHTML = 'start game';
            check_start = false;
            list_math = [];
            win = 0;
        }

    }
}
