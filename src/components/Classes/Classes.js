import React, { useState } from 'react'
import { CLASS_LIST } from '../../consts';

function Classes({ attributes }) {

    const [selectedClass, setSelectedClass] = useState(null);

    const meetsRequirements = (className) => {
        const classRequirements = CLASS_LIST[className];
        for (const [attribute, value] of Object.entries(classRequirements)) {
            if (attributes[attribute] < value) {
                return false;
            }
        }
        return true;
    };

    const handleClick = (className) => {
        const classRequirements = CLASS_LIST[className];

        setSelectedClass(className);
        console.log(`${className} requirements:`, classRequirements);
        return (
            <div>
                <p>{className}: {classRequirements}</p>
            </div>
        );
    };


    return (
        <div>
            <h2>Classes:</h2>
            <div>
                {Object.keys(CLASS_LIST).map((className) => (
                    <div key={className} style={{ color: meetsRequirements(className) ? 'red' : 'white' }} onClick={() => handleClick(className)}>
                        {className}
                    </div>
                ))}
            </div>
            {selectedClass && (
                <div>
                    <h3>Minimum Requirements for {selectedClass}</h3>

                    {Object.entries(CLASS_LIST[selectedClass]).map(([attribute, value]) => (
                        <div key={attribute}>
                            {attribute}: {value}
                        </div>
                    ))}

                </div>
            )}
        </div>


    );
}


export default Classes