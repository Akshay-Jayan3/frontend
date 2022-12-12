
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import '../styles/employeedata.css'


import AddEmployee from './AddEmployee';
import EmployeeMain from './EmployeeMain';

const Employees = () => {

  const [data,setData]=useState(null)
  const [show ,setShow]=useState(false)



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

    <>
    {show ? <AddEmployee setShow={setShow}/>:<EmployeeMain data={data}  setShow={setShow} />}
    
    </>







    
  )
}

export default Employees