import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log('useEffect called tuowng đương với componentDidUpdate');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounting code tương đương với componentUnWillMount bên classComponent');
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
