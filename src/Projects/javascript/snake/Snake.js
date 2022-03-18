import React, { useEffect } from 'react'
import {Btn_hidden,Get_random_location,Stop_timer,Move_snake} from './script_snake'

export default function Snake() {
    useEffect(() => {
        Btn_hidden()
    }, [])
    
    return (
        <div id="Snake">
            <div id="container">
                <div id="Rank-info">
                    <p className="Rank-p">Score:<span id="Score" className="Rank"> 0</span></p>
                    <p className="Rank-p">Time:<span id="Time" className="Rank"> 00:00</span></p>
                    <p className="Rank-p">Record:<span id="record" className="Rank"> 0</span></p>
                </div>
                <div id="Map" className="position-relative">
                    <span className="snake snake_body" >o</span>
                    <span className="snake snake_body" >o</span>
                    <span className="snake text-success" id="Snake_head">o</span>
                </div>
                <div className="d-flex justify-content-around w-100 mt-2" id="container-button">
                    <button onClick={()=>Get_random_location()} className="btn btn-success" id="Start">Start</button>
                    <button onClick={()=>Get_random_location()} className="btn btn-warning" id="Restart">Restart</button>
                    <button onClick={()=>Stop_timer()} className="btn btn-danger" id="Stop">Stop-Game</button>
                </div>
                <div className="d-flex justify-content-around flex-column align-items-center mt-3">
                    <div className="m-1">
                        <button onClick={()=>Move_snake('top')} className="btn btn-info">^</button>
                    </div>
                    <div className="m-1">
                        <button onClick={()=>Move_snake('left')} className="btn btn-info me-4">
                            left</button>
                        <button onClick={()=>Move_snake('right')} className="btn btn-info ms-4">right</button>
                    </div>
                    <div className="m-1">
                        <button onClick={()=>Move_snake('bottom')} className="btn btn-info">v</button>
                    </div>
                </div>
            </div>
            <p id="option">ll</p>
        </div>
    )
}
