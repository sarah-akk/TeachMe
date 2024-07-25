/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import Background from '../assets/background.png'

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
        navigate('/auth');
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
  <div className="flex justify-center items-end h-screen w-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
  <img src={logo} className="relative mb-72 z-10" alt="Logo" />
  <h2 className="text-blue-950 text-4xl mb-52  z-20 absolute font-semibold">اهلا بك في تطبيق درسني</h2>
  </div>
  );
};

export default Splash;
