import { Box, Grid, Typography, styled,Button } from "@mui/material";
import { makeStyles } from '@mui/styles'
import Image from "next/image"
import AddIcon from '@mui/icons-material/Add';
import AddCardIcon from '@mui/icons-material/AddCard';
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
        <Grid container sx={{padding:"0px calc((100vw - 984px) / 2)",height:"90vh",marginTop:"40px"}}>
            <Grid item lg={12} md={12}>
                <Typography variant="h6" sx={{fontWeight:"600"}}>Money Gifts</Typography>
                <Box sx={{width:"34%",display:"flex",marginLeft:"auto",marginRight:"auto",borderRadius:"10px",cursor:"pointer",transitionDuration:"0.5s",
                backgroundColor:"#F08080",height:"30vh",textAlign:"center",justifyContent:"center","&:hover":{
                    width:"60%",
                    
                },"&:hover #addPaymentForm":{
                    display:"block",
                    backgroundColor:"white",
                    border:"1px solid black",
                    borderRadius:"0 10px 10px 0"
                }}}>
                    <Box sx={{width:"50%"}}>
                        <AddCardIcon sx={{color:"white",fontSize:"100px",marginTop:"40px"}}/>
                        <Typography variant="h6" sx={{color:"white",fontWeight:"600",fontSize:"24px",marginTop:"20px"}}>Add Payment</Typography>
                    </Box>
                    <Box id="addPaymentForm" sx={{width:"50%",display:"none"}}>PAY</Box>
                </Box>
                
            </Grid>
        </Grid>
        </Box>
    )
}