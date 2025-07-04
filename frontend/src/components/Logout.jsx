// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import { SetIsLoggedInContext } from '../App';


// export const Logout = () => {
//     const SetIsLoggedIn=useContext(SetIsLoggedInContext);

//     const navigate = useNavigate(); 
//     const handleLogout=()=>{

//         axios.post("http://localhost:3001/logout",{},{withCredentials:true})
//         .then(response=>{
//             if(response.status===200)
//             {
//                 SetIsLoggedIn(false);
//                 navigate("/login");
//             }
//         })
//         .catch(error=>{
//             console.log("error logging out : ",error);
//         })
//     }
//   return (
//     <button onClick={handleLogout}>Logout</button>
//   )
// }
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SetIsLoggedInContext } from '../App';

export const Logout = () => {
  const setIsLoggedIn = useContext(SetIsLoggedInContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
      try{
       const response = await  axios.post("http://localhost:3001/logout", {}, { withCredentials: true })
 
        if (response.status === 200) {
          setIsLoggedIn(false);
          navigate("/login");
        }
      
   }
     
      catch(error){
        console.log("Error logging out:", error);
      }
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};
