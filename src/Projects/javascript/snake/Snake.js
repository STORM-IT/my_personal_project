var game_Start = false;
var check_time_start = false;
var Time_game;
var snake = document.getElementById('Snake');
var Snake_all = document.querySelectorAll("#S_baby");
var Score = document.getElementById('Score');
var record_score = document.getElementById('record');
var view_time = document.getElementById('Time');
var btn_start = document.getElementById('Start');
var btn_Stop = document.getElementById('Stop');
var btn_restart = document.getElementById('Restart');
var div_container = document.querySelector('#Map');
var list_best_rank = [];
var gift;
var left_snake = snake.offsetLeft;
var top_snake = snake.offsetTop;
var height = 0;
var offset_left;
var offset_top;
var Loser = false;
var time_check_loser;
var move_info;
var delay_gift;
var score_number = 0;
var check_get_gift;
//
//
var option = document.getElementById('option');

function move_snake(move) {


    clearInterval(Time_game);

    if (game_Start === true) {
        switch (move) {
            case 'top':
                move_info = 0;
                Time_game = setInterval(move_snake_top, 50)
                break;

            case 'right':
                move_info = 1;
                Time_game = setInterval(move_snake_right, 50)
                break;

            case 'bottom':
                move_info = 2;
                Time_game = setInterval(move_snake_bottom, 50)
                break;

            case 'left':
                move_info = 3;
                Time_game = setInterval(move_snake_left, 50)
                break;

            default:
                break;
        }
    }

}


function move_snake_right() {


    check_Loser();


    let left = snake.offsetLeft;
    let top = snake.offsetTop;

    left_snake += 20;
    snake.style.left = left_snake + 'px';

    offset_left = snake.offsetLeft;
    option.innerHTML =
        'top:' + snake.offsetTop + '</br>' +
        'left:' + snake.offsetLeft;


    for (let i = 0; i < Snake_all.length; i++) {
        let now_left;
        let now_top;

        now_left = Snake_all[i].offsetLeft;
        now_top = Snake_all[i].offsetTop;

        Snake_all[i].style.left = left;
        Snake_all[i].style.top = top;

        Snake_all[i].style.display = "flex";

        left = parseInt(now_left);
        top = parseInt(now_top);
    }



}
function move_snake_top() {

    check_Loser();


    let left = snake.offsetLeft;
    let top = snake.offsetTop;

    top_snake -= 20;
    snake.style.top = top_snake + 'px';
    // Score.innerHTML=snake.offsetTop;
    offset_top = snake.offsetTop;
    option.innerHTML =
        'top:' + snake.offsetTop + '</br>' +
        'left:' + snake.offsetLeft;

    for (let i = 0; i < Snake_all.length; i++) {
        let now_left;
        let now_top;

        now_left = Snake_all[i].offsetLeft;
        now_top = Snake_all[i].offsetTop;

        Snake_all[i].style.left = left;
        Snake_all[i].style.top = top;

        Snake_all[i].style.display = "flex";

        left = parseInt(now_left);
        top = parseInt(now_top);
    }



}





function btn_hidden() {
    btn_Stop.style.display = 'none';
    btn_restart.style.display = 'none';

}















function move_snake_left() {

    check_Loser();


    let left = snake.offsetLeft;
    let top = snake.offsetTop;


    left_snake -= 20;
    snake.style.left = left_snake + 'px';
    //Score.innerHTML=snake.offsetLeft;
    offset_left = snake.offsetLeft;
    option.innerHTML =
        'top:' + snake.offsetTop + '</br>' +
        'left:' + snake.offsetLeft;

    for (let i = 0; i < Snake_all.length; i++) {
        let now_left;
        let now_top;

        now_left = Snake_all[i].offsetLeft;
        now_top = Snake_all[i].offsetTop;

        Snake_all[i].style.left = left;
        Snake_all[i].style.top = top;

        Snake_all[i].style.display = "flex";

        left = parseInt(now_left);
        top = parseInt(now_top);
    }
}
function move_snake_bottom() {

    check_Loser();


    let left = snake.offsetLeft;
    let top = snake.offsetTop;


    top_snake += 20;
    snake.style.top = top_snake + 'px';
    //Score.innerHTML=snake.offsetTop;
    offset_top = snake.offsetTop;
    option.innerHTML =
        'top:' + snake.offsetTop + '</br>' +
        'left:' + snake.offsetLeft;




    for (let i = 0; i < Snake_all.length; i++) {
        let now_left;
        let now_top;

        now_left = Snake_all[i].offsetLeft;
        now_top = Snake_all[i].offsetTop;

        Snake_all[i].style.left = left;
        Snake_all[i].style.top = top;

        Snake_all[i].style.display = "flex";

        left = parseInt(now_left);
        top = parseInt(now_top);
    }


}



