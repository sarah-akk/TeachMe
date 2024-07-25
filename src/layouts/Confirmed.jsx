import logo from "../assets/logo.png";
import Background from '../assets/background2.png';
import check from "../assets/check.png";
import { useNavigate } from 'react-router-dom';

const Confirmed = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
      navigate("/home/statistics");
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-center bg-cover relative" style={{ backgroundImage: `url(${Background})` }}>
      <img src={logo} className="mb-4 w-48 z-10" alt="Logo" />
      
      <div className="flex flex-col items-center">
        <img src={check} className="m-10 w-16 h-16" alt="Check" />
        <h1 className="text-blue-950 text-2xl mb-10">تم إرسال بريد إلكتروني</h1>
        <p className="text-blue-950 text-center mb-10">
        يرجى التحقق من وجود بريد إلكتروني من الشركة والنقر على الرابط المرفق لإعادة تعيين كلمة المرور الخاصة بك.
        </p>
        <button className="bg-blue-950 text-white p-2 rounded-md hover:bg-blue-900 transition w-44"
         onClick={handleSubmit}
         >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default Confirmed;
