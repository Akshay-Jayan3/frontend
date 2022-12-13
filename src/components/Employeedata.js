import React from 'react';

import EachEmployee from './EachEmployee'

const Employeedata = ({ data ,setData}) => {







  return (



    <ul className='grid' >
      {data.map((employee) => (
        <EachEmployee firstname={employee?.firstName} lastName={employee?.lastName} designation={employee?.designation} email={employee?.email} phoneNumber={employee?.phoneNumber} department={employee?.department} verification={employee.isVerified} id={employee.id} data={data} setData={setData} eachemployee={employee}/>
      ))}
    </ul>





  )
}

export default Employeedata