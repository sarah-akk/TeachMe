import { FaBell, FaSearch, FaList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate("/home/notifications");
  }

  return (
    <div className="w-full bg-white p-4 flex justify-between items-center shadow-md  flex-row-reverse">
      <div className="flex items-center">
      <div className=" bg-gray-200 p-2 w-64 rounded-xl text-right mr-32 align-middle justify-end flex">
        <label className="text-blue-950 font-bold mr-2">بحث</label>
        <FaSearch className="text-blue-950 " />
        </div>
        <FaList className="text-blue-950 mr-72" />
      </div>
      <div className="flex items-center space-x-4 p-2 rounded-full hover:bg-gray-200">
        <FaBell className="text-blue-950" onClick={handleNavigate}/>
      </div>
    </div>
  );
};

export default TopBar;
