import { Box, Grid, Typography, styled,Button, ThemeProvider } from "@mui/material";
import { makeStyles } from '@mui/styles'

export default function Footer(){
    return(
        <Box sx={{backgroundColor:"#3B3F46",width:"100%",height:"100px",marginTop:"90px",textAlign:"center"}}>
            <Typography variant="h6" sx={{color:"white",padding:"0",fontSize:"16px",paddingTop:"8px"}}>
                <Typography variant="a" sx={{color:"#EC9C04",fontSize:"20px",fontWeight:"600"}}>PAPER</Typography>
                <Typography variant="a" sx={{color:"#5bccf6",fontSize:"20px",fontWeight:"600"}}>LESS</Typography>
            </Typography>
            <Typography variant="h6" sx={{color:"white",padding:"0",fontSize:"16px"}}>© 2022 Rudfaan Maimahad</Typography>
            <Typography variant="h6" sx={{color:"white",padding:"0",fontSize:"16px"}}>Built with Next.js and Materiul UI v5</Typography>
        </Box>
    )
}