import React from 'react';
import './Topbar.css';
import Circle from '../Components/Circle/circle.js';

import checked from '../Assests/checked.png';
import deny from '../Assests/deny.png';
const Topbar = (props) => {
return (
    <div> {
        props.data.map((circle, index) => 
        {
            return( 
            <Circle key={index} color={circle.colour} value={circle.value} /> )
        }
       
    )} 
    
    <img src={deny}></img>
    <img src={checked}></img>
    </div>
    );
};
export default Topbar;

