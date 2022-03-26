import React, { Fragment, useEffect, useState } from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';
// import { scroll_utils } from './component/utils/scroll/check_scroll_length'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Find_correct_number from './Projects/find_correct_number/Find_correct_number';
import { scroll_utils } from './component/utils/scroll/check_scroll_length';
import Calculator from './Projects/calculator/calculator';
// import Calendar from './Projects/calendar/calendarr';
import Find_correct_text from './Projects/find_correct_text/find_correct_text';
import Snake from './Projects/snake/snake';
import Personal_manager from './Projects/calendar/containers/personal_manager';
import Pc_site from './Projects/pc_site/pc_site';
import Heads_or_tails from './Projects/heads_or_tails/heads_or_tails'
export default function App() {

  // console.log(window.location.pathname)
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={'project'}>
            <Route path={'%D8%AD%D9%84%20%D9%85%D8%B9%D8%A7%D8%AF%D9%84%D9%87%20%D8%B1%DB%8C%D8%A7%D8%B6%DB%8C'} element={<Find_correct_number />} />
            <Route path={'%D9%85%D8%A7%D8%B4%DB%8C%D9%86%20%D8%AD%D8%B3%D8%A7%D8%A8'} element={<Calculator />} />
            <Route path={'%D9%BE%DB%8C%D8%AF%D8%A7%20%DA%A9%D8%B1%D8%AF%D9%86%20%DA%A9%D9%84%D9%85%D9%87%20%D8%B5%D8%AD%DB%8C%D8%AD'} element={<Find_correct_text />} />
            <Route path={'%D9%85%D8%A7%D8%B1%20%D8%A8%D8%A7%D8%B2%DB%8C'} element={<Snake />} />
            <Route path={'%D8%AA%D9%82%D9%88%DB%8C%D9%85%20%DB%8C%D8%A7%D8%AF%20%D8%AF%D8%A7%D8%B4%D8%AA%20%D9%87%D8%A7'} element={<Personal_manager />} />
            <Route path={'%D8%B3%D8%A7%DB%8C%D8%AA%20%D9%81%DB%8C%D9%84%D9%85'} element={<Pc_site />} />
            <Route path={'%D8%B4%DB%8C%D8%B1%20%DB%8C%D8%A7%20%D8%AE%D8%B7'} element={<Heads_or_tails />} />
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
      {/* <Heads_or_tails/> */}

      <div className='footer-creator'>این سایت متعلق به علی پارسامنش میباشد  </div>
      {scroll_utils}
    </Fragment>
  )
}