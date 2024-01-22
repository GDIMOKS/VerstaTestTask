import React from 'react';

import StylesOI from "./OrderInput.module.scss";


const OrderInput = (props) => {

    
    return (
        <input className={StylesOI.orderInput} {...props}/>
    );
};

export default OrderInput;