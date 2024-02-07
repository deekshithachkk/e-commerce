import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { userData,setUserData} = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);

    // Submit form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      
      setUserData({...userData,users:formData})
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate('/signIn')
      // You can add your logic for sending the form data to a server here
    }
  };

  return (
    <div className="product-card form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Enter the name"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          
          <input
            type="email"
            placeholder="Enter the Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
        
          <input
            type="password"
            placeholder="Enter the Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
        
          <input
            type="password"
            placeholder="Enter the Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Sign Up</button>
        <a className="pointer" onClick={()=>navigate('/signIn')}>SignIn</a>
      </form>
      
    </div>
  );
};

export default SignUp;
