
const AddCourse = () => {
    return (
        <div className="p-8 ">
       <h1 className="text-2xl font-bold mb-6 text-end mr-64">الدورات |</h1>
          <h1 className="text-2xl font-semibold mb-6 text-end mr-96 text-blue-950 ">إضافة دورة تأهيل</h1>
          <form className="mr-96 items-end text-end">
            <div className="mb-4">
              <label htmlFor="courseName" className="block  text-lg font-medium text-blue-800 ">
                اسم الدورة
              </label>
              <input type="text" id="courseName" name="courseName" className="mt-1 p-2 w-1/2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-lg font-medium text-blue-800">
                تاريخ البداية
              </label>
              <input type="date" id="startDate" name="startDate" className="mt-1 p-2 w-1/2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="endDate" className="block text-lg font-medium text-blue-800">
                تاريخ النهاية
              </label>
              <input type="date" id="endDate" name="endDate" className="mt-1 p-2 border w-1/2 border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-lg font-medium text-blue-800">
              مقدم الدورة
              </label>
              <input type="text" id="courseName" name="courseName" className="mt-1 p-2 border w-1/2 border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-lg font-medium text-blue-800">
              وصف الدورة
              </label>
              <input type="text" id="courseName" name="courseName" className="mt-1 p-2 border w-1/2 border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-lg font-medium text-blue-800">
              المكان
              </label>
              <input type="text" id="courseName" name="courseName" className="mt-1 p-2 border w-1/2 border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="courseName" className="block text-lg font-medium text-blue-800">
              المبلغ 
              </label>
              <input type="text" id="courseName" name="courseName" className="mt-1 p-2 border w-1/2 border-gray-300 rounded-md" />
            </div>
            <button type="submit" className="bg-blue-950 text-white px-4 py-2 rounded">
              إضافة
            </button>
          </form>
        </div>
      );
}

export default AddCourse
