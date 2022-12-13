import React from 'react';

import EachEmployee from './EachEmployee'

const Employeedata = ({ data ,setData}) => {
  
  







  return (



    <ul className='grid' >
      {data.map((employee,index) => (
        <EachEmployee  key={index} firstname={employee?.firstName} lastName={employee?.lastName} designation={employee?.designation} email={employee?.email} phoneNumber={employee?.phoneNumber} department={employee?.department} verification={employee.isVerified} eachemployee={employee} id={employee.id} data={data} setData={setData}/>
      ))}
    </ul>





  )
}

export default Employeedata