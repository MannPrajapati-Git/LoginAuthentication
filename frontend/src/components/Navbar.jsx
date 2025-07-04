// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // We'll create this next
// import { Logout } from './Logout';
// import { IsLoggedInContext } from '../App';

// export const Navbar = () => {
//     const isLoggedIn = useContext(IsLoggedInContext);
//   return (
//     <nav className="navbar">
//       <div className="logo">MyApp</div>
//       {isLoggedIn?<Logout />:<>
//       <ul className="nav-links">
//         <li><Link to="/home">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
     
//       </ul>
      
//       </>}
//     </nav>
//   );
// };


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Logout } from './Logout';
import { IsLoggedInContext } from '../App';

export const Navbar = () => {
  const isLoggedIn = useContext(IsLoggedInContext);

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>

        {isLoggedIn ? (
          <li><Logout /></li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};
