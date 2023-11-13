import React, {useState} from "react";
import Logo from '../Images/SBC.png'
import {CiSearch} from 'react-icons/ci'
import { TbClock2 } from 'react-icons/tb'
import {GrLogout} from 'react-icons/gr'
import {HiOutlineHome} from 'react-icons/hi'
import {GoHome} from 'react-icons/go'
import Gtbank from '../Images/gtbnk.png'
import Firstbank from '../Images/firstbank.png'
import Zenith from '../Images/Zenith.png'
import UBA from '../Images/UBA.png'
import Access from '../Images/Access.png'
import Fcmb from '../Images/Fcmb.png'
import Union from '../Images/Union.png'
import Globus from '../Images/Globus.png'
import Fshb from '../Images/Fshb.png'



const Bankdetails = ()=>{

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

     const [active, setActive] = useState  (0);  

    return(
        <div className=" max-w-[1640px] mx-auto grid grid-cols-2 w-full h-[800px] bg-[#F7F8FA]  ">
               <div className="bg-white h-[800px]   w-[60px] ">
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
                 

                   <div>
                  <a href="/">  <GrLogout size={20} className="ml-5 mt-[150px] text-[#114658] " /> </a>  
                   </div>
                  
            </div>

            <div className="bg-white h-[50px] ml-[-580px] justify-between   w-[1220px] grid grid-cols-2 items-center "> 
            <h1 className="font-semibold pl-[20px] mt-2 text-lg"> Bank Details </h1>
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
                  {/* Key accounts */}
                   <div className="p-5 pt-7">
                      <h1 className="font-semibold">
                        Key Accounts
                      </h1>
                      <div className="pt-[20px] grid grid-cols-4  justify-between ">
                        <div className="bg-[#114658] w-[250px] h-[120px] " >
                            <div className="flex pl-[150px]  gap-2">
                                <div className="bg-gradient-to-b from-[#073140] to-[#07314000] w-[20px] h-[30px] ">

                                </div>
                                <div className="bg-gradient-to-b from-[#073140] to-[#07314000] w-[20px] h-[50px]" >

                                </div>
                            </div>
                            <div className="pl-[40px]  ">

                                    <p className="text-white text-[10px] pl-">
                                    Add New Payment Vendor
                                    </p>
                                </div>
                            
                        </div>
                        <div className="bg-[#DE4A09] w-[250px] h-[120px] ml-[150px] ">
                            <p className="text-white p-4">
                            150.2M
                            </p>
                            <div className=" pl-[170px] pt-2">
                            <img src={Gtbank} alt="" className="w-[20px] ml-[35px]" />
                          <p className="text-white">
                            GTBank
                          </p>
                            </div>
                          
                        </div>

                        <div className="bg-[#03476E] w-[250px] h-[120px] ml-[300px] ">
                            <p className="text-white p-4">
                            150.2M
                            </p>
                            <div className=" pl-[100px] mb-[60px]">
                            <img src={Firstbank} alt="" className="w-[65px] ml-[60px] mb-[50px] " />
                         
                            </div>
                          
                        </div>

                        <div className="bg-white w-[250px] h-[120px] ml-[450px]  ">
                            <p className="text-[#FF2123] p-4">
                            150.2M
                            </p>
                            <div className=" pl-[110px]  mb-[30px] ">
                            <img src={Zenith} alt="" className="w-[60px] ml-[60px]" />
                          
                            </div>
                          
                        </div>
                      </div>
                     {/* other accounts */}
                      <div className="pt-10">
                      <h1 className="font-semibold">
                        Other accounts
                      </h1>
                      <div className="pt-[20px] grid grid-cols-4  justify-between ">
                        <div className="bg-[#D32E12] w-[250px] h-[120px] " >
                            <p className="text-white p-4">
                            150.2M
                            </p>
                            <div className=" pl-[100px] pt-2">
                            <img src={UBA} alt="" className="w-[70px] ml-[35px]" />
                         
                            </div>
                             
                        </div>
                        <div className="bg-[#FFFFFF] w-[250px] h-[120px] ml-[150px] ">
                            <p className="text-[#305493] p-4">
                            150.2M
                            </p>
                            <div className=" pl-[100px] ">
                            <img src={Access} alt="" className="w-[75px] ml-[55px]" />
                       
                            </div>
                          
                        </div>

                        <div className="bg-[#5D2683] w-[250px] h-[120px] ml-[300px] ">
                            <p className="text-white p-4">
                            150.2M
                            </p>
                            <div className=" pl-[100px] ">
                            <img src={Fcmb} alt="" className="w-[65px] ml-[60px] mb-[50px] " />
                         
                            </div>
                          
                        </div>

                        <div className="bg-white w-[250px] h-[120px] ml-[450px]  ">
                            <p className="text-[#02B1F1] p-4">
                            150.2M
                            </p>
                            <div className=" pl-[100px]  mb-[30px] ">
                            <img src={Union} alt="" className="w-[60px] ml-[60px]" />
                          
                            </div>
                          
                        </div>

                        
                      </div>
                      </div>

                      <div className="grid grid-cols-2 pt-6 ">
                      <div className="bg-white w-[250px] h-[120px]   ">
                            <p className="text-[#ED1E32] p-4">
                            150.2M
                            </p>
                            <div className=" pl-[110px]  mb-[30px] ">
                            <img src={Globus} alt="" className="w-[60px] ml-[60px]" />
                          
                            </div>
                          
                        </div>
                        
                        <div className="bg-white w-[250px] h-[120px] ml-[10px]  ">
                            <p className="text-[#103A94] p-4">
                            150.2M
                            </p>
                            <div className=" pl-[110px]  mb-[30px] ">
                            <img src={Fshb} alt="" className="w-[60px] ml-[60px]" />
                          
                            </div>
                          
                        </div>
                       

                        </div>

                   </div>
                   
                   </div>
             </div>
    )
};

export default Bankdetails;