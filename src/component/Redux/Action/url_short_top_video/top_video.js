
var currentVideo=0;
const videos = [ "./IMG/head_short_video/computer-code-in-the-screen.mp4","./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v", "./IMG/head_short_video/open-office-space.m4v"];

export function Set_url_video(){
        const urlVideo= ()=>{
            if (currentVideo === videos.length) {
                currentVideo=0;
                return videos[0];
            } else {
                return videos[currentVideo];
            }
            
        };
        currentVideo+=1;
        
    return {type:"SET-URL" ,payload:urlVideo()}
}