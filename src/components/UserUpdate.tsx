import { FormEvent, useContext, useEffect, useState } from "react";
import { User } from "./Types";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import UserContext from "./UserContext";
import SaveIcon from "@mui/icons-material/Save";

const Update = ({ open, close }: { open: boolean; close: Function }) => {
  const { user, userDispatch } = useContext(UserContext);
  const [userData, setUserData] = useState<User>(user);

  useEffect(() => { setUserData(user) }, [user]);

  const handleChange = (key: string, value: string) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userDispatch({
      type: "UPDATE_USER",
      data: userData,
    });
    setUserData(user);
    close();
  };

  return (
    <Modal
      open={open}
      onClose={() => close()}
      aria-labelledby="update-modal-title"
      aria-describedby="update-modal-description"
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
        <Typography variant="h6" component="h1" textAlign="center" id="update-modal-title">
          Update
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

        <Button type="submit" variant="contained" fullWidth startIcon={<SaveIcon />}>
          Save
        </Button>
      </Box>
    </Modal>
  );
};

export default Update;
