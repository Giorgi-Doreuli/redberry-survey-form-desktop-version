import React, {useState} from 'react'
import {FaArrowDown, FaArrowUp} from 'react-icons/fa'
import './SubmittedForms.css'

function SubmittedForms() {
  let firstName = JSON.parse(localStorage.getItem('FirstName'));
  let LastName = JSON.parse(localStorage.getItem('LastName'));
  let Email = JSON.parse(localStorage.getItem('Email'));
  let Number = JSON.parse(localStorage.getItem('Number'));
  let items = JSON.parse(localStorage.getItem('items'));
  const [arrowDown, setArrowDown] = useState(true);
  const [hideOrShow, setHideOrShow] = useState(false);

  const showOrhideInfo = () => {
    if(hideOrShow) {
      setHideOrShow(false);
      setArrowDown(true);
    }else{
      setHideOrShow(true);
      setArrowDown(false);
  }
}

  return (
    <div className="submittedForms">
      <div className="person-info">
        <div className="top-part" >
            <div className='top-part-text'>
              {firstName} 
              &nbsp;
              {LastName}
            </div>
            <div className='top-part-arrow'>
              {arrowDown? <FaArrowDown onClick = {() => showOrhideInfo()}/> 
              : <FaArrowUp onClick = {() => showOrhideInfo()}/>}
            </div>
        </div>
        {hideOrShow?
        <div className='slider'>
          <div className='full-info'> 
            <div className='personal-info'>
              <h3 className='personal-info-header'>Personal Information</h3>
              <div className='personal-info-list'>
                <div className='firstName'>
                  <p>First Name</p>
                  <p> {firstName}</p>
                </div>
                 <p className='lastName'> {LastName}</p>
              </div>
            </div>
            <div id='skillSet'> 
              <h3>SkillSet</h3>
            </div>
          </div>
        </div> : 
        <div className='empty'>
          </div>}
        </div>
    </div>
  )
}

export default SubmittedForms