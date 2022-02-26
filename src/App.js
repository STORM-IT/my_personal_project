import React, { Fragment, useEffect, useState} from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';
import {scroll_utils} from './component/utils/scroll/check_scroll_length'

export default function App() {

// const show_footer=(Scroll)=>{
//   console.log(Scroll)
//   }
  return (
    <Fragment>
      <Head/>
      <Main/>
      <Footer/>
      {/* <check_scroll_length/> */}
      {scroll_utils}
    </Fragment>
  )
}
