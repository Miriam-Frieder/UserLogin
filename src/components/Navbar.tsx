import { AppBar, Box, Button, Toolbar } from "@mui/material"
import { useState } from "react"
import LoginIcon from '@mui/icons-material/Login'
import UserAvatar from "./UserAvatar";
import Login from "./UserLogin";

const Navbar = () => {
    const [isLogging, setIsLogging] = useState(false)
    const [isLogged, setIsLogged] = useState(false)

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        {isLogged ? <UserAvatar /> : <></>}

                        <Box sx={{ ml: 'auto' }}>
                            <Button variant="contained" startIcon={<LoginIcon />} onClick={() => setIsLogging(true)}>
                                Login
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <Login open={isLogging} close={() =>{ setIsLogging(false); setIsLogged(true)}} />
        </>
    )
}
export default Navbar
