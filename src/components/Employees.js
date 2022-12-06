import React from 'react'
import '../styles/employeedata.css'
import { HiUserPlus } from "react-icons/hi2";

const Employees = () => {
  return (
    <div class="box">
    <div className='addemployee'>
        <div className='one'>
            <h1>2500</h1>
            <p>Employees</p>
        </div>
        <div className='two'>
          <p><span><HiUserPlus/></span>Add Employees</p>
        </div>
    
    </div>
    <div className='filter'>
        <input placeholder='Search'/>
        <select name="cars" id="cars">
            <option value="volvo" className='option'>All Employees</option>
            <option value="saab" className='option'>Managers</option>
            <option value="mercedes" className='option'>salesman</option>
            <option value="audi"className='option'>accountant</option>
        </select>
        <input/>
       
       
    </div>
    <div className='employeedata'>Three</div>

    
  </div>
  )
}

export default Employees