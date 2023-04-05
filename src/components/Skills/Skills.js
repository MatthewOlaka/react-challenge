import React from 'react'

const Skills = (props) => {

    const { skills, abilityModifiers, skillPoints, setSkillPoints, totalPoints, setTotalPoints } = props

  

    // console.log(skillPoints)


    const handleInc = (skill) => {
        if (totalPoints > 0) {
            const updatedSkillPoints = { ...skillPoints }
            updatedSkillPoints[skill] += 1
            setSkillPoints(updatedSkillPoints)

            setTotalPoints(totalPoints - 1)
        }

        // const updatedSkillPoints = { ...skillPoints, [skill]: skillPoints[skill] + 1, };
        // setSkillPoints(updatedSkillPoints)
    }
    const handleDec = (skill) => {
        
            const updatedSkillPoints = { ...skillPoints }
            updatedSkillPoints[skill] -= 1
            setSkillPoints(updatedSkillPoints)
            setTotalPoints(totalPoints + 1)
   
    }

    //console.log(skillPoints)



    return (
        <>
            <h2>Skills:</h2>
            <h3>Total Points available: {totalPoints}</h3>
            {skills.map((skill) => (
                <div key={skill.name}>{skill.name} -
                    points:
                    &nbsp;
                    {skillPoints[skill.name]}
                    &nbsp;
                    <button onClick={() => handleInc(skill.name)}>+</button>
                    &nbsp;
                    { skillPoints[skill.name] > 0 ? 
                        <button onClick={() => handleDec(skill.name)}>-</button> :
                        <button>-</button> 
                    }
                    &nbsp;
                    modifier: {abilityModifiers[skill.attributeModifier]}
                    &nbsp;
                    total: {abilityModifiers[skill.attributeModifier] + skillPoints[skill.name]}
                </div>
            ))}
        </>

    )
}

export default Skills