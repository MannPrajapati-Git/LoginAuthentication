// import React from 'react'
// import { useLocation } from 'react-router-dom'; 
// export const Home = () => {
//     const location = useLocation();
//     const user = location.state?.user;
//   return (
//     <>
//     <div>hello</div>
//     <div><h1>Welcome Home {user && user.name}</h1></div>
//     </>
//   )
// }


// import React from 'react'
// import { useLocation } from 'react-router-dom'; 

// export const Home = () => {
//     const location = useLocation();
//     const user = location.state?.user;

//     return (
//         <>
//             <div>hello</div>
//             <div><h1>Welcome Home {user && user.name}</h1></div>
//         </>
//     )
// }


import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [user, setUser] = useState(location.state?.user || null);

  useEffect(() => {
    // If no user in location state, fetch from backend
    if (!user) {
      axios.get("http://localhost:3001/user", { withCredentials: true })
        .then(response => {
          if (response.data.user) {
            setUser(response.data.user);
          } else {
            navigate("/login");
          }
        })
        .catch(err => {
          console.log("Error fetching user:", err);
          navigate("/login");
        });
    }
  }, []);

  if (!user) {
    return <p>Loading user...</p>; // Optional: Spinner
  }

  return (
    <>
      <div>hello</div>
      <div><h1>Welcome Home {user.name}</h1></div>
    </>
  );
};
