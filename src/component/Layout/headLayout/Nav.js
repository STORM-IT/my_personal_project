import React, { Fragment, useState } from 'react'

export default function Nav() {
    
    const [inputHeadMove, setInputHeadMove] = useState("بخش های سایت")
    const [showNavOption, setshowNavOption] = useState(false)

    const show_select_option_nav=()=>{
        setshowNavOption(!showNavOption);
        console.log(showNavOption)
    }

    return (
        <Fragment>
            <div id="head-nav" className='nav'>
                <nav className='nav-container'>
                    <div className='select'>
                        <div className='select-input'>
                            <input onClick={()=>show_select_option_nav()} value={showNavOption?inputHeadMove:"بخش های سایت"} readOnly></input>
                        </div>
                        {showNavOption?(

                        <div className='select-option'>
                            <a href='#head-nav' onClick={()=>setInputHeadMove("خانه")}>خانه</a>
                            <a href='#information' onClick={()=>setInputHeadMove("اطلاعات کلی")}>اطلاعات کلی</a>
                            <a href='#expertise' onClick={()=>setInputHeadMove("تکنولوژی ها")}>تکنولوژی ها</a>
                            <a href='#project' onClick={()=>setInputHeadMove("پروژه ها")}>پروژه ها</a>
                            <a href='#SocialNetwork' onClick={()=>setInputHeadMove("شبکه های اجتماعی")}>شبکه های اجتماعی</a>
                        </div>
                        ):null}
                    </div>
                    <span>STOoORMX</span>
                </nav>
            </div>
        </Fragment>
    )
}
