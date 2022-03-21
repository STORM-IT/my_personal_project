import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, get_number, increment, setValueWithWrite } from '../../../Redux/Action/Projects/find_correct_number';
// import { Get_number } from './Js_find_correct_number'

export default function Find_correct_number() {

    const dispatch = useDispatch();
    const num = useSelector(state => state.correctNumber)
    const { button_text, effort, list_text_math } = num;

    return (
        
            <div id="find_correct_number">
                <p id="paragraph-effort">your effort is : <span id="effort">{effort}</span></p>
                <hr />
                <div id="container-number">
                    <div className="container-input">
                        <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(0))} />
                        <input className="input-number" type="text" name="" id="" maxLength={4} value={num.num_input[0]} onChange={(e) => dispatch(setValueWithWrite(0, e.target.value))} />
                        <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(0))} />
                        <span className="math-text">{list_text_math[0]}</span>
                    </div>
                    <div className="container-input">
                        <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(1))} />
                        <input className="input-number" type="text" name="" id="" maxLength={4} value={num.num_input[1]} onChange={(e) => dispatch(setValueWithWrite(1, e.target.value))} />
                        <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(1))} />
                        <span className="math-text">{list_text_math[1]}</span>
                    </div>
                    <div className="container-input">
                        <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(2))} />
                        <input className="input-number" type="text" name="" id="" maxLength={4} value={num.num_input[2]} onChange={(e) => dispatch(setValueWithWrite(2, e.target.value))} />
                        <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(2))} />
                        <span className="math-text">{list_text_math[2]}</span>
                    </div>
                    <div className="container-input">
                        <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(3))} />
                        <input className="input-number" type="text" name="" id="" maxLength={4} value={num.num_input[3]} onChange={(e) => dispatch(setValueWithWrite(3, e.target.value))} />
                        <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(3))} />
                        <span className="math-text">{list_text_math[3]}</span>
                    </div>
                    <div className="container-input">
                        <input className="span-input-up" type="button" value="up" onClick={() => dispatch(increment(4))} />
                        <input className="input-number" type="text" name="" id="" maxLength={4} value={num.num_input[4]} onChange={(e) => dispatch(setValueWithWrite(4, e.target.value))} />
                        <input className="span-input-down" type="button" value="down" onClick={() => dispatch(decrement(4))} />
                        <span className="math-text">{list_text_math[4]}</span>
                    </div>

                </div>
                <hr />
                {/* <button id="b-check" onClick={() => dispatch(get_number())}>start</button> */}
                <button id="b-check" onClick={() => dispatch(get_number())}>{button_text}</button>
            </div>
        
    )
}