function get_random_location() {


    clear_map();
    {
        snake.style.display = "flex";
        for (let i = 0; i < Snake_all.length; i++) {
            Snake_all[i].style.display = "flex";
        }
    }

    snake.style.top = 150 + 'px';
    snake.style.left = Math.floor(Math.random() * 800);
    move_info = Math.floor(Math.random() * 4);
    console.log(move_info);
    top_snake = snake.offsetTop;
    left_snake = snake.offsetLeft;
    check_time_start = true;
    game_Start = true;
    btn_Stop.style.display = 'inline-block';
    btn_restart.style.display = 'inline-block';
    delay_gift = setTimeout(set_gift, 5000);
    time_check_loser = setInterval(check_Loser, 10);
    timer_start_game(false);
    timer_start_game(true);
    walk_snake();

}
function Stop_timer() {
    if (check_time_start === true) {
        clearInterval(Time_game);
        btn_Stop.innerHTML = '--Start-Game--';
        check_time_start = false;
        game_Start = false;
        clearTimeout(delay_gift);
        clearInterval(TIME);
    } else {
        game_Start = true;
        clearInterval(Time_game);
        btn_Stop.innerHTML = 'Stop-Game';
        check_time_start = true;
        if (gift === null) {

            delay_gift = setTimeout(set_gift, 5000);
        }

        walk_snake();
        timer_start_game(true);


    }

}
var TIME;
var second = 0;
var minute = 0;
function timer_start_game(check) {


    if (check === true) {

        TIME = setInterval(function () {

            second++;
            if (second == 60) {
                second = 0;
                minute++;
            }
            view_time.innerHTML = ' ' + minute + ":" + second;
        }, 1000);

    }

    else {
        clearInterval(TIME);
        view_time.innerHTML = ' 00:00';
        second = 0;
        minute = 0;
    }
}


function restart_game() {
    timer_start_game(false);
}


function walk_snake() {

    switch (move_info) {
        case 0:
            Time_game = setInterval(move_snake_top, 200)
            break;

        case 1:
            Time_game = setInterval(move_snake_right, 200)
            break;

        case 2:
            Time_game = setInterval(move_snake_bottom, 200)
            break;

        case 3:
            Time_game = setInterval(move_snake_left, 200)
            break;
        default:
            break;
    }
}



function get_gift() {
    gift = document.querySelector(".animated_gift");
    let check_top = false;
    let check_left = false;
    for (let i = snake.offsetTop - 40; i < snake.offsetTop + 20; i++) {
        if (i == gift.offsetTop) {
            check_top = true;
        }
    }
    for (let i = snake.offsetLeft - 40; i < snake.offsetLeft + 20; i++) {
        if (i == gift.offsetLeft) {
            check_left = true;
        }
    }
    if (check_top === true && check_left === true) {



        for (let i = 0; i < 10; i++) {
            let left = Snake_all[Snake_all.length - 1].offsetLeft;
            let top = Snake_all[Snake_all.length - 1].offsetTop;

            let tag_span = document.createElement('span');
            tag_span.innerHTML = 'o';
            tag_span.classList.add('snake', 'baby');
            tag_span.setAttribute("id", "S_baby");
            tag_span.style.top = top;
            tag_span.style.left = left;
            div_container.appendChild(tag_span);
        }
        Score.innerHTML = ' ' + ++score_number;







        Snake_all = document.querySelectorAll("#S_baby");
        gift.remove();
        delay_gift = setTimeout(set_gift, 3000);
        clearInterval(check_get_gift);

    }
    //console.log(left_snake+':'+ top_snake);
}


function check_Loser() {

    for (let i = 0; i < Snake_all.length; i++) {
        let left = Snake_all[i].offsetLeft;
        let top = Snake_all[i].offsetTop;
        if (left === left_snake && top === top_snake) {
            Finish();
        }
    }
    if (left_snake >= 870) {
        Finish();
    }
    if (top_snake <= 0) {
        Finish();
    }
    if (left_snake <= -4) {
        Finish();
    }
    if (top_snake >= 373) {
        Finish();
    }
    function Finish() {

        alert('Game Over! ' + 'your score=' + score_number +
            ' your Time Ranking:' + view_time.innerHTML);


        clear_map();
        btn_start.style.display = 'inline-block';
        game_Start = false;
    }

}


function set_gift() {

    let tag_p = document.createElement('span');
    tag_p.classList.add("animated_gift");
    tag_p.style.top = Math.floor(Math.random() * 300);
    tag_p.style.left = Math.floor(Math.random() * 800);
    div_container.appendChild(tag_p);
    check_get_gift = setInterval(get_gift, 100);
}


document.addEventListener('keydown', function (event) {

    if (event.keyCode == 37) {
        move_info = 3;
        move_snake('left');
        //3

    }
    else if (event.keyCode == 39) {
        move_info = 1;
        move_snake('right');
        //1
    }
    else if (event.keyCode == 38) {
        move_info = 0;
        move_snake('top');
        //0

    }
    else if (event.keyCode == 40) {
        move_info = 2;
        move_snake('bottom');
        //2
    }
}, true);

function clear_map() {

    {
        let remove_baby_snake = document.querySelectorAll(".baby");
        if (remove_baby_snake.length != 0) {
            for (let i = 0; i < remove_baby_snake.length; i++) {
                remove_baby_snake[i].remove();
            }
        }
        for (let i = 0; i < Snake_all.length; i++) {
            Snake_all[i].style.display = "none";
        }
        debugger
        if (score_number != 0) {
            list_best_rank.push(score_number);
        }

        var best = 0;
        for (let i = 0; i < list_best_rank.length; i++) {
            if (best <= list_best_rank[i]) {
                best = list_best_rank[i];
            }


        }
        record_score.innerHTML = best;
    }
    score_number = 0;
    Score.innerHTML = ' ' + score_number;
    btn_start.style.display = 'none';
    btn_Stop.style.display = 'none';
    btn_restart.style.display = 'none';


    gift = document.querySelector(".animated_gift");
    clearInterval(check_get_gift);
    clearTimeout(delay_gift);
    clearInterval(Time_game);
    clearInterval(time_check_loser);
    timer_start_game(false);
    snake.style.display = "none";
    if (gift) {
        gift.remove();
    };
}