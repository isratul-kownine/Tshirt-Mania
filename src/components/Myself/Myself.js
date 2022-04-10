import React from 'react';
import Special from '../Special/Special';

const Myself = ({house}) => {
    return (
        <div>
            <h3>Myself</h3>
            <p>House : {house}</p>
            <Special></Special>
        </div>
    );
};

export default Myself;