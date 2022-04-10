import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Grand pa give me a :{ring}</p>
        </div>
    );
};

export default Special;