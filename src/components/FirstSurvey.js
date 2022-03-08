import React from 'react'
import './FirstSurvey.css'
import SessionStorage from './SessionStorage'

function FirstSurvey() {
    const [FirstName, setFirstName] = SessionStorage('FirstName', '');
    const [LastName, setLastName] = SessionStorage('LastName', '');
    const [Email, setEmail] = SessionStorage('Email', '');
    const [number, setNumber] = SessionStorage('Number', '');


  return (
    <div className="first-survey">
      
      <div className="header">
          <h2>hey, rocketeer, what are your coordinates</h2>
      </div>
        <form className="form1">
            <input required pattern="[a-zA-Z0-4-]+" type="text" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)} value = {FirstName || ''}/>
            <input required type="text" placeholder='Last Name'onChange={(event) => setLastName(event.target.value)} value = {LastName || ''}/>
            <input required type="email" placeholder='E Mail'onChange={(event) => setEmail(event.target.value)} value = {Email || ''}/>
            <input required type="text" placeholder='+995 5 _ _ _ _'onChange={(event) => setNumber(event.target.value)} value = {number || ''}/>
        </form>
    </div>
  )
}

export default FirstSurvey