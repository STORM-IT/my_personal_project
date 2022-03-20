import React, { Fragment, useEffect, useState } from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';
// import { scroll_utils } from './component/utils/scroll/check_scroll_length'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Find_correct_number from './Projects/javascript/find_correct_number/Find_correct_number';
import { scroll_utils } from './component/utils/scroll/check_scroll_length';
import Calculator from './Projects/javascript/calculator/calculator';
// import Calendar from './Projects/javascript/calendar/calendarr';
import Find_correct_text from './Projects/javascript/find_correct_text/find_correct_text';
import Snake from './Projects/javascript/snake/snake';
import Personal_manager from './Projects/javascript/calendar/containers/personal_manager';
import Pc_site from './Projects/html_css/pc_site/pc_site';
export default function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={'project'}>
            <Route path={'find-correct-number'} element={<Find_correct_number/>} />
            <Route path={'calculator'} element={<Calculator/>} />
            {/* <Route path={'calendar'} element={<Calendar/>} /> */}
            <Route path={'find-correct-text'} element={<Find_correct_text/>} />
            <Route path={'snake'} element={<Snake/>} />
            <Route path={'calendar'} element={<Personal_manager/>} />
            <Route path={'move-site'} element={<Pc_site/>} />
          </Route>
          <Route path={''}>
            <Route path={""} 
            element={
              <Fragment>
                <Head />
                <Main />
                <Footer />
              </Fragment>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Head /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      <div className='footer-creator'>این سایت متعلق به علی پارسامنش میباشد  </div>
      {scroll_utils}
    </Fragment>
  )
}