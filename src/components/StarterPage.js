import React, {useState} from 'react'
import './StarterPage.css'
import SurveyForm from './SurveyForm'
import SubmittedForms from './SubmittedForms'

function StarterPage() {
    const [start, setStart] = useState(true);
    const [openSurvey, setOpenSurvey] = useState(false);
    const [openSubmitted, setOpenSubmitted] = useState(false);
  return (
    <div className="StarterPage">
        {start ?    <div className="buttons" >
                        <button className="openSurvey" onClick={() => {setOpenSurvey(true); setStart(false)}}>open Survey</button>
                        <button className="submitted applications" onClick={() => {setOpenSubmitted(true); setStart(false)}}>submitted applications</button>
                    </div> : ''}
        <div>
            {openSurvey ? <SurveyForm setStart={setStart} openSurvey={setOpenSurvey}/> : ""}
            {openSubmitted ? <SubmittedForms/> : ""}
        </div>
    </div>
  )
}

export default StarterPage