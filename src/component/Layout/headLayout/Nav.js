import React, { Fragment, useEffect, useState } from 'react'
import { hover_option } from './check_hover_option';

export default function Nav() {

    const [inputHeadMove, setInputHeadMove] = useState("بخش های سایت")
    const [showNavOption, setshowNavOption] = useState(false)
    // const [scrollTop, setScrollTop] = useState(window.pageYOffset)

    // const scrollTop=document.getElementById("root").onscroll;
    // useEffect(() => {
    //     setScrollTop(window.pageYOffset)
    //     console.log(scrollTop)
    // }, [scrollTop])

    const show_select_option_nav = () => {
        setshowNavOption(!showNavOption);
        console.log(showNavOption)
    }
    useEffect(() => {
        // hover_option();

    }, [])
    
    const show_footer = () => {

    }

    return (
        <Fragment>
            <div id="head-nav" className='nav'>
                <nav className='nav-container'>
                    {/* <div className='select'>
                        <div className='select-input' >
                            <input id='Input_Select' onClick={() => show_select_option_nav()} value={showNavOption ? inputHeadMove : "بخش های سایت"} readOnly></input>
                        </div>
                            <div className='select-option'>
                                <a href='#head-nav' onClick={() => setInputHeadMove("خانه")}>خانه</a>
                                <a href='#information' onClick={() => setInputHeadMove("اطلاعات کلی")}>اطلاعات کلی</a>
                                <a href='#expertise' onClick={() => setInputHeadMove("تکنولوژی ها")}>تکنولوژی ها</a>
                                <a href='#project' onClick={() => setInputHeadMove("پروژه ها")}>پروژه ها</a>
                                <a href='#SocialNetwork' onClick={() => setInputHeadMove("شبکه های اجتماعی")}>شبکه های اجتماعی</a>
                            </div>
                    </div> */}
                    <div className='div_text_head'><span>S</span><span>T</span><span>O</span><span>O</span><span>O</span><span>R</span><span>M</span><span>I</span><span>X</span></div>
                </nav>
            
            </div>
        </Fragment>
    )
}
