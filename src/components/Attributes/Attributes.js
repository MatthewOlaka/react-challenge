import React, { useEffect } from 'react'


const Attributes = (props) => {

    const { attr_list, attributes, setAttributes, abilityModifiers, totalAttPoints, setTotalAttPoints } = props

    const handleIncrement = (attribute) => {
        const updatedAttributes = { ...attributes, [attribute]: attributes[attribute] + 1, };
        setAttributes(updatedAttributes);
    };

    const handleDecrement = (attribute) => {
        const updatedAttributes = { ...attributes, [attribute]: Math.max(attributes[attribute] - 1, 1), };
        setAttributes(updatedAttributes);
    };

    useEffect(() => {
        let sum = 0
        for (let attribute in attributes) {
            sum = sum + attributes[attribute]
        }
        setTotalAttPoints(sum)

    }, [attributes, setTotalAttPoints])

    // console.log(totalAttPoints)

    return (
        <>
            <h2>Attributes: {totalAttPoints}</h2>
            { totalAttPoints > 69 ? <h3 style={{color: 'red'}}>Maxed out Attributes</h3>:null}
            {attr_list.map((attribute) => (
                <div key={attribute}>
                    <div>{`${attribute}: `}
                        <span>{attributes[attribute]}</span>
                        {totalAttPoints < 70 ?
                            <button onClick={() => handleIncrement(attribute)}>+</button> :
                            <button>+</button>
                        }
                        <button onClick={() => handleDecrement(attribute)}>-</button>
                        <div>Ability Modifier: {abilityModifiers[attribute]}</div>

                    </div>

                </div>
            ))}

        </>
    );
};

export default Attributes