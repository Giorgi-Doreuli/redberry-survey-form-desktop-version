import React from 'react'
import './ThirdSurvey.css'

function ThirdSurvey(props) {
  
  return (
    <div className="ThirdSurvey">
      <div className='page-btn'>
        <button onClick={() => props.prevpage()} className="btn btn-primary">Go Previous</button>
        <button onClick={() => props.postData()} className="btn btn-primary">Go Next</button>
      </div>
    </div>
  )
}

export default ThirdSurvey