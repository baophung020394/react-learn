import React from 'react'

function Person(props) {
    const { primary, person } = props;
    console.log(primary)
    return (
        <div>
             <h2>{primary} - {person.name} - {person.age} - {person.skill} </h2>
        </div>
    )
}

export default Person
