import { FaTrash, FaEdit } from 'react-icons/fa';
import avatar from "../../assets/student2.png";

const StudentDetails = () => {
    const renderText = (text) => {
        const parts = text.split(':');
        return (
          <p>
            <span className="font-bold text-blue-950">{parts[0]}:</span>
            {parts[1] && <span>{parts[1]}</span>}
          </p>
        );
      };
    
      const course = [1, 2, 3]; 
    
    
      return (
        <>
        <h1 className="text-2xl font-bold mb-3 p-3 text-end mr-64">المستخدمين / الطالب |</h1>
        <div className="p-8 justify-center items-center align-middle flex flex-col mr-60">
          <div className="bg-white shadow-2xl rounded-xl p-6 w-8/12 flex flex-col items-center justify-between border-b-8 border-blue-950">
         
          <div className=" text-gray-500 mr-4 mb-4 flex flex-col items-center rounded-full gap-2">
            <img src={avatar} alt="Avatar" className="w-44 h-44 rounded-full" />
            <h2>اسم الخبير</h2>
            <p>المستوى التعليمي</p>
          </div>

         <div className="flex justify-center items-end text-end flex-col gap-4 p-10">

           {renderText('المحافظة : دمشق ')}
            {renderText(' العنوان التفصيلي : دمشق, المزة')}
            <div className="flex flex-row-reverse w-full">
              <p className="font-bold text-blue-950"> البريد الالكتروني</p>
              <p>email@gmail.com : </p>
            </div>            {renderText('عدد البلاغات المقدمة من قبل الطالب : 20 بلاغ')}
            {renderText('عدد البلاغات المقدمة على الطالب : 20 بلاغ')}
            {renderText('الوسائل التعليمية المجانية المشترك بها : 20 وسية')}
            {renderText('الوسائل التعليمية المدفوعة المشترك بها : 20 وسية')}
            {renderText('رصيد الطالب : 300000 ل.س')}
            {renderText(' الملاحظات : ملاحظات الاستاذ ملاحظات الاستاذ ملاحظ ملاحظات الاستاذ ملاحظات الاستاذ ملاحظات الاستاذ')}
            {renderText('الدورات المسجل بها : اسم الدورة, اسم الدورة')}
             </div>
             <div className="flex space-x-10 mt-10">
              <FaEdit className="text-blue-500 cursor-pointer" size={30} />
              <FaTrash className="text-red-500 cursor-pointer" size={30}/>
            </div>
            </div>
          </div>  
      </>
      );
}

export default StudentDetails
