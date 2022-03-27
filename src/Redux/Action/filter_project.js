import json_project_file from '../../component/JsonFiles/Project_details.json'

export const getAllProjects = () => {
    console.log(json_project_file)
    return (dispatch, getState) => {
        // debugger
        dispatch({ type: "ALL_PROJECTS", payload: json_project_file });
    }
}

var expertise_check= [];
export const filterExpertise = (expertise,checked) => {
    console.log(json_project_file)
    return (dispatch, getState) => {
        // debugger
        const State={...getState().projects};
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
        // debugger
        // State.projects.PROJECT=list_filter_project.length===0?projects.PROJECT:list_filter_project;
        State.PROJECT=list_filter_project;
        dispatch({ type: "FILTER_EXPERTISE", payload:State });
    }
}
export const sort_lineCode = () => {
    return (dispatch, getState) => {
        // debugger
        const state_project={...getState().projects};
        const list_project=json_project_file.PROJECT;
        state_project.PROJECT=list_project.sort(function(a, b){return a.line_code + b.line_code});
        dispatch({ type: "SORT_LINE", payload: state_project });
    }
}
export const sort_date = () => {
    return (dispatch, getState) => {
        // debugger
        const state_project={...getState().projects};
        const list_project=json_project_file.PROJECT;
        state_project.PROJECT=list_project.sort(function(a, b){return a.line_code.replace('/', '') + b.line_code.replace('/', '')});
        dispatch({ type: "SORT_DATE", payload: state_project });
    }
}