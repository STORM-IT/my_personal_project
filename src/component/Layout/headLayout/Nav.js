import React, { Fragment } from 'react'

export default function Nav() {
    return (
        <Fragment>
            <div className='nav'>
                <nav className='nav-container'>
                    <a href='#information'>اطلاعات کلی</a>
                    <a href='#expertise'>تکنولوژی ها</a>
                    <a href='#project'>پروژه ها</a>
                    <a href=''>شبکه های اجتماعی</a>
                </nav>
            </div>
        </Fragment>
    )
}
