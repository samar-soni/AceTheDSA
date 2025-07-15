import React, {useContext} from 'react'
import {Navigate} from 'react-router-dom'
import {StoreContext} from '../../context/StoreContext.jsx';


const PrivateRoute = ({children}) => {
    const {token} = useContext(StoreContext);
  return token ? children : <Navigate to = "/"/>
}

export default PrivateRoute