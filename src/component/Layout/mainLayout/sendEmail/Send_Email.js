import React from 'react'

export default function Send_Email() {
    return (
        <div class="container">
            <div class="row">
                <h1>contact us</h1>
            </div>
            <div class="row">
                <h4 >We'd love to hear from you!</h4>
                {/* text alighn center */}
            </div>
            <div class="row input-container">
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input name="name" type="text" required />
                        <label>Name</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <input name="email" type="text" required />
                        <label>Email</label>
                    </div>
                </div>

                <div class="col-xs-12">
                    <div class="styled-input wide">
                        <textarea required></textarea>
                        <label>Message</label>
                    </div>
                </div>
                <div class="col-xs-12">
                    <div class="btn-lrg submit-btn">Send Message</div>
                </div>
            </div>
        </div>

    )
}
