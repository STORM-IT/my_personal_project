export const list_sort = () => {
    const btn_sort = document.querySelector(".project-btn-sort")
    const list_sort = document.querySelector("#project_list_sort")

    const time_show_list_sort =(check)=>{
        var time;
        if(check=="false"){
            btn_sort.classList.add("hide_btn_sort_project")
            btn_sort.classList.replace("show_btn_sort_project","hide_btn_sort_project")
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
    };

    btn_sort.addEventListener('mouseenter', () => {
        time_show_list_sort("true")
    })

    btn_sort.addEventListener('mouseleave', () => {
        time_show_list_sort("false");
    })

    list_sort.addEventListener('mouseenter',()=> {
        time_show_list_sort("true");
    })

    list_sort.addEventListener('mouseleave', () => {
        time_show_list_sort("false");
    })
}