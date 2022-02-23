import React, { Fragment, useEffect, useState} from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';

import { url } from './component/utils/video_short_head'


export default function App() {

  const [scrollTop, setScrollTop] = useState()
  // const scroller = document.getElementsByTagName("html");


  useEffect(() => {

      
    // console.log("scrollTop" )
  }, [])
  window.scroll(()=>console.log("first"))
  // scroller.addEventListener("scroll",()=> console.log(scroller.scrollTop))
  
  // alert(window.pageYOffset)
  window.addEventListener('scroll',() => {
    show_footer(window.pageYOffset)
    console.log("scrollTop" )

});

const show_footer=(Scroll)=>{
  // setScrollTop(window.pageYOffset)
  console.log(Scroll)
  }
  return (
    <Fragment>
      {/* <div id='CONTAINER-ROOT' onScroll={()=>console.log(window.pageYOffset )}> */}
      <Head/>
      <button onClick={()=>console.log(window.pageYOffset )}>check scroll</button>
      <Main/>
      <Footer/>
      {/* </div> */}
    </Fragment>
  )
}
