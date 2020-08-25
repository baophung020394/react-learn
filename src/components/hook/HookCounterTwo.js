import React, { useState } from 'react'

function HookCounterTwo() {
    const initialState = 0 ;
    const [count, setCount] = useState(initialState);
    const countState = () => {
        for (let i = 0; i < 5; i++ ) {
            setCount(abc => abc + 1)
        }
    }
    const countAgr = (...args) => {
        return args.length;
    }
    let cold = ['autumn', 'winter'];  
    let warm = ['spring', 'summer'];  
    const arg = [...cold, ...warm] ;

    console.log(countAgr('a','b','c'));
    console.log(arg);
    return (
        <div>
            {count}
            <button onClick={() => setCount(initialState)}>Reset</button>
            <button onClick={() =>  setCount(abc => abc + 1)}>Click + 1</button>
            <button onClick={countState}>Click + 1</button>
        </div>
    )
}

export default HookCounterTwo
