import React, { Fragment } from 'react'
import { Check } from './script_heads_or_tails'

export default function Heads_or_tails() {
    return (
        <Fragment>
            <div id='heads_or tails' className='text-center'>
                <h3 id="p-top" className='mt-4'>please one select button</h3>
                <div id="div-button">
                    <button onClick={() => Check("shir")} className="btn btn-warning m-4">شیر</button>
                    <button id="B-khat" onClick={() => Check("khat")} className="btn btn-info m-4">خط</button>
                </div>
                <div>
                    <hr />
                    <p>score</p>
                    <h5>computer : <span id="PC">0</span></h5>
                    <h5>user : <span id="USER">0</span></h5>
                </div>
            </div>
        </Fragment>

    )
}