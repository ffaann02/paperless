import { Box, Grid, Typography, styled,Button, ThemeProvider } from "@mui/material";
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    bannerImg: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "0"
    },
    postcardImg: {
        width:"300px",
    },
    underLineAboutUs:{
        width:"100px",
        border:"2px solid #FED053",
        borderRadius:"10px",
        backgroundColor:"#FED053",
        float:"left"
    },
    paperAboutUs:{
        width:"100%",
        ['@media (max-width:600px)']:{
            width:"300px"
        }
    }
}, { name: "MuiExample_Component" })

const GetStartAboutUsButton = styled(Button)(({ theme }) => ({
    borderRadius: "10px",
    padding: "10px 14px",
    width:"200px",
    border:"2px solid #47B5FF",
    backgroundColor:"rgba(0,0,0,0)",
    boxShadow: "none",
    color: "#47B5FF",
    fontWeight:"600",
    marginTop:"5px",
    "&:hover": {
        backgroundColor: "#47B5FF",
        boxShadow: "none",
        color:"white"
    
    }
}))

export default function About() {
    const classes = useStyles();
    return (
        <Grid id="about" container sx={{ width: "100%", height: {lg:"40vh",md:"40vh",sm:"100%"} ,marginTop:"30px",padding: "0px calc((100vw - 984px) / 2)"}}>
            <Grid item lg={8} md={8} sm={6} xs={12} sx={{height:"100%",padding:"20px",display:"flex",flexDirection:"column"}}>
            <Box sx={{textAlign:"left"}}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C",fontSize:"24px"}}>ABOUT US</Typography>
            <hr className={classes.underLineAboutUs}/></Box>
            <Typography variant="h5" sx={{fontWeight:"600",color:"#205375",fontSize:"36px"}}>We reduce paper use</Typography>
            <Box id="description" sx={{marginTop:"10px"}}>
                <Typography variant="a" sx={{lineHeight:"2",fontSize:"15px"}}>Paperless, the website use to write wishes and invitations on paper in online form, 
                including wedding, friendships, name card and etc. The important thing is it's free. We don't charge you any $.
                Real paper can be lost or destroyed. But we keep your memories forever. Try it out now! You won't regret it.</Typography>
            </Box>
            <GetStartAboutUsButton variant="contained">GET STARTED</GetStartAboutUsButton>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12} sx={{height:"100%",marginTop:"10px",textAlign:"center"}}>
                <img src="/paper.png" className={classes.paperAboutUs}/>
            </Grid>
        </Grid>
    )
}