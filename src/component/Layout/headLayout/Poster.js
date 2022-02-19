import React, { Fragment, useEffect, useRef, useState } from 'react'

export default function Poster() {

    const [url, setUrl] = useState("./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v");
    const [currentVideo, setCurrentVideo] = useState(1);

    const videos = ["./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v", "./IMG/head_short_video/computer-code-in-the-screen.mp4", "./IMG/head_short_video/open-office-space.m4v"];


    const vidRef = useRef();
    useEffect(() => {
        require("../../../JS/script");
        // setUrl(videos[currentVideo])
        // setUrl(videos[1])
        vidRef.current.play();
    }, [])

    useEffect(() => {
        console.log("effect")
        vidRef.current.play();
    }, [url])


    const next_video = () => {
        if (currentVideo === videos.length) {
            // debugger
            setCurrentVideo(0);
            setUrl(videos[0])
        } else {
            setCurrentVideo(currentVideo + 1)
            setUrl(videos[currentVideo])
        }
    }
    return (
        <Fragment>
            <div className='header-short'>
                <video id='short-video_head' className='header-short-video' src={url} onEnded={() => next_video()} ref={vidRef} muted />
                <span>به وبساخت شخصی من خوش آمدید</span>
                <svg className='header-short-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 1440 200">
                    <path fill="#393e46" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,90.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </Fragment>
    )
}
