// import React, { useState  } from "react";
// import { useNavigate } from "react-router-dom";
 
// import axios from "axios";
// import "./SignUp.css";



// export const SignUp = () => {
    
//   const handleSignup = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:3001/signup",{name , email , password}).then(result=>{
//         if(result.status==201){
//                 console.log("user created successfully");
//                 navigate("/login");
//         }

//     })
//     .catch{
//         err=>{
//             if(err.response && if(err.response.status===400) ){
//                 window.alert("email already exist plz use a different email")
//             }
//             else{
//                 console.log(err)
//             }
//         }
//     }
//   };

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const navigate = useNavigate();

//   return (
//     <div className="signup-container">
//       <h2>Sign Up</h2>
//       <form className="signup-form" onSubmit={handleSignup}>
//         <input
//           type="text"
//           onChange={(n)=>setName(n.target.value)}
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           onChange={(n)=>setEmail(e.target.value)}
//           placeholder="Email"
//           value={formData.email}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           onChange={(n)=>setPassword(p.target.value)}
//           placeholder="Password"
//           value={formData.password}
//           required
//         />

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        if (result.status === 201) {
          console.log("User created successfully");
          navigate("/login");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          window.alert("Email already exists, please use a different email");
        } else {
          console.error(err);
        }
      });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
