import React from 'react';

const Hello = () => {
    // return (
    //     <div>
    //          <h1>Hello Bao</h1>
    //     </div>
    // )
    return React.createElement(
        'div', 
        {id: 'hello'},
        React.createElement('h1', null, 'Hello Bao')
    )
}

export default Hello;

