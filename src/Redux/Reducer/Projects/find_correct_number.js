export const findCorrectNumber = (state = [1, 2, 3, 4, 5], action) => {

  switch (action.type) {
    case "SET_VALUE":
      return [...action.payload];
    case "INCREMENT":
      return [...action.payload];
    case "DECREMENT":
      return [...action.payload];

    default: return state;
  }
}