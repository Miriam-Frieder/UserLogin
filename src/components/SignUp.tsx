import { FormEvent, useContext, useState } from "react";
import { User } from "./Types";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import UserContext from "./UserContext";
import { emptyUser } from "./UserContext";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const SignUp = ({ open, close }: { open: boolean, close: Function }) => {
  const { userDispatch } = useContext(UserContext);
  const [userData, setUserData] = useState<User>(emptyUser);


  const handleChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/user/register`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-type': 'application/json',
        }
      })
      if (response.status === 422) { alert('user already sign up') }
      else if (!response.ok) { throw new Error(response.status + '') }
      const data = await response.json()
      setUserData({ ...userData, id: data.id });


      userDispatch({
        type: 'CREATE_USER',
        data: { ...userData, id: data.id },
      });

      setUserData(emptyUser);
      close();
    }
    catch (e) {
      console.log(e);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => close()}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          width: "90%",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 2,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h1" textAlign="center" id="login-modal-title">
          Sign Up
        </Typography>

        <TextField
          id="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          value={userData.firstName}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <TextField
          id="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={userData.lastName}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={userData.email}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={userData.password}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <TextField
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={userData.phoneNumber}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <TextField
          id="address"
          label="Address"
          variant="outlined"
          fullWidth
          value={userData.address}
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <Button type="submit" variant="contained" fullWidth>
          Continue
        </Button>
      </Box>
    </Modal>
  );
};

export default SignUp;
