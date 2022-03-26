import json_project_file from '../../component/JsonFiles/Project_details.json'

export const getAllProjects = () => {
    console.log(json_project_file)
    return (dispatch, getState) => {
        dispatch({ type: "ALL_PROJECTS", payload: json_project_file.PROJECT });
    }
}

var expertise_check= [];
export const filterExpertise = (expertise,checked) => {
    console.log(json_project_file)
    return (dispatch, getState) => {
        const projects=json_project_file;
        let list_filter_project=[];

        const find_index_expertise=expertise_check.findIndex(prop=>prop.expertise===expertise)
        if (find_index_expertise!=-1) {
            expertise_check[find_index_expertise]={expertise,checked}
        } else {
            expertise_check.push({expertise,checked})
        }
        console.log(expertise_check[0].expertise)
        projects.PROJECT.map(prop=>{
            for (let i = 0; i < expertise_check.length; i++) {
                if (expertise_check[i].checked===true&&prop.expertions.findIndex(p=>p===expertise_check[i].expertise)!=-1) {
                    list_filter_project.push(prop);
                    break
                }
            }
        })
        debugger
        dispatch({ type: "FILTER_EXPERTISE", payload: list_filter_project.length===0?projects.PROJECT:list_filter_project});
    }
}