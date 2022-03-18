import React, { Fragment } from 'react'
import { Add__calendar_program } from "./script_calendar"
export default function Calendara() {
  return (
    <Fragment>
      <div id='calendar'>
        <div className="container_main">
          <p className="info-top header"><b>Calendar</b> </p>
          <p className="info-top">please write your program in<strong> text box</strong></p>
          <p className="info-top">To delete please press the key <kbd>X</kbd></p>
        </div>
        <div className="div-text-btn">
          <input type="text" name="" id="text_input" />
          <button onClick={() => Add__calendar_program()} className="btn_Add">Add to program</button>
        </div>
        <div id="container-calendar">
        </div>
      </div>
      <button className="btn btn-success">click</button>
    </Fragment>
  )
}
