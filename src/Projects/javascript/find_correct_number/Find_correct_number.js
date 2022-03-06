import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setValueWithWrite } from '../../../Redux/Action/Projects/find_correct_number';
import { get_number } from './Js_find_correct_number'

export default function Find_correct_number() {



    // var check_start = false;
    // var button = document.getElementById('b-check');
    // var math_container_text = document.getElementById('math-container-text');
    // var container1 = document.getElementById('container-number');
    // const list_input = document.querySelectorAll(".input-number");
    // const list_text_math = document.querySelectorAll(".math-text");
    // var list_number = [];
    // var effort = document.getElementById('effort');
    // var effort_check = 0;

    const dispatch = useDispatch();
    const num = useSelector(state => state.correctNumber)
    return (
        <div id="container">
            <p id="paragraph-effort ">your effort is: <span id="effort">0</span></p>
            <hr />
            <div id="container-number">
                <div className="container-input">
                    <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(0))} />
                    <input className="input-number" type="text" name="" id="" maxLength={3} value={num[0]} onChange={(e) => dispatch(setValueWithWrite(0, e.target.value))} />
                    <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(0))} />
                    <span className="math-text"></span>
                </div>
                <div className="container-input">
                    <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(1))} />
                    <input className="input-number" type="text" name="" id="" maxLength={3} value={num[1]} onChange={(e) => dispatch(setValueWithWrite(1,e.target.value))} />
                    <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(1))} />
                    <span className="math-text"></span>
                </div>
                <div className="container-input">
                    <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(2))} />
                    <input className="input-number" type="text" name="" id="" maxLength={3} value={num[2]} onChange={(e) => dispatch(setValueWithWrite(2,e.target.value))} />
                    <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(2))} />
                    <span className="math-text"></span>
                </div>
                <div className="container-input">
                    <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(3))} />
                    <input className="input-number" type="text" name="" id="" maxLength={3} value={num[3]} onChange={(e) => dispatch(setValueWithWrite(3,e.target.value))} />
                    <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(3))} />
                    <span className="math-text"></span>
                </div>
                <div className="container-input">
                    <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(4))} />
                    <input className="input-number" type="text" name="" id="" maxLength={3} value={num[4]} onChange={(e) => dispatch(setValueWithWrite(4,e.target.value))} />
                    <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(4))} />
                    <span className="math-text"></span>
                </div>

            </div>
            <hr />
            <button id="b-check" onClick={() => get_number()}>start game</button>
        </div>
    )
}
