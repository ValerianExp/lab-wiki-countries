import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark" >
            <div className="container">
                <NavLink className="navbar-brand" to="/">WikiContries</NavLink>
            </div>
        </nav >
    );

};

export default NavBar;