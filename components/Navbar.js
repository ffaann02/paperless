
import { AppBar, Button, Drawer, Grid, styled, TextField, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArticleIcon from '@mui/icons-material/Article';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { useState } from "react";
const useStyles = makeStyles({
    logo: {
        width: "40px",
        height: "50px"
    },
    search: {
        border: "none",
        fontSize: "14px",
        borderRadius: "6px 0 0 6px",
        height: "40px",
        width: "90%",
        padding: "0 10px"
    },
    listUnderSearch: {
        fontSize: "14px"
    }
}, { name: "MuiExample_Component" })
const SearchButton = styled(Button)(({ theme }) => ({
    borderRadius: "0 6px 6px 0",
    backgroundColor: "#028090",
    width: "10%",
    "&:hover": {
        backgroundColor: "#05668D"
    }
}))

const NavbarButton = styled(Button)(({ theme }) => ({
    borderRadius: "10px",
    padding: "6px 10px",
    backgroundColor: "white",
    boxShadow: "none",
    color: "black",
    "&:hover": {
        backgroundColor: "#FFEF82",
        boxShadow: "none",
    }
}))
const SignInButton = styled(Button)(({ theme }) => ({
    borderRadius: "10px",
    padding: "6px 10px",
    backgroundColor: "#FFEF82",
    boxShadow: "none",
    color: "#3B3F46",
    "&:hover": {
        backgroundColor: "#FED053",
        boxShadow: "none",
    }
}))

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between",
    width: "100%",
})

const DropdownServiceList = styled(Box)({
    borderRadius:"0 5px 5px 0",
    height:"20%",
    width:"100%",
    borderBottom:"1px solid rgba(0,0,0,0.1)",
    paddingLeft:"10px",
    paddingTop:"10px",
    "&:hover": {
        background:"linear-gradient(to right, #47B5FF 2%, white 0%)",
        borderBottom:"1px solid rgba(0,0,0,0.25)"
    }
})

export default function Navbar() {
    const classes = useStyles();
    const [isSeeService, setIsSeeService] = useState(false)
    return (
        <AppBar position="fixed" sx={{
            backgroundColor: "white", width: "100%", boxShadow: "0 2px 10px rgb(0 0 0 / 0.125)", height: "60px",
            alignItems: 'center', padding: "0px calc((100vw - 984px) / 2)"
        }}>
            <StyledToolbar>
                <Grid container sx={{ with: "100%" }}>
                    <Grid item lg={3} sx={{ display: "flex" }}>
                        <Typography variant="h6" sx={{ color: "#EC9C04", fontWeight: "600" }}>PAPER</Typography>
                        <Typography variant="h6" sx={{ color: "#5bccf6", fontWeight: "600" }}>LESS</Typography>
                    </Grid>
                    <Grid item lg={9} sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2px" }}>
                        <NavbarButton variant="contained">ABOUT</NavbarButton>
                        <Box sx={{ position: "relative" }}>
                            <NavbarButton variant="contained" onMouseOver={() => {
                                setIsSeeService(true)
                            }} onMouseOut={() => {
                                setIsSeeService(false)
                            }}>SERVICES
                                {!isSeeService ? <KeyboardArrowDownIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />
                                    : <KeyboardArrowUpIcon sx={{ fontSize: "20px", marginBottom: "4px" }} />}
                            </NavbarButton>
                                {isSeeService?
                                <Box sx={{width: "200px", height: "240px", position: "absolute", top: "30px"
                                ,paddingTop: "25px", marginLeft: "auto", marginRight: "auto",}} onMouseOver={() => {
                                    setIsSeeService(true)
                                }} onMouseOut={() => {
                                    setIsSeeService(false)
                                }}>
                                    <Box sx={{ backgroundColor: "white", width: "100%", 
                                    height: "100%",borderRadius:"5px",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                        <DropdownServiceList>
                                            <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <FavoriteBorderIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Wedding Wish</Typography>
                                                </Typography>
                                        </DropdownServiceList>
                                        <DropdownServiceList>
                                            <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <PeopleOutlineIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Friendships</Typography>
                                                </Typography>
                                        </DropdownServiceList>
                                        <DropdownServiceList>
                                        <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <CreditCardIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Name Card</Typography>
                                                </Typography>
                                        </DropdownServiceList>
                                        <DropdownServiceList>
                                        <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <ArticleIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Resume</Typography>
                                                </Typography>
                                        </DropdownServiceList>
                                        <DropdownServiceList sx={{borderBottom:"none",display:"flex"}}>
                                        <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <ReviewsIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Review</Typography>
                                                </Typography>
                                        </DropdownServiceList>
                                    </Box>
                                </Box>:""}
                        </Box>
                        <NavbarButton variant="contained">CONTACT</NavbarButton>
                        <Box>
                            <NavbarButton variant="contained">REGISTER</NavbarButton>
                            <SignInButton variant="contained" sx={{ marginLeft: "10px" }}>SIGN IN</SignInButton>
                        </Box>
                    </Grid>
                </Grid>
            </StyledToolbar>
        </AppBar>
    )
}
{/*<Box sx={{width:"200px",height:"200px",position:"absolute",top:"40px"
,padding:"10px",marginLeft:"auto",marginRight:"auto"}}>
    <Box sx={{backgroundColor:"white",width:"100%",height:"100%"}}></Box>
</Box>*/}