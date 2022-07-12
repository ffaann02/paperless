
import { AppBar, Button, collapseClasses, Drawer, Grid, styled, TextField, Toolbar, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles'
import { Box } from "@mui/system";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ArticleIcon from '@mui/icons-material/Article';
import ReviewsIcon from '@mui/icons-material/Reviews';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import {Link as ScrollLink} from "react-scroll"
import Link from "next/link"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
const useStyles = makeStyles({
    
}, { name: "MuiExample_Component" })

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

export default function ServiceNavbar() {
    const classes = useStyles();
    const [isSeeService, setIsSeeService] = useState(false)
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [toggleServiceMobile,setToggleServiceMobile] = useState(false)
    return (
        <AppBar position="fixed" sx={{
            backgroundColor: "#3B3F46", width: "100%", boxShadow: "0 2px 10px rgb(0 0 0 / 0.125)", height: "60px",
            alignItems: 'center', padding: "0px calc((100vw - 984px) / 2)"
        }}>
            <StyledToolbar>
                <Grid container sx={{ with: "100%" }}>
                    <Grid item lg={3} md={3} sx={{ display: "flex" ,color:"#242F9B",cursor:"pointer"}}>
                        <MenuIcon sx={{display:{lg:"none",md:"none",sm:"block",xs:"block",fontSize:"30px"}}} onClick={()=>{setSidebarOpen(true)}}/>
                        <Link href="/">
                        <ScrollLink to="heroblock" smooth duration={1000} offset={-100}>
                            <Typography variant="h6" sx={{display:"flex",marginBottom:"5px","&:hover #homeButton":{
                                color:"white"
                            }}}>
                            <HomeOutlinedIcon id="homeButton" sx={{color:"#7f838a",fontSize:"30px",marginRight:"10px"}}/>
                            <Typography variant="a" sx={{ color: "#EC9C04", fontWeight: "600" ,display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>PAPER</Typography>
                            <Typography variant="a" sx={{ color: "#5bccf6", fontWeight: "600" ,display:{lg:"block",md:"block",sm:"none",xs:"none"}}}>LESS</Typography>
                            </Typography>
                        </ScrollLink>
                        </Link>
                    </Grid>
                    <Grid item lg={6} md={6} sx={{marginTop:"5px",justifyContent:"center",textAlign:"center",cursor:"pointer"}}>
                        <Box sx={{position:"relative",display:"inline-block",marginLeft:"auto",marginRight:"auto"}}
                        onMouseOver={() => {
                            setIsSeeService(true)
                        }} onMouseOut={() => {
                            setIsSeeService(false)
                        }}>
                        <Typography variant="h6" sx={{display:"flex",marginLeft:"auto",marginRight:"auto",justifyContent:"center"}}>
                            <Typography variant="a" sx={{fontSize:"16px"}}>Wedding Wish</Typography>
                            {isSeeService? <KeyboardArrowUpIcon sx={{fontSize:"20px",marginLeft:"2px",marginTop:"2px"}}/>
                            :<KeyboardArrowDownIcon sx={{fontSize:"20px",marginLeft:"2px",marginTop:"2px"}}/>}
                        </Typography>
                        {isSeeService?<Box sx={{width: "200px", height: "240px", position: "absolute", top: "10px",
                                paddingTop: "40px",marginLeft: "auto", marginRight: "auto",}} onMouseOver={() => {
                                    setIsSeeService(true)
                                }} onMouseOut={() => {
                                    setIsSeeService(false)
                                }}>
                                    <Box sx={{ backgroundColor: "white", width: "100%", 
                                    height: "100%",borderRadius:"5px",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                                        <DropdownServiceList>
                                            <Link href="/wedding">
                                            <Typography variant="a" sx={{color:"black",display:"flex"}}>
                                                <FavoriteBorderIcon/><Typography variant="a" sx={{marginLeft:"10px"}}>Wedding Wish</Typography>
                                            </Typography>
                                            </Link>
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