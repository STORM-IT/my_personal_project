import React from 'react'

export default function Send_Email() {
    return (
        <div class="container">
            <div>
                <h1 className='container_head'>ارتباط با من</h1>
            </div>
            <div>
                {/* <h4 className='container_head_text'></h4> */}
                {/* text alighn center */}
            </div>
            <div class="row input-container">
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input name="name" type="text" required />
                        <label>نام</label>
                    </div>
                </div>
                <div class="">
                    <div class="styled-input wide">
                        <input name="email" type="text" required />
                        <label>ایمیل</label>
                    </div>
                </div>

                <div class="">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>پیام</label>
                    </div>
                </div>
                <div class="">
                    <div class="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>

    )
}
