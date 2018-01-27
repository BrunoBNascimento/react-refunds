import React, {Component} from 'react';
import {Link} from 'react-router';

class SideMenu extends Component{



    render(){
        return (
            <ul className="side-menu">
                <li className={`side-menu__item ${this.props.path === '/' ? 'side-menu__link--active' : ''}`}>
                    <Link to="/" className={`side-menu__link ${this.props.path === '/' ? 'side-menu__link--active' : ''}`}>
                        Reembolsos
                    </Link>
                </li>
                <li className={`side-menu__item ${this.props.path === '/banking' ? 'side-menu__link--active' : ''}`}>
                    <Link to="/banking" className={`side-menu__link ${this.props.path === '/banking' ? 'side-menu__link--active' : ''}`}>
                        Conta Bancária
                    </Link>
                </li>
                <li className={`side-menu__item ${this.props.path === '/configs' ? 'side-menu__link--active' : ''}`}>
                    <Link to="/configs" className={`side-menu__link ${this.props.path === '/configs' ? 'side-menu__link--active' : ''}`}>
                        Configurações
                    </Link>
                </li>
            </ul>
        );
    }
};
export default SideMenu;