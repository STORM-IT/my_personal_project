import React, { Fragment } from 'react'

export default function Nav() {
    return (
        <Fragment>
            <div id="head-nav" className='nav'>
                <nav className='nav-container'>
                    <a href='#head-nav'>خانه</a>
                    <a href='#information'>اطلاعات کلی</a>
                    <a href='#expertise'>تکنولوژی ها</a>
                    <a href='#project'>پروژه ها</a>
                    <a href='#SocialNetwork'>شبکه های اجتماعی</a>
                </nav>
            </div>
        </Fragment>
    )
}
