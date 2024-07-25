import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ConfirmModal from '../componemnts/ConfirmModal';
import { motion, AnimatePresence } from 'framer-motion';
import RejectModal from '../componemnts/RejectModal';

const Requests = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const expertsPerPage = 4;
  const experts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [direction, setDirection] = useState(0);

  const renderText = (text) => {
    const parts = text.split(':');
    return (
      <p dir="rtl">
        <span className="font-bold text-blue-950">{parts[0]}:</span>
        {parts[1] && <span>{parts[1]}</span>}
      </p>
    );
  };

  const handleAcceptClick = () => {
    setIsConfirmModalOpen(true);
  };

  const handleRejectClick = () => {
    setIsRejectModalOpen(true);
  };

  const handlePreviousPage = () => {
    setDirection(-1);
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setDirection(1);
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(experts.length / expertsPerPage) - 1)
    );
  };

  const currentExperts = experts.slice(
    currentPage * expertsPerPage,
    (currentPage + 1) * expertsPerPage
  );

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
      <h1 className="text-2xl font-bold mb-6 text-end mr-64">طلبات الخبراء |</h1>
      <div className="flex gap-4 mb-6 mr-64 justify-end">
        <button className="bg-blue-950 text-white px-4 py-2 rounded">الكل</button>
        <button className="text-blue-950 bg-white px-4 py-2 rounded border-blue-950 border">
          المحظورين
        </button>
        <button className="text-blue-950 bg-white px-4 py-2 rounded border-blue-950 border">
          غير المحظورين
        </button>
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
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 space-y-2 w-80 flex flex-col items-end border-b-8 border-gray-300"
          >
            {renderText('الاسم : الاسم الكامل')}
            <div className="flex flex-row-reverse w-full">
              <p className="font-bold text-blue-950"> البريد الالكتروني</p>
              <p>email@gmail.com : </p>
            </div>
            {renderText('تاريخ الميلاد :  12/10/1996')}
            {renderText('المحافظة :  دمشق')}
            {renderText('العنوان التفصيلي :  دمشق, المزة')}
            {renderText('الاختصاص :  رياضيات')}
            {renderText('تاريخ الطلب : 12/02/2024 - 11:00PM')}
            {renderText('المجالات التي يدرسها : جبر - هندسة')}
            {renderText('شهادة الخبرة:  عرض الصورة')}

            <div className="flex space-x-4 justify-between w-full p-3">
              <button
                onClick={() => handleRejectClick(expert)}
                className="bg-red-500 text-white px-5 py-2 rounded"
              >
                رفض
              </button>
              <button
                onClick={() => handleAcceptClick(expert)}
                className="bg-green-500 text-white px-5 py-2 rounded"
              >
                قبول
              </button>
            </div>
          </div>
        ))}
          </motion.div>
          </AnimatePresence>
      </div>
      <div className="flex justify-center mr-52 mt-32">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className="text-white bg-blue-950 p-1 rounded-full"
        >
          <FaArrowLeft size={24} />
        </button>
        <span className="mx-10">
          Page {currentPage + 1} of {Math.ceil(experts.length / expertsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage >= Math.ceil(experts.length / expertsPerPage) - 1
          }
          className="text-white bg-blue-950 p-1 rounded-full"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />
      <RejectModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
      />
    </div>
  );
};

export default Requests;
