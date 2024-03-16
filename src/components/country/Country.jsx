import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, capital, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    return (
        <div className={`coun ${visited ? 'visited_coun' : ''}`}>
            <img src={flags.png} alt="" />
            <h1>{name.common}</h1>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button className={visited ? 'visited_btn' : ''} onClick={handleVisited}>{visited ? '✔ Visited' : 'Visited'}</button>
            <button className={`m`} onClick={() => handleVisitedCountry(country)}>❤️</button>
        </div>
    );
};

export default Country;