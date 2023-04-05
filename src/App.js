import { useState, useEffect } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Attributes from './components/Attributes/Attributes';
import Classes from './components/Classes/Classes';
import Skills from './components/Skills/Skills';


function App() {

  const initialAttributes = {};
  ATTRIBUTE_LIST.forEach(attribute => {
    initialAttributes[attribute] = 10;
  });

  const initSkillPoints = {}
  SKILL_LIST.forEach((skill) => {
    initSkillPoints[skill.name] = 0
  })

  const [attributes, setAttributes] = useState(initialAttributes);
  const [abilityModifiers, setAbilityModifiers] = useState({});
  const [skillPoints, setSkillPoints] = useState(initSkillPoints)
  const [totalPoints, setTotalPoints] = useState(0)
  const [totalAttPoints, setTotalAttPoints] = useState(0)

  useEffect(() => {
    const intModifier = modifierCalc(attributes.Intelligence)
    const totPoints = 10 + (4 * intModifier)
    setTotalPoints(totPoints)
  }, [attributes.Intelligence])



  useEffect(() => {
    const newAbilityModifiers = {};
    for (const attribute in attributes) {
      const value = attributes[attribute];
      const modifier = Math.max(Math.floor((value - 10) / 2), 0);
      newAbilityModifiers[attribute] = modifier;
    }
    setAbilityModifiers(newAbilityModifiers);
  }, [attributes]);



  const modifierCalc = (attribute) => {
    let attModifier = 0
    if (attribute > 9) {
      attModifier = Math.floor((attribute - 10) / 2)
    }
    return attModifier

  }
  // console.log(JSON.stringify(attributes))

  const saveCharacter = async (data) => {
    // const [attribs, abilityMods] = data
    console.log(data)
    try {
      fetch('https://recruiting.verylongdomaintotestwith.ca/api/MatthewOlaka/character',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)

        });
      alert("Player saved successfully")
    } catch (error) {
      console.error(error);
    }
  }

  const downloadCharacter = async () => {
    try {
      fetch('https://recruiting.verylongdomaintotestwith.ca/api/MatthewOlaka/character')
        .then(resp => resp.json())
        .then(data => {
          setAttributes(data.body[0])
          setAbilityModifiers(data.body[1])
          setSkillPoints(data.body[2])
          setTotalPoints(data.body[3])
        }
        )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <button onClick={() => saveCharacter([attributes, abilityModifiers, skillPoints, totalPoints])}>Save Character</button>
        &nbsp;
        <button onClick={() => downloadCharacter(attributes)}>Download Character</button>
        <Classes att_list={ATTRIBUTE_LIST} CLASS_LIST={CLASS_LIST} attributes={attributes} />
        <Attributes attr_list={ATTRIBUTE_LIST} attributes={attributes} setAttributes={setAttributes} abilityModifiers={abilityModifiers} totalAttPoints={totalAttPoints} setTotalAttPoints={setTotalAttPoints}/>
        <Skills skills={SKILL_LIST} abilityModifiers={abilityModifiers} skillPoints={skillPoints} setSkillPoints={setSkillPoints} totalPoints={totalPoints} setTotalPoints={setTotalPoints} />
      </section>
    </div>
  );
}

export default App;
