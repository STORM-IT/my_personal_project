import React, { useRef } from 'react'
// import { Send_email } from './script'
import emailjs,{init} from '@emailjs/browser';

export default function Send_Email() {

    init("wrH_j_HcwnmuzdiaR");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_nkmcypx', 'template_bqvvosr', form.current, 'wrH_j_HcwnmuzdiaR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact'>
            <div className="wrapper">
                <form ref={form} onSubmit={sendEmail}>
                    <h2>ارتباط با من</h2>
                    <hr className="sep" />
                    <div className="group">
                        <input type="text" name="name" required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>نام</label>
                    </div>
                    <div className="group">
                        <input type="text" name="email" required="required" /><span className="highlight"></span><span className="bar"></span>
                        <label>ایمیل</label>
                    </div>
                    <div className="group">
                        <textarea type="textarea" name='message' rows="5" required="required"></textarea><span className="highlight"></span><span className="bar"></span>
                        <label>پیام</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit" >ارسال</button>
                    </div>
                </form>
            </div>
        </div>

    )
}