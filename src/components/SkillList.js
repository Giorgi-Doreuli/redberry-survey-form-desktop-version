import React from 'react'
import './SkillsList.css'

function SkillList(props) {
    const updatedList = props.items;

    const removeSkill = (index) => {
        if(props.itemsLength !== 1){
            props.removeSkill(updatedList.slice(0, index).concat(updatedList.slice(index + 1, updatedList.length)));
        }
      }

  return (
    <div className="skillList">
        {updatedList.map((item, i) =>(
            <div className="skill-experience" key={i}>
                <p className="skill">{item.skill}</p>
                <p className="experience">{item.experience}</p>
                <button type='button' onClick={() => removeSkill(i)}> remove </button>
            </div>
        ))}
    </div>
  )
}

export default SkillList