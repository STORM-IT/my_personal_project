import React from 'react'
import Expertise from './Expertise'
import Information from './Information'
import Project from './project/Project'
import Send_Email from './sendEmail/Send_Email'
import SocialNetwork from './SocialNetwork'
import json_File from '../../JsonFiles/Project_details.json'
export default function Main() {
  // const snake_json=json_File.snake
  // console.log(snake_json)
  
  return (
    <main>
      <div id="leaves">
        <div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        </div>
     
  



      </div>

      <Information />
      <Expertise />
      <Project list_projects={json_File.PROJECT}/>
      <Send_Email/>
      <SocialNetwork />

    </main>
  )
}
