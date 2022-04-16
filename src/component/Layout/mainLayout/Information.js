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
        <img id='img_info' src='./IMG/information/final/information_picture.jpeg' />
        <div className='text_img_container'>
          <h3 className=''>اطلاعات کلی درباره من</h3><hr />
          <p className='glowIn_text_info'>علی پارسامنش 20 ساله از مشهد.  برنامه نویس ویندوز و وب.  برنامه نویسی رو دوساله که شروع کردم ، با ویندوز استارت زدم و بعد از آموزش کوچ کردم به طراحی وبسایت.علاقمند به تکنولوژی های جدید و نو ظهور و همچنین خیلی قدیمی.</p>
        </div>
      </section>
    </Fragment>
  )
}
