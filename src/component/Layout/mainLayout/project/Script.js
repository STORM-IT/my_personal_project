export const list_sort = () => {

    // const btn_sort = document.querySelector(".project-btn-sort")
    const btn_sort = document.querySelector(".project-btn-sort")
    const list_sort = document.querySelector("#project_list_sort")

    const time_show_list_sort =(check)=>{
        var time;
        if(check=="false"){
            btn_sort.classList.add("hide_btn_sort_project")
            btn_sort.classList.replace("show_btn_sort_project","hide_btn_sort_project")
            // list_sort.removeEventListener('mouseenter', option_mouseEnter)
            time= time_show_list_sort = setTimeout(() => {
                btn_sort.style.color = '#fff';
                list_sort.classList.remove("visible")
            }, 300);
        }else{
            btn_sort.classList.add("show_btn_sort_project")
        btn_sort.classList.replace("hide_btn_sort_project", "show_btn_sort_project")
            clearTimeout(time);
            time= setTimeout(() => {
                btn_sort.style.color = '#000';
                list_sort.classList.add("visible")
            }, 300);
        }
        // if(check){

        // }
    };

    function option_mouseEnter() {
        // list_sort.classList.add("visible")
        // btn_sort.classList.remove("hide_btn_sort_project")
        // list_sort.classList.add("visible")
        time_show_list_sort("true");
        // alert("d")
    }

    btn_sort.addEventListener('mouseenter', () => {
        // alert("D")
        // btn_sort.classList.add("show_btn_sort_project")
        // btn_sort.classList.add("show_btn_sort_project")
        // btn_sort.classList.replace("hide_btn_sort_project", "show_btn_sort_project")
        // time_show_list_sort = setTimeout(() => {
        //     list_sort.classList.add("visible")
        // }, 300);
        // time_show_list_sort();
        time_show_list_sort("true")
        // list_sort.classList.replace("hide_option_select_nav", "show_option_select_nav")
    })

    btn_sort.addEventListener('mouseleave', () => {
        // setTimeout(() => {
        // btn_sort.classList.add("hide_btn_sort_project")
        // setTimeout(() => {
        //     list_sort.classList.remove("visible")
        // }, 300);
        // btn_sort.classList.replace("show_btn_sort_project","hide_btn_sort_project")
        // }, 1000);
        time_show_list_sort("false");
        // //     list_sort.classList.add("hide_option_select_nav")
        // //     list_sort.classList.replace("show_option_select_nav", "hide_option_select_nav")
    })

    // list_sort.addEventListener('mouseenter', () => option_mouseEnter())
    list_sort.addEventListener('mouseenter',()=> {
        time_show_list_sort("true");
    })


    list_sort.addEventListener('mouseleave', () => {

        // btn_sort.classList.add("hide_btn_sort_project")
        // list_sort.removeEventListener('mouseenter', option_mouseEnter)
        time_show_list_sort("false");
    })
}