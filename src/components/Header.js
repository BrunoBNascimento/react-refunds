import React from 'react';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Refunds System</a>
                <div className="float-right">
                    <a href="/"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                </div>
            </nav>
        </div>
    );
};
export default Header;