/* eslint-disable react/jsx-no-comment-textnodes */
// ExpertDetail.js
import { FaTrash, FaEdit } from 'react-icons/fa';
import avatar from "../../assets/expert2.png";
import check from "../../assets/check2.png";
import star from "../../assets/star.png";
import pdf from "../../assets/pdf.png";
import atom from "../../assets/atom.png";
import add from "../../assets/add.png";
import video from "../../assets/video.png";

const ExpertDetail = () => {
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
    <h1 className="text-2xl font-bold mb-3 p-3 text-end mr-64">المستخدمين / الخبير |</h1>
    <div className="p-8 justify-center items-center align-middle flex flex-col mr-60">
      <div className="bg-white shadow-2xl rounded-xl p-6 w-8/12 flex flex-col items-center justify-between border-b-8 border-blue-950">
        <div className="flex items-center flex-col">
          <div className=" text-gray-500 mr-4 mb-4 flex flex-col items-center rounded-full gap-2">
            <img src={avatar} alt="Avatar" className="w-44 h-44 rounded-full" />
            <h2>اسم الخبير</h2>
            <p>النبذة التعريفية النبذة التعريفية النبذة التعريفية
            النبذة التعريفية النبذة التعريفية</p>
          </div>
         <div className="flex justify-center items-center ">
        <div className="bg-white p-8  rounded-xl flex  gap-32 w-full flex-row-reverse text-end">
        <div className="flex gap-4 flex-col">
          {renderText('الاختصاص : رياضيات')}
          {renderText('المجالات : هندسة')}
          {renderText('المحافظة : دمشق')}
          {renderText('العنوان التفصيلي : سوريا , دمشق')}
          <div className="flex flex-row-reverse w-full">
              <p className="font-bold text-blue-950"> البريد الالكتروني</p>
              <p>email@gmail.com : </p>
            </div>
          {renderText('الرقم : 09876543211')}
        </div>
        <div className="flex gap-8 flex-col">
          {renderText('شهادة الخبرة : عرض الصورة')}
          <div className="items-center  justify-end flex">
          <img src={pdf} className="mr-10" />
          {renderText('السيرة الذاتية:')}
          </div>
          <div className="items-center  justify-end flex text-yellow-300 font-bold">
          <img src={star} className="mr-1" />
          {renderText('متوسط التقييمات :    4.5')}
           </div>
          <div className="items-center  justify-end flex">
          <img src={check} className="mr-10" />
            {renderText('التوثيق')}
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center text-end flex-col gap-4">
    {renderText('عدد البلاغات المقدمة من قبل الخبير : 20 بلاغ')}
        {renderText('عدد البلاغات المقدمة على الخبير : 20 بلاغ')}
        {renderText('الوسائل التعليمية المجانية  : 20 وسية')}
        {renderText('الوسائل التعليمية المدفوعة  : 20 وسية')}
        {renderText('رصيد الطالب : 300000 ل.س')}
        {renderText('طلبات الشحن : 20 طلب')}
        {renderText('طلبات السحب : 20 طلب')}
         </div>
        </div>
        <div className="flex space-x-10 mt-10">
          <FaEdit className="text-blue-500 cursor-pointer " size={30}/>
          <FaTrash className="text-red-500 cursor-pointer" size={30}/>
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


      <div className="mt-8 p-4 bg-white shadow-2xl rounded-xl w-10/12 border-b-8 border-blue-950">
          <h3 className="text-2xl font-bold mb-10 text-right text-blue-950">جدول الموعيد</h3>
          <table className="w-full text-right">
            <thead>
              <tr>
                <th>اسم الدورة</th>
                <th>الايام</th>
                <th>الساعات</th>
                <th> نوع الحج</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>دورة 1</td>
                <td>الأحد - الثلاثاء</td>
                <td>10:00 - 12:00</td>
                <td>حجم كبير</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>دورة 1</td>
                <td>الأحد - الثلاثاء</td>
                <td>10:00 - 12:00</td>
                <td>حجم كبير</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>دورة 1</td>
                <td>الأحد - الثلاثاء</td>
                <td>10:00 - 12:00</td>
                <td>حجم كبير</td>
              </tr>
            </tbody>
          </table>
        </div>
     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <div className="bg-white shadow-2xl rounded-xl p-6 w-10/12  items-end justify-between border-b-8 flex flex-col mt-8 ">
      <h3 className="text-2xl font-bold mb-10 text-right text-blue-950">الوسائل التعليمية </h3>
      <div className="flex flex-row gap-10">
    {course.map((course, index) => (
  <div key={index} className="bg-white shadow-2xl rounded-xl p-6 w-64 flex flex-col items-end  border-b-8 border-blue-950 mt-8">
    <div className="flex flex-col text-end gap-4">
       {renderText('العنوان : اسم العنوان')}
        {renderText('الوسيلة  :  ملف')}
        {renderText('  الوصف  :  سم العنوان و وصف الوسيلة التعليمية الجديدة')}
        {renderText('النوع : مقفل')}
        {renderText('السعر : 1500 ل.س')}
    </div>
    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded ">الطلاب المسجلين</button>
    </div>
    ))}
   </div>
   </div>

  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

   <div className="bg-white shadow-2xl rounded-xl p-6 w-10/12  items-end justify-between border-b-8 flex flex-col mt-8 ">
      <h3 className="text-2xl font-bold mb-10 text-right text-blue-950"> دورات الخبير </h3>
      <div className="flex flex-row gap-10">
    {course.map((course, index) => (
  <div key={index} className="bg-white shadow-2xl rounded-xl p-6 w-64 flex flex-col items-end  border-b-8 border-blue-950">
    <div className="flex flex-col items-end gap-4">
    <img src={atom} alt="Avatar" className="w-44 h-44 rounded-full" />
       {renderText('اسم الدورة: علوم')}
        {renderText('اسم  مقدم الدورة: احمد أحمد')}
        {renderText('الوصف : الوصف هنا')}
        {renderText('التاريخ : 12/4/2024')}
    </div>
    </div>
    ))}
   </div>
   </div>

    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

    <div className="bg-white shadow-2xl rounded-xl p-6 w-11/12 border-b-8 flex flex-col mt-8 text-sm font-bold rtl">
  <p className="text-2xl font-bold mb-10 text-end text-blue-950">اعلانات الخبير</p>
  <div className="grid grid-cols-2 gap-10" style={{ direction: 'rtl' }}>
    {course.map((course, index) => (
      <div key={index} className="bg-white shadow-2xl rounded-xl flex flex-col items-start border-b-8 p-3  border-blue-950 mt-8">
        <div className="flex flex-row-reverse items-start gap-4 text-start">
          <img src={add} alt="Avatar" className="w-80" />
          <div className="flex flex-col items-start text-start gap-4">
            <p className="text-blue-900 font-extrabold ">الوصف</p>
            <p>علاقةالوصف بالموصوف. يُقسم الوصف تبعاً لعلاقته بالموصوف</p>
            <div className="flex flex-row items-end gap-20">
              <div className="flex flex-col items-end gap-4">
                <p className="text-blue-900 font-extrabold">الحالة</p>
                <p>يستقبل</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <p className="text-blue-900 font-extrabold">المكان</p>
                <p>دمشق</p>
              </div>
            </div>
            <p className="text-blue-900 font-extrabold">التاريخ و الوقت</p>
            <p>الاحد - الثلاثاء من 10:00AM-12:00PM</p>
            <div className="flex flex-row items-end gap-20">
              <p>السعر : 1200 ل.س</p>
              <p>عدد الطلاب : 20 طالب</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className="bg-white shadow-2xl rounded-xl p-6 w-11/12 border-b-8 flex flex-col mt-8 text-lg font-bold items-center">
    <p className="text-2xl font-bold mb-10 text-end text-blue-950">الوسائل التعليمية </p>
  <div className="bg-white shadow-2xl rounded-xl p-6 flex justify-center items-center border-b-8 w-4/5 border-blue-950 mt-8">
  <div className="flex flex-col items-end text-right">
    <div className="flex items-center justify-between w-full mb-2">
    <FaTrash className="text-red-500 cursor-pointer" />
      <p className="text-gray-500"><span className="font-bold text-blue-950">السعر :</span> 12000 ل.س</p>
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
</div>
   </div>   
  </>
  );
};

export default ExpertDetail;
