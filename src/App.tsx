
import './App.css'
import { useReducer } from 'react';
import UserReducer from './components/UserReducer';
import UserContext from './components/UserContext';
import { User } from './components/Types';
import { router } from './Router';
import { RouterProvider } from 'react-router';

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
        <RouterProvider router={router} />
      </UserContext.Provider>

    </>
  )
}

export default App
