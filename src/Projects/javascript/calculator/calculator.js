import React, { Fragment, useEffect } from 'react'
import { Operation, Show_calculator_result } from './script_calculator'
// import {Operation,Show_final_calculator} from './script_calculator'

export default function Calculator() {
    useEffect(() => {
        require("./script_calculator")
    }, [])
    
    return (
        <Fragment>
            <div id="calculator">


                <div id="calculator-container">
                    <p id="text_up_textbox"></p>
                    <header>

                        <input type="text" name="" id="input-show" readOnly />
                        <span id="math_mark"></span>
                    </header>
                    <div id='container_key'>
                        <div className="div-button">
                            <input type="button" value="%" onClick={()=>Operation('%')} className="btn math-key" id="1" />
                            <input type="button" value="/" onClick={()=>Operation('/')} className="btn math-key" id="1" />
                            <input type="button" value="C" onClick={()=>Operation('C')} className="btn math-key" id="1" />
                            <input type="button" value="<--" onClick={()=>Operation('<--')} className="btn  math-key" id="1" />
                        </div>
                        <div className="div-button">
                            <input type="button" value="7" onClick={()=>Operation(7)} className="btn number-key" id="1" />
                            <input type="button" value="8" onClick={()=>Operation(8)} className="btn number-key" id="1" />
                            <input type="button" value="9" onClick={()=>Operation(9)} className="btn number-key" id="1" />
                            <input type="button" value="x" onClick={()=>Operation('*')} className="btn  math-key" id="1" />
                        </div>
                        <div className="div-button">
                            <input type="button" value="4" onClick={()=>Operation(4)} className="btn number-key" id="1" />
                            <input type="button" value="5" onClick={()=>Operation(5)} className="btn number-key" id="1" />
                            <input type="button" value="6" onClick={()=>Operation(6)} className="btn number-key" id="1" />
                            <input type="button" value="-" onClick={()=>Operation('-')} className="btn  math-key" id="1" />
                        </div>
                        <div className="div-button">
                            <input type="button" value="1" onClick={()=>Operation(1)} className="btn number-key" id="1" />
                            <input type="button" value="2" onClick={()=>Operation(2)} className="btn number-key" id="1" />
                            <input type="button" value="3" onClick={()=>Operation(3)} className="btn number-key" id="1" />
                            <input type="button" value="+" onClick={()=>Operation('+')} className="btn  math-key" id="1" />
                        </div>
                        <div className="div-button">
                            <input type="button" value="- / +" onClick={()=>Operation('-/+')} className="btn  math-key" id="1" />
                            <input type="button" value="0" onClick={()=>Operation(0)} className="btn number-key" id="1" />
                            <input type="button" value="." onClick={()=>Operation('.')} className="btn math-key" id="1" />
                            <input type="button" value="=" onClick={()=>Show_calculator_result()} className="btn math-key" id="1" />
                        </div>


                    </div>
                    
                        {/* <button id='calculator-btn' onClick={()=>Show_final_calculator()}>click</button> */}
                    
                </div>


            </div>
        </Fragment>
    )
}
