import { Box, Grid, Typography, styled,Button } from "@mui/material";
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
    underLineHead:{
        width:"150px",
        border:"2px solid #FED053",
        borderRadius:"10px",
        backgroundColor:"#FED053"
    },
    bestPointIcon:{
        width:"150px",
        height:"150px",
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

export default function About() {
    const classes = useStyles();
    return (
        <Grid container sx={{ width: "100%", height: "90vh" ,marginTop:"20px"}}>
            <Grid item lg={12} sx={{
                width: "100%", height: "45vh"
                , backgroundImage: `url(${"ShinyOverlay.png"})`, backgroundRepeat:"no-repeat",padding: "0px calc((100vw - 984px) / 2)", display: "flex"
            }}>
                <Grid item lg={5} sx={{position:"relative"}}>
                    <img src="postcard.png" className={classes.postcardImg} />
                </Grid>
                <Grid item lg={7} sx={{ textAlign: "center", padding: "60px 10px" }}>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "600", fontSize: "30px" }}>ONLINE WISHES AND INVITATIONS</Typography>
                    <Typography variant="h6" sx={{ color: "white", fontWeight: "600", fontSize: "24px" }}>FOR MEMORIES WITHOUT A PIECE OF PAPER</Typography>
                    <Box sx={{ width: "75%", display: "flex", marginLeft: "auto", marginRight: "auto", justifySelf: "center", marginTop: "10px" }}>
                        <Typography variant="a" sx={{ fontSize: "16px" }}>
                            PAPERLESS is the best website, to write friendships, wedding, name card and etc.
                        </Typography>
                    </Box>
                    <Box sx={{marginTop:"20px",display:'flex',marginLeft: "auto"
                    , marginRight: "auto", justifySelf: "center",width:"52%",justifyContent:"space-between"}}>
                        <GetstartButton variant="contained">GET STARTED</GetstartButton>
                        <SeeServiceButton variant="contained">VIEW SERVICES</SeeServiceButton>
                    </Box>
                </Grid>
            </Grid>
            <Grid lg={12} sx={{textAlign:"center",padding: "0px calc((100vw - 984px) / 2)",marginTop:"20px"}}>
                <Typography variant="h5" sx={{fontWeight:"600",color:"#112B3C"}}>OUR BEST POINT</Typography>
                <hr className={classes.underLineHead}/>
                <Grid container sx={{width:"100%",display:"flex",height:"35vh"}}>
                    <Grid item lg={4} sx={{display:"flex",flexDirection:"column",position:"relative"}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px"}}>
                            <img src="/flatIcon/free.png" className={classes.bestPointIcon}/>
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1"}}>
                            <Typography variant="h6">It's FREE!</Typography>
                            <Typography variant="a">Don't pay any single bill</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                    <Grid item lg={4} sx={{display:"flex",flexDirection:"column",position:"relative"}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px"}}>
                            <img src="/flatIcon/picture.png" className={classes.bestPointIcon}/>
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1"}}>
                            <Typography variant="h6">NEVER LOST</Typography>
                            <Typography variant="a">We keep your memories forever</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                    <Grid item lg={4} sx={{display:"flex",flexDirection:"column",position:"relative"}}>
                        <Box sx={{height:"60%",zIndex:"1",marginTop:"20px"}}>
                            <img src="/flatIcon/easy.png" className={classes.bestPointIcon}/>
                        </Box>
                        <Box sx={{height:"40%",zIndex:"1"}}>
                            <Typography variant="h6">EASY</Typography>
                            <Typography variant="a">With Simple Tools</Typography>
                        </Box>
                        {/*<Box sx={{position:"absolute",backgroundColor:"#FFE59D",width:"100%",height:"100%",zIndex:"0",borderRadius:"200px"}}></Box>*/}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}