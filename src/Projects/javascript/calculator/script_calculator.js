var check_up_textbox;
var key_char;
var key;
var text_box;
var math_mark;
var result_up_textbox;

export function Operation(keyword) {

    text_box = document.getElementById('input-show');
    math_mark = document.getElementById('math_mark');
    result_up_textbox = document.getElementById('text_up_textbox');

    switch (keyword) {
        case 1:
            if (key_char === undefined) {
                key_char = 1;
                text_box.value = 1;
            } else {
                key_char += '1';
                text_box.value = key_char;
            }
            break;
        //
        //
        case 2:
            if (key_char === undefined) {
                key_char = 2;
                text_box.value = 2;
            } else {
                key_char += '2';

                text_box.value = key_char;
            }
            break;
        //
        //
        case 3:
            if (key_char === undefined) {
                key_char = 3;
                text_box.value = 3;
            } else {
                key_char += '3';
                text_box.value = key_char;
            }
            break;
        case 4:
            if (key_char === undefined) {
                key_char = 4;
                text_box.value = 4;
            } else {
                key_char += '4';
                text_box.value = key_char;
            }
            break;
        //
        //
        case 5:
            if (key_char === undefined) {
                key_char = 5;
                text_box.value = 5;
            } else {
                key_char += '5';

                text_box.value = key_char;
            }
            break;
        //
        //
        case 6:
            if (key_char === undefined) {
                key_char = 6;
                text_box.value = 6;
            } else {
                key_char += '6';
                text_box.value = key_char;
            }
            break;
        case 7:
            if (key_char === undefined) {
                key_char = 7;
                text_box.value = 7;
            } else {
                key_char += '7';
                text_box.value = key_char;
            }
            break;
        //
        //
        case 8:
            if (key_char === undefined) {
                key_char = 8;
                text_box.value = 8;
            } else {
                key_char += '8';

                text_box.value = key_char;
            }
            break;
        //
        //
        case 9:
            if (key_char === undefined) {
                key_char = 9;
                text_box.value = 9;
            } else {
                key_char += '9';
                text_box.value = key_char;
            }
            break;
        case 0:
            if (key_char === undefined) {
                key_char = 0;
                text_box.value = 0;
            } else {
                key_char += '0';
                text_box.value = key_char;
            }
            break;
        //
        //
        case '.':

            if (key_char != undefined || key_char != '') {
                if (key_char.includes('.') == false) {
                    console.log(key_char.includes('.'));
                    key_char += '.';
                    text_box.value = key_char;
                }
            }
            break;
        //
        //
        case '*':
            trying_math("*");

            break;
        //
        //
        case '+':
            trying_math("+");
            break;
        //
        //
        case '-':
            trying_math("-");

            break;
        //
        //

        case '%':
            if (math_mark.innerHTML != '' && check_up_textbox != '' && text_box.value != '') {
                let number = (parseFloat(check_up_textbox) / 100) * parseFloat(text_box.value);
                text_box.value = eval(parseFloat(check_up_textbox) + key + number);
                check_up_textbox = '';
                key_char = text_box.value;
                math_mark.innerHTML = '';
                result_up_textbox.innerHTML = '';
            }
            break;
        //
        //
        case '/':
            trying_math("/");
            break;
        //
        //
        case '-/+':
            if (text_box.value != '') {
                if (text_box.value.includes('-') == true) {
                    text_box.value = text_box.value.replace('-', '');
                    key_char = key_char.replace('-', '');
                } else {
                    text_box.value = '-' + text_box.value;
                    key_char = '-' + key_char;
                }
            }
            break;
        //
        //
        case 'C':
            text_box.value = '';
            result_up_textbox.innerHTML = '';
            check_up_textbox = '';
            math_mark.innerHTML = '';
            key_char = '';
            key = '';
            break;
        //
        //
        case '<--':
            debugger
            text_box.value = text_box.value.slice(0, text_box.value.length - 1);
            key_char = key_char.slice(0, key_char.length - 1)
            break;
        //
        //
        default:
            break;
    }
}

function trying_math(mark) {
    if (text_box.value != '') {
        if (check_up_textbox == '' || check_up_textbox === undefined) {
            check_up_textbox = key_char;
            result_up_textbox.innerHTML = key_char;
            key_char = '';
            text_box.value = '';
        } else {
            result_up_textbox.innerHTML = eval(parseFloat(check_up_textbox) + key + parseFloat(text_box.value));
            check_up_textbox = result_up_textbox.innerHTML;
            key_char = '';
            text_box.value = '';
        }
        math_mark.innerHTML = mark;
        key = mark;
    }
}

export function Show_calculator_result() {
    if (check_up_textbox != '') {
        debugger
        if (text_box.value) {

            text_box.value = eval(parseFloat(check_up_textbox) + key + parseFloat(text_box.value));
        } else {
            text_box.value = check_up_textbox;

        }
        check_up_textbox = '';
        key_char = text_box.value;
        math_mark.innerHTML = '';
        result_up_textbox.innerHTML = '';
    }
}