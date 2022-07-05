import { Box, Grid, Typography, styled,Button, TextField, ThemeProvider } from "@mui/material";
import { makeStyles } from '@mui/styles'
import Link from "next/link"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const useStyles = makeStyles({
    bannerImg: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "0"
    },
    postcardImg: {
        width:"300px",
        ['@media (max-width:900px)']:{
            width:"240px"
        },
        ['@media (max-width:900px)']:{
            width:"100%"
        }
    },
    underLineHead:{
        width:"120px",
        border:"2px solid #FED053",
        borderRadius:"10px",
        backgroundColor:"#FED053",
    },
    bestPointIcon:{
        width:"120px",
        height:"120px",
        marginTop:"20px",
        ['@media (max-width:600px)']:{
            padding:"10px"
        }
    },
    registerBanner:{
        width:"100%",
        marginTop:"150px",
        ['@media (max-width:900px)']:{
            marginTop:"50px"
        }
    },
}, { name: "MuiExample_Component" })


const SubmitRegisterButton = styled(Button)(({ theme }) => ({
    width:"100%",
    marginTop:"20px",
    borderRadius: "10px",
    padding: "8px 14px",
    border:"2px solid white",
    fontSize:"20px",
    backgroundColor:"#47B5FF",
    boxShadow: "none",
    color: "white",
    fontWeight:"600",
    "&:hover": {
        backgroundColor: "#646FD4",
        boxShadow: "none",
    }
}))

export default function Login() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%",height: {lg:"100vh",md:"100vh",sm:"100%"},textAlign:"center"}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{padding: {lg:"calc((100vh - 600px) / 2) calc((100vw - 984px) / 2)"
            ,md:"calc((100vh - 600px) / 2) calc((100vw - 984px) / 2)",sm:"60px",xs:"20px"}}}>
                <Grid container sx={{width:"100%",height:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"20px"}}>
                    <Grid order={{lg:1,md:1,sm:2,xs:2}} item lg={6} md={6} sm={12} xs={12} sx={{backgroundColor:"#C0DFD9",borderRadius:{lg:"20px 0 0 20px",md:"20px 0 0 20px"
                    ,sm:"0 0 20px 20px",xs:"0 0 20px 20px"}}}>
                        <img src="/registerBanner.svg" className={classes.registerBanner}/>
                        <Typography variant="h6" sx={{fontSize:"24px",fontWeight:"600",padding:"0 40px",marginTop:"20px"}}>
                            ONLINE WISHES & INVITATIONS FOR FREE
                        </Typography>
                    </Grid>
                    <Grid order={{lg:2,md:2,sm:1,xs:1}} item lg={6} md={6} sm={12} xs={12} sx={{borderRadius:"0 20px 20px 0"
                    ,padding:{lg:"40px 60px",md:"40px 60px",sm:"40px 60px",xs:"40px 30px"},position:"relative"}}>
                        <Typography variant="h6" sx={{color:"white",padding:"0"}}>
                            <Typography variant="a" sx={{color:"#EC9C04",fontSize:"30px",fontWeight:"600"}}>PAPER</Typography>
                            <Typography variant="a" sx={{color:"#5bccf6",fontSize:"30px",fontWeight:"600"}}>LESS</Typography>
                        </Typography>
                        <Box sx={{width:"100%",marginTop:"40px"}}>
                            <TextField id="username" label="Username" variant="standard" type="text" sx={{width:"100%",marginTop:"20px"}}/>
                            <TextField id="password" label="Password" variant="standard" type="password" sx={{width:"100%",marginTop:"20px"}}/>
                            <Typography variant="h6" sx={{fontSize:"14px",marginTop:"40px"}}>
                                Don't have an account <Link href="/register"><Typography variant="a" sx={{fontWeight:"600",cursor:"pointer",fontSize:"16px"}}>Sign Up</Typography></Link>
                            </Typography>
                            <SubmitRegisterButton variant="contained">LOG IN</SubmitRegisterButton>
                            <Link href="/">
                                <Typography variant="h6" sx={{position:"absolute",bottom:"10px",cursor:"pointer",left:"20px"}}>
                                    <ArrowBackIosIcon sx={{fontSize:"14px",marginRight:"10px"}}/>
                                    Back to Home
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}