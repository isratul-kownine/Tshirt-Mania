import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle'; 
import './GrandPa.css';

 export const RingContext =createContext('ring');

const GrandPa = () => {
       const [house,setHouse] = useState(1);
       const ornament ='Diamond Ring';
       const handleBuyAHouse = () =>
       {
           const newHouseCount = house + 1;
           setHouse(newHouseCount);
       }
    return (
          <RingContext.Provider value={ornament}>
            <div className='grandpa'>
            <h2>Grandpa</h2>
            
            <p>House : {house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
            <section style={{display:'flex'}}>
              <Father house={house} ornament={ornament}></Father>
              <Uncle house={house}></Uncle>
              <Anty house={house}></Anty>
              </section>
        </div>
          </RingContext.Provider>
    );
};

export default GrandPa;