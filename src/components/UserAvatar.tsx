import Avatar from '@mui/material/Avatar';
import UserContext from './UserContext';
import { useContext, useState } from 'react';
import {  Button, Typography } from '@mui/material';
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Update from './UserUpdate';


function stringToColor(string: String) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(firstName: String, lastName: String) {
  return {
    alt: `${firstName}${lastName}`,
    sx: {
      bgcolor: stringToColor(`${firstName}${lastName}`),
      m: 1,
    },
    children: `${firstName[0] ??' '}${lastName[0] ??' '}`,
  };
}

const UserAvatar = () => {
  const { user } = useContext(UserContext);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  return (
    <>
      <Avatar {...stringAvatar(user?.firstName??" ", user?.lastName??" ")} />
      <Typography variant="h6" component="div" sx={{ m: 1 }}>
        {user?.firstName} {user?.lastName}
      </Typography>
      <Button
        variant="contained"
        onClick={() => setIsUpdateOpen(true)}
        sx={{ m: 1 }}
        startIcon={<ManageAccountsIcon />}
      >
        Update
      </Button>
      <Update open={isUpdateOpen} close={() => setIsUpdateOpen(false)} />


    </>
  );
};

export default UserAvatar;
