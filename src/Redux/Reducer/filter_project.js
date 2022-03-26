export const my_projects = (state="", action) => {

  switch (action.type) {
    case "ALL_PROJECTS":
      return action.payload;
    case "FILTER_EXPERTISE":
      return action.payload;

    default: return state;
  }
}