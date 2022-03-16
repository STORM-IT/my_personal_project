import React from 'react'

export default function Send_Email() {
    return (
        <div className="container">
            <div>
                <h1 className='container_head'>ارتباط با من</h1>
            </div>
            <div>
                {/* <h4 classNameName='container_head_text'></h4> */}
                {/* text alighn center */}
            </div>
            <div className="row input-container">
                <div className="col-xs-12">
                    <div className="styled-input wide">
                        <input name="name" type="text" required />
                        <label>نام</label>
                    </div>
                </div>
                <div className="">
                    <div className="styled-input wide">
                        <input name="email" type="text" required />
                        <label>ایمیل</label>
                    </div>
                </div>

                <div className="">
                    <div className="styled-input wide">
                        <textarea required></textarea>
                        <label>پیام</label>
                    </div>
                </div>
                <div className="">
                    <div className="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>

    )
}
