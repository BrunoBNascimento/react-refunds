import React, {Component} from 'react';
import {Link} from 'react-router';

class SideMenu extends Component{

    render(){
        return (
            <div className="side-menu">
                <div className="nav flex-column nav-pills">
                    <Link to="/refunds" className="nav-link">
                        <i className="fa fa-exchange" aria-hidden="true"></i> Reembolsos
                    </Link>
                    <Link to="/banking" className="nav-link">
                        <i className="fa fa-money" aria-hidden="true"></i> Conta Bancária
                    </Link>
                    <Link to="/configs" className="nav-link">
                        <i className="fa fa-cog" aria-hidden="true"></i> Configurações
                    </Link>
                </div>
            </div>
        );
    }
};
export default SideMenu;