
import React,{useState,useEffect} from 'react';
import axios from 'axios'

import '../styles/employeedata.css'


import AddEmployee from './AddEmployee';
import EmployeeMain from './EmployeeMain';

const Employees = () => {

  const [data,setData]=useState([])
  const [show ,setShow]=useState(false)



  const url="http://192.168.2.74/employee/all";
  

  // const getData=()=>{
  //   axios.get(url).then((res)=>{
  //     console.log(res.data)
  //     console.log(res.status)
  //     setData(res.data)

  //   }).catch((error)=>{console.log(error)})


  // }

  useEffect(() => {
    const getData=async()=>{

      const {data:res}=await axios.get(url)
      setData(res)
    }

      getData();
      
      
  
   
    
    
    
  }, [])
console.log(data )





  return (

    <>
    {show ? <AddEmployee setShow={setShow} data={data} setData={setData}/>:<EmployeeMain data={data} setData={setData} setShow={setShow} />}
    
    </>







    
  )
}

export default Employees