import { Fragment } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import ServiceNavbar from '../components/ServiceNavbar'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Fragment>
    {router.pathname === ("/") || router.pathname ===("/register") || router.pathname ===("/login") ? false : true && <ServiceNavbar/>}
    {router.pathname === ("/login") || router.pathname ===("/register") || router.pathname !==("/") ? false : true && <Navbar/>}
    <Component {...pageProps} />
    {router.pathname === ("/login") || router.pathname ===("/register") ? false : true && <Footer/>}
  </Fragment>
}

export default MyApp
