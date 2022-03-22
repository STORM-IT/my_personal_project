// $(document).ready(function () {
  import $ from 'jquery'

  var close = false;
  $(".ul-menu li").mouseenter(function () {
    let id = $(this).attr('id');
    var ul;

    switch (id) {
      case "Foreign":
        ul = document.getElementById("list-nav-film-Foreign");
        $(ul).stop().fadeIn(200);
        $(ul).hover(function () {
          close = true;
        }, function () {
          close = false;
          $(ul).fadeOut(300);
        });
        break;
      case "parsian":
        ul = document.getElementById("list-nav-film-parsian");
        $(ul).stop().fadeIn(200);
        $(ul).hover(function () {
          close = true;
        }, function () {
          close = false;
          $(ul).fadeOut(300);
        });
        break;
      case "Bests":
        ul = document.getElementById("list-nav-film-Bests");
        $(ul).stop().fadeIn(200);
        $(ul).hover(function () {
          close = true;
        }, function () {
          close = false;
          $(ul).fadeOut(300);
        });
        break;
      case "years":
        ul = document.getElementById("list-nav-film-years");
        $(ul).stop().fadeIn(200);
        $(ul).hover(function () {
          close = true;
        }, function () {
          close = false;
          $(ul).fadeOut(300);
        });
        break;

      default:
        break;
    }
  });

  $(".ul-menu li").mouseleave(function () {

    if (close === false) {

      $(".ul-menu ul").fadeOut(300);

    }
  });
// });