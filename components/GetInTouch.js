import { Box, Grid, Typography, styled,Button, ThemeProvider, TextField } from "@mui/material";
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
        height:"5px"
    },
    contactImg:{
        width:"90%",
        marginTop:"30px"
    }
    
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

export default function GetInTouch() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%", height: "100%" ,marginTop:"50px",padding: "0px calc((100vw - 984px) / 2)",textAlign:"center"}}>
            <Grid item lg={12}><Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>GET IN TOUCH</Typography></Grid>
            <hr className={classes.underLineHead}/>
            <Grid container>
                <Grid item lg={6} sx={{heigt:"100%"}}>
                    <img src="/teamContact02.svg" className={classes.contactImg}/>
                </Grid>
                <Grid item lg={6} sx={{heigt:"100%",padding:"20px"}}>
                    <Box sx={{display:"flex"}}>
                        <TextField id="name" variant="outlined" label="Name" sx={{width:"50%",marginRight:"5px"}} color="secondary"/>
                        <TextField id="lastname" variant="outlined" label="Lastname" sx={{width:"50%",marginLeft:"5px"}} color="secondary"/>
                    </Box>
                    <TextField id="email" variant="outlined" label="Email" sx={{width:"100%",marginTop:"10px"}} color="secondary"/>
                    <TextField id="topic" variant="outlined" label="What can we help you with?" sx={{width:"100%",marginTop:"10px"}} color="secondary"/>
                    <TextField id="detail" variant="outlined" label="Details" rows={5} multiline sx={{width:"100%",marginTop:"10px"}} color="secondary"/>
                </Grid>
            </Grid>
        </Grid>
    )
}