import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    let user = localStorage.getItem("currentUser")
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        window.location.reload();
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <a className="navbar-brand mx-5" href="/dashboard">Deloitte</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {user && (<li className="nav-item active">
                            <Link className="nav-link" to="/dashboard">Home</Link>
                        </li>)}
                    </ul>
                    {
                        user ? <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>Logout</button> : <div className=" my-2 my-lg-0">
                            <Link to="/"> <button className="btn btn-sm btn-outline-success my-2 my-sm-0 mr-2" type="button">Login</button></Link>
                            <Link to="/registration"><button className="btn btn-sm btn-outline-success my-2 my-sm-0" type="button">Register</button></Link>
                        </div>
                    }
                </div>
            </nav>
        </React.Fragment>
    )
};
export default Header;