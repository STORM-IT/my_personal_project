import React, { Fragment, useEffect } from 'react'
import { show_text_information } from '../../utils/glowIn_text'

export default function Information() {

  useEffect(() => {
    // show_text_information("info")
  }, [])

  return (
    <Fragment>
      <div id='information' className='nav-space'>
      </div>
      <section className='info_layout_css'>
        <img id='img_info' src='./IMG/information/final/IMG_20220210_180308.jpg' />
        <div className='text_img_container'>
          <h3 className=''>اطلاعات کلی درباره من</h3><hr /><br />
          <p className='glowIn_text_info'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
            هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان .</p>
        </div>
      </section>
    </Fragment>
  )
}
