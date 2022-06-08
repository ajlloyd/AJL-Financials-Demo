import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from 'next/router';
import {useState, useEffect} from "react"
import Loader from '../components/Loader';
import Head from 'next/head';
import nprogress from 'nprogress';
import favicon from '../public/favicon.ico';

function MyApp({ Component, pageProps, props }) {


  const [loading, setLoading] = useState(false);


  Router.events.on("routeChangeStart", (url) => {
    console.log("API is Running - Stock Table Route is Loading ...")
    nprogress.start()
    setLoading(true)
  })

  Router.events.on("routeChangeComplete", (url) => {
    console.log("Stock Table Route has Loaded")
    nprogress.done()
    setLoading(false)
  })

  return(
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon.src} />
      </Head>

    
      {loading && <Loader/>}
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
