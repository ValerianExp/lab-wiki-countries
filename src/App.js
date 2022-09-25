import './App.css';
// COMPONENTS
import NavBar from './Components/NavBar/NavBar';
import CountryList from './Components/ContriesList/CountryList';
import CountryDetails from './Components/CountryDetails/CountryDetails';

// JSON
// import countries from './countries.json';

// ROUTES
import { Route, Routes } from 'react-router-dom';

//COUNTRY AXIOS
import CountryAxios from './Services/countryAxios';

//USE EFFECT
import { useEffect, useState } from 'react';

function App() {
  const listCountriesStyle = {
    maxHeight: '90vh',
    overflow: 'scroll'
  };

  const [countries, setCountries] = useState([]);
  const countryAxios = new CountryAxios();

  useEffect(() => {
    countryAxios.getAllCountries().then((countries) => {
      setCountries(countries);
    }).catch((err) => {
      console.log(err);
    })
  });

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row">

          <div className="col-5">
            <div className="p-3 m-0 border-0" style={listCountriesStyle} role="tablist">
              <ul className="list-group list-group-flush">
                <CountryList countries={countries} />
              </ul>
            </div>
          </div>

          <div className="col-7">
            <Routes>
              {/* <Route path="/" element={<CountryList countries={countries} />} /> */}
              <Route path="/:countryCode" element={<CountryDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
