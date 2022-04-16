import React, { useRef, useState } from 'react'
// import { Send_email } from './script'
import { ToastContainer } from 'react-toastify'
import { sendEmail } from './script';
import SimpleReactValidator from 'simple-react-validator';
export default function Send_Email() {

    const form = useRef();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const [, forceUpdate] = useState()
    const validator = useRef(new SimpleReactValidator({
        messages: {
            required: "پر کردن این فیلد الزامی میباشد",
            min: "کمتر از 10 کاراکتر نباید باشد",
            email: "ایمیل نوشته شده صحیح نمی باشد",
            integer: "قیمت باید عدد باشد",
        },
        element: (message) => <div style={{ color: "red" }}>{message}</div>,
    }))

    const check_validator=(e,form)=>{
        e.preventDefault();
        if (validator.current.allValid()) {
            sendEmail(e,form)
        }else{
            validator.current.showMessages();
            forceUpdate(1);
        }
    }

    return (
        <div className='contact'>
            <div className="wrapper">
                {/* <form ref={form} > */}
                <form ref={form} onSubmit={e=>check_validator(e,form)}>
                    <h2>ارتباط با من</h2>
                    <hr className="sep" />
                    <div className="group">
                        <input type="text" name="name" className='textBox' onChange={(e)=>{setName(e.target.value);validator.current.showMessageFor("name");}}/><span className="highlight"></span><span className="bar"></span>
                        <label>نام</label>
                        {validator.current.message('name', name, 'required')}
                    </div>
                    <div className="group">
                        <input type="text" name="email" className='textBox' onChange={(e)=>{setEmail(e.target.value);validator.current.showMessageFor("email");}}/><span className="highlight"></span><span className="bar"></span>
                        {validator.current.message('email', email, 'required|email')}
                        <label>ایمیل</label>
                    </div>
                    <div className="group">
                        <textarea type="textarea" name='message' className='textBox' rows="5" onChange={(e)=>{setMessage(e.target.value);validator.current.showMessageFor("message");}}></textarea><span className="highlight"></span><span className="bar"></span>
                        {validator.current.message('message', message, 'required')}
                        <label>پیام</label>
                    </div>
                    <div className="btn-box">
                        <button className="btn btn-submit" type="submit" >ارسال</button>
                    </div>
                </form>
                        {/* <button className="btn btn-submit" onClick={() => validator.current.showMessages()} >ارسال</button> */}
            </div>
            <ToastContainer />
        </div>

    )
}