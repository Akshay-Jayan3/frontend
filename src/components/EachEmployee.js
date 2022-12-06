import React from 'react'
import icon from "../Assets/usericon.svg"
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";

const EachEmployee = (props) => {
  return (
    <div >
        <li>
            <div  className='employee-grid'>
                <div className='profile'>
                <img src={icon}></img>
                <h4>{props.firstname} {props.lastName}</h4>
                <p>{props.designation}</p>
                

                </div>
                <div className='basic-details'>
               
                <div className="details-one">
                    <div>
                    <p style={{fontSize:"15px" ,fontWeight:"500"}}>Department</p>
                    <p>{props.department}</p>

                    </div>
                    <div>
                    <p  style={{fontSize:"15px", fontWeight:"500"}}>Date Hired</p>
                    <p >september 5</p>
                    </div>
                    
                   
                    
                </div>
                <div className='details-two'>
                <p><span><GrMail/></span>{props.email}</p>
                <p><span><BsFillTelephoneFill/></span>{props.phoneNumber}</p>
                </div>


                </div>
                
                

            </div>
        </li>
    </div>
  )
}

export default EachEmployee