import { FaTrash } from 'react-icons/fa';
import video from "../assets/video.png";

const EducationalResources = () => {
   
    const resources = [1,2,3]
    
  return (
    <><h1 className="text-2xl font-bold mb-3 p-3 text-end mr-64">المستخدمين / الخبير |</h1>
    <div className="justify-center items-center flex flex-col">
          {resources.map((resource, index) => (
              <div key={index} className="bg-white shadow-2xl rounded-xl p-6 flex justify-center items-center border-b-8 w-3/5 border-blue-950 mt-8">
                  <div className="flex flex-col items-end text-right">
                      <div className="flex items-center justify-between w-full mb-2">
                          <FaTrash className="text-red-500 cursor-pointer" />
                      <p className="text-gray-500"><span className="font-bold text-blue-950">السعر :</span> 22</p>
                      </div>
                      <p className="text-gray-500"><span className="font-bold text-blue-950">الاسم :</span> فيديو</p>
                      <p className="text-gray-500"><span className="font-bold text-blue-950">الوصف :</span> الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف الوصف</p>
                      <p className="text-gray-500"><span className="font-bold text-blue-950">الخبير :</span> أحمد أحمد</p>
                      <p className="text-gray-500"><span className="font-bold text-blue-950">نوع الوسيلة :</span> مدفوعة</p>
                      <p className="text-gray-500"><span className="font-bold text-blue-950">عدد المشاهدات :</span> 2000</p>
                     </div>
                     <div>
                      <img src={video} alt="Thumbnail" className="ml-4 rounded-lg object-cover" />
                  </div>
              </div>
          ))}
      </div>
      </>
  );
};

export default EducationalResources;
