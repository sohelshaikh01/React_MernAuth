

const Notification = () => {

  // It was created in Place of Toastify

  return (
    <div className="fixed top-16 right-16 shadow-md bg-white text-black">
        <div className="">
            <div className="p-3"> 
                <span className="text-white bg-red-500 mr-2">`!`</span> 
                This is a message 
                <span className="text-blue-700 ml-2">X</span>
            </div>

            <div className="bg-red-500 h-[6px] cursor-pointer"> </div>
        </div>
    </div>
  )
}

export default Notification;
