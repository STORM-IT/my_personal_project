// export const findCorrectNumber = (state = {num_input:[0, 0, 0, 0, 0], check_start:false}, action) => {
export const findCorrectNumber = (state = {num_input:[0, 0, 0, 0, 0],list_text_math:["","","","",""], check_start:false ,effort:0, button_text:"start game"}, action) => {

  switch (action.type) {
    case "SET_VALUE":
      return {...action.payload};
      case "CLEAR":
        return {num_input:[0, 0, 0, 0, 0],list_text_math:["","","","",""], check_start:false ,effort:0, button_text:"start game"};
    case "INCREMENT":
      return {...action.payload};
    case "DECREMENT":
      return {...action.payload};
    case "START_GAME":
      return {...action.payload};
    case "EFFORT":
      return {...action.payload};

    default: return state;
  }
}