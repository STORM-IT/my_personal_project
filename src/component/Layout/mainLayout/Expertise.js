import React, { Fragment } from 'react'

export default function Expertise() {

  return (
    <Fragment>
      <div id='expertise' className='nav-space'>
      </div>
      <div className='info_layout_css'>

          
        <div className='text_img_container'>
          <h3>پروژه ها</h3>
          <hr />
          <p className='glowIn_text_expertise'>تفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد .</p>

        </div>
        <img id='img_expertise' src='./IMG/img_design/expertise_img.png' />
      </div>
      <section className='card'>
        <div className='card-container' >
          <div className='card-text'>
            <h3>تکنولوژی های آموزش دیده</h3>
          </div>
          <div className='card-expertise'>
            <div className='card-body'>
              <div className='card-expertise-html vc'>
                <span>HTML</span>
                <img src='./IMG/logo_lessen/html.svg' />
              </div>
            </div>
            <div className='card-body'>
              <div id='card-expertise-css1' className='card-expertise-css vc'>
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
              <div className='card-expertise-redux'>
                <span>REDUX</span>
                <img src='./IMG/logo_lessen/redux.svg' />
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
                <img src='./IMG/logo_lessen/c_sharp.svg' />
              </div>
            </div>
          </div>
        </div>
      </section>
 
    </Fragment>
  )
}
