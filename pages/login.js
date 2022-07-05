import { Box, Grid, Typography, styled,Button, TextField, ThemeProvider } from "@mui/material";
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
        marginTop:"150px"
    }
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
        <Grid container sx={{ width: "100%",height: {lg:"80vh",md:"90vh",sm:"100%"},marginTop:"60px",textAlign:"center"}}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{padding: {lg:"calc((100vh - 984px) / 2) calc((100vw - 984px) / 2)"
            ,md:"calc((100vh - 984px) / 2) calc((100vw - 984px) / 2)",sm:"20px",xs:"40px"}}}>
                <Grid container sx={{width:"100%",height:"100%",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderRadius:"20px"}}>
                    <Grid item lg={6} md={6} sx={{backgroundColor:"#C0DFD9",borderRadius:"20px 0 0 20px"}}>
                        <img src="/registerBanner.svg" className={classes.registerBanner}/>
                        <Typography variant="h6" sx={{fontSize:"24px",fontWeight:"600",padding:"0 40px",marginTop:"20px"}}>
                            ONLINE WISHES & INVITATIONS FOR FREE
                        </Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sx={{borderRadius:"0 20px 20px 0",padding:"60px 60px 40px 60px"}}>
                        <Typography variant="h6" sx={{color:"white",padding:"0"}}>
                            <Typography variant="a" sx={{color:"#EC9C04",fontSize:"30px",fontWeight:"600"}}>PAPER</Typography>
                            <Typography variant="a" sx={{color:"#5bccf6",fontSize:"30px",fontWeight:"600"}}>LESS</Typography>
                        </Typography>
                        <Box sx={{width:"100%",marginTop:"20px"}}>
                            <TextField id="username" label="Username" variant="standard" type="text" sx={{width:"100%",marginTop:"20px"}}/>
                            <TextField id="password" label="Password" variant="standard" type="password" sx={{width:"100%",marginTop:"20px"}}/>
                            <Typography variant="h6" sx={{fontSize:"14px",marginTop:"20px"}}>
                                Don't have an account <Typography variant="a" sx={{fontWeight:"600",cursor:"pointer",fontSize:"16px"}}>Sign Up</Typography>
                            </Typography>
                            <SubmitRegisterButton variant="contained">LOG IN</SubmitRegisterButton>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}