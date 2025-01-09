
import './App.css'
import { useReducer } from 'react';
import UserReducer from './components/UserReducer';
import UserContext from './components/UserContext';
import { User } from './components/Types';
import Navbar from './components/Navbar';

const emptyUser: User =
{
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  address: '',

};
function App() {
  
  const [user, userDispatch] = useReducer(UserReducer, emptyUser)

  return (
    <>
   
      <UserContext.Provider value={{ user, userDispatch }}>
      <Navbar/>
      </UserContext.Provider>

    </>
  )
}

export default App
