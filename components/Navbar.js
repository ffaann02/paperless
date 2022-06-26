
import { AppBar, Button, Drawer, Grid, styled, TextField, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const useStyles = makeStyles({
    logo:{
        width:"40px",
        height:"50px"
    },
    search:{
        border:"none",
        fontSize:"14px",
        borderRadius:"6px 0 0 6px",
        height:"40px",
        width:"90%",
        padding:"0 10px"
    },
    listUnderSearch:{
        fontSize:"14px"
    }},{ name: "MuiExample_Component" })
const SearchButton = styled(Button)(({theme})=>({
    borderRadius:"0 6px 6px 0",
    backgroundColor:"#028090",
    width:"10%",
    "&:hover":{
        backgroundColor:"#05668D"
    }
}))

const NavbarButton = styled(Button)(({theme})=>({
    borderRadius:"10px",
    padding:"6px 10px",
    backgroundColor:"white",
    boxShadow:"none",
    color:"black",
    "&:hover":{
        backgroundColor:"#FED053",
        boxShadow:"none",
    }
}))

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
    width:"100%",
})

export default function Navbar(){
    const classes = useStyles();
    return(
        <AppBar position="fixed" sx={{backgroundColor:"white",width:"100%",boxShadow:"0 2px 10px rgb(0 0 0 / 0.125)",height:"60px",
        alignItems:'center',padding:"0px calc((100vw - 984px) / 2)"}}>
            <StyledToolbar>
                <Grid container sx={{with:"100%"}}>
                    <Grid item lg={3} sx={{display:"flex"}}>
                       <Typography variant="h6" sx={{color:"#EC9C04",fontWeight:"600"}}>PAPER</Typography>
                       <Typography variant="h6" sx={{color:"#5bccf6",fontWeight:"600"}}>LESS</Typography>
                    </Grid>
                    <Grid item lg={9} sx={{display:"flex",justifyContent:"space-between",marginBottom:"2px"}}>
                        <NavbarButton variant="contained">ABOUT</NavbarButton>
                        <NavbarButton variant="contained">SERVICES</NavbarButton>
                        <NavbarButton variant="contained">CONTACT</NavbarButton>
                        <Box>
                            <NavbarButton variant="contained">REGISTER</NavbarButton>
                            <NavbarButton variant="contained" sx={{marginLeft:"10px"}}>SIGN IN</NavbarButton>
                        </Box>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </AppBar>
    )
}