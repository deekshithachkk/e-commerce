import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { alertPopUp, formSuccess } from "../helper";

const BillingForm = () => {
  const {setUserData}=useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    phoneno: "",
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
    if (!formData.name) {
      newErrors.name = "name is required";
    }
    if (!formData.address) {
      newErrors.address = "Adress is required";
    }
    
    setErrors(newErrors);

    // Submit form if there are no errors
    if (Object.keys(newErrors).length === 0) {
   
      setUserData({billingData:formData})
      setFormData({
        name:"",
        address:"",
        city:"",
        phoneno:""
      })
      alertPopUp(formSuccess)
     
    }
  };

  return (
    <div className="product-card form-container">
      <form onSubmit={handleSubmit}>
        <h2>Billing Address</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enetr the name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
        
          <input
            type="text"
            name="address"
            placeholder="Enter the address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          
          <input
            type="text"
            name="city"
            placeholder="Enter the city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
        
          <input
            type="number"
            name="phoneno"
            placeholder="Enter the phone number"
            value={formData.phoneno}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Submit</button>
       
      </form>
      
    </div>
  );
};

export default BillingForm;
