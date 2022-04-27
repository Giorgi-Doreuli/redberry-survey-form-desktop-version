import React from 'react'
import './ThirdSurvey.css'

function ThirdSurvey(props) {
  
  return (
    <div className="ThirdSurvey">
      <div className='submit-goback'>
        <button onClick={() => props.postData()} className="finalSubmit">Go Next</button>
        <button onClick={() => props.prevpage()} className="goback">Go Previous</button>
      </div>
    </div>
  )
}

export default ThirdSurvey