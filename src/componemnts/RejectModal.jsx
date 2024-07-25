import  { useState } from 'react';

// eslint-disable-next-line react/prop-types
const RejectModal = ({ isOpen, onClose }) => {
  const [rejectionReason, setRejectionReason] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    
    onClose();
    setRejectionReason('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-container bg-white w-1/3 mx-auto rounded shadow-lg z-50 mt-20 p-4">
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4">ادخال سبب الرفض</h2>
          <textarea
            className="border-2 border-gray-400 p-2 w-full mb-4"
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            rows={4}
          />
          <div className="flex justify-end">
            <button
              className="bg-blue-950 text-white px-4 py-2 rounded mr-2"
              onClick={handleConfirm}
            >
              تم
            </button>
            <button
              className="bg-gray-400 text-gray-800 px-4 py-2 rounded"
              onClick={onClose}
            >
              إلغاء
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RejectModal;
