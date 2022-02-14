import React, { Fragment } from 'react'



export default function App() {
  return (
    <Fragment>
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
