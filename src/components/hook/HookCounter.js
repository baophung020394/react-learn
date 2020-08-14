import React, {useState} from 'react'

function HookCounter(props) {
console.log(props)
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Counter Click - {count}</button>
        </div>
    )
}

export default HookCounter
