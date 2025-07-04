// import React from "react";
// import { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";

// export const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios
//       .post(
//         "http://localhost:3001/login",
//         { email, password },
//         { withCredentials: true }
//       )
//       .then((result) => {
//         if (result.data === "success") {
//           axios
//             .get("http://localhost:3001/user", {
//               withCredentials: true,
//             })

//             .then((response) => {
//               if (response.data.user) {
//                 navigate("/home", { state: { user: response.data.user } });
//               }
//             });
//         } else {
//           alert("login failed : user doent exist.");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           type="email"
//           onChange={(e) => setEmail(e.target.value)}
//           name="email"
//           placeholder="Email"
//           value={email}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           value={password}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { SetIsLoggedInContext } from "../App";

// export const Login = () => {
//     const setIsLoggedIn = useContext(SetIsLoggedInContext);
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const result = await axios.post(
//         "http://localhost:3001/login",
//         { email, password },
//         { withCredentials: true }
//       );

//       if (result.data === "success") {
//         const response = await axios.get("http://localhost:3001/user", {
//           withCredentials: true,
//         });

//         if (response.data.user) {
//             setIsLoggedIn(true);
//           navigate("/home", { state: { user: response.data.user } });
//         } else {
//           alert("Failed to retrieve user session.");
//         }
//       } else {
//         alert("Login failed: user does not exist.");
//       }
//     } catch (err) {
//       console.error("Login Error:", err);
//       alert("An error occurred during login. Please try again.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };


import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SetIsLoggedInContext } from "../App";

export const Login = () => {
  const setIsLoggedIn = useContext(SetIsLoggedInContext); // ✅ Fixed: useContext added
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      );

      if (result.data === "success") {
        const response = await axios.get("http://localhost:3001/user", {
          withCredentials: true,
        });

        if (response.data.user) {
          setIsLoggedIn(true);
          navigate("/home", { state: { user: response.data.user } });
        } else {
          alert("Failed to retrieve user session.");
        }
      } else {
        alert("Login failed: user does not exist.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
