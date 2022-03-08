import React, {useState} from 'react'
import './SurveyForm.css'
import FirstSurvey from './FirstSurvey'
import SecondSurvey from './SecondSurvey'
import ThirdSurvey from './ThirdSurvey';
import axios from 'axios';

function SurveyForm(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    token: '2f5b424f-59ad-40a3-9835-ba96a008c141',
    first_name : '',
    email: '12',
    had_covid: true,
    last_name: '12',
    something_special: '12',
    vaccinated: true,
    will_organize_devtalk: true,
    work_preference: 'from_home',
  })
  

  function goNextPage() {    
    setPage((page) => page + 1);
    if(page === 2){
      setData(prevState => ({
        ...prevState,
        first_name: sessionStorage.getItem('FirstName')
     }));
    }
  }

  function postData  () {
    const url = 'https://bootcamp-2022.devtest.ge/api/application';
    axios.post(url, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }



  function goPreviousPage() {
    if (page === 1){      
      sessionStorage.clear();
      props.setStart(true);
      props.openSurvey(false);
    };
    setPage((page) => page - 1);
  }
  
  return (
    <div className="surveyForm">
      <div className="survey">
      <div className="survey-pages">
        {page === 1 && <FirstSurvey page={page}/>}
        {page === 2 && <SecondSurvey  />}
        {page === 3 && <ThirdSurvey  />}
      </div>

      <div className="buttons">

        {page !== 3 && <div className='page-btn'>
                            <button onClick={goPreviousPage} className="btn btn-primary">Go Previous</button>
                            <button onClick={goNextPage} className="btn btn-primary">Go Next</button>
                        </div>}

        {page === 3 && <div className='submit-btn'>         
                          <button type="submit" onClick={() => postData()}>Submit</button>
                          <button onClick={goPreviousPage}>go back</button>
                        </div>}
        </div>
      </div>
      <div className="info"> information</div>
    </div>
  )
}

export default SurveyForm