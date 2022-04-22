import React, {useState} from 'react'
import './FirstSurvey.css'
import SessionStorage from './SessionStorage'


function FirstSurvey(props) {
    const [FirstName, setFirstName] = SessionStorage('FirstName', '');
    const [LastName, setLastName] = SessionStorage('LastName', '');
    const [Email, setEmail] = SessionStorage('Email', '');
    const [number, setNumber] = SessionStorage('Number', '');
    const [nameErr, setNameErr] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [lastNameErr, setLastNameErr] = useState('');
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [EmailErr, setEmailErr] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [phoneErr, setPhoneErr] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(true);



    const validateName = (checkingText) => {
      const regexpFirstName = /^[a-zA-Z]*(?:[a-zA-Z][a-zA-Z]*){2,}$/;
      if(checkingText === FirstName){
        if (regexpFirstName.exec(checkingText) !== null) {
          setIsNameValid(true);
          setNameErr('');
            } else {
                    setIsNameValid(false);
                    setNameErr('You should use more than 2 letter.');
            }
        }
    }

    const validateLastName = (checkingText) => {
      const regexpLastName = /^[a-zA-Z]*(?:[a-zA-Z][a-zA-Z]*){2,}$/; 
      if(checkingText === LastName){
        if (regexpLastName.exec(checkingText) !== null) {
          setIsLastNameValid(true);
          setLastNameErr('');
          } else {
                    setIsLastNameValid(false);
                    setLastNameErr('You should use more than 2 letter.');
            }
      }
    }

    
    const validateEmail = (checkingText) => {
      const regexpEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
      if(checkingText === Email){
        if (regexpEmail.exec(checkingText) !== null) {
          setIsEmailValid(true);
          setEmailErr('');
            } else {
                    setIsEmailValid(false);
                    setEmailErr('type email.');
            }
      }
    }

    let check = false;

    const validateNumber = (checkingText) => {
      const regexpPhone = /^\+(995)[-\s]?(5)\d{2}[-\s]?(\d{2}[-\s]?){3}$/;
      if(checkingText === number){
        if (regexpPhone.exec(checkingText) !== null) {
          setIsPhoneValid(true);
          setPhoneErr('');
          check = true;
            } else {
                    setIsPhoneValid(false);
                    setPhoneErr('Phone should be like +995 5xx-xx-xx-xx');
            }
      }
    }

    const validNextPage = () => {
      if(isNameValid && isLastNameValid && isEmailValid && isPhoneValid){
        props.nextpg();
      }
    }

    const goNextPage = () => {
      showErrors();
      if(check){
        validNextPage();
      }
    }

 
    

    const showErrors = () => {
      validateName(FirstName);
      validateLastName(LastName);
      validateEmail(Email);
      validateNumber(number);
    }


 
  return (
    <div className="first-survey">
      
      <div className="header">
          <h2>hey, rocketeer, what are your coordinates</h2>
      </div>
        <form className="form1" >
              <input  type="text" placeholder='First Name' 
                      onChange={(event) => setFirstName(event.target.value)} value = {FirstName}
                      onBlur={() => validateName(FirstName)}
                      required/>
                      <div ishidden={isNameValid} className='error'>
                          <p>{nameErr}</p>
                      </div>
              <input  type="text" placeholder='Last Name'onChange={(event) => setLastName(event.target.value)} value = {LastName}
                      onBlur={() => validateLastName(LastName)}
                      required/>
                      <div ishidden={isLastNameValid} className='error'>
                           <p>{lastNameErr}</p>
                      </div>
              <input type="email" placeholder='E Mail'onChange={(event) => setEmail(event.target.value)} value = {Email}
                      onBlur={() => validateEmail(Email)}
                      required/>
                      <div ishidden={isEmailValid} className='error'>
                          <p>{EmailErr}</p>
                      </div>
              <input type="text" placeholder='+995 5 _ _ _ _'onChange={(event) => setNumber(event.target.value)} value = {number}
                      onBlur={() => validateNumber(number)}
                      required/>
                      <div ishidden={isPhoneValid} className='error'>
                          <p>{phoneErr}</p>
                      </div>
        </form>  
          <div className='page-btn'>
              <button onClick={() => {props.prevpage(); props.clearStorage()}} className="btn btn-primary">Go Previous</button>
              <button onClick={() => goNextPage()} className="btn btn-primary">Go Next</button>
          </div>
    </div>
  )
}


export default FirstSurvey