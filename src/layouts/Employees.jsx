import { useState } from 'react';
import { FaTrash, FaEdit, FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import avatar from "../assets/employee.png";
import AddEmployeeModal from '../componemnts/AddEmployeeModal'; 
import DeleteConfirmationModal from '../componemnts/DeleteConfirmationModal'; 
import { motion, AnimatePresence } from 'framer-motion';


const Employees = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [direction, setDirection] = useState(0);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    specialization: '',
    number: '',
    address: ''
  });

  const expertsPerPage = 4; 
  const experts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  const handlePreviousPage = () => {
    setDirection(-1);
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(experts.length / expertsPerPage) - 1));
  };

  const currentExperts = experts.slice(currentPage * expertsPerPage, (currentPage + 1) * expertsPerPage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value
    });
  };
  
  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.8,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      scale: 0.8,
    }),
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Employee:', newEmployee);
    setIsAddModalOpen(false);
    setNewEmployee({
      name: '',
      specialization: '',
      number: '',
      address: ''
    });
  };

  const handleDeleteClick = (employeeId) => {
    setEmployeeToDelete(employeeId);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    console.log('Deleted Employee:', employeeToDelete);
    setIsDeleteModalOpen(false);
    setEmployeeToDelete(null);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-end mr-64">الموظفين |</h1>
      <div className="flex gap-4 mb-6 mr-64 justify-end">
        <button className="bg-blue-950 text-white px-4 py-2 rounded">الكل</button>
        <button className="text-blue-950 bg-white px-4 py-2 rounded border-blue-950 border">المحظورين</button>
        <button className="text-blue-950 bg-white px-4 py-2 rounded border-blue-950 border">غير المحظورين</button>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction}  >
          <motion.div
            key={currentPage}
            custom={direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-4 gap-3 mr-64"
          >
        {currentExperts.map((expert, index) => (
          <div key={index} 
            className="bg-white shadow-lg rounded-xl p-6 space-y-10 w-72 flex flex-col items-center justify-between border-b-8 border-gray-300">
            <div className="flex items-center flex-col">
              <div className="text-4xl text-gray-500 mr-4 w-16 h-16 rounded-full bg-blue-50 mb-8">
                <img src={avatar} alt="Avatar" className="w-full h-full rounded-full" />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">اسم الخبير</h2>
                <p className="text-gray-700">الاختصاص</p>
                <p className="text-gray-700">الرقم : 0987654321</p>
                <p className="text-gray-700">عدد البلاغات: 3</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <FaEdit className="text-blue-500 cursor-pointer" />
              <FaTrash className="text-red-500 cursor-pointer" onClick={() => handleDeleteClick(index)} />
            </div>
          </div>
        ))}
          </motion.div>
         </AnimatePresence>
      </div>
      <div className="flex justify-start mr-52 mt-40">
        <button 
          onClick={() => setIsAddModalOpen(true)} 
          className="bg-green-500 text-white mr-96 ml-36 p-2 rounded flex items-start">
          <FaPlus className="mr-2" /> إضافة موظف
        </button>
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="text-white bg-blue-950 p-1 rounded-full">
          <FaArrowLeft size={24} />
        </button>
        <span className="mx-10">Page {currentPage + 1} of {Math.ceil(experts.length / expertsPerPage)}</span>
        <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(experts.length / expertsPerPage) - 1} className="text-white bg-blue-950 p-1 rounded-full">
          <FaArrowRight size={24} />
        </button>
      </div>

      <AddEmployeeModal 
        isModalOpen={isAddModalOpen} 
        setIsModalOpen={setIsAddModalOpen} 
        newEmployee={newEmployee} 
        handleInputChange={handleInputChange} 
        handleSubmit={handleSubmit} 
      />

      <DeleteConfirmationModal 
        isModalOpen={isDeleteModalOpen} 
        setIsModalOpen={setIsDeleteModalOpen} 
        handleDelete={handleDelete} 
      />
    </div>
  );
}

export default Employees;
