import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-head'>
        <div className='footer-head-left'>
          <div className='footer-head-left-telegram' >
            
            <p  className='telegram'><span>@PSMNS<img  /></span></p>
          </div>
          <div className='footer-head-left-instagram' >
            <p href='' className='instagram'><span>ali._.psm<img /></span></p>
          </div>
          <div className='footer-head-left-whatsApp' >
            <p href='' className='whatsApp'><span>09370915132<img /></span></p>
          </div>
          <div className='footer-head-left-call' >
            <p href='' className='call'><span>09370915132<img /></span></p>
          </div>
          <div className='footer-head-left-location' >
            <p href='' className='location'><span>Iran / Mashhad<img /></span></p>
          </div>
        </div>
        <div className='footer-head-right'>
          <p className='version'>version : <span>1.1.1</span></p>
          <p className='create'>create : <span> 2022/02/21</span></p>
          <p className='update'>last update : <span> 2022/02/21</span></p>
          <p className='brand'>brand : <span> STOORMIX</span></p>
        </div>
      </div>
      
    </div>
  )
}