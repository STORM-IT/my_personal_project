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
      {/* <Head /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path={'project'}>
            <Route path={"a"} element={<Find_correct_number/>} />
          </Route>
          <Route path={'/'}>
            <Route path={"home"} element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Find_correct_number/>
      {/* <Footer /> */}
      {/* {scroll_utils} */}
    </Fragment>
  )
}
