import React,{useState} from 'react'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { HiUserPlus } from "react-icons/hi2";
import Employeedata from './Employeedata';

const EmployeeMain = ({data ,setShow ,setData}) => {
  const [value, onChange] = useState([new Date(), new Date()]);

  const HandleAdd =()=>{
    setShow(true)
  }
 
  return (
    <div><div class="box">
    <div className='addemployee'>
        <div className='one'>
            <h1>{data?.length}</h1>
            <p>Employees</p>
        </div>
        <div className='two' onClick={HandleAdd}>
          <p><span><HiUserPlus/></span>Add Employees</p>
        </div>
    
    </div>
    <div className='filter'>
        <input id="search" placeholder='Search'/>
        <select name="cars" id="cars">
            <option value="volvo" className='option'>All Employees</option>
            <option value="saab" className='option'>Managers</option>
            <option value="mercedes" className='option'>salesman</option>
            <option value="audi"className='option'>accountant</option>
        </select>
        <DateRangePicker style={{border:"1px solid #8991c0"}} onChange={onChange} value={value}  />
       
       
    </div>
    <div className='employeetable'>{data?.length !==0 ?<Employeedata data={data} setData={setData}/>:<div className='no-data'><h1>No employees</h1></div>}</div>

    
  </div></div>
  )
}

export default EmployeeMain