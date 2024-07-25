/* eslint-disable no-unused-vars */

import { useState } from 'react';
// import { useAuth } from '../../store/AuthContext';
// import { changePassword } from '../../httpService/changePassword';
import { FaUserCircle , FaEye, FaEyeSlash } from 'react-icons/fa';

const ChangePassword = () => {
    // const { authData } = useAuth();
    const [passwordData, setPasswordData] = useState({
      old_password: '',
      password: '',
      password_confirmation: ''
    });
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const handleChange = (e) => {
      setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    //   try {
    //     await changePassword(authData.token, passwordData);
    //     setMessage({ type: 'success', text: 'Password changed successfully!' });
    //   } catch (error) {
    //     setMessage({ type: 'error', text: error.message });
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const [showPassword, setShowPassword] = useState({
        old_password: false,
        password: false,
        password_confirmation: false,
    });
    
    const togglePasswordVisibility = (field) => {
        setShowPassword({
            ...showPassword,
            [field]: !showPassword[field],
        });
    };
  
    return (
    <>
    <h1 className="text-2xl font-bold mb-6 text-end mr-80">تغيير كلمة المرور |</h1>
    <div className="flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-4">
                <div className="flex items-center justify-center mb-4">
                    <FaUserCircle className="text-6xl text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-center pb-10 text-gray-700">الملف الشخصي</h2>
                {message && (
                    <div className={`p-2 rounded text-center ${message.type === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                        {message.text}
                    </div>
                )}
                <form className="space-y-4 text-end">
     <div className="justify-center items-center relative">
         <label className="block text-blue-900 text-end">الكلمة الحالية</label>
         <input
            type={showPassword.old_password ? "text" : "password"}
            name="old_password"
            placeholder='**************'
            value={passwordData.old_password}
            onChange={handleChange}
            className="text-end items-center w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            required
        />
        <span
            className="absolute inset-y-12 left-0 flex items-center px-2 text-gray-600 cursor-pointer"
            onClick={() => togglePasswordVisibility('old_password')}
        >
            {showPassword.old_password ? < FaEye /> : <FaEyeSlash />}
        </span>
    </div>
    <div className="relative justify-center items-center">
        <label className="block text-blue-900 text-end">الكلمة الجديدة</label>
        <input
            type={showPassword.password ? "text" : "password"}
            name="password"
            placeholder='**************'
            value={passwordData.password}
            onChange={handleChange}
            className="text-end w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            required
        />
        <span
            className="absolute inset-y-12 left-0 flex items-center px-2 text-gray-600 cursor-pointer"
            onClick={() => togglePasswordVisibility('password')}
        >
            {showPassword.password ? < FaEye /> : <FaEyeSlash />}
        </span>
    </div>
    <div className="relative justify-center items-center">
        <label className="block text-blue-900 text-end">تأكيد الكلمة الجديدة</label>
        <input
            type={showPassword.password_confirmation ? "text" : "password"}
            name="password_confirmation"
            placeholder='**************'
            value={passwordData.password_confirmation}
            onChange={handleChange}
            className="text-end w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            required
        />
        <span
            className="absolute inset-y-12 left-0 flex items-center px-2 text-gray-600 cursor-pointer"
            onClick={() => togglePasswordVisibility('password_confirmation')}
        >
            {showPassword.password_confirmation ? < FaEye /> : <FaEyeSlash />}
        </span>
    </div>
    <button
        type="submit"
        className="w-full bg-blue-900 text-white p-2 rounded mt-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
        disabled={loading}
    >
        {loading ? 'جاري الحفظ ...' : 'حفظ'}
    </button>
</form>

            </div>
        </div></>
    );
}

export default ChangePassword
