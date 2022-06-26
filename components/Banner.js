import { Box, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    bannerImg:{
        width:"100%",
        height:"100%"
    }
    },{ name: "MuiExample_Component" })

export default function Banner(){
    const classes = useStyles();
    return(
        <Box sx={{width:"100%"}}>
            <img src="/banner-thin.jpg" className={classes.bannerImg}/>
        </Box>
    )
}