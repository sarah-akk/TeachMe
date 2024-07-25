import trash from "../assets/trash.png"
// eslint-disable-next-line react/prop-types
const DeleteConfirmationModal = ({ isModalOpen, setIsModalOpen, handleDelete }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">تأكيد الحذف</h2>
        <div  className="flex justify-center items-center p-10" >
         <img src={trash}/>
       </div>
        <p className="text-center mb-8">هل أنت متأكد أنك تريد حذف هذا الموظف؟</p>
        <div className="flex justify-between">
          <button 
            type="button" 
            onClick={() => setIsModalOpen(false)} 
            className="bg-gray-500 text-white px-4 py-2 rounded">
            إلغاء
          </button>
          <button 
            type="button" 
            onClick={handleDelete} 
            className="bg-red-500 text-white px-4 py-2 rounded">
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
