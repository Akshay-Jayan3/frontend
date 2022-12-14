import {React} from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/EmployeePage.css'
import icon from '../Assets/icons.svg'
import { BiLogOutCircle } from 'react-icons/bi'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import EmployeeDetails from '../components/EmployeeDetails'
import OtherDetails from '../components/OtherDetails'
import SalaryDetails from '../components/SalaryDetails'
import axios from 'axios';
import { useState, useEffect } from 'react'
function EmployeePage() {

  // const id=19;
  const location = useLocation();
  const { id } = location.state;
  console.log(id)
  const emp_url = `http://192.168.2.74/employee/${id}`;
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    axios.get(emp_url).then((response) => {
      setEmployee(response.data)
      console.log(response.data)
    })
  }, [])
  return (

    <div className='outer-div'>
      <div className='innerdiv-top'>
        <div className='topdiv1'>
          <div className='icon'>
            <img src={icon} />
          </div>
          <div className='emp_head'>
            <h3 style={{ color: "#D9DFFB", fontFamily: "Inter" ,margin:"8px"}}>{employee.firstName} {employee.lastName}</h3>
            <p style={{ color: "#D9DFFB", fontSize: "14px", fontFamily: "Inter",marginLeft:"10px" }}>{employee.designation}</p>
          </div>
        </div>
        <div className='topdiv2'>

          <Link style={{ color: "#D9DFFB", textDecoration: 'none', fontSize: "18px", fontFamily: "Inter" }} to="/"><BiLogOutCircle style={{ paddingTop: '0px', height: "15px" }} /> Logout</Link>

        </div>
      </div>
      <div className='innerdiv-bottom'>
        <div className='bottomdiv1'>
          <h2>Welcome, {employee.firstName}!</h2>
        </div>
        <div className='grid-container'>
          <div className='grid1'><EmployeeDetails id={employee.id} /></div>
          <div className='grid2'><OtherDetails id={employee.id} /></div>
          <div className='grid3'><SalaryDetails id={employee.id} /></div>
        </div>

      </div>

    </div>
  )
}

export default EmployeePage