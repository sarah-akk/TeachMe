import { useState } from 'react';
import { FaTrash, FaEdit, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import avatar from "../../assets/expert.png";
import { useNavigate } from 'react-router-dom';

const Expert = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const expertsPerPage = 4;
  const navigate = useNavigate();
  const experts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleExpertClick = (id) => {
    navigate(`/home/users/expert/${id}`);
  };

  const handlePreviousPage = () => {
    setDirection(-1);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(experts.length / expertsPerPage) - 1));
  };

  const currentExperts = experts.slice(currentPage * expertsPerPage, (currentPage + 1) * expertsPerPage);

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

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-end mr-64">المستخدمين / الخبير |</h1>
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
            transition={{ duration: 0.3 }}
            className="grid grid-cols-4 gap-3 mr-64"
          >
            {currentExperts.map((expert, index) => (
              <div
                key={index}
                onClick={() => handleExpertClick(index)}
                className="bg-white shadow-lg rounded-xl p-6 space-y-10 w-72 flex flex-col items-center justify-between border-b-8 border-gray-300 hover:translate-y-1"
              >
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
                  <FaTrash className="text-red-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mr-52 mt-40">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="text-white bg-blue-950 p-1 rounded-full">
          <FaArrowLeft size={24} />
        </button>
        <span className="mx-10">Page {currentPage + 1} of {Math.ceil(experts.length / expertsPerPage)}</span>
        <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(experts.length / expertsPerPage) - 1}
          className="text-white bg-blue-950 p-1 rounded-full">
          <FaArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Expert;
