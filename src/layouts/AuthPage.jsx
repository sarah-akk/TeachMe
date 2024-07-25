import logo from "../assets/logo.png";
import Background from '../assets/background2.png';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/OTP");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${Background})` }}>
      <img src={logo} className="mb-40 w-48 z-10" alt="Logo" />
      
      <div className="flex flex-col items-center z-20">
        <input type="text" placeholder="Username" className="mb-4 p-2 border border-blue-700 rounded-md bg-white w-96" />
        <input type="password" placeholder="Password" className="mb-4 p-2 border border-blue-700 rounded-md bg-white w-96" />
        
        <div className="flex items-center mb-4 w-96 justify-between">
          <a href="#" className="text-blue-950 text-sm mb-4">Did you forget?</a>
          <div className="flex items-center">
            <input type="checkbox" id="remindMe" className="mr-2" />
            <label htmlFor="remindMe" className="text-blue-950">Remind me</label>
          </div>
        </div>
        
        <button className="bg-blue-950 text-white p-2 rounded-md hover:bg-blue-900 transition w-96"
        onClick={handleSubmit}
        >Submit</button>
      </div>
    </div>
  );
};

export default AuthPage;
