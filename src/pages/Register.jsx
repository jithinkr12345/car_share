import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/register.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    console.log(validationErrors, "validationErrors");
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log("Form data:", formData);
      navigate("/login");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    // Add your validation logic here
    // Example: Validate that all fields are filled
    console.log(formData, "formData");
    if (formData.firstname === "") {
      errors.firstname = "First Name is required";
    }
    if (formData.lastname === "") {
      errors.lastname = "Last Name is required";
    }
    if (formData.birthdate === "") {
      errors.birthdate = "Birthdate is required";
    }
    if (formData.password === "") {
      errors.password = "Password is required";
    }
    if (formData.confirmPassword === "") {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Password is not matching";
    }
    if (formData.email === "") {
      errors.email = "Email is required";
    }
    if (formData.phone === "") {
      errors.phone = "Phone Number is required";
    }
    return errors;
  };

  return (
    <div className="signup-bg">
      <div className="registration-form">
        <h1>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group field-group">
            <div className="start-field">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && (
                <div className="error">{errors.firstname}</div>
              )}
            </div>
            <div className="last-field">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <div className="error">{errors.lastname}</div>
              )}
            </div>
          </div>

          <div className="form-group field-group">
            <div className="start-field">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>
            <div className="last-field">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}
            </div>
          </div>

          <div className="form-group field-group">
            <div className="start-field">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <div className="error">{errors.phone}</div>}
            </div>
            <div className="last-field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
          </div>
          <div className="form-group field-group">
            <div className="tel-field">
              <label htmlFor="birthdate">Birthdate:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
              {errors.birthdate && (
                <div className="error">{errors.birthdate}</div>
              )}
            </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
