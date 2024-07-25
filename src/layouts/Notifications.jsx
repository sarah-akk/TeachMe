const Notifications = () => {

    const experts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

  return (
    <>
    <h1 className="text-2xl font-bold mb-6 text-end mr-80">الإشعارات |</h1>
   { experts.map( (expert, index)  => 
    (<div key={index} 
      className="bg-white rounded-lg p-4 text-right mt-4 mr-52 w-4/5 h-28">
        <div className="flex flex-row-reverse justify-start items-center gap-10">
            <div>
          <div className="text-sm text-pink-600 font-bold">
            غير مقروء 
          </div>
          <div className="mt-2 text-gray-600 text-xs">
            4.4.2019; 13:44
             </div>
            </div>
           <div>
          <div className=" text-gray-600 font-bold">
           نص نص نص             
          </div>
          <div className="mt-2 text-gray-600 text-xs">
          نص نص نص             
             </div>
            </div>
           </div>
      </div>
      ))}
      </>

  )
}

export default Notifications
