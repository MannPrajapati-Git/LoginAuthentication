import React from 'react'
import { useLocation } from 'react-router-dom'; 
export const Home = () => {
    const location = useLocation();
    const user = location.state?.user;
  return (

    <div><h1>`Welcome Home {user.name}`</h1></div>
  )
}
