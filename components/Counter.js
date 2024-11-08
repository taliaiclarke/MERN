import React, { useState } from "react";

// Counter component
export function Counter({backgroundColor}) {
    const [count, setCount] = useState(0);
    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: backgroundColor, // Use the backgroundColor prop
        fontSize: '16px',
    };
    return (
        <div>
            <p>Count: {count}</p>
            <button 
             style={buttonStyle}
            onClick={() => setCount(count + 1)}>Increment by 1</button>
        </div>
    );
}

// Counter2 component
export function Counter2({backgroundColor}) {
    const [count, setCount] = useState(0);
    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: backgroundColor, // Use the backgroundColor prop
        fontSize: '16px',
    };
    return (
        <div>
            <p>Count: {count}</p>
            
            <button 
            style={buttonStyle}
            onClick={() => setCount(count + 2)}>Increment by 2</button>
        </div>
    );
}
