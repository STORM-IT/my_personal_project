import React, { Fragment, useEffect } from 'react'
import { scrool_list_move_left, scrool_list_move_right } from './picture_dialog'

export default function Pc_site() {

    useEffect(() => {
        require("./site_movie")
        require("./picture_dialog")
    }, [])

    return (
        <Fragment>
            <div id='movie-site'>
            <div id="container_nav_header">
                <div className='d-flex align-items-center '>

                    <img id="logo_nav" src="/IMG/pc_site/logo_nav.jpg" alt="" />
                    <nav>
                        <ul className="ul-menu">
                            <li id="Foreign"><a href="#" className="link-navbar"> فیلم خارجی <i className="fa fa-angle-down icone-more"></i></a>

                                <ul id="list-nav-film-Foreign" className="ul-more">

                                    <a href="">
                                        <li>اکشن</li>
                                    </a>
                                    <a href="">
                                        <li>ترسناک</li>
                                    </a>
                                    <a href="">
                                        <li>کمدی</li>
                                    </a>
                                    <a href="">
                                        <li>هندی</li>
                                    </a>
                                    <a href="">
                                        <li>درام</li>
                                    </a>

                                </ul>
                            </li>
                            <li id="parsian"><a href="#" className="link-navbar">فیلم ایرانی <i
                                className="fa fa-angle-down icone-more"></i></a>
                                <ul id="list-nav-film-parsian" className="ul-more" style={{ "position": "absolute" }}>
                                    <a href="">
                                        <li>اجتماعی</li>
                                    </a>
                                    <a href="">
                                        <li>خانوادگی</li>
                                    </a>
                                    <a href="">
                                        <li>کمدی</li>
                                    </a>
                                    <a href="">
                                        <li>دفاع مقدس</li>
                                    </a>
                                    <a href="">
                                        <li>رزمی</li>
                                    </a>

                                </ul>
                            </li>
                            <li><a href="#" className="link-navbar">انیمیشن</a></li>
                            <li><a href="#" className="link-navbar">سریال خارجی</a></li>
                            <li><a href="#" className="link-navbar">سریال ایرانی</a></li>
                            <li><a href="#" className="link-navbar">انیمه</a></li>
                            <li><a href="#" className="link-navbar">سریال کره ای</a></li>
                            <li id="Bests"><a href="#" className="link-navbar">بهترین ها <i
                                className="fa fa-angle-down icone-more"></i></a>
                                <ul id="list-nav-film-Bests" className="ul-more" style={{ "position": "absolute" }}>
                                    <a href="">
                                        <li>250 فیلم برتر IMDb</li>
                                    </a>
                                    <a href="">
                                        <li>کالکشن</li>
                                    </a>
                                    <a href="">
                                        <li>فیلم های Marvel</li>
                                    </a>
                                    <a href="">
                                        <li>فیلم های اسکار</li>
                                    </a>
                                    <a href="">
                                        <li>فیلم های DC</li>
                                    </a>

                                </ul>
                            </li>
                            <li id="years"><a href="#" className="link-navbar">سال <i
                                className="fa fa-angle-down icone-more"></i></a>
                                <ul id="list-nav-film-years" className="ul-more" style={{ "position": "absolute" }}>
                                    <a href="#">
                                        <li>2021</li>
                                    </a>
                                    <a href="">
                                        <li>2020</li>
                                    </a>
                                    <a href="">
                                        <li>2019</li>
                                    </a>
                                    <a href="">
                                        <li>2018</li>
                                    </a>
                                    <a href="">
                                        <li>2017</li>
                                    </a>
                                    <a href="">
                                        <li>2016</li>
                                    </a>
                                    <a href="">
                                        <li>2015</li>
                                    </a>
                                    <a href="">
                                        <li>2014</li>
                                    </a>
                                    <a href="">
                                        <li>2013</li>
                                    </a>

                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="search-box">


                    <input type="text" name="" id="input-search" placeholder="جست وجو" />
                    <button id="btn-search"><i className="fa fa-search "></i></button>


                </div>
            </div>
            {/* <header className="header"> */}




            {/* <header> */}
            {/* <div id="container_nav_head">
                </div> */}

            {/* </header> */}
            {/* </header> */}


            <div id="div-head-text">
                <video id='short_video_head' src='/IMG/pc_site//video/short_video_head.mp4' alt="" autoPlay muted loop />
                <h2 id="text-logo">STOOORMIX</h2>
                {/* <p id="wellcome">wellcome</p> */}
            </div>







            <main>
                {/* <head> */}
                {/* <ul id="ul-head-main">
                    <li><i className="fas fa-hdd"><a href="">حافظه</a></i></li>
                    <li><i className="fas fa-desktop"><a href="">مانیتور</a></i></li>
                    <li><i className="fas fa-suitcase"><a href="">کیس</a></i></li>
                    <li><i className="fas fa-network-wired"><a href="">شبکه</a></i></li>
                    <li><i className="fas fa-mouse"></i><a href="">موس</a></li>
                    <li><i className="fas fa-keyboard"><a href=""> کیبورد </a></i></li>
                </ul> */}
                {/* </head> */}
                <main id='main-container'>
                    {/* <div id="div-main-right">
                        <h4>فیلتر جزئیات محصول</h4>
                        <hr />
                        <h5 className="headers-main-right">برند</h5>
                        <div className="checkbox-brand-main-right">
                            <span>ایسوس</span>
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-brand-main-right">
                            <span>سامسونگ</span>
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-brand-main-right">
                            <span>اپل</span>
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-brand-main-right">
                            <span>لنوو</span>
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-brand-main-right">
                            <span>اچ تی سی</span>
                            <input type="checkbox" />
                        </div>
                        <div className="checkbox-brand-main-right">
                            <span>ام اس ای</span>
                            <input type="checkbox" />
                        </div>



                        <br />




                        <hr />
                        <h5 className="headers-main-right"> میانگین قیمت</h5>
                        0<input type="range" />25.000.000
                        <p><label htmlFor="input" id="range-text">12.500</label></p>

                        <p> حداقل <input type="number" /> تومان</p>
                        <p> حداکثر <input type="number" /> تومان</p>

                        <hr />
                        <h5 className="headers-main-right">نوع کاربری</h5>
                        <select name="" id="combobox-main-right">
                            <option value="">بدون فیلتر</option>
                            <option value="">گیمینگ</option>
                            <option value="">رندرینگ</option>
                            <option value="">مالتی مدیا</option>
                            <option value="">صنعتی</option>
                            <option value="">فتوشاپ</option>
                        </select>

                    </div> */}


                    <div id="div-main-center">
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>the Dropout</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p> <span>5.2 :</span> IMDb</p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/Walker.jpg' />
                                </div>
                                <div className='information-move'>
                                    <h3>Walker</h3>
                                    <p>ژانر : <span>اکشن ، جنایی</span></p>
                                    <p>بازیگران : <span>Jared Padalecki، Keegan Allen</span></p>
                                    <p> <span>6.1 :</span> IMDb</p>
                                    <p>داستان سریال درمورد پدر تنهایی است که پس از 2 سال پیش خانواده اش بر می گردد و سعی می کند با فرزندانش ارتباط برقرار کند و سر و سامانی به خانواده از هم فروپاشیده اش بدهد. در همین حین، به دنبال حل پرونده قتل همسر سابقش نیز هست.</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/rudra.jpg' />
                                </div>
                                <div className='information-move'>
                                    <h3>Rudra: The Edge of Darkness</h3>
                                    <p>ژانر : <span>جنایی ، درام</span></p>
                                    <p>بازیگران : <span>Ajay Devgn، Esha Deol</span></p>
                                    <p> <span>7.2 :</span> IMDb</p>
                                    <p>در سریال رودرا لبه تاریکی در خیابان های پر از جنایت بمبئی ، یک افسر پلیس به نام رودرا ویر سینگ که با مشغله های ذهنی خود دست و پنجه نرم می کند باید با پرونده های جنایی نیز برخورد کند.</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/Black-Crab.jpg' />
                                </div>
                                <div className='information-move'>
                                    <h3>Black Crad</h3>
                                    <p>ژانر : <span>اکشن ، درام</span></p>
                                    <p>بازیگران : <span>Aliette Opheim، Dar Salim</span></p>
                                    <p> <span>6.6 :</span> IMDb</p>
                                    <p>در فیلم خرچنگ سیاه : در دنیایی پسا آخرالزمانی، شش سرباز وظیفه دارند در ماموریتی مخفی، بسته ای مرموز را به آنسوی مجمع الجزایری یخ زده انتقال دهند.</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/Master.jpg' />
                                </div>
                                <div className='information-move'>
                                    <h3>Master</h3>
                                    <p>ژانر : <span>ترسناک ، جنایی</span></p>
                                    <p>بازیگران : <span>Julia Nightingale، Regina Hall</span></p>
                                    <p> <span>5.8 :</span> IMDb</p>
                                    <p>در فیلم ارباب : درباره دو زن سیاه پوست است که در کالجی با جمعیت غالب سفید پوست، تجربه های ترسناکی را پشت سر می گذارند...</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div className='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/Windfall.jpg' />
                                </div>
                                <div className='information-move'>
                                    <h3>Windfall</h3>
                                    <p>ژانر : <span>جنایی ، درام</span></p>
                                    <p>بازیگران : <span>Jason Segel، Jesse Plemons</span></p>
                                    <p> <span>6.1 :</span> IMDb</p>
                                    <p>در فیلم باد آورده : مردی به صورت پنهانی وارد خانه تابستانی یک میلیاردر حوزه تکنولوژی می شود. اما زمانیکه صاحب خودشیفته خانه و همسرش برای سفری غیرمنتظره از راه می رسند، شرایط از کنترل خارج می شود و...</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        
                       
                        {/* </section> */}

                        {/* <section className="section-main-center">
                            <div>
                                <img src="/IMG/pc_site/center-2.jpg" alt="" />

                            </div>
                            <main>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora itaque reiciendis quasi laborum repellat dolorum iste modi voluptatibus minus, officiis autem odio, nostrum aut unde. Amet dicta tempore velit eum consequatur. Ducimus quas vero laboriosam non veniam deserunt porro officia obcaecati, molestias inventore fugiat eaque sequi doloribus. Tempore ipsam porro id mollitia. Ipsa saepe tempore corrupti minima quibusdam quos!</p>
                            </main>
                            <footer>
                                <a href="#">more information</a>
                            </footer>
                        </section>
                        <section className="section-main-center">
                            <div>
                                <img src="/IMG/pc_site/center-3.jpg" alt="" />

                            </div>
                            <main>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora itaque reiciendis quasi laborum repellat dolorum iste modi voluptatibus minus, officiis autem odio, nostrum aut unde. Amet dicta tempore velit eum consequatur. Ducimus quas vero laboriosam non veniam deserunt porro officia obcaecati, molestias inventore fugiat eaque sequi doloribus. Tempore ipsam porro id mollitia. Ipsa saepe tempore corrupti minima quibusdam quos!</p>
                            </main>
                            <footer>
                                <a href="#">more information</a>
                            </footer>
                        </section>
                        <section className="section-main-center">
                            <div>
                                <img src="/IMG/pc_site/center-4.jpg" alt="" />

                            </div>
                            <main>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et tempora itaque reiciendis quasi laborum repellat dolorum iste modi voluptatibus minus, officiis autem odio, nostrum aut unde. Amet dicta tempore velit eum consequatur. Ducimus quas vero laboriosam non veniam deserunt porro officia obcaecati, molestias inventore fugiat eaque sequi doloribus. Tempore ipsam porro id mollitia. Ipsa saepe tempore corrupti minima quibusdam quos!</p>
                            </main>
                            <footer>
                                <a href="#">more information</a>
                            </footer>
                        </section> */}




                    </div>
                    <div id="div-main-left">
                        <div>
                            <h3>اخبار و اطلاعات</h3>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-1.png" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-2.jpg" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-3.jpg" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-4.jpg" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-1.png" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-2.jpg" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-3.jpg" alt="" className="img-main-left" />
                            </section>
                            <section className="section-main-left">
                                <p>ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <img src="/IMG/pc_site/tabligh-4.jpg" alt="" className="img-main-left" />
                            </section>




                            {/* <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-2.jpg" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section>
                            <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-3.jpg" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section>
                            <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-4.jpg" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section>
                            <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-1.png" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section>
                            <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-2.jpg" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section>
                            <section className="section-main-left">
                                <div>
                                    <img src="/IMG/pc_site/tabligh-3.jpg" alt="" className="img-main-left" />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.<br /> Quos dolores blanditiis quod<br /> reiciendis quis dolorem accusamus laboriosam aut sed consectetur, modi aperiam tempore, perferendis sapiente explicabo nihil excepturi quasi. Exercitationem!</p>

                                </div>
                            </section> */}

                        </div>
                        <div className="div-picture-dialog-container">
                            <section id="container-img">
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Windfall.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Walker.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/rudra.jpg" alt="" />
                            </section>
                        </div>
                        <div className="div-picture-dialog-container">
                            <section id="container-img">
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Master.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Black-Crab.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Windfall.jpg" alt="" />
                                
                            </section>
                        </div>
                        <div className="div-picture-dialog-container">
                            <section id="container-img">
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Walker.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/rudra.jpg" alt="" />
                                <img className="pic-1 picture_edit" src="/IMG/pc_site/cover_movie/Master.jpg" alt="" />
                            </section>
                        </div>
                    </div>
                
                </main>


                <footer>
                    <div id="div-footer-top">
                        <div id="scroll-list-left" onClick={()=>scrool_list_move_left()} className='scroll_footer_style'>
                        {")"}
                        </div>
                        <div id='card-move-footer-container'>

                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="#htdocx">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="#htdocx">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="#htdocx">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <img src="/IMG/pc_site/pc-1.jpg" alt="" />
                                <p className="text-margin">ش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        </div>
                        <div id="scroll-list-right" onClick={()=>scrool_list_move_right()} className='scroll_footer_style'>
                            {"("}
                        </div>
                    </div>
                </footer>

            </main>
            </div>
        </Fragment>
    )
}
