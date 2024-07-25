/* eslint-disable react/prop-types */
// AddEmployeeModal.js
import avatar from '../assets/employee.png';

const AddEmployeeModal = ({ isModalOpen, setIsModalOpen, newEmployee, handleInputChange, handleSubmit }) => {
  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4 text-center">إضافة موظف جديد</h2>
        <div className="flex justify-center items-center mb-8">
          <div className="text-4xl text-gray-500 w-24 h-24 rounded-full bg-blue-50 flex justify-center items-center">
            <img src={avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">اسم الموظف</label>
            <input
              type="text"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">الاختصاص</label>
            <input
              type="text"
              name="specialization"
              value={newEmployee.specialization}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">الرقم</label>
            <input
              type="text"
              name="number"
              value={newEmployee.number}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">العنوان</label>
            <input
              type="text"
              name="address"
              value={newEmployee.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded">
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-blue-950 text-white px-4 py-2 rounded">
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
