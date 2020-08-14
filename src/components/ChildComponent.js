import React from 'react'

function ChildComponent(props) {
    
    return (
        <div>
            <button onClick={() => props.handler('Cac')}>Greet Handler</button>
        </div>
    )
}

export default ChildComponent
