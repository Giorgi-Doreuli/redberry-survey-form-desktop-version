import React from 'react'
import './FirstSurvey.css'
import LocalStorage from './LocalStorage'

function FirstSurvey() {
    const [FirstName, setFirstName] = LocalStorage('FirstName', '');
    const [LastName, setLastName] = LocalStorage('LastName', '');
    const [Email, setEmail] = LocalStorage('Email', '');
    const [number, setNumber] = LocalStorage('Number', '');


  return (
    <div className="first-survey">
        <form className="form">
            <input type="text" placeholder='First Name' onChange={(event) => setFirstName(event.target.value)} value = {FirstName}/>
            <input type="text" placeholder='Last Name'onChange={(event) => setLastName(event.target.value)} value = {LastName}/>
            <input type="email" placeholder='E Mail'onChange={(event) => setEmail(event.target.value)} value = {Email}/>
            <input type="text" placeholder='+995 5 _ _ _ _'onChange={(event) => setNumber(event.target.value)} value = {number}/>
        </form>
    </div>
  )
}

export default FirstSurvey