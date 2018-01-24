import React from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Refunds System</a>
                <div className="float-right">
                    <Link to="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link>
                </div>
            </nav>
        </div>
    );
};
export default Header;