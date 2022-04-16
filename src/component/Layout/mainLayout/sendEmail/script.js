import { toast } from 'react-toastify'
import emailjs,{init} from '@emailjs/browser';

export const sendEmail = (e,form,validator) => {
    debugger

    var textBoxs=document.querySelectorAll(".contact .textBox")
    // init("wrH_j_HcwnmuzdiaR");
    debugger
        
        emailjs.sendForm('service_nkmcypx', 'template_bqvvosr', form.current, 'wrH_j_HcwnmuzdiaR')
            .then((result) => {
                console.log(result.text);
                toast.success('ایمیل با موفقیت ارسال شد', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
                for (let i = 0; i < textBoxs.length; i++) {
                    textBoxs[i].value="";
                }
            }, (error) => {
                console.log(error.text);
                toast.error('خطایی در ارسال ایمیل پیش آمده', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'dark'
                });
            });
};