import React, { Fragment, useState } from 'react'

export default function Nav() {
    
    

    return (
        <Fragment>
            <div id="head-nav" className='nav'>
                <nav className='nav-container'>
                    <div className='select'>
                        <div className='select-input'>
                            <p>بخش های سایت</p>
                        </div>
                        <div className='select-option'>
                            <a href='#head-nav' >خانه</a>
                            <a href='#information' >اطلاعات کلی</a>
                            <a href='#expertise' >تکنولوژی ها</a>
                            <a href='#project' >پروژه ها</a>
                            <a href='#SocialNetwork'>شبکه های اجتماعی</a>
                        </div>
                    </div>
                </nav>
                  
            </div>
        </Fragment>
    )
}
