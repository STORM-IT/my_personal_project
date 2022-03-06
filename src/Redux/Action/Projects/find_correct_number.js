// import { useSelector } from "react-redux"

// const stateValue=useSelector(state=>state.correctNumber)

export const increment = (index) => {
    return (dispatch, getState) => {
        var numbers = [...getState().correctNumber];
        numbers[index] += 1;
        dispatch({ type: "INCREMENT", payload: numbers });
    }
}

export const decrement = (index) => {
    return (dispatch, getState) => {
        var numbers = [...getState().correctNumber];
        numbers[index] -= 1;
        dispatch({ type: "DECREMENT", payload: numbers });
    }
}

export const setValueWithWrite = (index, value) => {
    return (dispatch, getState) => {
        var numbers = [...getState().correctNumber];
        numbers[index] = value == "" ? "" : parseInt(value);
        dispatch({ type: "INCREMENT", payload: numbers });
    }
}