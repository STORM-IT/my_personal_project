import React, { Fragment, useEffect } from 'react'
import { show_text_information } from '../../utils/glowIn_text'

export default function Information() {

  useEffect(() => {
    // show_text_information("info")
  }, [])

  return (
    <Fragment>
      {/* <div id='information' className='nav-space'> */}
      {/* </div> */}
      <section className='info_layout_css'>
        <img id='img_info' src='./IMG/information/final/IMG_20220210_180308.jpg' />
        <div className='text_img_container'>
          <h3 className=''>اطلاعات کلی درباره من</h3><hr />
          <p className='glowIn_text_info' style={{"white-space": "pre-wrap"}}>علی پارسامنش 20 ساله از مشهد. <br/> برنامه نویس ویندوز و وب. <br/> برنامه نویسی رو دوساله که شروع کردم ، با ویندوز استارت زدم و بعد از آموزش کوچ کردم به طراحی وبسایت.<br/>علاقمند به تکنولوژی های جدید و نو ظهور و همچنین خیلی قدیمی.<br/></p>
        </div>
      </section>
    </Fragment>
  )
}
