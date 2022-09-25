//NOTE: countryCodeEmoji aparently doesn't work in Chrome, but it does in Firefox
// const { countryCodeEmoji, emojiCountryCode } = require('country-code-emoji');
import { NavLink } from 'react-router-dom';


function CountryList({ countries }) {
    return (
        (
            countries &&
            <div className="country-list">
                {countries.map((country) => (
                    (country &&
                        <NavLink style={{ textDecoration: "none" }} to={`/${country.alpha3Code}`} key={country.alpha3Code}>
                            <li className="list-group-item list-group-item-action">
                                {/* {countryCodeEmoji(country.alpha2Code)}  */}
                                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} style={{ width: '20px' }} alt="" />
                                &nbsp;&nbsp;{country.name.common}</li>
                        </NavLink>
                    )
                ))}
            </div>
        )
    );
}

export default CountryList;