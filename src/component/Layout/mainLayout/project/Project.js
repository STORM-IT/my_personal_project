import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list_sort, show_filter_section } from './Script'

export default function Project() {

    useEffect(() => {
        list_sort()
        
    }, [])

    return (
        <Fragment>
            {/* <div id='project' className='nav-space'>
            </div> */}
            <div className='img_project_container'>
                <div className='info_layout_css'>


                    <div className='text_img_container'>
                        <h3>پروژه ها</h3>
                        <hr />
                        <p className='glowIn_text_project'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در سزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>

                    </div>
                    <img id='img_project' src='./IMG/img_design/pngwing.com.png' />
                </div>
                <section className='project'>

                    {/* <div className='project-container'>

                        <div className='project-container-project-1'>
                            <Link className='badge-file' to={"/project"}>HTML CSS</Link>
                            <div></div>
                        </div>

                        <div className='project-container-project-2'>
                            <Link className='badge-file' to={"/project"}>JAVASCTIPT</Link>
                            <div></div>
                        </div>
                        <div className='project-container-project-3'>
                            <Link className='badge-file' to={"/project"}>BOOTSTRAP</Link>
                            <div></div>
                        </div>
                        <div className='project-container-project-4'>
                            <Link className='badge-file' to={"/project"}>JQUERY</Link>
                            <div></div>
                        </div>
                        <div className='project-container-project-5'>
                            <Link className='badge-file' to={"/project"}>SASS</Link>
                            <div></div>
                        </div>
                        <div className='project-container-project-6'>
                            <Link className='badge-file' to={"/project"}>REACT</Link>
                            <div></div>
                        </div>
                        <div className='project-container-project-7'>
                            <Link className='badge-file' to={"/project"}>C#</Link>
                            <div></div>
                        </div>

                    </div> */}
                    {/* <div className='project'> */}
                    <div className='project-container'>
                        <header>
                            <ul id='project_list_sort'>
                                <li>Line cod</li>
                                <li>Date</li>
                                <li>Chalenged</li>
                                <li>fdg</li>
                            </ul>
                            <button className='project-btn-sort'>Sort</button>
                            <span className='project-txt-header'>Projects</span>
                            <button className='project-btn-openAll'>open All </button>
                        </header>
                        <div className='project-bodey'>
                            <div className='project-filter'>
                                <div onClick={()=>show_filter_section()}>
                                    <img className='right_project_filter_icon' src='./IMG/Move_logo/projectFilter.svg' />
                                </div>
                            </div>
                            <div className='project-listProject'></div>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </div>

        </Fragment>
    )
}
