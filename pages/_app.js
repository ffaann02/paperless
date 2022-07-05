import { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Fragment>
    {router.pathname === ("/login") || router.pathname ===("/register") ? false : true && <Navbar/>}
    <Component {...pageProps} />
    {router.pathname === ("/login") || router.pathname ===("/register") ? false : true && <Footer/>}
  </Fragment>
}

export default MyApp
