var list_picture;
var list_dot;
var Container_img;
var number_picture = 0;

next();

function next() {
    list_picture = document.querySelectorAll(".pic-1");
    Container_img = document.getElementById('container-img');
    var dot_num = 0;
    for (let i = 0; i < list_picture.length; i++) {
        list_picture[i].classList.remove("next");
        list_picture[i].classList.remove("next1");
        list_picture[i].classList.remove("next2");
    }
    for (let i = 0; i < list_picture.length; i++) {
        list_picture[i].classList.add("next");
    }
    // list_picture[0].classList.add("next");
    // list_picture[1].classList.add("next");
    // list_picture[2].classList.add("next");
    setTimeout(next1, 4000);
    function next1() {
        for (let i = 0; i < list_picture.length; i++) {
            list_picture[i].classList.add("next1");
        }
        // list_picture[0].classList.add("next1");
        // list_picture[1].classList.add("next1");
        // list_picture[2].classList.add("next1");
        setTimeout(next2, 4000);
        function next2() {
            for (let i = 0; i < list_picture.length; i++) {
                list_picture[i].classList.add("next2");
            }
            // list_picture[0].classList.add("next2");
            // list_picture[1].classList.add("next2");
            // list_picture[2].classList.add("next2");
            setTimeout(next, 4000);
        }
    }
}
