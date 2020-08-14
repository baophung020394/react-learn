import React, { useState } from 'react'

function HookCounterThree(props) {
    const [name, setName] = useState({ firstName: '', lastName:'' });
    
    return (
        <div>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value})} />
            <p>First Name: {name.firstName}</p>
            <p>Last Name: {name.lastName}</p>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree
