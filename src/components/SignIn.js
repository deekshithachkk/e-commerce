import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { userData,setUserData} = useContext(UserContext);
  const navigate=useNavigate()
  const {loginType,setLoginType}=useContext(UserContext)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
   
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } 
   
    setErrors(newErrors);

    // Submit form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      if(Array(userData?.users)?.filter((item)=>item?.email==formData.email && item?.password==formData.password).length>0)
      {
        alert("Order is Created SuccessFully")
          setUserData({billingData:[],userData:[]})
          setFormData({email:"",password:""})
      }
      else
      {
        newErrors.invalid="InValid Credential";
      }
     
     
      
      
      // You can add your logic for sending the form data to a server here
    }
  };

  return (
    <div className="product-card form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
       
        <div>
          
          <input
            type="email"
            placeholder="'Enter the Email"
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
          
        </div>
        
        <button type="submit">Sign In</button>
        {errors.invalid && <span>{errors.invalid}</span>}
        <a className="pointer" onClick={()=>navigate('/signUp')}>SignUp</a>
      </form>
     
    </div>
  );
};

export default SignIn;
