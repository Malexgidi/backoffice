import React, {useState} from "react";
import Logo from '../Images/SBC.png'
// import {AiOutlineSearch } from 'react-icons/ai'
import {CiSearch} from 'react-icons/ci'
import { TbClock2 } from 'react-icons/tb'
import {GrLogout} from 'react-icons/gr'
import {HiOutlineHome} from 'react-icons/hi'
import {GoHome} from 'react-icons/go'
import MyModal from '../Components/MyModal'





const Navbar = () =>{

 const data = [
    {
        id: 1,
        icon: GoHome,
    },
    {
        id: 2,
        icon: TbClock2,
    },
    {
        id: 3,
        icon: HiOutlineHome,
    },
  
 ];  

//  const log = [
//     {
//         id: 4,
//         icon: GrLogout,
//     },
// ]


 const [active, setActive] = useState  (0);  
//  const [logout, setLogout] = useState (0) 
const [showmodal, setShowmodal] = useState(false);

const handleOnClose = ()=> setShowmodal(false); 


    return(
        
        <div className=" grid grid-cols-2 w-full h-[1700px] bg-[#F7F8FA] max-w-[1360px] mx-auto ">
            <div className="bg-white h-[1700px]   w-[60px] ">
                <div className=" items-center ml-3"> 
                <img src={Logo} alt="" className="w-[30px] mt-4 mb-[150px]"  />
                </div>
                {data.map((item,id)=> (
                   <div key={id}>
                       <div  className='justify-center  items-center '> 
                       <p onClick={()=>setActive(id)} className={ `text-[#8C8C8C] mt-4   items-center py-1
                        flex flex-col ${active === id && 
                        'border-l-4 border-[#4CB944] w-full rounded-r-lg text-[#114658]  '} `} >  {<item.icon size={20}/> } </p>
                       
                       </div> 
                       </div>

                      
                    ))}
                    {/* { log.map((items,index)=>( 
                         <div key={index} className="items-center ">
                         <p onClick={()=>setLogout(index)} className={ `text-gray-500 mt-10 text-[11px]  items-center py-1
                        flex flex-col ${logout === index && 
                        'border-l-4 border-[#4CB944] w-full  '} `} > {  <items.icon size={20} /> }  </p>
                      </div>
                   ) ) } */}

                   <div>
                  <a href="/">  <GrLogout size={20} className="ml-5 mt-[150px] text-[#114658] " /> </a>  
                   </div>
                  


            </div>
            {/* header */}
            <div className="bg-white h-[50px] ml-[-580px] justify-between   w-[1220px] grid grid-cols-2 items-center ">
                   <h1 className="font-semibold pl-[20px] mt-2 text-lg"> Details </h1>
                  <div className="flex mt-[8px] gap-3  ml-[180px] "> 
                   <div className="flex bg-[#F7F8FA] items-center ">

                   <input className="bg-[#F7F8FA] w-[200px] text-[#8C8C8C] focus:outline-none pl-5 text-[11px]  " type='text' placeholder="Search for anything here"  />  
                   <CiSearch size={20} className=' ' /> 
                   </div>
                   <button className="bg-[#4CB944] p-[5px] text-white mr-[30px] items-center ">
                    Search
                   </button>
                   <button className="p-[6px] px-4 text-white  bg-[#114658]">
                    VG
                   </button>
                   </div>
                {/* order details */}

                   <div className=" w-[1160px]  ml-[30px] top-8  bg-white h-[1550px] relative  ">
                    <div className="flex justify-between"> 
                      <h1 className="font-semibold p-8 ml-[12px] text-[20px]">
                        Order Details
                      </h1>
                      <button onClick={()=> setShowmodal(true) } className="bg-[#4CB944] mr-[47px]  px-[10px] m-8 my-7 text-[10px] text-white hover:scale-105 transition"> Reprocess Order </button>
                    </div>
                    <MyModal onClose={handleOnClose} visible={showmodal} />
                    {/* under order */}
                    <div className="bg-[#114658]  w-[1070px] ml-[45px] h-[130px]">
                        <div className="flex justify-between p-10 ">

                            <p className="grid grid-rows-1 text-white  ">
                             <span className="text-sm">  ORDER ID:</span>   <span className="font-bold"> 172340 </span> 
                            </p>
                            <p className="grid grid-rows-1 text-white  text-sm ">
                                INVOICE NUMBER: <span className="font-bold"> V-INV0060 </span>
                            </p>
                            <p className="grid grid-rows-1 text-white text-sm ">
                             <span className="text-sm">  CUSTOMER ID:  </span>  <span className="font-bold"> SBCVendorProdTest </span>
                            </p>
                            <p className="grid grid-rows-1 text-white text-sm">
                                SECURITY CODE: <span className="font-bold"> 848745 </span>
                            </p>
                    
                        </div>

                    </div>
                    {/* transactional details*/}
                    <div className="p-9 pb-5 ">
                        <p className="font-bold text-lg ml-[12px]">
                            Transaction Details
                        </p>
                    </div>
                    {/* Transaction info */}
                    <div className="bg-[#F7F8FA] w-[1070px] h-[700px] ml-[45px]  ">
                       <div className="p-10  grid grid-cols-2 text-[15px]">
                        <div className="">
                        <p className="py-2" >
                            PAYMENT VENDOR:
                        </p>
                        <p className="py-2">
                            PAYMENT VENDOR CODE :
                        </p>
                        <p className="py-2">
                            CUSTOMER ACCOUNT NUMBER:
                        </p>
                        <p className="py-2">
                            COLLECTION BANK CODE:
                        </p>
                        <p className="py-2">
                            COLLECTION ACCOUNT NUMBER:
                        </p>
                        <p className="py-2">
                            VENDOR TRANSACTION REFERENCE:
                        </p>
                        <p className="py-2">
                            INTERNAL TRANSACTION REFERENCE/EXECUTION ID:
                        </p>
                        <p className="py-2">
                            TRANSACTION DATE:
                        </p>
                        <p className="py-2">
                            PAYMENT STATUS:
                        </p>
                        <p className="py-2">
                            TOTAL AMOUNT:
                        </p>
                        <p className="py-2">
                            AMOUNT:
                        </p>
                        <p className="py-2">
                            CUSTOMER FEE:
                        </p>
                        <p className="py-2">
                            SBC FEE:
                        </p>
                        <p className="py-2">
                           NARATION:
                        </p>
                        </div>

                        <div className="  ">
                            <p className="py-2">
                                Access bank
                            </p>
                            <p className="py-2">
                                AB
                            </p>
                            <p className="py-2">
                                006****568
                            </p>
                            <p className="py-2">
                                044
                            </p>
                            <p className="py-2">
                                044
                            </p>
                            <p className="py-2">
                                76800129000383496
                            </p>
                            <p className="py-2">
                                70cBeOd7-0029-40e6-9160-57a578d99392
                            </p>
                            <p className="py-2">
                                10/18/2022 3:42:46 PM
                            </p>
                            <p className="py-2">
                                Successful
                            </p>
                            <p className="py-2">
                                100.00
                            </p>
                            <p className="py-2">
                                 100.00
                            </p>
                            <p className="py-2">
                                0.00
                            </p>
                            <p className="py-2">
                                0.00
                            </p>
                            <p className="py-2">
                                Anulika
                            </p>
                            <p className="py-2">
                            Emediegwu <br />
                            /SBCVendorProdTest/7680012900038349 <br />
                            6/V-INV0060/4d409e29-ad1e-4910- <br />
                            bd48-e8313ce276b2/848745/
                            </p>
                        </div>
                        
                       </div>
                    </div>

                    <div className=" font-semibold p-9 ml-[12px] text-[20px] ">
                      Erp Sync Details
                    </div>
                   
                    <div className="bg-[#F7F8FA] w-[1070px] h-[300px] ml-[45px] ">
                        <div className="grid grid-cols-2 p-10">
                    <div className="p-8"> 
                        <p className="text-sm">
                        TELLER NUMBER:
                        </p>
                        <p className="text-sm">
                        TELLER CREATED:
                        </p>
                        <p className="text-sm">
                        PROCESSED:
                        </p>
                        <p className="text-sm">
                        DATE PROCESSED:
                        </p>
                    </div>

                    <div className="p-8 items-center mt-4 ml-[-160px]">
                        <p className="text-sm" >
                        False
                        </p>
                        <p className="text-sm">
                        False
                        </p>
                    </div>

                    </div>
                    </div>
                  </div>


                </div>
                
               
            
        
        </div>
        
    )
}

export default Navbar;