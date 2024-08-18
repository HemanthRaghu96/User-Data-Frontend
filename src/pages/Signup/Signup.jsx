import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../api/api";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    role: "User",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/users/signup`, formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup failed.");
    }
  };

  return (
    <main className="login">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex justify-center items-center bg-white rounded-md mb-10">
          <div className="flex flex-col m-10 bg-white">
            <h1 className="text-2xl font-semibold px-2 bg-white">Register</h1>
            <p className="text-base font-light px-2 bg-white">to access User Data</p>
            
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
              required
            />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
              required
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile No"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
              required
            />
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Guest">Guest</option>
            </select>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="m-2 px-2 py-1 border bg-slate-100 rounded-md"
              required
            />
            <button
              type="submit"
              className="m-2 p-2 border rounded-lg bg-buttonColor text-orange-200 bg-orange-900 font-bold cursor-pointer"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p className="text-base font-light px-2 my-1 bg-white">
              Already have an account?{" "}
              <span className="text-buttonColor font-semibold cursor-pointer">
                <Link to={"/login"} className="bg-white">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
