
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import '../styles/employeedata.css'
import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'
import { HiUserPlus } from "react-icons/hi2";
import Employeedata from './Employeedata';

const Employees = () => {
  const [value, onChange] = useState([new Date(), new Date()]);
  const [data,setData]=useState(null)


  const url="http://192.168.2.74/employee/all";
  

  const getData=()=>{
    axios.get(url).then((res)=>{
      console.log(res.data)
      console.log(res.status)
      setData(res.data)

    }).catch((error)=>{console.log(error)})


  }

  useEffect(() => {
    getData();
    
  }, [])






  return (
    <div class="box">
    <div className='addemployee'>
        <div className='one'>
            <h1>{data?.length}</h1>
            <p>Employees</p>
        </div>
        <div className='two'>
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
    <div className='employeetable'><Employeedata data={data}/></div>

    
  </div>
  )
}

export default Employees