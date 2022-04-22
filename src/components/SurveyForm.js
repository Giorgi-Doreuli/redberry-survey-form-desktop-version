import React, {useState} from 'react'
import './SurveyForm.css'
import FirstSurvey from './FirstSurvey'
import SecondSurvey from './SecondSurvey'
import ThirdSurvey from './ThirdSurvey';

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
        setData((prevState) => ({
          ...prevState,
            first_name: JSON.parse(sessionStorage.getItem('FirstName')),
            last_name: JSON.parse(sessionStorage.getItem('LastName')),
            email: JSON.parse(sessionStorage.getItem('Email')),
            number: JSON.parse(sessionStorage.getItem('Number')),
            items: JSON.parse(sessionStorage.getItem('items'))
        }));
      }
  }

  function postData  () {
    localStorage.setItem('FirstName', JSON.stringify(data.first_name));
    localStorage.setItem('LastName', JSON.stringify(data.last_name));
    localStorage.setItem('Email', JSON.stringify(data.email));
    localStorage.setItem('Number', JSON.stringify(data.number));
    localStorage.setItem('items', JSON.stringify(data.items));
    sessionStorage.clear();
    props.setStart(true);
    props.openSurvey(false);
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
        {page === 3 && <ThirdSurvey  prevpage={goPreviousPage} postData={postData} data={data}/>}
      </div>

      </div>
      <div className="info"> information</div>
    </div>
  )
}

export default SurveyForm