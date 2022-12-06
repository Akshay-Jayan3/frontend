import React,{useState,useEffect} from 'react';
import axios from 'axios'
import EachEmployee from './EachEmployee'

const Employeedata = ({data}) => {

  
  
  
   
    

  return (
    <div>
      <ul className='grid' >
      {data?.map((employee)=>(
      <EachEmployee firstname={employee?.firstName} lastName={employee?.lastName} designation={employee?.designation} email={employee?.email} phoneNumber={employee?.phoneNumber} department={employee?.department}/>
  ))}
      </ul></div>
  )
}

export default Employeedata