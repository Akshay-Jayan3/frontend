import React from 'react'
import EmployeeDetails from './EmployeeDetails'
import axios from 'axios';
import { useState,useEffect } from 'react';
function OtherDetails(props) {
  const emp_url=`http://192.168.2.74/employee/${props.id}`
  const[employee,setEmployee]=useState([])
      useEffect(()=>{
          axios.get(emp_url).then((response)=>{
            setEmployee(response.data)
            console.log(response.data)
          })
        },[emp_url])
  return (
    <>
       <div className='head2'>Other Details</div>
       <div className='details'>
        <p>Department:</p>
        <p>Job title:</p>
        <p>Onboarding Date:</p>
        <p>Verification Status:</p>
       </div>
       <div className='show_Otherdetails'>
        <p>{employee.department}</p>
        <p>{employee.designation}</p>
        <p>{new Date(employee.created_at).toLocaleString("lookup")}</p>
        <p>{employee.isverified ? "Verified":"Pending"}</p>
       </div>
    </>
  )
}

export default OtherDetails