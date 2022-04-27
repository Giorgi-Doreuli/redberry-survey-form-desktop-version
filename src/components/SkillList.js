import React from 'react'
import './SkillsList.css'
import {AiOutlineMinusCircle} from 'react-icons/ai'

function SkillList(props) {
    const updatedList = props.items;

    const removeSkill = (index) => {
            props.removeSkill(updatedList.slice(0, index).concat(updatedList.slice(index + 1, updatedList.length)));
      }

  return (
    <div className="skillList">
        {updatedList.map((item, i) =>(
            <div className="skill-experience" key={i}>
                <p className="skill">{item.skill}</p>
                <p className="experience">{item.experience}</p>
                <div className='remove'>
                    <AiOutlineMinusCircle  onClick={() => removeSkill(i)}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default SkillList