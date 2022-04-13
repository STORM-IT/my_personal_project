import React, { Fragment } from 'react'

export default function SocialNetwork() {
  return (
    <Fragment>
      {/* <div className='nav-space'>
      </div> */}
      <div className='SocialNetwork'>

        <div className='SocialNetwork-container'>
          <div className='line'>
            <img id='659' src='./IMG/logo_lessen/github.svg' />
            <div>
              <a href='https://github.com/alipsm' target={"_blank"} className='Username'>STOORMIX</a>
            </div>
          </div>
          <a onClick={()=>document.documentElement.scrollTop = 0} className='move-top'>
            <img src='./IMG/Move_logo/up.svg' className='move-top-icon' />
          </a>
        </div>
      </div>
    </Fragment>
  )
}
