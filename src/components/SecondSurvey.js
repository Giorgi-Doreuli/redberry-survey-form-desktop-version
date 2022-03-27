import React, {useState, useEffect} from 'react'
import './SecondSurvey.css'
import SessionStorage from './SessionStorage'
import axios from 'axios'
import SkillList from './SkillList';

function SecondSurvey(props) {
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = SessionStorage('experience', '');
  const [dropdownValues, setDropdownValues] = useState('');
  const [Experienceerror, setExperienceError] = useState('');
  const [iExperiencesValid, setExperienceIsvalid] = useState(true);
  const [skillError, setSkillError] = ('');
  const [isSkillRepeated, setIsSkillRepeated] = useState(true);
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
    let defaultSkill = document.getElementById("default");
    let filterSkill = defaultSkill.options[defaultSkill.selectedIndex].value;

      const newSkill = {
        skill: dropdownValues,
        experience : experiences
      };

      if (items.filter(e => e.skill === dropdownValues).length < 1 && experiences !== '' && filterSkill !== 'DEFAULT') {
          setItems([...items, newSkill]);
      }

  }


  return (
    <div className="second-Survey">
      <form className="form2">
        <div className="skills">
            <select onChange={e => setDropdownValues(e.target.value)} defaultValue={'DEFAULT'} id='default'>
                <option value="DEFAULT" disabled>choose skills</option>
              {skills.map(item => (
                <option
                  key={item.id}
                  value={item.title}
                  id={item.id}
                >
                  {item.title}
                </option>
              ))}
          </select>
          <div ishidden={isSkillRepeated} className='error'>
              <p>{skillError}</p>
          </div>
      </div>
          <input type="text" placeholder='Experience duration in years' onChange={(event) => setExperiences(event.target.value)} value = {experiences}/>
          <div ishidden={iExperiencesValid} className='error'>
              <p>{Experienceerror}</p>
          </div>
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