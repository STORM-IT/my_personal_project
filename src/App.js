import React, { Fragment} from 'react'
import Footer from './component/Layout/footer/Footer';
import Head from './component/Layout/headLayout/Head';
import Main from './component/Layout/mainLayout/Main';

import { url } from './component/utils/video_short_head'


export default function App() {

  

  return (
    <Fragment>
      <Head/>
      <Main/>
      <Footer/>
    </Fragment>
  )
}
