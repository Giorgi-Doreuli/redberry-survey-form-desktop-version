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
        <form className="form">
            <input type="text" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)} value = {FirstName || ''}/>
            <input type="text" placeholder='Last Name'onChange={(event) => setLastName(event.target.value)} value = {LastName || ''}/>
            <input type="email" placeholder='E Mail'onChange={(event) => setEmail(event.target.value)} value = {Email || ''}/>
            <input type="text" placeholder='+995 5 _ _ _ _'onChange={(event) => setNumber(event.target.value)} value = {number || ''}/>
        </form>
    </div>
  )
}

export default FirstSurvey