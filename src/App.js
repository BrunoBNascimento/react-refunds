import React, {Component} from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import './css/App.css';

class App extends Component {
    render() {
        const {props} = this;
        return (
            <div>
                <Header/>
                <div className="container principal-container">
                    <SideMenu path={props.location.pathname}/>
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
