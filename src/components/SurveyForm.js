import React, {useState} from 'react'
import './SurveyForm.css'
import FirstSurvey from './FirstSurvey'
import SecondSurvey from './SecondSurvey'
import ThirdSurvey from './ThirdSurvey';

function SurveyForm(props) {

  const [page, setPage] = useState(1);
  

  function goNextPage() {
    if (page === 3) return;
    setPage((page) => page + 1);
  }

  function goPreviousPage() {
    if (page === 1) return;
    setPage((page) => page - 1);
  }
  
  return (
    <div className="surveyForm">
      <div className="survey"> 
      <div>
        {page === 1 && <FirstSurvey page={page}/>}
        {page === 2 && <SecondSurvey  />}
        {page === 3 && <ThirdSurvey  />}
      </div>

      {page !== 3 && <div>
                          <button onClick={goNextPage}>Go Next</button>
                          <button onClick={goPreviousPage}>Go Previous</button>
                      </div>}

      {page === 3 && (
        <button type="submit">
          Submit
        </button>)}
      </div>
      <div className="info"> information</div>
    </div>
  )
}

export default SurveyForm