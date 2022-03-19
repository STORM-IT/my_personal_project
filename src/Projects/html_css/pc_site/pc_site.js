import React, { Fragment, useEffect } from 'react'

export default function Pc_site() {

    useEffect(() => {
        require("./site_move")
    }, [])

    return (
        <Fragment>
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
                        {/* <section className="section-main-center"> */}
                        {/* edite replace head with div for the all img */}
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

                                </div>
                            </div>
                            <div className='left-section'>
                                <button>ادامه و دانلود</button>
                            </div>
                        </div>
                        <div id='container-card-movie'>
                            <div className='right-section'>
                                <div className='movie-cover'>
                                    <img src='/IMG/pc_site/cover_movie/the_dropout.jfif' />
                                </div>
                                <div className='information-move'>
                                    <h3>عنوان</h3>
                                    <p>ژانر : <span>اکشن</span></p>
                                    <p>کارگردان : <span>رضا</span></p>
                                    <p>بازیگران : <span>علی و احمد</span></p>
                                    <p>IMDb : <span>5.2</span></p>
                                    <p>سریال تلویزیونی که به تلاش الیزابت هولمز موسس Theranos برای متحول کردن صنعت مراقبت های بهداشتی پس از ترک دانشگاه و راه اندازی یک شرکت فناوری می پرداز…</p>

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
                    </div>
                    <div id="div-main-footer">

                    </div>
                </main>

                <footer>
                    <div id="div-footer-top">
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-1.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>

                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-2.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-3.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-4.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-5.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-3.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>
                        <section>
                            <section id="section-div-footer-1">
                                <div><img src="/IMG/pc_site/pc-4.jpg" alt="" /></div>
                                <div className="text-margin">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At temporibus possimus expedita. Eligendi sit ex consequatur eveniet aliquam possimus iusto.</div>
                                <div>
                                    <button className="button-footer-up" type="button"><a href="">view information</a></button>
                                </div>
                            </section>
                        </section>

                    </div>
                </footer>

            </main>
        </Fragment>
    )
}
