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
    
}, { name: "MuiExample_Component" })

const GetstartButton = styled(Button)(({ theme }) => ({
    borderRadius: "10px",
    padding: "10px 14px",
    backgroundColor:"#47B5FF",
    boxShadow: "none",
    color: "white",
    fontWeight:"600",
    "&:hover": {
        backgroundColor: "#0AA1DD",
        boxShadow: "none",
    }
}))
const SeeServiceButton = styled(Button)(({ theme }) => ({
    borderRadius: "10px",
    padding: "10px 14px",
    border:"2px solid white",
    backgroundColor:"rgba(0,0,0,0)",
    boxShadow: "none",
    color: "white",
    fontWeight:"600",
    "&:hover": {
        backgroundColor: "#47B5FF",
        boxShadow: "none",
    
    }
}))

export default function Services() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%", height: "40vh" ,marginTop:"50px",padding: "0px calc((100vw - 984px) / 2)"}}>
            <Grid item lg={12}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>OUR SERVICES</Typography></Grid>
            <Grid item lg={6} sx={{height:"100%",marginTop:"10px"}}>HELLO</Grid>
            <Grid item lg={6} sx={{height:"100%",marginTop:"10px"}}>HELLO</Grid>
        </Grid>
    )
}