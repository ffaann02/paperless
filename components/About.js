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
        height:"100%"
    }
}, { name: "MuiExample_Component" })


export default function About() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%", height: "40vh" ,marginTop:"30px",padding: "0px calc((100vw - 984px) / 2)"}}>
            <Grid item lg={8} sx={{height:"100%",marginTop:"10px",padding:"20px",display:"flex",flexDirection:"column"}}>
            <Box sx={{textAlign:"left"}}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>ABOUT US</Typography>
            <hr className={classes.underLineAboutUs}/></Box>
            <Box id="description">
                <Typography variant="a"></Typography>
            </Box>
            </Grid>
            <Grid item lg={4} sx={{height:"100%",marginTop:"10px"}}>
                <img src="/paper.png" className={classes.paperAboutUs}/>
            </Grid>
        </Grid>
    )
}