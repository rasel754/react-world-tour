import { useState } from 'react';
import './Country.css'
const country = ({country ,handleVisitedCountries}) => {
   const {name,flags ,population , area ,cca3}=country;

   const [Visited,setVisited]=useState(false);

   const handleVisited=()=>{
       setVisited(!Visited);
   }
//    console.log(handleVisitedCountries)
    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3 style={{ color:Visited ? 'black' : 'purple'}}>Name :{name.common} </h3>
            <img src={flags.png} alt />
            <p>Population : {population}</p>
            <p>Area : {area}  km²</p>
            <p><small>code : {cca3}c</small></p>
            <button onClick={() => handleVisitedCountries(country)}>mark as visited</button><br />
            <button onClick={handleVisited}>{Visited ? 'Visited': 'Going'}</button>
            {Visited ? 'i have visited this country':'i want to visit this country'}
        </div>
    );
};

export default country;