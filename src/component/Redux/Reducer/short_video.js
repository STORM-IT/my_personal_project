export const urlVideoReducer = (state = "", action) => {

    switch (action.type) {
      case "SET-URL": 
        return state

    //   case "GET-URL": 
    //     return {...state}
        
      default: return state;
    }
  }