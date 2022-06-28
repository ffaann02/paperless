import { Box, Grid,createTheme,ThemeProvider } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import GetInTouch from '../components/GetInTouch'
import HeroBlock from '../components/HeroBlock'
import Services from '../components/Services'

const theme = createTheme({
  palette:{
    secondary:{
      main:"#FED053"
    }
  }
})


export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
      <Box id="content-wrapper" sx={{backgroundColor:"white",top:"60px",position:"relative",width:"100%",height:"100%"}}>
        <HeroBlock/>
        <About/>
        <Services/>
        <GetInTouch/>
      </Box>
      </ThemeProvider>
    </Box>
  )
}
