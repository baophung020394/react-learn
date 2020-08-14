import React from 'react';

// function Greet() {
//     return <h1>Heellooo</h1>;
// }

const Greet = props => {
    const { name, heroName } = props;
    return (
        <div>
            <h1>{name} Greet {heroName} </h1>
        </div>
    )
}
export default Greet;