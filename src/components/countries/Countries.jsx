import { useEffect } from "react";
import { useState } from "react"
import Country from "../country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);


    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country =>{
        console.log(country)
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry)
    }
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div className="flax">
                <h3>Visited Countries:</h3>
                <ul className="flex">
                    {
                        visitedCountry.map(country => <li key={country.cca3}>{country.name.common},</li>)
                    }
                </ul>
            </div>
            <div  className="container">
            {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
                }
            </div>
        </div>
    )
}

export default Countries