/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import confirmed from "../assets/confirmed.png";
import { FaTimes } from 'react-icons/fa';

const ConfirmModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">تم قبول الطلب </h2>
        <div className="flex justify-center items-center mb-8">
          <img src={confirmed} alt="Confirmed" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
