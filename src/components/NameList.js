import React from 'react'
import Person from './Person';

function NameList() {
    const persons = [
            {
                id:1,
                name: 'bao',
                age:30,
                skill: 'React'
            },
            {
                id:2,
                name: 'bao 2',
                age:30,
                skill: 'Angular'
            },
            {
                id:3,
                name: 'bao 3',
                age:30,
                skill: 'Nodejs'
            }
    ];
    const names= ['bao','pu']
const namesList= names.map((name,index) => ( <h2 key={index}>{index} - {name}</h2>))
    const personList = persons.map( (person, index) => (
        <Person key={index} person={person} primary={false}  />
    ))
    return (
        <div>
            {namesList}
            <br></br>
           {personList}
        </div>
    )
}

export default NameList
