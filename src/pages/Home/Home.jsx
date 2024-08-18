import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate=useNavigate()
    const handleLogin=()=>{
        navigate('/login')
    }
    const handleRegister=()=>{
      navigate('/signup')
  }
  return (
    <div className="flex flex-col justify-end items-center mt-32 lg:mt-40">
      <img
        src="https://media.gettyimages.com/id/1300946561/vector/diverse-people-on-online-group-video-chat-screen.jpg?s=612x612&w=0&k=20&c=cKYqTEZwOWJbrekdk2_eJf57EilojWJnFpfcNtN8bZo="
        alt="homePic"
        className="h-[150px] lg:h-[250px] object-contain rounded-lg"
      />
      <h1 className="sm:text-3xl lg:text-4xl font-bold text-center mt-2"> <span className="text-orange-400">Login</span> to get <span className="text-blue-300">User Info</span></h1>
     
    <div className="mt-3 flex justify-center items-center">
        <button className="text-orange-900 font-bold bg-orange-300  rounded-md px-6 py-2 mt-3" onClick={handleLogin}>Login</button>
        <button className="text-orange-300 font-bold bg-orange-900 rounded-md px-6 py-2 mt-3 ml-3" onClick={handleRegister}>Register</button>
       
    </div>
    </div>
  );
};