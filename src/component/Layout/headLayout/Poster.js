import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Set_url_video } from '../../../Redux/Action/url_short_top_video/top_video';

export default function Poster() {

    // const [url, setUrl] = useState("./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v");
    // const [currentVideo, setCurrentVideo] = useState(1);

    // const videos = ["./IMG/head_short_video/top-view-of-business-handshake-and-client-meeting.m4v", "./IMG/head_short_video/open-office-space.m4v"];

    const url = useSelector(state => state.url)
    const dispatch = useDispatch();

    // console.log(url)
    const vidRef = useRef();
    useEffect(() => {
        // dispatch(set_url_video())
        require("../../../JS/script");
        // effect_text_head();
        // vidRef.current.play();
        effect_text_head();
    }, [])

    // useEffect(() => {
    //     vidRef.current.play();
    // }, [url])


    const effect_text_head = () => {
        async function init() {
            const node = document.querySelector("#type-text");

            await sleep(1000);
            node.innerText = "";
            // await node.type("سلام, ");

            while (true) {
                await node.type("سلام");
                await sleep(2000);
                await node.delete("سلام");


                await node.type(
                    "به وبسایت شخصی من خوش آمدید"
                );
                await sleep(2000);
                await node.delete(
                    "به وبسایت شخصی من خوش آمدید "
                );

                await node.type(
                    "من اینجا یک سری اطلاعاتی خیلی کلی درباره خودم رو میگم"
                );
                await sleep(2000);
                await node.delete(
                    "من اینجا یک سری اطلاعاتی خیلی کلی درباره خودم رو میگم "
                );

                await node.type(
                    "امید وارم مشکلی در کارکردن با سایت نداشته باشین"
                );
                await sleep(2000);
                await node.delete(
                    "امید وارم مشکلی در کارکردن با سایت نداشته باشین "
                );

                await node.type(
                    "منتظر ایمیل ایده ها و یا مشکلاتی که از سایت پیدا میکنین هستم"
                );
                await sleep(2000);
                await node.delete(
                    "منتظر ایمیل ایده ها و یا مشکلاتی که از سایت پیدا میکنین هستم");
            }
        }

        // Source code 🚩

        const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

        class TypeAsync extends HTMLSpanElement {
            get typeInterval() {
                const randomMs = 100 * Math.random();
                return randomMs < 50 ? 10 : randomMs;
            }

            async type(text) {
                for (let character of text) {
                    this.innerText += character;
                    await sleep(this.typeInterval);
                }
            }

            async delete(text) {
                for (let character of text) {
                    this.innerText = this.innerText.slice(0, this.innerText.length - 1);
                    await sleep(this.typeInterval);
                }
            }
        }

        customElements.define("type-async", TypeAsync, { extends: "span" });

        init();

    }
    return (
        <Fragment>
            <div className='header-short'>
                {/* <div> */}
                <video id='short-video_head' className='header-short-video' src={url} onEnded={() => dispatch(Set_url_video())} ref={vidRef} muted poster="../../IMG/poster/picture.jpg" />
                <img className='header-short-img' src="../../IMG/poster/picture_2.jpg" />
                {/* <img className='header-short-img' src="../../IMG/poster/picture_2.jpg" /> */}
                {/* </div> */}
                {/* <video id='short-video_head' className='header-short-video' src={url} onEnded={() => next_video()} ref={vidRef} muted poster='./IMG/poster/picture.jpg' /> */}
                <div id='effect_text_head_container'>
                    <span is="type-async" id="type-text">...</span>
                    <span className='blinking-cursor'>|</span>
                </div>
                {/* <span className='blinking-cursor'>به وبساخت شخصی من خوش آمدید</span> */}
                {/* <svg className='header-short-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 -20 1440 200">
                    <path fill="#393e46" fill-opacity="1" d="M0,96L80,90.7C160,85,320,75,480,90.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg> */}

                {/* <img className='header-short-footer' src='./IMG/img_design/wave_head_bottom.png' /> */}
                <div>
                    <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
            </div>
        </Fragment>
    )
}
