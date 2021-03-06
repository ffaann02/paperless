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
    },
    underLineHead:{
        width:"120px",
        border:"2px solid #FED053",
        borderRadius:"10px",
        backgroundColor:"#FED053",
    },
    
}, { name: "MuiExample_Component" })

const ServiceBox = styled(Box)(({ theme }) => ({
    cursor:"pointer",
    width:"100%",
    height:"95%",
    border:"3px solid #FFEF82",
    borderRadius:"10px",
    padding:"10px 50px",
    transitionDuration:"0.5s",
    "&:hover": {
        backgroundColor: "#FFEF82",
        height:"100%",
        padding:"20px 50px 5px 50px",
    },
    "&:hover #serviceButton":{
        backgroundColor:"#47B5FF",
        color:"white",
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
    "&:hover":{
        boxShadow:"none"
    }
}))

export default function Services() {
    const classes = useStyles();
    return (
        <Grid id="service" container sx={{ width: "100%", height: "100%" ,marginTop:"50px",padding: "0px calc((100vw - 984px) / 2)",textAlign:"center"}}>
            <Grid item lg={12} md={12} sm={12} xs={12}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>OUR SERVICES</Typography></Grid>
            <hr className={classes.underLineHead}/>
            <Grid container sx={{height:{lg:"300px",md:"300px",sm:"100%",xs:"100%"}}}>
                <Grid item lg={4} md={4} sm={6} xs={12} sx={{padding:{lg:"10px 7px",md:"10px 7px",sm:"10px 7px",xs:"0 40px"},height:{lg:"100%",md:"100%",sm:"300px",xs:"280px"}}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3656/3656940.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Wedding Wish</Typography>
                        <Typography variant="h6" sx={{fontSize:"14px"}}>Make your wedding events easier with this service</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">VIEW SERVICE</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12} sx={{padding:{lg:"10px 7px",md:"10px 7px",sm:"10px 7px",xs:"0 40px"},height:{lg:"100%",md:"100%",sm:"300px",xs:"280px"}}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3314/3314642.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Friendships</Typography>
                        <Typography variant="h6" sx={{fontSize:"14px"}}>Keep your good moments forever on our website</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">VIEW SERVICE</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12} sx={{padding:{lg:"10px 7px",md:"10px 7px",sm:"10px 7px",xs:"0 40px"},display:"flex"
                ,marginLeft:"auto",marginRight:"auto",height:{lg:"100%",md:"100%",sm:"300px",xs:"280px"}}}>
                    <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/6503/6503196.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Name Card</Typography>
                        <Typography variant="h6" sx={{fontSize:"14px"}}>Create custom name card for your business purpose</Typography>
                        <GetStartServiceButton id="serviceButton" variant="contained">VIEW SERVICE</GetStartServiceButton>
                    </ServiceBox>
                </Grid>
            </Grid>
            <Grid container sx={{height:{lg:"300px",md:"300px",sm:"100%",xs:"100%"},textAlign:"center",display:"flex",justifyContent:"center",marginLeft:"auto",marginRight:"auto"}}>
                <Grid item lg={4} md={4} sm={6} xs={12} sx={{padding:{lg:"10px 7px",md:"10px 7px",sm:"10px 7px",xs:"0 40px"},height:{lg:"100%",md:"100%",sm:"300px",xs:"280px"}}}>
                <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135725.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Resume</Typography>
                        <Typography variant="h6" sx={{fontSize:"14px"}}>Create you resume for show your work & skills</Typography>
                        <Typography variant="h6" sx={{marginTop:'10px'}}>Coming soon...</Typography>
                    </ServiceBox>
                </Grid>
                <Grid item lg={4} md={4} sm={6} xs={12} sx={{padding:{lg:"10px 7px",md:"10px 7px",sm:"10px 7px",xs:"0 40px"},height:{lg:"100%",md:"100%",sm:"300px",xs:"280px"}}}>
                <ServiceBox>
                        <img src="https://cdn-icons-png.flaticon.com/512/1067/1067447.png" className={classes.serviceIcon}/>
                        <Typography variant="h6" sx={{fontWeight:"600",fontSize:"24px"}}>Review</Typography>
                        <Typography variant="h6" sx={{fontSize:"14px"}}>Let people comment your profile and work</Typography>
                        <Typography variant="h6" sx={{marginTop:'10px'}}>Coming soon...</Typography>
                    </ServiceBox>
                </Grid>
            </Grid>
        </Grid>
    )
}