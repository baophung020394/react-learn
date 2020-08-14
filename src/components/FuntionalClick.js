import React, { Component } from 'react';

function FuntionalClick() {

    function handleClick() {
        console.log('aaaaa');
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FuntionalClick;  