import React from 'react';
function Circle(props) { 
    
    const circleStyle = { display: 'inline-block', 
    width: '30px', height: '30px', borderRadius: '50%', 
    backgroundColor: props.color, color: 'black', textAlign: 'center', 
    lineHeight: '30px', marginRight: '10px', fontSize: '20px' };
     return ( 
     <div style={circleStyle}> {props.value} </div> );
    }

export default Circle;