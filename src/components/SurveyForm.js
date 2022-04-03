import React, {useState} from 'react'
import './SurveyForm.css'
import FirstSurvey from './FirstSurvey'
import SecondSurvey from './SecondSurvey'
import ThirdSurvey from './ThirdSurvey';
import axios from 'axios';

function SurveyForm(props) {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    first_name : '',
    last_name: '',
    items: [],
    email: '',
    number: ''
  });
  

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


  const clearStorage = () => {
    sessionStorage.clear();
    props.setStart(true);
    props.openSurvey(false);
  }

  function goPreviousPage(){
    setPage((page) => page - 1);
  }
  
  return (
    <div className="surveyForm">
      <div className="survey">
      <div className="survey-pages">
        {page === 1 && <FirstSurvey clearStorage={clearStorage}  nextpg={goNextPage} prevpage={goPreviousPage}/>}
        {page === 2 && <SecondSurvey nextpg={goNextPage} prevpage={goPreviousPage}/>}
        {page === 3 && <ThirdSurvey  />}
      </div>

      <div className="buttons">
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