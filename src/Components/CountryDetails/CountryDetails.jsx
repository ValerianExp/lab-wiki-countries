import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import countries from "../../countries.json";

function CountryDetails() {
    const { countryCode } = useParams();
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const country = countries.find((country) => country.alpha3Code === countryCode);
        // console.log(country);
        setCountry(country);
    }, [countryCode]);


    return (
        <>
            {
                country && (
                    <>
                        <h1>{country.name.common}</h1>
                        <table className="table">
                            <thead></thead>
                            <tbody>

                                <tr>
                                    <td>Capital</td>
                                    <td>{country.capital}</td>
                                </tr>
                                <tr>

                                    <td>Area</td>
                                    <td>{country.area} km <sup>2</sup>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Borders</td>
                                    <td>
                                        <ul>
                                            {country.borders.map((border) => {
                                                const borderCountry = countries.find((country) => country.alpha3Code === border);
                                                return <li key={border}>{borderCountry.name.common}</li>
                                            })}
                                        </ul>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </>
                )
            }
        </>
    );
}

export default CountryDetails;