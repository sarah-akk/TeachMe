import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaUserGraduate, FaUsers, FaClipboardList, FaUserTie, FaWallet, FaBook, FaChalkboardTeacher, FaExclamationCircle, FaKey } from 'react-icons/fa';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [walletExpanded, setWalletExpanded] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const toggleWalletExpansion = () => {
    setWalletExpanded(!walletExpanded);
  };

  const [UserExpanded, setUserExpanded] = useState(false);

  const toggleUserExpansion = () => {
    setIsClicked(!isClicked);
    setUserExpanded(!UserExpanded);
  }; 
  
  const [RechargeRequestExpanded, setRechargeRequestExpanded] = useState(false);

  const toggleRechargeRequestExpansion = () => {
    setRechargeRequestExpanded(!RechargeRequestExpanded);
  };

  const [DischargeRequestExpanded, setDischargeRequestExpanded] = useState(false);

  const toggleDischargeRequestExpansion = () => {
    setDischargeRequestExpanded(!DischargeRequestExpanded);
  };

  return (
    <div className="w-64 bg-white p-4 fixed right-0 top-0 h-full rtl shadow-xl text-right overflow-visible items-end justify-end hide-scrollbar "
    style={{ overflowY: 'scroll'}}>
      <img src={logo} className="mb-10 ml-14 w-36 z-10" alt="Logo" />
      <ul className="space-y-2 text-end rtl">

        <li className="flex justify-end">
          <NavLink to="/home/statistics"
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}           >
            <FaChartBar className="ml-2" />
            الاحصائيات
          </NavLink>
        </li>

        <div
            className="text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg hover:text-white hover:bg-blue-950 "
            onClick={toggleUserExpansion}
            style={{ cursor: 'pointer' }}
          >
            <FaUserGraduate className="ml-2" />
            المستخدمين 
          </div>

          {UserExpanded && (
          <ul className="text-end rtl mr-4 mt-3">
            <li className="flex justify-end">
              <NavLink to="users/expert" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}              >
                خبير
              </NavLink>
            </li>
            <li className="flex justify-end">
              <NavLink to="users/student" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}              >
                طالب
              </NavLink>
            </li>
          </ul>
          )}


        <li className="flex justify-end">
          <NavLink to="/home/employees"
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}           >
            <FaUsers className="ml-2" />
            الموظفين
          </NavLink>
        </li>

        <li className="flex justify-end">
          <NavLink to="/home/requests"
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}           >
            <FaClipboardList className="ml-2" />
            طلبات الخبراء
          </NavLink>
        </li>

        <li className="flex justify-end">
          <NavLink to="/home/professors-info" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}          >
            <FaUserTie className="ml-2" />
            استكمال معلومات الاساتذة
          </NavLink>
        </li>

        <li className=" justify-end">
          <div
            className="text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg hover:text-white hover:bg-blue-950"
            onClick={toggleWalletExpansion}
            style={{ cursor: 'pointer' }}
          >
            <FaWallet className="ml-2" />
            المحفظة الالكترونية
          </div>   
          {walletExpanded && (
            <ul className="text-end rtl mr-4 mt-3">
              <li className=" justify-end">
                <div 
                className="text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg hover:text-white hover:bg-blue-950"
                onClick={toggleRechargeRequestExpansion}
                style={{ cursor: 'pointer' }}>
                طلبات شحن .
                </div>
                {RechargeRequestExpanded && (
                <ul className="text-end rtl mr-4 mt-1">
                  <li className="flex justify-end">
                    <NavLink to="/home/wallet/recharge-requests/students"
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}                     >
                      الطلاب
                    </NavLink>
                  </li>
                  <li className="flex justify-end">
                    <NavLink to="/home/wallet/recharge-requests/experts" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}                    >
                      الخبراء
                    </NavLink>
                  </li>
                </ul>
                )}
              </li>
              <li className=" justify-end">
                <div className="text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg hover:text-white hover:bg-blue-950"
                  onClick={toggleDischargeRequestExpansion}
                  style={{ cursor: 'pointer' }}>
                طلبات تفريغ .
                </div>
                {DischargeRequestExpanded && (
                <ul className="text-end rtl mr-4 mt-1">
                  <li className="flex justify-end">
                    <NavLink to="/home/wallet/discharge-requests/students" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}                    >
                      الطلاب
                    </NavLink>
                  </li>
                  <li className="flex justify-end">
                    <NavLink to="/home/wallet/discharge-requests/experts" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}                    >
                      الخبراء
                    </NavLink>
                  </li>
                </ul>
                )}
              </li>
            </ul>
          )}
        </li>


        <li className="flex justify-end">
          <NavLink to="/home/courses" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}          >
            <FaBook className="ml-2" />
            الدورات
          </NavLink>
        </li>

        <li className="flex justify-end">
          <NavLink to="/home/educational-resources" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}          >
            <FaChalkboardTeacher className="ml-2" />
            الوسائل التعليمية المضافة
          </NavLink>
        </li>

        <li className="flex justify-end">
          <NavLink to="/home/reports" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}          >
            <FaExclamationCircle className="ml-2" />
            البلاغات
          </NavLink>
        </li>

        <li className="flex justify-end">
          <NavLink to="/home/change-password" 
 className={({ isActive }) =>
  `text-blue-950 font-bold flex items-center flex-row-reverse p-2 rounded-lg ${
    isActive ? 'text-white bg-blue-950' : 'hover:text-white hover:bg-blue-950'
  }`
}          >
            <FaKey className="ml-2" />
            تغيير كلمة المرور
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
