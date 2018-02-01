import React, {Component, Fragment} from 'react'
import Header from './components/Header/index'
import SideMenu from './components/SideMenu/index'
import './css/App.css'

class App extends Component {
    render() {
        const {props} = this
        return (
            <Fragment>
                <Header/>
                <div className="container principal-container">
                    <SideMenu path={props.location.pathname}/>
                    <div className="content">
                        {props.children}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default App
