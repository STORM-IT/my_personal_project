import React, { Fragment, useEffect, useRef, useState } from 'react'

import { url } from './component/utils/video_short_head'


export default function App() {

  const [url, setUrl] = useState("./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v");
  const [currentVideo, setCurrentVideo] = useState(1);

  const videos = ["./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v", "./IMG/head_short_video/computer-code-in-the-screen.mp4", "./IMG/head_short_video/open-office-space.m4v"];


  const vidRef = useRef();
  useEffect(() => {
    require("./JS/script");
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
      <header className='header'>
        <div className='nav'>
          <nav className='nav-container'>
            <a href=''>اطلاعات کلی</a>
            <a href=''>تکنولوژی ها</a>
            <a href=''>پروژه ها</a>
            <a href=''>شبکه های اجتماعی</a>
            {/* <a href=''>اطلاعات کلی</a> */}
          </nav>
        </div>
        <div className='header-short'>
          <video id='short-video_head' className='header-short-video' src={url} onEnded={() => next_video()} ref={vidRef} muted />
          <span>به وبساخت شخصی من خوش آمدید</span>
          <svg className='header-short-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 1440 200">
            <path fill="#393e46" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,90.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
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
      <main>
        <section className='main-information'>
          <img className='main-information-picture' src='./IMG/information/final/IMG_20220210_180308.jpg' />
          <div className='main-information-text-container'>
            <h3 className=''>اطلاعات کلی درباره من</h3><hr /><br />
            <p className=''>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
              و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
              هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
          </div>
        </section>
        {/* <section>
          
        </section> */}
        <section className='card'>
          <div className='card-container'>
            <div className='card-text'>
              <h3>تکنولوژی های آموزش دیده</h3>
            </div>
            <div className='card-expertise'>
              <div className='card-body'>
                <div className='card-expertise-html'>
                  <span>HTML</span>
                  <img src='./IMG/logo_lessen/html.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-css'>
                  <span>CSS</span>
                  <img src='./IMG/logo_lessen/css.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-javascript'>
                  <span>JAVASCTIPT</span>
                  <img src='./IMG/logo_lessen/javascript.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-bootstrap'>
                  <span>BOOTSTRAP</span>
                  <img src='./IMG/logo_lessen/bootstrap.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-jquery'>
                  <span>JQUERY</span>
                  <img src='./IMG/logo_lessen/jquery.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-sass'>
                  <span>SASS</span>
                  <img src='./IMG/logo_lessen/sass.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-react'>
                  <span>REACT</span>
                  <img src='./IMG/logo_lessen/react.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-git'>
                  <span>GIT</span>
                  <img src='./IMG/logo_lessen/git.svg' />
                </div>
              </div>
              <div className='card-body'>
                <div className='card-expertise-sharp'>
                  <span>C#</span>
                  <img src='./IMG/logo_lessen/c_sharp_logo.svg' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='project'>
          <div className='project-container'>

              <div className='project-container-project-1'>
                <span>HTML CSS</span>
                <div></div>
              </div>

              <div className='project-container-project-2'>
                <span>JAVASCTIPT</span>
                <div></div>
              </div>
              <div className='project-container-project-3'>
                <span>BOOTSTRAP</span>
                <div></div>
              </div>
              <div className='project-container-project-4'>
                <span>JQUERY</span>
                <div></div>
              </div>
              <div className='project-container-project-5'>
                <span>SASS</span>
                <div></div>
              </div>
              <div className='project-container-project-6'>
                <span>REACT</span>
                <div></div>
              </div>
              <div className='project-container-project-7'>
                <span>C#</span>
                <div></div>
              </div>

          </div>

        </section>
      </main>
      <footer>
        <div>

        </div>
      </footer>
    </Fragment>
  )
}
