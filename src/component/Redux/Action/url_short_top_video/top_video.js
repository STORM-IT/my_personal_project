// import { useState } from "react";

// const [currentVideo, setCurrentVideo] = useState(1);
// const videos = ["./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v", "./IMG/head_short_video/computer-code-in-the-screen.mp4", "./IMG/head_short_video/open-office-space.m4v"];

export function set_url_video(){


    // const urlVideo=()=>{
        
    //     if (currentVideo === videos.length) {
    //         setCurrentVideo(0);
    //         return urlVideo(videos[0]);
    //     } else {
    //         setCurrentVideo(currentVideo + 1);
    //         return urlVideo(videos[currentVideo]);
    //     }

    // };
        
    
    return {type:"SET-URL" ,payload:"a"}
    // return {type:"SET-URL" ,payload:urlVideo()}
}