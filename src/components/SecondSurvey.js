import React, {useState, useEffect} from 'react'
import './SecondSurvey.css'
import SessionStorage from './SessionStorage'
import axios from 'axios'
import SkillList from './SkillList';

function SecondSurvey(props) {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = SessionStorage('experience', '');
  const [dropdownValues, setDropdownValues] = useState('');
  const [items, setItems] = useState([
    {
      skill: 'PHP',
      experience : '2'
    },
    {
      skill: 'React.JS',
      experience : '3'
    }
  ]);
  

  useEffect(() => {

    function getSkills  () {
      const url = 'https://bootcamp-2022.devtest.ge/api/skills';
      axios.get(url)
      .then((res) => {
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    getSkills();
  }, [])


  const addSkill = () => {
      const newSkill = {
        skill: dropdownValues,
        experience : experiences
      };

      if (items.filter(e => e.skill === dropdownValues).length < 1 && experiences === '') {
          setItems([...items, newSkill]);
      }
  }



  return (
    <div className="second-Survey">
      <form className="form2">
        <div className="skills">
            <select onChange={e => setDropdownValues(e.target.value)} defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>choose skills</option>
              {skills.map(item => (
                <option
                  key={item.id}
                  value={item.title}
                >
                  {item.title}
                </option>
              ))}
          </select>
      </div>
          <input type="text" placeholder='Experience duration in years' onChange={(event) => setExperiences(event.target.value)} value = {experiences || ''}/>
          <button type="button" className="add-btn btn btn-primary" onClick={() => addSkill()}>Add Programming Language</button>
          <SkillList items = {items} removeSkill={setItems} itemsLength={items.length}/>
      </form>
      <div className='page-btn'>
              <button onClick={() => props.prevpage()} className="btn btn-primary">Go Previous</button>
              <button onClick={() => props.nextpg()} className="btn btn-primary">Go Next</button>
          </div>
    </div>
  )
}

export default SecondSurvey