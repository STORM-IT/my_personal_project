import React, { Fragment } from 'react'

export default function Expertise() {
  return (
    <Fragment>
        <div id='expertise' className='nav-space'>
        </div>
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
                  <img src='./IMG/logo_lessen/c_sharp_logo.svg' />
                </div>
              </div>
            </div>
          </div>
        </section>
    </Fragment>
  )
}
