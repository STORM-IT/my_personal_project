import React, { Fragment } from 'react'

export default function Project() {
    return (
        <Fragment>
            <div id='project' className='nav-space'>
            </div>
            <div className='img_project_container'>
                <div className='info_layout_css'>


                    <div className='text_img_container'>
                        <h3>پروژه ها</h3>
                        <hr />
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

                    </div>
                    <img src='./IMG/img_design/pngwing.com.png' />
                </div>
                <section className='project'>
                    {/* <img src='./IMG/img_design/rainstorm.png' /> */}
                    {/* <img src="https://www.transparentpng.com/thumb/rain/PjzFVL-rain-png-images.png" alt="Heavy rain clipart free download, storm @transparentpng.com"></img> */}

                    <div className='project-container'>

                        <div className='project-container-project-1'>
                            <span>HTML CSS</span>
                            <div></div>
                        </div>

                        <div className='project-container-project-2'>
                            <span>JAVASCTIPT</span>
                            <div></div>
                        </div>
                        <div className='project-container-project-3'>
                            <span>BOOTSTRAP</span>
                            <div></div>
                        </div>
                        <div className='project-container-project-4'>
                            <span>JQUERY</span>
                            <div></div>
                        </div>
                        <div className='project-container-project-5'>
                            <span>SASS</span>
                            <div></div>
                        </div>
                        <div className='project-container-project-6'>
                            <span>REACT</span>
                            <div></div>
                        </div>
                        <div className='project-container-project-7'>
                            <span>C#</span>
                            <div></div>
                        </div>

                    </div>
                    {/* <img src="https://www.transparentpng.com/thumb/thunderstorm/thunder-light-thunderstorm-png-18.png" alt="thunder light thunderstorm png @transparentpng.com" /> */}
                </section>
            </div>
        </Fragment>
    )
}
