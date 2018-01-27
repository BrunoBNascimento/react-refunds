import React, {Component} from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import './css/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <SideMenu path={this.props.location.pathname}/>
                    <div className="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
