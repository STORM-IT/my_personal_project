import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { list_sort, show_filter_section } from './Script'
// import project_json from "../../../JsonFiles/Project_details.json"
export default function Project({ list_projects }) {

    useEffect(() => {
        list_sort()

    }, [])

    return (
        <Fragment>
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
                            <div data-tooltip="بازکردن  5  پروژه" data-tooltip-location="left">

                            <button className='project-btn-openAll' >open All </button>
                            </div>
                        </header>
                        <div className='project-bodey'>
                            <div className='project-filter'>
                                <div className='project-logo-container' onClick={() => show_filter_section()}>
                                    <img className='right_project_filter_icon' src='./IMG/Move_logo/projectFilter.svg' />
                                </div>
                                <div className='grid'>
                                    <p className='title_filter_expertise'>Filter Expertise</p>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/html.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>HTML/CSS</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/bootstrap.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>BOOTSTRAP</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/javascript.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>JAVASCTIPT</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/jquery.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>JQUERY</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/sass.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>SASS</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/react.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>REACT</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/redux.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>REDUX</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>
                                    <label className='card'>
                                        <input className='card__input' type="checkbox" />
                                        <div className='card__body'>
                                            <div className='card__body-cover'>
                                                <img className='card__body-cover-image' src='./IMG/logo_lessen/c_sharp.svg' />
                                            </div>
                                            <header className='card__body-header'>
                                                <h2 className='card__body-header-title' title=''>C#</h2>
                                                <span className='card__body-cover-checkbox'>
                                                    <svg className='card__body-cover-checkbox--svg' viewBox='5 -8 20 10'>
                                                        <polyline points='1.5 6 4.5 9 10.5 1' />
                                                    </svg>
                                                </span>
                                            </header>
                                        </div>
                                    </label>

                                </div>
                            </div>
                            <div className='project-listProject'>
                                {list_projects.map(project => (

                                    <Fragment>
                                        <div className='card_project'>

                                            <div className='card_project_contant'>


                                                <div className='card_project_title'><h3>{project.title}</h3></div>
                                                <div className='card_project_description'><p>{project.description}</p></div>
                                                <div className='card_project_expertise_badge'>
                                                    {project.expertions.map(expertion => (

                                                        <div className='card_expertise_badge'>{expertion}</div>
                                                    ))}
                                                </div>

                                            </div>
                                            <div className='card_project_information'>
                                                <p>تعداد خط کد : <span>{project.line_code}</span></p>
                                                <p>ساخت : <span>{project.create}</span></p>
                                                <p>آپدیت : <span>{project.last_update}</span></p>
                                                <p>سختی : <span>{project.mood}</span></p>
                                            </div>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </Fragment>
    )
}
