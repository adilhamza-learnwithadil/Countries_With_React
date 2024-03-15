import './country.css'

const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className="coun">
            <img src={flags.png} alt="" />
            <h3>Name: {name.common}</h3>

        </div>
    );
};

export default Country;