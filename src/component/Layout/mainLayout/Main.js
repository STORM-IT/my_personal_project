import React from 'react'
import Expertise from './Expertise'
import Information from './Information'
import Project from './Project'
import SocialNetwork from './SocialNetwork'

export default function Main() {
  return (
    <main>
        <Information/>
        <Expertise/>
        <Project/>
        <SocialNetwork/>
        <a href='#head-nav' className='move-top'>
          <img src='./IMG/Move_logo/up.svg' className='move-top-icon'/>
        </a>
    </main>
  )
}
