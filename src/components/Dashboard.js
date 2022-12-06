import React from 'react'
import '../styles/dashboard.css'

const Dashboard = () => {
  return (
    <div className='dash'>
      <div className='greeting'>1</div>
      <div className='summary'>
        <div className='summary-data'></div>
        <div className='summary-data'></div>
        <div className='summary-data'></div>
      </div>
      <div className='chart'>
        <div className='datachart'></div>
        <div className='datachart'></div>
      </div>
    </div>
  )
}

export default Dashboard