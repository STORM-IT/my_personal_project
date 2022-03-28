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
                // await node.type("سلام");
                // await sleep(2000);
                // await node.delete("سلام");

                await node.type(
                    "امید وارم روز خوبی داشته باشین"
                );
                await sleep(2000);
                await node.delete(
                    "امید وارم روز خوبی داشته باشین "
                );

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

                // await node.type(
                //     "امید وارم مشکلی در کارکردن با سایت نداشته باشین"
                // );
                // await sleep(2000);
                // await node.delete(
                //     "امید وارم مشکلی در کارکردن با سایت نداشته باشین "
                // );

               
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
                <video id='short-video_head' className='header-short-video' src={url} onEnded={() => dispatch(Set_url_video())} ref={vidRef} muted poster="../../IMG/poster/picture.jpg" />
                <img className='header-short-img' src="../../IMG/poster/picture_2.jpg" />
                <div id='effect_text_head_container'>
                    <span is="type-async" id="type-text">...</span>
                    <span className='blinking-cursor'>|</span>
                </div>
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