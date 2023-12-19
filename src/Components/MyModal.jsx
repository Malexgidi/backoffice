import React from 'react'




const Modal = ({visible, onClose}) => {
 if (!visible) return null;
    return(

        <div className=' fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center backdrop-blur-[2px] '>
            <div className='bg-white p-12 rounded'> Are you sure you want to reprocess this order ?
            <div className='flex justify-center py-4'> 

            <button onClick={onClose} className=" bg-green-400 py-1 px-4 rounded ml-2 hover:scale-95 transition hover:bg-black/40 active:text-white">
                cancel
            </button>
          
              
               <div className='flex justify-center items-center ml-2'> 

               <button className='bg-green-400 py-1 px-4 rounded hover:scale-95 transition hover:bg-black/40 active:text-white'>
                 proceed
               </button>
           
             </div>

               </div>
             
             

             </div>
        </div>
    )
};
export default Modal;