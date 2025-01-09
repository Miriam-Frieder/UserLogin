import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { useContext, useState } from "react"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login'
import UserAvatar from "./UserAvatar";
import SignUp from "./SignUp";
import Login from "./UserLogin";
import { UserContext } from "./UserContext";

const Navbar = () => {
    const [isLogging, setIsLogging] = useState(false)
    const [isRegister, setIsRegister] = useState(false)
    const { user} = useContext(UserContext);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        {user?.id ? <UserAvatar /> :
                            
                            <Box>
                                <Button variant="contained" startIcon={<PersonAddIcon />} onClick={() => setIsRegister(true)}>
                                    Sign Up
                                </Button>
                                <Button variant="contained" startIcon={<LoginIcon />} onClick={() => setIsLogging(true)}>
                                    Log in
                                </Button>
                            </Box>
                        }
                        <Box sx={{ ml: 'auto' }}>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <Login open={isLogging} isRegister={isRegister} close={() => { setIsLogging(false);  }} />
            <Login open={isRegister} isRegister={isRegister} close={() => { setIsRegister(false); }} />

        </>
    )
}
export default Navbar
