import React, { Fragment, useEffect, useState } from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';
import { scroll_utils } from './component/utils/scroll/check_scroll_length'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function App() {

  // const show_footer=(Scroll)=>{
  //   console.log(Scroll)
  //   }
  return (
    <Fragment>
      <Head />
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
            <Route path={"home"} element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      {scroll_utils}
    </Fragment>
  )
}
