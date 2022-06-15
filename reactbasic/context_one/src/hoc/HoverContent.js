import React from 'react';

export default function HoverCounter({ theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;

    console.log('HoverCounter rendered');
    return (
        <div>
            <h1  style={style}>
                Hovered Theams
            </h1>
 
        </div>
    );
}