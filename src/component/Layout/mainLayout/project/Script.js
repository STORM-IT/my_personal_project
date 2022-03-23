// export const Time_show_list_sort = (check) => {

//         const btn_sort = document.querySelector(".project-btn-sort")
//         const list_sort = document.querySelector("#project_list_sort")
//     var time;
//     if (check == "false") {
//         btn_sort.classList.add("hide_btn_sort_project")
//         btn_sort.classList.replace("show_btn_sort_project", "hide_btn_sort_project")
//         time = Time_show_list_sort = setTimeout(() => {
//             btn_sort.style.color = '#fff';
//             list_sort.classList.remove("visible")
//         }, 290);
//     } else {
//         btn_sort.classList.add("show_btn_sort_project")
//         btn_sort.classList.replace("hide_btn_sort_project", "show_btn_sort_project")
//         clearTimeout(time);
//         time = setTimeout(() => {
//             btn_sort.style.color = '#000';
//             list_sort.classList.add("visible")
//         }, 400);
//     }
// };

export const list_sort = () => {
    const btn_sort = document.querySelector(".project-btn-sort")
    const list_sort = document.querySelector("#project_list_sort")
    debugger

    var time;
    const time_show_list_sort = (check) => {

        if (check == "false") {
            clearTimeout(time);
            btn_sort.classList.add("hide_btn_sort_project")
            btn_sort.classList.replace("show_btn_sort_project", "hide_btn_sort_project")
            time = setTimeout(() => {
                btn_sort.style.color = '#fff';
                list_sort.classList.remove("visible")
            }, 400);
            // }, 290);
        } else {
            clearTimeout(time);
            btn_sort.classList.add("show_btn_sort_project")
            btn_sort.classList.replace("hide_btn_sort_project", "show_btn_sort_project")
            time = setTimeout(() => {
                btn_sort.style.color = '#000';
                list_sort.classList.add("visible")
            }, 500);
            // }, 400);
        }
    };

    btn_sort.addEventListener('mouseenter', () => {
        time_show_list_sort("true")
    })

    btn_sort.addEventListener('mouseleave', () => {
        // time = setTimeout(() => {
     
            time_show_list_sort("false");
            // }, 400);
    })

    list_sort.addEventListener('mouseenter', () => {

        time_show_list_sort("true");
    })

    list_sort.addEventListener('mouseleave', () => {
        time_show_list_sort("false");
    })
}

export const show_filter_section = () => {
    const filter_section = document.querySelector(".project-filter")
    const badge_move = document.querySelector(".project-filter div")
    const logo_move = document.querySelector(".project-filter div img")

    if (filter_section.classList.contains("show_project_filter_section")) {

        filter_section.classList.add("hide_project_filter_section")
        filter_section.classList.replace("show_project_filter_section", "hide_project_filter_section")


        logo_move.classList.add("right_project_filter_icon")
        logo_move.classList.replace("left_project_filter_icon", "right_project_filter_icon")


    } else {
        filter_section.classList.add("show_project_filter_section")
        filter_section.classList.replace("hide_project_filter_section", "show_project_filter_section")

        logo_move.classList.add("left_project_filter_icon")
        logo_move.classList.replace("right_project_filter_icon", "left_project_filter_icon")
    }
}