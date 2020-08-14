import React from 'react'
import './myStyle.css';

function StyleSheet(props) {
    console.log(props)
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>
                Ahihi
            </h1>
        </div>
    )
}

export default StyleSheet
