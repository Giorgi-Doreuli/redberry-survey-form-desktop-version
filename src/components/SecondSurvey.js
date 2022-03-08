import React from 'react'
import './SecondSurvey.css'
import SessionStorage from './SessionStorage'

function SecondSurvey() {
  const [city, setCity] = SessionStorage('city', '');
  const [country, setCountry] = SessionStorage('country', '')
  const [gmail, setGmail] = SessionStorage('gmail', '');
  const [nomeri, setNomeri] = SessionStorage('nomeri', '');
  return (
    <div className="second-Survey">
      <form className="form">
          <input type="text" placeholder='city' onChange={(event) => setCity(event.target.value)} value = {city || ''}/>
          <input type="text" placeholder='country' onChange={(event) => setCountry(event.target.value)} value = {country || ''}/>
          <input type="text" placeholder='gmail' onChange={(event) => setGmail(event.target.value)} value = {gmail || ''}/>
          <input type="text" placeholder='nomeri' onChange={(event) => setNomeri(event.target.value)} value = {nomeri || ''}/>
      </form>
    </div>
  )
}

export default SecondSurvey