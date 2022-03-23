import React from 'react'

export default function Send_Email() {
    return (
        <div className="contact">
            {/* <div>
                <h1 className='container_head'>ارتباط با من</h1>
            </div>
            <div>
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
            </div> */}
            <div className="wrapper">
                <form>
                    <h2>ارتباط با من</h2>
                    <hr className="sep" />
                    <div className="group">
                        <input type="text" required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>نام</label>
                    </div>
                    <div className="group">
                        <input type="text" required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>ایمیل</label>
                    </div>
                    <div className="group">
                        <textarea type="textarea" rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>پیام</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit">ارسال</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
