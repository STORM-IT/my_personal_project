import React, { Fragment, useEffect, useRef } from 'react'



export default function App() {
  
  const vidRef=useRef();
  useEffect(() => {
    require("./JS/script");
    vidRef.current.play();
  },[])
  
  return (
    <Fragment>
      <header className='header'>
        
        {/* <video id='video_tag' src='./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.mp4' width="100%" height="240" autoplay muted loop/> */}
          {/* <source src='./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.mp4' type="video/mp4"/> */}
          {/* </video> */}
          <div className='header-short'>
          <video className='header-short-video'  src="./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.mp4" ref={vidRef} muted loop/>
          <span>به وبساخت شخصی من خوش آمدید</span>
          </div>
        {/* <div>
        <nav>
          <select>
            <option value={"home"}>خانه</option>
            <option value={"info"}>خصوصیات</option>
            <option value={"expertise"}>دانش</option>
            <option value={"social_network"}>شبکه های اجتماعی</option>
          </select>
        </nav>
        </div>
        <div>
          <span>
            STORM
          </span>
        </div> */}
      </header>
      <section className='card'>
        <div className='card-expertise'>
          <div className='card-expertise-html'>
            <span>HTML</span>
            <img src='./IMG/logo_lessen/html.svg' />
          </div>
          <div className='card-expertise-css'>
            <span>CSS</span>
            <img src='./IMG/logo_lessen/css.svg' />
          </div>
          <div className='card-expertise-javascript'>
            <span>JAVASCTIPT</span>
            <img src='./IMG/logo_lessen/javascript.svg' />
          </div>
          <div className='card-expertise-bootstrap'>
            <span>BOOTSTRAP</span>
            <img src='./IMG/logo_lessen/bootstrap.svg' />
          </div>
          <div className='card-expertise-jquery'>
            <span>JQUERY</span>
            <img src='./IMG/logo_lessen/jquery.svg' />
          </div>
          <div className='card-expertise-sass'>
            <span>SASS</span>
            <img src='./IMG/logo_lessen/sass.svg' />
          </div>
          <div className='card-expertise-react'>
            <span>REACT</span>
            <img src='./IMG/logo_lessen/react.svg' />
          </div>
          <div className='card-expertise-git'>
            <span>GIT</span>
            <img src='./IMG/logo_lessen/git.svg' />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
