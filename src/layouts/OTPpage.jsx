import logo from "../assets/logo.png";
import Background from '../assets/background2.png';
import avatar from "../assets/avatar.png"; 
import { useNavigate } from 'react-router-dom';

const OTPpage = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/confirmed");
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${Background})` }}>
      <img src={logo} className="mb-4 w-48 z-10" alt="Logo" />
      
      <div className="flex flex-col items-center z-20  p-8 ">
        <img src={avatar} className="mb-4 w-24 h-24 rounded-full" alt="Avatar" />
        <h1 className="text-blue-950 text-2xl mb-4">Hello User</h1>
        <p className="text-blue-950 text-sm mb-4">Enter Confirmation Code</p>

        <div className="flex justify-center mb-4 space-x-2">
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
          <input type="text" maxLength="1" className="w-12 h-12 text-center border border-blue-700 rounded-md bg-white" />
        </div>

        <button className="bg-blue-950 text-white m-10 p-2 rounded-md hover:bg-blue-900 transition w-44"
        onClick={handleSubmit}
        >Sign In</button>
      </div>
    </div>
  );
};

export default OTPpage;
