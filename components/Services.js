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
    serviceIcon:{
        width:"100px",
        height:"100px"
    }
    
}, { name: "MuiExample_Component" })

const ServiceBox = styled(Box)(({ theme }) => ({
    width:"100%",
    height:"95%",
    border:"3px solid #FFE3A9",
    borderRadius:"10px",
    padding:"10px 50px",
    transitionDuration:"0.5s",
    "&:hover": {
        backgroundColor: "#FFE3A9",
        height:"100%",
        padding:"20px 50px 5px 50px",
    },
    "&:hover #serviceButton":{
        backgroundColor:"#47B5FF",
        color:"white"
    }
    
}))

const GetStartServiceButton = styled(Button)(({ theme }) => ({
    transitionDuration:"0.5s",
    borderRadius: "10px",
    padding: "10px 14px",
    width:"150px",
    border:"2px solid #47B5FF",
    backgroundColor:"rgba(0,0,0,0)",
    boxShadow: "none",
    color: "#47B5FF",
    fontWeight:"600",
    marginTop:"7px",

}))

export default function Services() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%", height: "100%" ,marginTop:"50px",padding: "0px calc((100vw - 984px) / 2)",textAlign:"center"}}>
            <Grid item lg={12}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>OUR SERVICES</Typography></Grid>
            <Grid container sx={{height:"300px"}}>
                <Grid item lg={4} sx={{padding:"10px 7px"}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3656/3656940.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Wedding Wish</Typography>
                        <Typography variant="a" sx={{fontSize:"16px"}}>Make your wedding easier with this service</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">GET STARTED</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
                <Grid item lg={4} sx={{padding:"10px 7px"}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3656/3656940.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Wedding Wish</Typography>
                        <Typography variant="a" sx={{fontSize:"16px"}}>Make your wedding easier with this service</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">GET STARTED</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
                <Grid item lg={4} sx={{padding:"10px 7px"}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3656/3656940.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Wedding Wish</Typography>
                        <Typography variant="a" sx={{fontSize:"16px"}}>Make your wedding easier with this service</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">GET STARTED</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
            </Grid>
            <Grid container sx={{height:"300px",textAlign:"center",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
                <Grid item lg={4} sx={{padding:"10px 7px"}}>
                    <Box sx={{width:"100%",height:"100%",background:"linear-gradient(to top, #9eb23b 5%, #c7d36f 100%)"}}></Box>
                </Grid>
                <Grid item lg={4} sx={{padding:"10px 7px"}}>
                    <Box sx={{width:"100%",height:"100%",backgroundColor:"red"}}></Box>
                </Grid>
            </Grid>
        </Grid>
    )
}