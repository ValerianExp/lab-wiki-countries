import { NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className="container">
                <NavLink className="navbar-brand">
                    {/* <Routes>
                        <Route path="/" element={<h1>WikiCountries</h1>} />
                    </Routes> */}
                    WikiCountries
                </NavLink>
                {/* <Routes>
                    <Route path="/" element={<NavLink className="navbar-brand" to="/">WikiCountries</NavLink>} />
                </Routes> */}
            </div>
        </nav >
    );

};

export default NavBar;