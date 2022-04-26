import React, {useState} from 'react'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
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
      <h2 className="submittedForms-header">Submitted Applications</h2>
      <div className="person-info">
        <div className="top-part" >
            <div className='top-part-text'>
              {firstName} 
              &nbsp;
              {LastName}
            </div>
            <div className='top-part-arrow'>
              {arrowDown? <IoIosArrowDown onClick = {() => showOrhideInfo()}/> 
              : <IoIosArrowUp onClick = {() => showOrhideInfo()}/>}
            </div>
        </div>
        {hideOrShow?
        <div className='slider'>
          <div className='full-info'> 
            <div className='personal-info'>
              <h3 className='personal-info-header'>Personal Information</h3>
              <div className='personal-info-list'>
                <div className='personal-headers'>
                  <p>First Name:</p>
                  <p>Last Name:</p>
                  <p>Email:</p>
                  <p>Number:</p>
                </div>
                <div className='personal-infos'>
                  <p>{firstName}</p>
                  <p>{LastName}</p>
                  <p>{Email}</p>
                  <p>{Number}</p>
                </div>
              </div>
            </div>
            <div className='skillSet'> 
              <h3 className='skillSet-header'>SkillSet</h3>
              <div className='skillSet-list'>
              <div className='submitted-skillList'>
                  {items.map(item => (
                    <p>
                      {item.skill}
                    </p>
                  ) )}
              </div>
              <div className='submitted-experienceList'>
                 {items.map(item => (
                    <p>
                      {item.experience}
                    </p>
                  ) )}
              </div>
              </div>
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