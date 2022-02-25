export const urlVideoReducer = (state = "./IMG/head_short_video/computer-code-in-the-screen.mp4", action) => {

    switch (action.type) {
      case "SET-URL": 
        return action.payload;
        
      default: return state;
    }
  }