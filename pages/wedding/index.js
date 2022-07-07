import { Box, Grid, Typography, styled,Button } from "@mui/material";
import { makeStyles } from '@mui/styles'
import Image from "next/image"
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
    }
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
    padding: "8px 14px",
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

export default function Wedding() {
    const classes = useStyles();
    return (
        <Box id="content-wrapper" sx={{backgroundColor:"white",top:"60px",position:"relative",width:"100%",height:"100%"}}>
        <Grid id="heroblock" container sx={{ width: "100%", height: {lg:"90vh",md:"90vh",sm:"100%"} }}>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{
                width: "100%", height: {lg:"45vh",md:"45vh"}
                , backgroundImage: `url(${"ShinyOverlay.png"})`, backgroundRepeat:"no-repeat",padding: "0px calc((100vw - 984px) / 2)", display: "flex"
            }}>
                <Grid item lg={5} md={4} sm={4} xs={12} sx={{position:"relative",display:{lg:"block",md:"block",sm:"block",xs:"none"}}}>
                    <img src="postcard.png" className={classes.postcardImg} />
                </Grid>
                <Grid item lg={7} md={8} sm={8} xs={12} sx={{ textAlign: "center", padding: "60px 10px" }}>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "600", fontSize:{lg:"30px",md:"30px",sm:"24px",xs:"30px"}}}>ONLINE WISHES AND INVITATIONS</Typography>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "600", fontSize:{lg:"24px",md:"24px",sm:"20px",xs:"24px"} }}>FOR MEMORIES WITHOUT A PIECE OF PAPER</Typography>
                    <Box sx={{ width: "75%", display: "flex", marginLeft: "auto", marginRight: "auto", justifySelf: "center", marginTop: "10px" }}>
                        <Typography variant="a" sx={{ fontSize: "16px" }}>
                            PAPERLESS is the best website, to write friendships, wedding, name card and etc.
                        </Typography>
                    </Box>
                    <Box sx={{marginTop:"20px"}}>
                        <Box>
                        <GetstartButton variant="contained">GET STARTED</GetstartButton>
                        <SeeServiceButton variant="contained" sx={{marginLeft:"10px"}}>VIEW SERVICES</SeeServiceButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12} sx={{textAlign:"center",padding: "0px calc((100vw - 984px) / 2)",marginTop:"10px"}}>
                <Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>OUR BEST POINT</Typography>
                <hr className={classes.underLineHead}/>
                <Grid container sx={{width:"100%",display:"flex",height:{lg:"35vh",md:"35vh",sm:"100%"},marginTop:"15px"}}>
                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{display:"flex",flexDirection:"column"
                    ,padding:{lg:"0",md:"0",sm:"0 10px 10px 20px",xs:"10px 20px"},height:{lg:"100%",md:"100%",sm:"50%",xs:"300px"}}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px",backgroundColor:"#C0DFD9"
                        ,borderRadius:"20px 20px 0 0",margin:"0 10px",borderBottom:"4px solid white"
                        ,boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <img src="/flatIcon/free.png" className={classes.bestPointIcon}/>
                            
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1",backgroundColor:"#FFEF82"
                        ,borderRadius:"0 0 20px 20px",padding:"10px",margin:"0 10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <Typography variant="h6">It's FREE!</Typography>
                            <Typography variant="a">Don't pay any single bill</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{display:"flex",flexDirection:"column"
                    ,padding:{lg:"0",md:"0",sm:"0 20px 10px 10px",xs:"10px 20px"},height:{lg:"100%",md:"100%",sm:"50%",xs:"300px"}}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px",backgroundColor:"#C0DFD9"
                        ,borderRadius:"20px 20px 0 0",margin:"0 10px",borderBottom:"4px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <img src="/flatIcon/picture.png" className={classes.bestPointIcon}/>
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1",backgroundColor:"#FFEF82"
                        ,borderRadius:"0 0 20px 20px",padding:"10px",margin:"0 10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <Typography variant="h6">NEVER LOST</Typography>
                            <Typography variant="a">We keep your memories forever</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                    <Grid item lg={4} md={4} sm={6} xs={12} sx={{display:"flex",flexDirection:"column"
                    ,padding:{lg:"0",md:"0",sm:"20px 20px",xs:"10px 20px"
                    ,marginLeft:"auto",marginRight:"auto"},height:{lg:"100%",md:"100%",sm:"50%",xs:"300px"}}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px",backgroundColor:"#C0DFD9"
                        ,borderRadius:"20px 20px 0 0",margin:"0 10px",borderBottom:"4px solid white",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <img src="/flatIcon/easy.png" className={classes.bestPointIcon}/>
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1",backgroundColor:"#FFEF82"
                        ,borderRadius:"0 0 20px 20px",padding:"10px",margin:"0 10px",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                            <Typography variant="h6">EASY</Typography>
                            <Typography variant="a">With Simple Tools</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    )
}