import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './SubmittedForms.css'

function SubmittedForms() {
    const [submitted, setSubmitted] = useState([]); 
    const token = '2f5b424f-59ad-40a3-9835-ba96a008c141';

    useEffect(() => {
      const url = 'https://bootcamp-2022.devtest.ge/api/applications?token=' + token;
      axios.get(url)
          .then(res => {
            setSubmitted( res.data );;
          });
  }, [])

  console.log(submitted);
  return (
    <div className="submittedForms">
        <h2>  </h2>
    </div>
  )
}

export default SubmittedForms