import React, { Fragment, useEffect, useState } from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';
import { scroll_utils } from './component/utils/scroll/check_scroll_length'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Find_correct_number from './Projects/javascript/find_correct_number/Find_correct_number';
export default function App() {

  // const show_footer=(Scroll)=>{
  //   console.log(Scroll)
  //   }
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={'project'}>
            <Route path={'find-correct-number'} element={<Find_correct_number/>} />
          </Route>
          <Route path={''}>
            <Route path={"home"} 
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
      <div className='footer-creator'>این سایت متعلق به علی پارسامنش میباشد  </div>
      {/* <Find_correct_number/> */}
      {/* {scroll_utils} */}
    </Fragment>
  )
}