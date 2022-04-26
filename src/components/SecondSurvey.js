import React, {useState} from 'react'
import './SecondSurvey.css'
import SessionStorage from './SessionStorage'
import SkillList from './SkillList'
import {AiOutlineArrowLeft} from 'react-icons/ai'

function SecondSurvey(props) {
  const skills = ['HTML', 'CSS', 'PHP', 'Laravel', 'React.JS', 'Vue.JS', 'Svelte', 'Angular'];
  const [experiences, setExperiences] = SessionStorage('experience', '');
  const [dropdownValues, setDropdownValues] = SessionStorage('dropDownValues', '');
  const [Experienceerror, setExperienceError] = useState('');
  const [isExperiencesValid, setExperienceIsvalid] = useState(true);
  const [skillError, setSkillError] = useState ('');
  const [isSkillRepeated, setIsSkillRepeated] = useState(true);
  const [skillQuantityError, setSkillQuantityError] = useState('');
  const [isSkillQuantityValid, setSkillQuantityValid] = useState(true);
  const [items, setItems] = SessionStorage('items', [
    {
      skill: 'PHP',
      experience : '2'
    },
    {
      skill: 'React.JS',
      experience : '3'
    }
  ]);


  const addSkill = () => {

    let defaultSkill = document.getElementById("defaultSkill");
    let filterSkill = defaultSkill.options[defaultSkill.selectedIndex].value;

    let defaultExperience = document.getElementById("defaultExperience");
    let filterExperience = defaultExperience.options[defaultExperience.selectedIndex].value;

      const newSkill = {
        skill: dropdownValues,
        experience : experiences
      };

      if (items.filter(e => e.skill === dropdownValues).length < 1 && filterExperience !== 'DEFAULT' && filterSkill !== 'DEFAULT') {
          setItems([...items, newSkill]);
          setSkillQuantityValid(true);
      }


      validateSkills(filterSkill);
      validateExperience(filterExperience);   
  }

  const checkAndNextPage = () => {
    if(items.length === 0){
      setSkillQuantityError('You must choose at least 1 skill');
      setSkillQuantityValid(false);
      setIsSkillRepeated(true);
      setExperienceIsvalid(true);
    }else{
      props.nextpg();
    }
  }

  const validateSkills = (checkingText) => {
    if(items.filter(e => e.skill === checkingText).length > 0){
      setIsSkillRepeated(false);
      setSkillError('Skill is already in the list');
    }else if(checkingText === 'DEFAULT'){
      setIsSkillRepeated(false);
      setSkillError('Please choose skill to add in the list');
    }else{
      setIsSkillRepeated(true);
    }
  }

  const validateExperience = (checkingText) => {
    if(checkingText === 'DEFAULT'){
      setExperienceIsvalid(false);
      setExperienceError('You must choose experience level');
    }else{
      setExperienceIsvalid(true);
    }
  }
  


  return (
    <div className="second-Survey">
      <div className='second-survey-content'>
      <form className="form2">
        <div className="skills">
            <select onChange={e => setDropdownValues(e.target.value)} 
                    defaultValue={'DEFAULT'} 
                    id='defaultSkill'>
                <option value="DEFAULT" disabled>choose skills</option>
                {skills.map(item => (
                <option
                  key={item}
                  value={item}
                  id={item}
                >
                  {item}
                </option>
              ))}
          </select>
          <div className='error'>
            {isSkillRepeated ? '' : <p>{skillError}</p>}
          </div>
      </div>
      <div className="experience">
            <select onChange={e => setExperiences(e.target.value)} 
                    defaultValue={'DEFAULT'} 
                    id='defaultExperience'>
                <option value="DEFAULT" disabled>Choose Years of Experience</option>
                <option id='<year'> Less than a year</option>
                <option id='1year'> 1 </option>
                <option id='2year'> 2 </option>
          </select>
          <div className='error'>
            {isExperiencesValid ? '' : <p>{Experienceerror}</p>}
          </div>
      </div>
  
          <button type="button" className="add-btn btn btn-primary" onClick={() => addSkill()}>Add Programming Language</button>
          {isSkillQuantityValid ? <SkillList items = {items} removeSkill={setItems} itemsLength={items.length}/> :
          <div>
            <h2 className='skillQuantityError'>{skillQuantityError}</h2>
            </div>}
      </form>
      <div className='page-btn'>
              <button onClick={() => props.prevpage()} className="btn btn-primary">Go Previous</button>
              <button onClick={() => checkAndNextPage()} className="btn btn-primary">Go Next</button>
      </div>

      </div>

      <div className="info"> 
            <AiOutlineArrowLeft /> 
            <div className='info-text'>
              <h1>Skills</h1>
              <h1>And</h1>
              <h1>Experience</h1>
            </div>

      </div>
    </div>
  )
}

export default SecondSurvey