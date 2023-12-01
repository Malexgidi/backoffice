import React from "react";
import Logo from '../Images/SBC.png'
import {CiSearch} from 'react-icons/ci'
import { TbClock2 } from 'react-icons/tb'
import {GrLogout} from 'react-icons/gr'
import {HiOutlineHome} from 'react-icons/hi'
import {GoHome} from 'react-icons/go'
import { useState } from 'react';
// import {useForm} from 'react-hook-form'
// import {DevTool } from '@hookform/devtools'


// let renderCount = 0;

// type FormValues = {
//     bankname: string,
//     paymentApptypeId: string,
//     bankname: string,
// }


const Paymentvendor = () =>{




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

     const [formValue, setFormValue] = useState ({bankcode:'', paymentApptypeId:'', bankname:'' })
     const [disable, setDisable] = useState ('typing')
     const [formErrors, setFormErrors] = useState({})

     const handleInput = (e) =>{
        const {name, value} = e.target;
        setFormValue({...formValue, [name]:value})
     }

     const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValue);
      setDisable('submitted')
      setFormErrors(validate(formValue))
     }

     const validate = (values) => {
       const errors = {}
        
     }






    return(
      

        <div style={{ overflow: "hidden" }} className="max-w-[1640px] mx-auto grid grid-cols-2 w-full h-[900px] bg-[#F7F8FA]  ">
            
                    <div className="bg-white h-[900px]   w-[60px] ">
                <div className=" items-center ml-3"> 
                <img src={Logo} alt="" className="w-[30px] mt-4 mb-[150px]"  />
                </div>
                {data.map((item,id)=> (
                   <div key={id}>
                       <div  className='justify-center  items-center '> 
                       <p onClick={()=>setActive(id)} className={ `text-[#8C8C8C] mt-4   items-center py-1
                        flex flex-col ${active === id && 
                        'border-l-4 border-[#4CB944] w-full rounded-r-lg text-[#114658]  active:bg-[#114658] '} `} >  {<item.icon size={20}/> } </p>
                       
                       </div> 
                       </div>

                      
                    ))}
                 

                   <div>
                  <a href="/">  <GrLogout size={20} className="ml-5 mt-[150px] text-[#114658] " /> </a>  
                   </div>
                  
            </div>

            <div className="bg-white h-[50px] ml-[-580px] justify-between   w-[1200px] grid grid-cols-2 items-center "> 
            <h1 className="font-semibold pl-[20px] mt-2 text-lg"> Add Payment Vendor </h1>
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

                   {/* payment vendor */}
                   {/* <div>
                    <pre> {JSON.stringify(formValue, undefined, 2)} </pre>
                    </div> */}

                   <div className="bg-[#114658] w-[808px] h-[750px] relative top-12 ml-[180px] ">
                    <div className="bg-gradient-to-b from-[#073140] to-[#07314000] w-[92px] h-[157px] relative left-[709px]">

                    </div>
                    
                    <div className="mt-[-100px] ">
                        <h1 className="font-bold text-white items-center relative left-[300px]">Please fill in the correct details </h1>
                      
                        <div>
                            <form className="pl-[100px]" onSubmit={handleSubmit}   >
                                <div className="py-3"> 
                                <label  className="text-white mb-2 "> Bank Code </label> <br /> 
                                    <input type="text" 
                                    className="w-[600px] h-[60px] mt-2 "
                                    name="bankcode"
                                    value={formValue.bankcode}
                                    onChange={handleInput}
                                
                                    />
                                    </div>

                                    <div className="py-3"> 
                                    <label  className="text-white"> Payment Application Type ID</label> <br />
                                    <input type="text"
                                     className="w-[600px] h-[60px]  mt-2 " 
                                     name="paymentApptypeId"
                                     value={formValue.paymentApptypeId}
                                     onChange={handleInput}
                                   
                                     />
                                    </div>
                                  

                                    <div className="py-3">
                                    <label htmlFor="" className="text-white"> Bank Name</label> <br />
                                    <input type="text" className="w-[600px] h-[60px] mt-2  " 
                                   value={formValue.bankname}
                                   onChange={handleInput}
                                     name='bankname'
                                    />
                                    </div>
                           
                        <div className=" ">
                            <div className="flex ">
                            <p className="text-white py-3 text-sm ">
                              Automated ?  
                            </p>
                           
                            <div className="flex items-center ps-3  ml-[390px] ">
                <label htmlFor="default-radio-1" className="  py-3  ms-2 mr-2 text-sm text-white">Yes</label>
                    <input id="default-radio-1"  onChange={handleInput} type="radio" value="Yes" name="automated" className="w-4 h-4 text-blue-600  bg-gray-100  rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"/>
                </div>

                <div className="flex items-center ps-3 pl-[-390px] ">
                <label htmlFor="default-radio-1" className="  py-3  ms-2 mr-2 text-sm text-white">No</label>
                    <input id="no-radio-1"  onChange={handleInput} type="radio" value="No" name="automated"  className="w-4 h-4 text-blue-600 bg-gray-100  rounded  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2"/>
                </div>
             
                            </div>
                   {/* need sub */}
                            <div className="flex">
                            <p className="text-white py-3 text-sm ">
                            Need Subscription?
                            </p>
                            <div className="flex items-center ps-3 ml-[348.5px]">
                <label htmlFor="default-radio-2" className=" py-3 ms-2 mr-2 text-sm font-medium text-white">Yes</label>
                    <input id="default-radio-2" style={{placeholder: "padding"}}  onChange={handleInput} type="radio" value="Yes" name="subscription" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                <div className="flex items-center ps-3  pl-[-347px]">
                <label htmlFor="default-radio-2" className=" py-3 ms-2 mr-2 text-sm font-medium text-white">No</label>
                    <input id="no-radio-2"  onChange={handleInput} type="radio" value="No" name="subscription"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                </div>

     {/* active */}
                <div className="flex"> 
                <p className="text-white py-3 text-sm ">
                            Active? 
                </p>
                <div className="flex items-center ps-3 ml-[426px]">
                <label htmlFor="default-radio-3" className="py-3 ms-2 text-sm mr-2 font-medium text-white">Yes</label>
                    <input id="default-radio-3"  onChange={handleInput} type="radio" value="Yes" name="active"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                <div className="flex items-center ps-3 pl-[-425px]">
                <label htmlFor="default-radio-3" className="py-3 ms-2 text-sm mr-2 font-medium text-white">No</label>
                    <input id="no-radio-3"  onChange={handleInput} type="radio" value="No" name="active"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                </div>
                 {/* Notification query */}
                            <div className="flex"> 
                            <p className="text-white py-3 text-sm ">
                            Notification Query?
                            </p>
                            <div className="flex items-center ps-3 relative ml-[349px]">
                <label htmlFor="default-radio-4" className="py-3 ms-2 mr-2 text-sm font-medium text-white">Yes</label>
                    <input id="default-radio-4"  onChange={handleInput} type="radio" value="Yes" name="query"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                <div className="flex items-center ps-3 pl-[-348px]">
                <label htmlFor="default-radio-4" className="py-3 ms-2 mr-2 text-sm font-medium text-white">No</label>
                    <input id="no-radio-4"  onChange={handleInput} type="radio" value="No" name="query" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 "/>
                </div>
                            </div>

                           
                    
                        </div>
                 
          <div className="relative left-[445px] pt-14 ">
            <button className="bg-[#4CB944] px-12 py-3 text-white "
            disabled={formValue.bankcode.length===0 ||
                    formValue.paymentApptypeId.length===0 ||
                    formValue.bankname.length===0 ||
                    disable==='submitted'
                          }
            >
                Submit
            </button>
          </div>
          
         
          </form>
        </div>
          </div>
        </div>
               

        </div>
          
        </div>
    )
}

export default Paymentvendor;